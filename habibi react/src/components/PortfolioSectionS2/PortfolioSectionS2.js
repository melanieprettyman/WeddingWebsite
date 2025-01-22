import React from 'react'
import pImg1 from '../../images/portfolio/PortfolioAjpg.jpg'
import pImg2 from '../../images/portfolio/PortfolioB.jpeg'
import pImg3 from '../../images/portfolio/PortfolioC.jpg'
import pImg4 from '../../images/portfolio/PortfolioD.jpg'
import pImg5 from '../../images/portfolio/PortfolioE.jpg'
import pImg6 from '../../images/portfolio/PortfolioF.jpg'
import pImg7 from '../../images/portfolio/PA.jpg'
import pImg8 from '../../images/portfolio/PB.jpg'
import pImg9 from '../../images/portfolio/PC.jpg'
import pImg10 from '../../images/portfolio/PD.jpg'
import pImg11 from '../../images/portfolio/PE.jpg'
import pImg12 from '../../images/portfolio/PF.jpg'
import pImg13 from '../../images/portfolio/PG.jpg'
import pImg14 from '../../images/portfolio/PH.jpg'
import pImg15 from '../../images/portfolio/PI.jpg'
import pImg16 from '../../images/portfolio/PJ.jpeg'
import pImg17 from '../../images/portfolio/PK.jpg'
import pImg18 from '../../images/portfolio/PL.jpg'
import pImg19 from '../../images/portfolio/PM.jpg'
import pImg20 from '../../images/portfolio/PN.jpg'
import pImg21 from '../../images/portfolio/PO.jpg'
import pImg22 from  '../../images/Story2019.png'
import pImg23 from '../../images/Story2023.jpg'
import pImg24 from '../../images/Story3.jpg'
import pImg25 from '../../images/CoverPhoto.jpeg'


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
        Pimg: pImg21,
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
    {
        Pimg: pImg7,
    },
    {
        Pimg: pImg8,
    },
    {
        Pimg: pImg9,
    },
    {
        Pimg: pImg10,
    },
    {
        Pimg: pImg11,
    },
    {
        Pimg: pImg12,
    },
    {
        Pimg: pImg23,
    },
    {
        Pimg: pImg14,
    },
    {
        Pimg: pImg15,
    },
    {
        Pimg: pImg16,
    },
    {
        Pimg: pImg17,
    },
    {
        Pimg: pImg18,
    },
    {
        Pimg: pImg19,
    },
    {
        Pimg: pImg20,
    },
    {
        Pimg: pImg3,
    },
    {
        Pimg: pImg22,
    },
    {
        Pimg: pImg13,
    },
    {
        Pimg: pImg24,
    },
    {
        Pimg: pImg25,
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
                    { src: pImg21 },
                    { src: pImg4 },
                    { src: pImg5 },
                    { src: pImg6 },
                    { src: pImg7 },
                    { src: pImg8 },
                    { src: pImg9 },
                    { src: pImg10 },
                    { src: pImg11 },
                    { src: pImg12 },
                    { src: pImg13 },
                    { src: pImg14 },
                    { src: pImg15 },
                    { src: pImg16 },
                    { src: pImg17 },
                    { src: pImg18 },
                    { src: pImg19 },
                    { src: pImg20 },
                    { src: pImg21 },
                    { src: pImg22 },
                    { src: pImg23 },
                    { src: pImg24 },
                    { src: pImg25 },
                ]}
            />
        </section>
    )
}

export default PortfolioSectionS2;