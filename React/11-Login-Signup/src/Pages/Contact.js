import React from 'react'
import '../Pages/Pages-Css/Contact.css'

export default function Delivery() {
    return (
        <>
            <section className="get-in-touch">
                <h1 className="title">Get in touch</h1>
                <form className="contact-form row form-2-3">
                    <div className="form-field col x-50">
                        <input id="name" className="input-text js-input" type="text" required />
                        <label className="label" htmlFor="name">Name</label>
                    </div>
                    <div className="form-field col x-50">
                        <input id="email" className="input-text js-input" type="email" required />
                        <label className="label" htmlFor="email">E-mail</label>
                    </div>
                    <div className="form-field col x-100">
                        <input id="message" className="input-text js-input" type="text" required />
                        <label className="label" htmlFor="message">Message</label>
                    </div>
                    <div className="form-field col x-100 align-center">
                        <input className="submit-btn" type="submit" value="Submit" />
                    </div>
                </form>
            </section>
        </>
    )
}
