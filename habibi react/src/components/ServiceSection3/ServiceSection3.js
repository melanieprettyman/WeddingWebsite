import React from "react";
import Services from '../../api/service'
import { Link } from 'react-router-dom'


const ServiceSectionS3 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (

        <section className="wpo-service-section-s3 section-padding">
            <h2 className="hidden">Service</h2>
            <div className="container">
                <div className="wpo-service-wrap">
                    <div className="row">
                        {Services.slice(1, 4).map((service, sitem) => (
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={sitem}>
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

export default ServiceSectionS3;