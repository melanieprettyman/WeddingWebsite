import React from "react";
import Services from '../../api/service'
import { Link } from 'react-router-dom'
import SectionTitle from "../SectionTitle";


const ServiceSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    return (

        <section className={`wpo-service-section section-padding ${props.sClass}`} id="Service">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-8 col-md-10 col-12">
                        <SectionTitle MainTitle={'Welcome To Your Desirable Wedding Agency'} subTitle={'Here We Have What You Want'} />
                    </div>
                </div>
                <div className="wpo-service-wrap">
                    <div className="row">
                        {Services.slice(0, 4).map((service, sitem) => (
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={sitem}>
                                <div className="wpo-service-item">
                                    <div className="wpo-service-img">
                                        <img src={service.vector} alt="" />
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

export default ServiceSection;