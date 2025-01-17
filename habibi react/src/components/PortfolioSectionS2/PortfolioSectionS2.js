import React from 'react'
import pImg1 from '../../images/portfolio/7.jpg'
import pImg2 from '../../images/portfolio/8.jpg'
import pImg3 from '../../images/portfolio/9.jpg'
import pImg4 from '../../images/portfolio/10.jpg'
import pImg5 from '../../images/portfolio/30.jpg'
import pImg6 from '../../images/portfolio/11.jpg'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Portfolios = [
    {
        Pimg: pImg1,
    },
    {
        Pimg: pImg2,
    },
    {
        Pimg: pImg3,
    },
    {
        Pimg: pImg4,
    },
    {
        Pimg: pImg5,
    },
    {
        Pimg: pImg6,
    },

]

const PortfolioSectionS2 = (props) => {

    const [open, setOpen] = React.useState(false);

    return (

        <section className={`wpo-portfolio-section-s2 section-padding ${props.prClass}`} id="gallery">
            <div className="container-fluid">
                <div className="sortable-gallery">
                    <div className="gallery-filters"></div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="portfolio-grids gallery-container clearfix">
                                <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
                                    <Masonry columnsCount={4} gutter="30px">
                                        {Portfolios.map((image, i) => (
                                            <div className="grid" key={i}>
                                                <div className="img-holder" onClick={() => setOpen(true)}>
                                                    <img src={image.Pimg} alt="" className="img img-responsive" />
                                                    <div className="hover-content">
                                                        <i className="ti-plus"></i>
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
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={[
                    { src: pImg1 },
                    { src: pImg2 },
                    { src: pImg3 },
                    { src: pImg4 },
                    { src: pImg5 },
                    { src: pImg6 },
                ]}
            />
        </section>
    )
}

export default PortfolioSectionS2;