import React from 'react'
import { Link } from 'react-router-dom'
import { Slide } from "react-awesome-reveal";
import Team from '../../api/team'
import SectionTitle from '../SectionTitle';

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const TeamSection = (props) => {
    return (
        <section className="wpo-team-section-s2 section-padding">
            <div className="container">
                <SectionTitle subTitle={'Important Persons'} MainTitle={'Awesome Team Members'} />
                <div className="wpo-team-wrap">
                    <div className="row">
                        {Team.slice(0, 8).map((team, tm) => (
                            <div className="col col-lg-3 col-md-6 col-sm-6 col-12" key={tm}>
                                <Slide direction="up" duration={team.animation} triggerOnce="true">
                                    <div className="wpo-team-item">
                                        <div className="wpo-team-img-wrap">
                                            <div className="wpo-team-img">
                                                <div className="wpo-team-img-inner">
                                                    <img src={team.tImg} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="wpo-team-text">
                                            <h3><Link onClick={ClickHandler} to={`/team-single/${team.slug}`}>{team.name}</Link></h3>
                                            <span>{team.title}</span>
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

export default TeamSection;