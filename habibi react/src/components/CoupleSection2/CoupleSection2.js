import React from 'react';
import { Link } from 'react-router-dom'
import coupleImg1 from '../../images/couple/1.jpg'
import coupleImg2 from '../../images/couple/2.jpg'
import bg from '../../images/couple/image-bg.svg'


const CoupleSection2 = (props) => {

    return (
        <section className="wpo-couple-section section-padding" id="couple">
            <div className="container">
                <div className="couple-area clearfix">
                    <div className="row align-items-center">
                        <div className="col col-md-12 col-12">
                            <div className="couple-item">
                                <div className="couple-img-wrap">
                                    <div className="couple-img">
                                        <img src={coupleImg1} alt="" />
                                    </div>
                                    <div className="c-shape">
                                        <img src={bg} alt="" />
                                    </div>
                                </div>
                                <div className="couple-text">
                                    <h3>Melanie Prettyman</h3>
                                    <p>
                                        Melanie, 27, was born in Mechanicville, Maryland, and grew up in a large and lively family with nine siblings. She is grateful for her family, including her mother, BillieJo Prettyman, and treasures the memory of her late father, Ronald Prettyman, who passed away in 2022.

                                        Melanie’s academic journey led her to earn a Bachelor’s degree in Biochemistry and a Master’s degree in Software Development, both from the University of Utah. She now works as a Software Engineer for a dynamite company, blending her technical expertise with creativity.
                                    
                                        In her free time, Melanie loves hosting themed parties, crocheting intricate designs, and escaping into the magical realms of fantasy novels. Her vibrant personality and knack for bringing people together make her a cherished friend, sister, and partner.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col col-md-12 col-12">
                            <div className="couple-item">
                                <div className="couple-img-wrap">
                                    <div className="couple-img">
                                        <img src={coupleImg2} alt="" />
                                    </div>
                                    <div className="c-shape">
                                        <img src={bg} alt="" />
                                    </div>
                                </div>
                                <div className="couple-text">
                                    <h3>Mitch Wopat</h3>
                                    <p>
                                    Mitch, 34, grew up in Germantown, Wisconsin, and always had a passion for science and discovery. After earning a Bachelor’s degree in Biochemistry from Stevens Point, he continued his education with a Master’s in Pharmacology at St. John’s University in New York City. He ultimately earned a PhD in Biochemistry from the University of Utah. Today, he works as a Patient Officer for the U.S. Government, combining his love for biochemistry with his commitment to serving others.
                                    
                                    When he’s not working, Mitch enjoys video games, painting, and immersing himself in the imaginative worlds of science fiction novels. As the only child of Tanya Weber and James Wopat, Mitch cherishes his close-knit family ties and looks forward to building his future with Melanie.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape-1">
                <svg viewBox="0 0 1920 692" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.1">
                        <path className="stroke-color"
                            d="M-11 689C176.333 697 609 669.4 841 495L1111 279C1263.67 154.333 1640.6 -71.0002 1927 24.9998"
                            stroke="" strokeWidth="2" />
                        <path
                            d="M-11 689C176.333 697 609 669.4 841 495L1111 279C1263.67 154.333 1640.6 -71.0002 1927 24.9998"
                            stroke="black" strokeOpacity="0.2" strokeWidth="2" />
                    </g>
                    <g opacity="0.1">
                        <path className="stroke-color"
                            d="M1927 689C1739.67 697 1307 669.4 1075 495L805 279C652.333 154.333 275.4 -71.0002 -11 24.9998"
                            stroke="" strokeWidth="2" />
                        <path
                            d="M1927 689C1739.67 697 1307 669.4 1075 495L805 279C652.333 154.333 275.4 -71.0002 -11 24.9998"
                            stroke="black" strokeOpacity="0.2" strokeWidth="2" />
                    </g>
                    <path className="fill-color"
                        d="M879 397C501.4 54.5998 135 31.6665 -1 62.9998V649C579.8 636.2 827.667 475.667 879 397Z"
                        fill="" />
                    <path className="fill-color"
                        d="M1041 397C1418.6 54.5998 1785 31.6665 1921 62.9998V649C1340.2 636.2 1092.33 475.667 1041 397Z"
                        fill="" />
                </svg>
            </div>
        </section>
    );
}

export default CoupleSection2;