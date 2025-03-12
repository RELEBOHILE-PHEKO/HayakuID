const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    amount: Number,
    currency: { type: String, enum: ['ZAR', 'LSL'], default: 'ZAR' },
    status: { type: String, default: 'pending' },
    stripePaymentId: String,
}, { timestamps: true });

module.exports = mongoose.model('Payment', paymentSchema);