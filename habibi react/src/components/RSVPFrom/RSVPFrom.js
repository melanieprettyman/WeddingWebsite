import React, { useState } from 'react';

const RSVPForm = () => {
    const [forms, setForms] = useState({
        name: '',
        email: '',
        phone: '',
        attending: '',
        plusOne: '',
        plusOneName: '',
        dietaryPreferences: '',
        additionalNotes: '',
    });

    const [validationErrors, setValidationErrors] = useState({});

    // Handler for input changes
    const changeHandler = (e) => {
        setForms({ ...forms, [e.target.name]: e.target.value });

        // Clear validation error for the current field
        setValidationErrors((prevErrors) => {
            const { [e.target.name]: _, ...rest } = prevErrors; // Remove the error for this field
            return rest;
        });
    };

    const validateForm = () => {
        const errors = {};
    
        if (!forms.name.trim()) {
            errors.name = 'Full Name is required.';
        }
    
        if (!forms.email.trim()) {
            errors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(forms.email)) {
            errors.email = 'Please enter a valid email address.';
        }
    
        if (!forms.phone.trim()) {
            errors.phone = 'Phone number is required.';
        } else if (!/^\d{10}$/.test(forms.phone)) {
            errors.phone = 'Phone number must be 10 digits.';
        }
    
        if (!forms.attending) {
            errors.attending = 'Please select your attendance status.';
        }
    
        if (forms.attending === 'Yes' && !forms.plusOne) {
            errors.plusOne = 'Please indicate if you will have a plus one.';
        }
    
        if (forms.attending === 'Yes' && forms.plusOne === 'Yes' && !forms.plusOneName.trim()) {
            errors.plusOneName = 'Please provide the name of your plus one.';
        }
    
        if (forms.dietaryPreferences === '') {
            errors.dietaryPreferences = 'Please select a dietary preference.';
        }
    
        setValidationErrors(errors);
    
        // Return true if no errors
        return Object.keys(errors).length === 0;
    };
    

    // Submit handler
    const submitHandler = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                // Send RSVP data
                const rsvpResponse = await fetch(
                    'https://script.google.com/macros/s/AKfycbyFSknyGQwihcTvmlvbVeIdH6UN0giYndbwAt-m5EO5TAmrcD6HAUH1KFUKhB7TDY4E/exec',
                    {
                        redirect: "follow",
                        method: "POST",
                        headers: { "Content-Type": "text/plain;charset=utf-8" },
                        body: JSON.stringify(forms),
                    }
                );

                const rsvpResult = await rsvpResponse.json();
                console.log('RSVP Response:', rsvpResult);

                if (rsvpResponse.ok && rsvpResult.status === "success") {
                    // Send confirmation email
                    const emailResponse = await fetch(
                        'https://6rc9b9qu70.execute-api.us-east-2.amazonaws.com/send',
                        {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(forms),
                        }
                    );

                    const emailResult = await emailResponse.json();
                    console.log('Email Response:', emailResult);

                    if (emailResponse.ok) {
                        alert("Thank you for your RSVP! A confirmation email has been sent.");
                    } else {
                        alert(
                            `RSVP was successful, but there was an error sending the confirmation email: ${
                                emailResult.message || "Please check your email and try again."
                            }`
                        );
                    }

                    // Clear the form
                    setForms({
                        name: '',
                        email: '',
                        phone: '',
                        attending: '',
                        plusOne: '',
                        plusOneName: '',
                        dietaryPreferences: '',
                        additionalNotes: '',
                    });

                    setValidationErrors({});
                } else {
                    alert(`Error: ${rsvpResult.message || "There was an error submitting your RSVP."}`);
                }
            } catch (error) {
                console.error("Error processing RSVP or sending email:", error);
                alert("Something went wrong. Please try again.");
            }
        }
    };

    return (
        <form onSubmit={submitHandler} className="contact-validation-active">
            <div className="row">
                <div className="col col-lg-12 col-12">
                    <div className="form-field">
                        <input
                            value={forms.name}
                            type="text"
                            name="name"
                            onChange={changeHandler}
                            className="form-control"
                            placeholder="Your Full Name"
                        />
                        {validationErrors.name && <span className="errorMessage">{validationErrors.name}</span>}
                    </div>
                </div>
                <div className="col col-lg-12 col-12">
                    <div className="form-field">
                        <input
                            value={forms.email}
                            type="email"
                            name="email"
                            onChange={changeHandler}
                            className="form-control"
                            placeholder="Your Email Address"
                        />
                        {validationErrors.email && <span className="errorMessage">{validationErrors.email}</span>}
                    </div>
                </div>
                <div className="col col-lg-12 col-12">
                    <div className="form-field">
                        <input
                            value={forms.phone}
                            type="tel"
                            name="phone"
                            onChange={changeHandler}
                            className="form-control"
                            placeholder="Your Phone Number"
                        />
                        {validationErrors.phone && <span className="errorMessage">{validationErrors.phone}</span>}
                    </div>
                </div>
                <div className="col col-lg-12 col-12">
                    <div className="radio-buttons">
                        <p>
                            <input
                                type="radio"
                                id="yes"
                                name="attending"
                                value="Yes"
                                onChange={changeHandler}
                            />
                            <label htmlFor="yes">Yes, I’ll be there!</label>
                        </p>
                        <p>
                            <input
                                type="radio"
                                id="no"
                                name="attending"
                                value="No"
                                onChange={changeHandler}
                            />
                            <label htmlFor="no">No, I can’t come</label>
                        </p>
                        {validationErrors.attending && <span className="errorMessage">{validationErrors.attending}</span>}
                    </div>
                </div>
                {forms.attending === 'Yes' && (
                    <div className="col col-lg-12 col-12">
                        <div className="radio-buttons">
                            <p>
                                <input
                                    type="radio"
                                    id="plusOneYes"
                                    name="plusOne"
                                    value="Yes"
                                    onChange={changeHandler}
                                />
                                <label htmlFor="plusOneYes">Yes, I’ll have a plus one</label>
                            </p>
                            <p>
                                <input
                                    type="radio"
                                    id="plusOneNo"
                                    name="plusOne"
                                    value="No"
                                    onChange={changeHandler}
                                />
                                <label htmlFor="plusOneNo">No, I’ll be attending alone</label>
                            </p>
                            {validationErrors.plusOne && <span className="errorMessage">{validationErrors.plusOne}</span>}
                        </div>
                    </div>
                )}

                {/* Plus One's Name Field */}
                {forms.plusOne === 'Yes' && (
                    <div className="col col-lg-12 col-12">
                        <div className="form-field">
                            <input
                                value={forms.plusOneName}
                                type="text"
                                name="plusOneName"
                                onChange={changeHandler}
                                className="form-control"
                                placeholder="Plus One's Name"
                            />
                            {validationErrors.plusOneName && (
                                <span className="errorMessage">{validationErrors.plusOneName}</span>
                            )}
                        </div>
                    </div>
                )}

                <div className="col col-lg-12 col-12">
                    <div className="form-field">
                        <select
                            onChange={changeHandler}
                            value={forms.dietaryPreferences}
                            className="form-control"
                            name="dietaryPreferences"
                        >
                            <option value="">Dietary Preferences</option>
                            <option value="Vegetarian-self">I require vegetarian options</option>
                            <option value="Vegetarian-plus-one">My plus one requires vegetarian options</option>
                            <option value="Vegetarian-both">Both my plus one and I require vegetarian options</option>
                            <option value="None">None</option>
                        </select>
                        {validationErrors.dietaryPreferences && (
                            <span className="errorMessage">{validationErrors.dietaryPreferences}</span>
                        )}
                    </div>
                </div>
                <div className="col col-lg-12 col-12">
                    <div className="form-field">
                        <textarea
                            value={forms.additionalNotes}
                            name="additionalNotes"
                            onChange={changeHandler}
                            className="form-control"
                            placeholder="Additional Notes or Questions"
                        ></textarea>
                    </div>
                </div>
            </div>
            <div className="submit-area">
                <button type="submit" className="theme-btn">RSVP</button>
            </div>
        </form>
    );
};

export default RSVPForm;
