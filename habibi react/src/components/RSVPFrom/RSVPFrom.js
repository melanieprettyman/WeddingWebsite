import React, { useState } from 'react';
import SimpleReactValidator from 'simple-react-validator';

const RSVPForm = () => {
    const [forms, setForms] = useState({
        name: '',
        email: '',
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

    const submitHandler = (e) => {
        e.preventDefault();
        if (validator.allValid()) {
            alert('Thank you for your RSVP!');
            setForms({
                name: '',
                email: '',
                attending: '',
                plusOne: '',
                plusOneName: '',
                dietaryPreferences: '',
                additionalNotes: '',
            });
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
