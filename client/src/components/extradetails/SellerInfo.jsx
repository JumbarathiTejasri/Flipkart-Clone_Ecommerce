import React from 'react';
import './SellerInfo.css';

const SellerInfo = () => {
    return (
        <div className="seller-container">
            <h1 className="seller-heading">Become a Seller on Flipkart</h1>
            <p className="seller-description">Join India's leading e-commerce platform and grow your business.</p>

            <div className="seller-sections">
                <div className="seller-card">
                    <h2>Easy Registration</h2>
                    <p>Sign up quickly with minimal documentation.</p>
                </div>

                <div className="seller-card">
                    <h2>Reach Millions</h2>
                    <p>Access millions of customers across India.</p>
                </div>

                <div className="seller-card">
                    <h2>24x7 Support</h2>
                    <p>We provide dedicated seller assistance anytime you need.</p>
                </div>
            </div>

            <button className="seller-button">Start Selling</button>
        </div>
    );
};

export default SellerInfo;
