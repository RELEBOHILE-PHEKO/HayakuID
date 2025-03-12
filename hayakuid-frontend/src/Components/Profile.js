import React, { useState } from 'react';

function Profile() {
    const [userData, setUserData] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '+123456789'
    });

    const handleUpdateProfile = (e) => {
        e.preventDefault();
        // Handle profile update here
    };

    return (
        <section className="profile-page">
            <h2>Your Profile</h2>
            <form onSubmit={handleUpdateProfile}>
                <input
                    type="text"
                    value={userData.name}
                    onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                />
                <input
                    type="email"
                    value={userData.email}
                    onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                />
                <input
                    type="tel"
                    value={userData.phone}
                    onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                />
                <button type="submit" className="btn btn-primary">Update Profile</button>
            </form>
        </section>
    );
}

export default Profile;
