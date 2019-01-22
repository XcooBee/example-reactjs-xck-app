import React from 'react';

const TermsComponent = () => {
    return (
        <div className="w3-container" id="terms" style={{ paddingBottom: "32px" }}>
            <div className="w3-content" style={{ maxWidth: "700px" }}>
                <h5 className="w3-center w3-padding-48"><span className="w3-tag w3-wide">OUR TERMS OF SERVICE</span></h5>
                <p>Here are our current terms of service:</p>
                <p>We serve you coffee and tea and other great products but if you act or do any of the following we will ask you to get lost:</p>
                <ul>
                    <li>Don't be evil</li>
                    <li>Don't act criminally</li>
                    <li>Don't be a creep</li>
                    <li>Follow the golden rule</li>
                    <li>Clean up after yourself</li>
                    <li>Respect individuals of all shades and colors</li>
                </ul>
            </div>
        </div>
    );
};

export default TermsComponent;