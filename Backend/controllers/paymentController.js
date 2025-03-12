const stripe = require('stripe')(process.env.STRIPE_SECRET);
const Payment = require('../models/Payment');

exports.createPayment = async (req, res) => {
    try {
        const { amount, currency } = req.body;

        // Validate currency
        if (!['ZAR', 'LSL'].includes(currency)) {
            return res.status(400).json({ error: 'Invalid currency. Must be ZAR or LSL.' });
        }

        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount * 100, // Convert to cents
            currency,
        });

        const payment = new Payment({
            userId: req.user.id,
            amount,
            currency,
            stripePaymentId: paymentIntent.id,
            status: 'pending',
        });

        await payment.save();
        res.json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};