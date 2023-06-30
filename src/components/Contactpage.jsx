import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
    const [state, handleSubmit] = useForm("xleyrokp");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">
                        Email Address
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="textarea">How Can We Help You ?</label>
                    <textarea
                        id="message"
                        name="message"
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                </div>
                <button className="form-submit-btn" type="submit" disabled={state.submitting}>
                    Submit
                </button>
            </form>
        </div>

    );
}

export default ContactForm