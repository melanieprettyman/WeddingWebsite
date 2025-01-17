import React from "react";
import Bg from '../../images/offer.jpg'

const OfferBanner = () => {
    return (
        <section className="wpo-offer-section section-padding pb-0">
            <div className="container-fluid">
                <div className="wpo-offer-wrap">
                    <div className="left-img" style={{ background: `url(${Bg}) no-repeat center top / cover` }}>
                    </div>
                    <div className="wpo-offer-item">
                        <div className="wpo-offer-inner">
                            <h2>Wedding Special Gown</h2>
                            <p>Maecenas nunc porttitor amet a tincidunt tincidunt eget placerat tellus. Quis vulputate
                                tellus sagittis nibh lectus sapien velit non magnis. Risus interdum pharetra sodales sed
                                massa commodo massa ornare.</p>
                            <ul>
                                <li><del>$2356</del></li>
                                <li>$2120</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OfferBanner;