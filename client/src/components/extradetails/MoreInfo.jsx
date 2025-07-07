import React from 'react';
import './MoreInfo.css';

const MoreInfo = () => {
    return (
        <div className="more-container">
            <h1 className="more-heading" style={{color:"#2874f0"}}>More Information About Flipkart</h1>

            {/* About Section */}
            <section className="more-section">
                <h2>About Flipkart</h2>
                <p>Flipkart is India's leading e-commerce platform. Founded in 2007, Flipkart has transformed the way India shops online by providing a seamless and reliable shopping experience.</p>
            </section>

            {/* Policies Section */}
            <section className="more-section alternate">
                <h2>Our Policies</h2>
                <ul>
                    <li>Return Policy: Hassle-free returns within 10 days.</li>
                    <li>Privacy Policy: Your personal data is always secure with us.</li>
                    <li>Terms of Service: Transparent and customer-friendly terms.</li>
                </ul>
            </section>

            {/* FAQs Section */}
            <section className="more-section">
                <h2>Frequently Asked Questions</h2>
                <ul>
                    <li><strong>Q:</strong> How can I track my order?</li>
                    <li><strong>A:</strong> Go to 'My Orders' and select the product to track your shipment.</li>
                    <li><strong>Q:</strong> What payment methods are accepted?</li>
                    <li><strong>A:</strong> We accept UPI, Credit/Debit Cards, Net Banking, and Cash on Delivery.</li>
                </ul>
            </section>

            {/* App Download Section */}
            <section className="more-section alternate">
                <h2>Download Our App</h2>
                <p>Get the best shopping experience on your mobile. Available on Google Play Store and Apple App Store.</p>
                <div className="download-buttons">
                    <button className="download-button">Google Play</button>
                    <button className="download-button">App Store</button>
                </div>
            </section>

            {/* Contact Section */}
            <section className="more-section">
                <h2>Contact Us</h2>
                <p>Email: support@flipkart.com</p>
                <p>Customer Care: 1800-208-9898</p>
            </section>

            {/* Social Media Section */}
            <section className="more-section alternate">
                <h2>Connect With Us</h2>
                <p>Follow us on social media to stay updated on offers and latest products.</p>
                <ul>
                    <li>Facebook: facebook.com/flipkart</li>
                    <li>Instagram: instagram.com/flipkart</li>
                    <li>Twitter: twitter.com/flipkart</li>
                </ul>
            </section>

            <button className="more-button">Explore More</button>
        </div>
    );
};

export default MoreInfo;
