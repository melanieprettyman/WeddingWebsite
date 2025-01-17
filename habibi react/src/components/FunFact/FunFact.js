import React from 'react'
import CountUp from 'react-countup';
import fIcon1 from '../../images/funfact/1.svg'
import fIcon2 from '../../images/funfact/2.svg'
import fIcon3 from '../../images/funfact/3.svg'
import fIcon4 from '../../images/funfact/4.svg'

const funFact = [
    {
        fIcon: fIcon1,
        title: '3210',
        subTitle: 'Happy Couples',
    },
    {
        fIcon: fIcon2,
        title: '230',
        subTitle: 'Location',
    },
    {
        fIcon: fIcon3,
        title: '3325',
        subTitle: 'Wedding',
    },
    {
        fIcon: fIcon4,
        title: '526',
        subTitle: 'Decoration',
    },


]


const FunFact = (props) => {
    return (
        <section className={`wpo-fun-fact-section ${props.fClass}`}>
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="wpo-fun-fact-grids clearfix">
                            {funFact.map((funfact, fitem) => (
                                <div className="grid" key={fitem}>
                                    <div className="flower"><img src={funfact.fIcon} alt="" /></div>
                                    <div className="info">
                                        <h3><span><CountUp end={funfact.title} enableScrollSpy /></span>+</h3>
                                        <p>{funfact.subTitle}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <span id="counter" className='d-none' />
        </section>
    )
}

export default FunFact;