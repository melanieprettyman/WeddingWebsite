import React from 'react'
import sImg1 from '../../images/wedding-date/1.png'
import sImg2 from '../../images/wedding-date/2.png'
import sImg3 from '../../images/wedding-date/3.png'
import TimeCountDown from '../countdown'


const WeddingDate = (props) => {

    return (
        <section className="wpo-hero-wedding-date">
            <div className="wpo-wedding-date-inner">
                <span>Save the Date</span>
                <h2>Jane & Peter</h2>
                <p>We Are Getting Married November 15,2023</p>
                <span className="shape"><img src={sImg1} alt="" /> </span>
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="clock-grids">
                            <div id="clock">
                                <TimeCountDown />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape-1">
                <img src={sImg2} alt="" />
            </div>
            <div className="shape-2">
                <img src={sImg3} alt="" />
            </div>
        </section>
    )
}

export default WeddingDate;