import React from "react";
import SectionTitle from "../SectionTitle";
import Services from '../../api/service'
import { Link } from 'react-router-dom'


const ServiceSectionS2 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (

        <section className="wpo-service-section-s2 section-padding p-120" id="Service">
            <div className="container-fluid">
                <SectionTitle subTitle={'Our Services'} MainTitle={'What We Offer For You'} s2Class={'wpo-section-title-s2'}/>
                <div className="wpo-service-wrap">
                    <div className="row">
                        {Services.slice(0, 4).map((service, sitem) => (
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={sitem}>
                                <div className="wpo-service-item">
                                    <div className="wpo-service-img">
                                        <img src={service.simg1} alt="" />
                                    </div>
                                    <div className="wpo-service-text">
                                        <Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>{service.title}</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServiceSectionS2;