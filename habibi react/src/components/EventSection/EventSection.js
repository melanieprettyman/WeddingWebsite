import React from 'react';
import { Slide } from "react-awesome-reveal";
import SectionTitle from '../SectionTitle';
import sImg1 from '../../images/venue2.png';
import LocationMap from './Modal';

const Events = [
    {
        Simg: sImg1,
        title: 'Event Details',
        li1: 'Saturday, 13 Sept. 2025',
        li2: '4:00 PM',
        li3: '5:00 PM',
        li4: '6:30 PM',
        li5: 'Château Du Val 35550 Saint-Just, France',
        animation: '1200',
    },
];

const EventSection = () => {
    return (
        <section className="wpo-event-section section-padding" id="event">
            <div className="container">
                <SectionTitle subTitle={'Our Wedding'} MainTitle={'When & Where'} />
                <div className="wpo-event-wrap">
                    <div className="row justify-content-center"> {/* Center Content */}
                        {Events.map((event, eitem) => (
                            <div className="col col-lg-10 col-md-12 col-12" key={eitem}> {/* Adjust column width */}
                                <Slide direction="up" duration={event.animation} triggerOnce="true">
                                    <div
                                        className="wpo-event-item"
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            textAlign: "center",
                                        }}
                                    >
                                        {/* Event Image */}
                                        <div
                                            className="wpo-event-img"
                                            style={{
                                                position: "relative",
                                                width: "300px", // Set the size of the circle
                                                height: "300px", // Matches the width to make it a circle
                                                borderRadius: "50%", // Makes the container circular
                                                overflow: "hidden", // Ensures the image doesn't overflow
                                                backgroundColor: "#f1f3ee", // Optional background color
                                            }}
                                        >
                                            <img
                                                src={event.Simg}
                                                alt=""
                                                style={{
                                                    position: "absolute",
                                                    top: "50%",
                                                    left: "50%",
                                                    width: "100%",
                                                    height: "100%",
                                                    transform: "translate(-50%, -50%)", // Centers the image
                                                    objectFit: "cover", // Ensures the image fills the circle
                                                }}
                                            />
                                        </div>

                                        {/* Event Text */}
                                        <div className="wpo-event-text">
                                            <div className="title">
                                                <h2>{event.title}</h2>
                                            </div>
                                            <ul style={{ listStyle: "none", padding: 0 }}>
                                                <li><b>Date: </b>{event.li1}</li>
                                                <li><b>Ceremony: </b>{event.li2}</li>
                                                <li><b>Cocktail Hour: </b>{event.li3}</li>
                                                <li><b>Dinner: </b>{event.li4}</li>
                                                <li><b>Location: </b>{event.li5}</li>
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
    );
};

export default EventSection;
