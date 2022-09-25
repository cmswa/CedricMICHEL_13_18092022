import React from 'react'
import chatIcon from '../assets/icons/icon-chat.png'

export default function FeatureContact() {
    return (
        <>
            <h2 className="sr-only">Features</h2>
            <div className="feature-item">
                <img src={chatIcon} alt="Chat Icon" className="feature-icon" />
                <h3 className="feature-item-title">You are our #1 priority</h3>
                <p>
                    Need to talk to a representative? You can get in touch through our
                    24/7 chat or through a phone call in less than 5 minutes.
                </p>
            </div>
        </>
    )
}
