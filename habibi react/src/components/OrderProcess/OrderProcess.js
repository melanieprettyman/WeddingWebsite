import React from "react";
import cImg1 from '../../images/order/img-1.jpg'
import cImg2 from '../../images/order/img-2.jpg'
import cImg3 from '../../images/order/img-3.jpg'
import cImg4 from '../../images/order/img-4.jpg'
import bg from '../../images/order/bg.png'

const Process = [
    {
        sImg: cImg1,
        title: 'Select Your Taste',
        des:'From our much more design You can choose your one what you want. We are always whit your favorite taste.'
    },
    {
        sImg: cImg2,
        title: 'Chocolate Cake',
        des:'From our much more design You can choose your one what you want. We are always whit your favorite taste.'
    },
    {
        sImg: cImg3,
        title: 'Order On Time',
        des:'From our much more design You can choose your one what you want. We are always whit your favorite taste.'
    },
    {
        sImg: cImg4,
        title: 'Receive Your Cake',
        des:'From our much more design You can choose your one what you want. We are always whit your favorite taste.'
    }

]


const OrderProcess = () => {
    return (
        <section className="wpo-order-section section-padding">
            <div className="shape" style={{ backgroundImage: `url(${bg})` }}></div>
            <div className="container-fluid">
                <div className="wpo-section-title">
                    <span>Ordering Cake</span>
                    <h2>How to Order Your Cake</h2>
                </div>
                <div className="wpo-order-wrap">
                    <div className="row">
                        {
                            Process.map((pro, ps) => (
                                <div className="col col-xl-3 col-lg-6 col-md-6 col-12" key={ps}>
                                    <div className="wpo-order-item">
                                        <div className="wpo-order-img">
                                            <img src={pro.sImg} alt="" />
                                        </div>
                                        <div className="wpo-order-text">
                                            <h2>{pro.title}</h2>
                                            <p>{pro.des}</p>
                                        </div>
                                    </div>
                                </div>
                            ))

                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OrderProcess;