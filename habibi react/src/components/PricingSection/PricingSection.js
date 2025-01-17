import React from 'react'
import { Link } from 'react-router-dom'
import pImg1 from '../../images/pricing/shape-1.svg'
import pImg2 from '../../images/pricing/shape-2.svg'
import pImg3 from '../../images/pricing/shape-3.svg'
import pImg4 from '../../images/pricing/shape-4.svg'
import SectionTitle from '../SectionTitle'


const Pricing = [
    {
        pakage: 'Basic Package',
        price: '150',
        subs: 'Monthly',
        l1: 'Stylish makeup for bride.',
        l2: 'Top label arrengement',
        l3: 'Amazing meal & breakfast',
        l4: 'Manicure & Pedicure',
        l5: 'Full body Polish'
    },
    {
        pakage: 'Standard Package',
        price: '500',
        subs: 'Monthly',
        l1: 'Stylish makeup for bride.',
        l2: 'Top label arrengement',
        l3: 'Amazing meal & breakfast',
        l4: 'Manicure & Pedicure',
        l5: 'Full body Polish',
        shape: pImg1,
        shape2: pImg2
    },
    {
        pakage: 'Luxary Package',
        price: '750',
        subs: 'Yearly',
        l1: 'Stylish makeup for bride.',
        l2: 'Top label arrengement',
        l3: 'Amazing meal & breakfast',
        l4: 'Manicure & Pedicure',
        l5: 'Full body Polish'
    },
]


const ClickHandler = () => {
    window.scrollTo(10, 0);
};

const PricingSection = (props) => {

    return (
        <section className={`wpo-pricing-section section-padding ${props.pClass}`}>
            <div className="container">
                <SectionTitle subTitle={'Best Pricing'} MainTitle={'Choose Your Packages'} />
                <div className="wpo-pricing-wrap">
                    <div className="row">
                        {Pricing.map((pricing, pitem) => (
                            <div className="col col-lg-4 col-md-6 col-12" key={pitem}>
                                <div className="wpo-pricing-item">
                                    <div className="wpo-pricing-item-inner">
                                        <div className="wpo-pricing-top">
                                            <div className="wpo-pricing-text">
                                                <h4>{pricing.pakage}</h4>
                                                <h2><small>$</small>{pricing.price}<span>/{pricing.subs}</span></h2>
                                            </div>
                                        </div>
                                        <div className="wpo-pricing-bottom">
                                            <div className="wpo-pricing-bottom-text">
                                                <ul>
                                                    <li>{pricing.l1}</li>
                                                    <li>{pricing.l2}</li>
                                                    <li>{pricing.l3}</li>
                                                    <li>{pricing.l4}</li>
                                                    <li>{pricing.l5}</li>
                                                </ul>
                                                <Link onClick={ClickHandler} className="theme-btn" to="/pricing">Choose Plan</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="shape-1"><img src={pricing.shape} alt="" /></div>
                                    <div className="shape-2"><img src={pricing.shape2} alt="" /></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="left-shape"><img src={pImg3} alt="" /></div>
            <div className="right-shape"><img src={pImg4} alt="" /></div>
        </section>
    )
}

export default PricingSection;