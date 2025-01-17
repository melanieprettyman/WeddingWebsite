import React from 'react'
import { Link } from 'react-router-dom'
import SectionTitle from '../SectionTitle'
import Projects from '../../api/projects'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const ProjectSectionS2 = (props) => {
    return (
        <section className={`wpo-portfolio-section-s4 section-padding ${props.prClass}`}>
            <div className="container">
                <SectionTitle subTitle={'Amazing Work'} MainTitle={'FEATURED WEDDING STORY'} />
                <div className="sortable-gallery">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="portfolio-grids gallery-container clearfix">
                                <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }}>
                                    <Masonry gutter="60px">
                                        {Projects.slice(4, 12).map((project, pitem) => (
                                            <div className="grid" key={pitem}>
                                                <div className="img-holder">
                                                    <img src={project.pimg1} alt="" />
                                                    <div className="portfolio-content">
                                                        <h4><Link onClick={ClickHandler} to={`/project-single/${project.id}`}>{project.title}</Link></h4>
                                                        <span>{project.location}- {project.date}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </Masonry>
                                </ResponsiveMasonry>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectSectionS2;