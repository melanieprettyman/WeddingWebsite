import React from 'react'
import { Zoom } from "react-awesome-reveal";
import SectionTitle from '../SectionTitle'
import sImg1 from '../../images/story/1.jpg'
import sImg2 from '../../images/story/2.jpg'
import sImg3 from '../../images/story/3.jpg'

import shape1 from '../../images/story/shape.png'
import shape2 from '../../images/story/shape2.png'
import shape3 from '../../images/story/shape3.png'


import bshape1 from '../../images/story/flower-shape1.svg'
import bshape2 from '../../images/story/flower-shape2.svg'
import bshape3 from '../../images/story/flower-shape3.svg'
import bshape4 from '../../images/story/flower-shape4.svg'




const Storys = [
    {
        sImg: sImg1,
        shape: shape1,
        title: 'How we meet',
        date: 'March 2019',
        description: 'Mitch and Melanie’s story began five years ago on Pi Day (March 14th), a day dedicated to celebrating the mathematical constant—and, of course, pie! Mitch was hosting a game night in honor of the occasion, and Melanie was invited by a mutual friend. What started as a chance meeting quickly grew into a meaningful friendship. Three months later, they went on their first date.',
    },
    {
        sImg: sImg2,
        shape: shape2,
        title: ' Building a Life Together',
        date: '2019–Present',
        description: 'Over the years, Mitch and Melanie have built a life filled with shared passions and adventures. Whether they’re rollerblading, playing board games, diving into Dungeons & Dragons campaigns, backpacking, hiking, skiing, or traveling, they thrive on spending time together and exploring new experiences.',
        order1: 'order-lg-2 order-1',
        order2: 'order-lg-1 order-2',
    },
    {
        sImg: sImg3,
        shape: shape3,
        title: '',
        date: '',
        description: 'One of the many unique bonds they share is their birthday—both Mitch and Melanie were born on April 13th. They are also proud dog parents to their beloved Border Collie-Blue Heeler mix, Gil, who fills their days with endless joy and energy. Together, Mitch and Melanie are so excited to begin this new chapter as a married couple and are incredibly grateful to celebrate this special moment with all of you!',
    }

]


const StorySection2 = (props) => {
    return (
        <section className="wpo-story-section section-padding" id="story">
            <div className="container">
                <SectionTitle subTitle={'Our Story'} MainTitle={'How it Happened'} />
                <div className="wpo-story-wrap">
                    {
                        Storys.map((story, st) => (
                            <div className="wpo-story-item" key={st}>
                                <div className="wpo-story-img-wrap">
                                    <Zoom direction="up" duration="1000" triggerOnce="true">
                                        <div className="wpo-story-img">
                                            <img src={story.sImg} alt="" />
                                        </div>
                                    </Zoom>
                                    <div className="clip-shape">
                                        <svg viewBox="0 0 382 440" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M191 0L381.526 110V330L191 440L0.474411 330V110L191 0Z" />
                                        </svg>
                                    </div>
                                    <div className="wpo-img-shape">
                                        <img src={story.shape} alt="" />
                                    </div>
                                </div>
                                <div className="wpo-story-content">
                                    <div className="wpo-story-content-inner">
                                        <span>{story.date}</span>
                                        <h2>{story.title}</h2>
                                        <p>{story.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))

                    }
                </div>
            </div>
            <div className="flower-shape-1">
                <img src={bshape1} alt="" />
            </div>
            <div className="flower-shape-2">
                <img src={bshape2} alt="" />
            </div>
            <div className="flower-shape-3">
                <img src={bshape3} alt="" />
            </div>
            <div className="flower-shape-4">
                <img src={bshape4} alt="" />
            </div>
        </section>
    )
}

export default StorySection2;