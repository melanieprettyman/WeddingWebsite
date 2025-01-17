import React from 'react'
import { Slide } from "react-awesome-reveal";
import SectionTitle from '../SectionTitle'
import sImg1 from '../../images/event/7.jpg'
import sImg2 from '../../images/event/8.jpg'
import sImg3 from '../../images/event/9.jpg'
import LocationMap from './Modal'


const Events = [
    {
        Simg: sImg1,
        title: 'الاستقبال',
        li1: 'الاثنين, 12 أبريل 2023 1:00 ظهرًا – 2:30 ظهرًا',
        li2: '4517 جادة واشنطن، مانشستر، كنتاكي 39495',
        li3: '+1 234-567-8910',
        animation: '1200',
    },
    {
        Simg: sImg2,
        title: 'الحفل',
        li1: 'الاثنين, 12 أبريل 2023 1:00 ظهرًا – 2:30 ظهرًا',
        li2: '4517 جادة واشنطن، مانشستر، كنتاكي 39495',
        li3: '+1 234-567-8910',
        animation: '1400',
    },
    {
        Simg: sImg3,
        title: 'الحفلة',
        li1: 'الاثنين, 12 أبريل 2023 1:00 ظهرًا – 2:30 ظهرًا',
        li2: '4517 جادة واشنطن، مانشستر، كنتاكي 39495',
        li3: '+1 234-567-8910',
        animation: '1600',
    },

]

const EventSectionS5 = (props) => {
    return (
        <section className="wpo-event-section-s4 section-padding" id="event">
            <div className="container">
                <SectionTitle subTitle={'دينا عرس'} MainTitle={'تى وأين يحدث'} />
                <div className="wpo-event-wrap">
                    <div className="row">
                        {Events.map((event, eitem) => (
                            <div className="col col-lg-4 col-md-6 col-12" key={eitem}>
                                <Slide direction="up" duration={event.animation} triggerOnce="true">
                                    <div className="wpo-event-item">
                                        <div className="wpo-event-text">
                                            <div className="title">
                                                <h2>{event.title}</h2>
                                            </div>
                                            <ul>
                                                <li>{event.li1}</li>
                                                <li>{event.li2}</li>
                                                <li>{event.li3}</li>
                                                <li><LocationMap /></li>
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
    )
}

export default EventSectionS5;