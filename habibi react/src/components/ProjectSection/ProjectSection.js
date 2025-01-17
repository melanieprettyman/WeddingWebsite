import React from 'react'
import { Link } from 'react-router-dom'
import SectionTitle from '../../components/SectionTitle'
import Projects from '../../api/projects'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const ProjectSection = (props) => {
    return (
        <section className={`wpo-portfolio-section-s3 section-padding ${props.prClass}`}>
            <div className="container-fluid">
                <SectionTitle subTitle={'Our Amazing Work'} MainTitle={'Featured Wedding Story'} />
                <div className="sortable-gallery">
                    <div className="gallery-filters"></div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="portfolio-grids gallery-container clearfix">
                                <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
                                    <Masonry gutter="30px">
                                        {Projects.slice(0, 6).map((project, pitem) => (
                                            <div className="grid" key={pitem}>
                                                <div className="img-holder">
                                                    <img src={project.pimg1} alt="" />
                                                    <div className="portfolio-content">
                                                        <h4><Link onClick={ClickHandler} to={`/project-single/${project.slug}`}>{project.title}</Link></h4>
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

export default ProjectSection;