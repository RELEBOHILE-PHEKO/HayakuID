import React, { useState } from 'react';

function Notification({ message, onClose }) {
    return (
        <div className="notification">
            <div className="notification-content">
                <p>{message}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default Notification;
