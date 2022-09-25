import React from 'react'
import moneyIcon from '../assets/icons/icon-money.png'

export default function FeatureMoney() {
    return (
        <div className="feature-item">
            <img
                src={moneyIcon}
                alt="Chat Icon"
                className="feature-icon"
            />
            <h3 className="feature-item-title">More savings means higher rates</h3>
            <p>
                The more you save with us, the higher your interest rate will be!
            </p>
        </div>
    )
}
