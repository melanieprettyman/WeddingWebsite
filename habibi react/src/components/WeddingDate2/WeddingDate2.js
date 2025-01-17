import React from 'react'
import TimeCountDown from '../countdown'


const WeddingDate2 = (props) => {

    return (
        <section className={`wpo-wedding-countdown section-padding ${props.pbClass}`}>
            <h2 className="hidden">countdown</h2>
            <div className="container">
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
        </section>
    )
}

export default WeddingDate2;