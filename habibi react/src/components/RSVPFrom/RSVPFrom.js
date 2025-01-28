import React, { useState } from 'react';
import SimpleReactValidator from 'simple-react-validator';

const RSVPForm = () => {
    const [forms, setForms] = useState({
        name: '',
        email: '',
        phone: '', // Added phone field
        attending: '',
        plusOne: '',
        plusOneName: '',
        dietaryPreferences: '',
        additionalNotes: '',
    });
    const [validator] = useState(new SimpleReactValidator({ className: 'errorMessage' }));

    const changeHandler = (e) => {
        setForms({ ...forms, [e.target.name]: e.target.value });
        validator.showMessageFor(e.target.name);
    };

    // const submitHandler = async (e) => {
    //     e.preventDefault();
    //     if (validator.allValid()) {
    //         try {
    //             const response = await fetch(
    //                 'https://script.google.com/macros/s/AKfycbyFSknyGQwihcTvmlvbVeIdH6UN0giYndbwAt-m5EO5TAmrcD6HAUH1KFUKhB7TDY4E/exec', 
    //                 {
    //                     redirect: "follow", // Follow redirects automatically
    //                     method: "POST",
    //                     headers: { "Content-Type": "text/plain;charset=utf-8" }, // Prevent CORS preflight
    //                     body: JSON.stringify(forms), // Convert form data to JSON
    //                 }
    //             );
    
    //             const result = await response.json(); // Parse the response
    //             console.log('Response:', result); // Log the response for debugging
    
    //             if (response.ok && result.status === "success") {
    //                 alert("Thank you for your RSVP!");
    //                 setForms({
    //                     name: '',
    //                     email: '',
    //                     phone: '',
    //                     attending: '',
    //                     plusOne: '',
    //                     plusOneName: '',
    //                     dietaryPreferences: '',
    //                     additionalNotes: '',
    //                 });
    //             } else {
    //                 alert(`Error: ${result.message || "There was an error. Please try again."}`);
    //             }
    //         } catch (error) {
    //             console.error("Error submitting RSVP:", error); // Log the error
    //             alert("Something went wrong. Please try again.");
    //         }
    //     } else {
    //         validator.showMessages();
    //     }
    // };
    const submitHandler = async (e) => {
        e.preventDefault();
        if (validator.allValid()) {
            try {
                // First, send RSVP data to Google Apps Script
                const rsvpResponse = await fetch(
                    'https://script.google.com/macros/s/AKfycbyFSknyGQwihcTvmlvbVeIdH6UN0giYndbwAt-m5EO5TAmrcD6HAUH1KFUKhB7TDY4E/exec',
                    {
                        redirect: "follow", // Follow redirects automatically
                        method: "POST",
                        headers: { "Content-Type": "text/plain;charset=utf-8" }, // Prevent CORS preflight
                        body: JSON.stringify(forms), // Convert form data to JSON
                    }
                );
    
                const rsvpResult = await rsvpResponse.json(); // Parse the response from Google Apps Script
                console.log('RSVP Response:', rsvpResult);
    
                if (rsvpResponse.ok && rsvpResult.status === "success") {
                    // Now, send the confirmation email using the second API endpoint
                    const emailResponse = await fetch(
                        'https://6rc9b9qu70.execute-api.us-east-2.amazonaws.com/send',
                        {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                                name: forms.name,
                                email: forms.email,
                                attending: forms.attending,
                                plusOne: forms.plusOne,
                                plusOneName: forms.plusOneName,
                                dietaryPreferences: forms.dietaryPreferences,
                                additionalNotes: forms.additionalNotes,
                            }),
                        }
                    );
    
                    const emailResult = await emailResponse.json(); // Parse the response from the email API
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
    
                    // Clear the form fields
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
                } else {
                    alert(`Error: ${rsvpResult.message || "There was an error submitting your RSVP."}`);
                }
            } catch (error) {
                console.error("Error processing RSVP or sending email:", error); // Log the error
                alert("Something went wrong. Please try again.");
            }
        } else {
            validator.showMessages();
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
                        {validator.message('name', forms.name, 'required|alpha_space')}
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
                        {validator.message('email', forms.email, 'required|email')}
                    </div>
                </div>
                <div className="col col-lg-12 col-12"> {/* New Phone Number Field */}
                    <div className="form-field">
                        <input
                            value={forms.phone}
                            type="tel"
                            name="phone"
                            onChange={changeHandler}
                            className="form-control"
                            placeholder="Your Phone Number"
                        />
                        {validator.message('phone', forms.phone, 'required|phone')}
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
                        {validator.message('attending', forms.attending, 'required')}
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
                            {validator.message('plusOne', forms.plusOne, 'required')}
                        </div>
                    </div>
                )}
                {forms.plusOne === 'Yes' && (
                    <div className="col col-lg-12 col-12">
                        <div className="form-field">
                            <input
                                value={forms.plusOneName}
                                type="text"
                                name="plusOneName"
                                onChange={changeHandler}
                                className="form-control"
                                placeholder="Plus One's Name (Optional)"
                            />
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
                            <option value="Vegetarian">I require vegetarian options</option>
                            <option value="PlusOneVegetarian">My plus one requires vegetarian options</option>
                            <option value="PlusOneVegan">My plus one and I require vegetarian options</option>
                            <option value="None">None</option>
                        </select>
                        {validator.message('dietaryPreferences', forms.dietaryPreferences, 'required')}
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


