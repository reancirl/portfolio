import React, { useState } from 'react';

const MailchimpForm = ({ inputStyle, buttonStyle, placeholder }) => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const mailchimpUrl = 'https://app.us14.list-manage.com/subscribe/post?u=3fbc60d10876b4d0411515d2c&amp;id=bf037421db&amp;f_id=00c4c2e1f0';

        try {
            const response = await fetch(mailchimpUrl, {
                method: 'POST',
                mode: 'no-cors', 
                body: new URLSearchParams({ 'EMAIL': email }),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            });
            if (response) {
                setMessage('Subscribed successfully');
            } 
        } catch (error) {
            console.error('Error during subscription', error);
            setMessage('Error during subscription');
        }

        setEmail('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="flex flex-wrap justify-center mx-auto w-full">
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder={placeholder}
                    className={`${inputStyle} flex-1 w-3/5 mr-2`} // Adding right margin to the input
                    required 
                />
                <button type="submit" className={`${buttonStyle} w-2/5`}>
                    Subscribe
                </button>
            </form>
            {message && <div className="mt-2 w-full text-center">{message}</div>}
        </div>
    );
};

export default MailchimpForm;
