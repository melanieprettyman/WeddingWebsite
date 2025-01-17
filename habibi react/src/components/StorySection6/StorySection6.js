import React from 'react'
import { Slide } from "react-awesome-reveal";
import sImg1 from '../../images/story/4.png'
import sImg2 from '../../images/story/5.png'
import sImg3 from '../../images/story/6.png'

import shape1 from '../../images/story/story-shape.png'


const Storys = [
    {
        sImg: sImg1,
        shape: shape1,
        animation: '1000',
        title: 'How we meet',
        date: '15 June 2014',
        description: 'Consectetur adipiscing elit. Fringilla at risus orci, tempus facilisi sed. Enim tortor, faucibus netus orci donec volutpat adipiscing. Sit condimentum elit convallis libero.',
    },
    {
        sImg: sImg2,
        shape: shape1,
        animation: '1200',
        title: 'He proposed, I said yes',
        date: '12 Dec 2019',
        description: 'Consectetur adipiscing elit. Fringilla at risus orci, tempus facilisi sed. Enim tortor, faucibus netus orci donec volutpat adipiscing. Sit condimentum elit convallis libero.',
        order1: 'order-lg-2 order-1',
        order2: 'order-lg-1 order-2',
    },
    {
        sImg: sImg3,
        shape: shape1,
        animation: '1400',
        title: 'Our Engagement Day',
        date: '16 Jan 2023',
        description: 'Consectetur adipiscing elit. Fringilla at risus orci, tempus facilisi sed. Enim tortor, faucibus netus orci donec volutpat adipiscing. Sit condimentum elit convallis libero.',
    }

]


const StorySection6 = (props) => {
    return (

        <section className="wpo-story-section-s6 section-padding" id="story">
            <div className="container">
                <div className="wpo-story-wrap">
                    <div className="row">
                        {
                            Storys.map((story, st) => (
                                <div className="col col-lg-4 col-md-6 col-12" key={st}>
                                    <Slide direction="up" duration={story.animation} triggerOnce="true">
                                        <div className="wpo-story-item">
                                            <div className="wpo-story-img">
                                                <div className="wpo-story-img-inner">
                                                    <img src={story.sImg} alt="" />
                                                </div>
                                                <div className="flower-shape">
                                                    <img src={story.shape} alt="" />
                                                </div>
                                            </div>
                                            <div className="wpo-story-content">
                                                <span>{story.date}</span>
                                                <h2>{story.title}</h2>
                                                <p>{story.description}</p>
                                            </div>
                                        </div>
                                    </Slide>
                                </div>
                            ))

                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StorySection6;