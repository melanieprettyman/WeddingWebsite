import React, { useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';


const RSVPFromRtl = () => {

    const [forms, setForms] = useState({
        name: '',
        email: '',
        date: '',
        guest: '',
        meal: '',
        reason: '',
    });
    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));
    const changeHandler = e => {
        setForms({ ...forms, [e.target.name]: e.target.value })
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const submitHandler = e => {
        e.preventDefault();
        if (validator.allValid()) {
            validator.hideMessages();
            setForms({
                name: '',
                email: '',
                date: '',
                guest: '',
                meal: '',
                reason: '',
            })
        } else {
            validator.showMessages();
        }
    };


    return (
        <form onSubmit={(e) => submitHandler(e)} className="contact-validation-active" >
            <div className="row">
                <div className="col col-lg-12 col-12">
                    <div className="form-field">
                        <input
                            value={forms.name}
                            type="text"
                            name="name"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            className="form-control"
                            placeholder="سم" />
                        {validator.message('name', forms.name, 'required|alpha_space')}
                    </div>
                </div>
                <div className="col col-lg-12 col-12">
                    <div className="form-field">
                        <input
                            value={forms.email}
                            type="email"
                            name="email"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            className="form-control"
                            placeholder="ريد إلكتروني "/>
                        {validator.message('email', forms.email, 'required|email')}
                    </div>
                </div>
                <div className="col col-lg-12 col-12">
                    <div className="radio-buttons">
                        <p>
                            <input type="radio" id="attend" name="radio-group" defaultChecked/>
                                <label htmlFor="attend">عم سأكون هناك</label>
                        </p>
                        <p>
                            <input type="radio" id="not" name="radio-group"/>
                            <label htmlFor="not">سف لا أستطيع الحضور</label>
                        </p>
                    </div>
                </div>
                <div className="col col-lg-12 col-12">
                    <div className="form-field">
                        <select
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            value={forms.guest}
                            type="text"
                            className="form-control"
                            name="guest">
                            <option>دد الضيوف </option>
                            <option>01</option>
                            <option>02</option>
                            <option>03</option>
                            <option>04</option>
                            <option>05</option>
                            <option>06</option>
                        </select>
                        {validator.message('guest', forms.guest, 'required')}
                    </div>
                </div>
                <div className="col col-lg-12 col-12">
                    <div className="form-field">
                        <input
                            value={forms.reason}
                            type="text"
                            name="reason"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            className="form-control"
                            placeholder="اذا ستحضر"/>
                        {validator.message('reason', forms.email, 'required')}
                    </div>
                </div>
                <div className="col col-lg-12 col-12">
                    <div className="form-field">
                        <select
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            value={forms.meal}
                            type="text"
                            className="form-control"
                            name="meal">
                            <option>تفضيلات الوجبات</option>
                            <option>حساء الدجاج</option>
                            <option>لحم كباب</option>
                            <option>دجاج باربيكيو</option>
                            <option>سلطة ميكس</option>
                            <option>ضلوع لحم البقر </option>
                        </select>
                        {validator.message('meal', forms.meal, 'required')}
                    </div>
                </div>
            </div>
            <div className="submit-area">
                <button type="submit" className="theme-btn">رسل</button>
            </div>
        </form >
    )
}

export default RSVPFromRtl;