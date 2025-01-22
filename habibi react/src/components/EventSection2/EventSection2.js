import React, { Fragment } from 'react'
import { Slide } from "react-awesome-reveal";
import SectionTitle from '../SectionTitle'
import sImg1 from '../../images/event/plane.jpg'
import sImg2 from '../../images/event/train.jpg'
import sImg3 from '../../images/event/car.avif'
import PageTitle from '../pagetitle/PageTitle';
import Navbar from '../../components/Navbar/Navbar';



const Events = [
    {
        Simg: sImg1,
        title: 'By Plane | 2 hours',
        li1: 'Step 1: Take a domestic flight from Paris to Rennes St. Jacques (RNS) airport. The flight takes approximately 1 hour and costs around $200, depending on availability.',
        li2: 'Step 2: Rent a car in Rennes and drive to Château du Val. The drive takes about 50 minutes.',
        //li3: '+1 234-567-8910',
        animation: '1200',
    },
    {
        Simg: sImg2,
        title: 'By Train | 2.5 hours',
        li1: 'Step 1: Take a TGV (high-speed train) from Paris Montparnasse station to Rennes. This journey takes approximately 1.5 hours and costs $20–$70, depending on timing and availability.',
        li2: 'Step 2 (Option 1): Rent a car in Rennes and drive to Château du Val, which takes about 50 minutes.',
        li3: 'Step 2 (Option 2): Continue by train and taxi. Take a regional TER train from Rennes to Redon (40 minutes, $10–$20). From Redon, arrange for a taxi or car pool to Château du Val, roughly 16 kilometers (10 miles) away.',
        animation: '1400',
    },
    { 
        Simg: sImg3,
        title: 'By Car | 4 hours',
        li1: 'Distance: Approximately 395 kilometers (245 miles).',
        //li2: '4517 Washington Ave. Manchester, Kentucky 39495',
        //li3: '+1 234-567-8910',
        animation: '1600',
    },

]

const EventSectionS2 = (props) => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-3'} />
        <section className="wpo-event-section-s2 section-padding pt-0" id="event">
            <PageTitle
                    pageTitle={"Travel"}
                    pagesub={'Travel'}
                    content={"Our celebration is at the beautiful Château du Val in Saint-Just! Below are some recommended travel options from Paris to help you plan your journey."}
                />
            <div className="container">
                <div className="wpo-event-wrap">
                    <div className="row">
                        {Events.map((event, eitem) => (
                            <div className="col col-lg-4 col-md-6 col-12" key={eitem}>
                                <Slide direction="up" duration={event.animation} triggerOnce="true">
                                    <div className="wpo-event-item" >
                                        <div className="wpo-event-img">
                                            <div className="wpo-event-img-inner">
                                                <img src={event.Simg} alt="" />
                                            </div>
                                            <div className="title">
                                                <h2>{event.title}</h2>
                                            </div>
                                        </div>
                                        <div className="wpo-event-text">
                                            <ul>
                                                <li>{event.li1}</li>
                                                <li>{event.li2}</li>
                                                <li>{event.li3}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </Slide>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
        </Fragment>
    )
}

export default EventSectionS2;