import React from 'react'
import sImg1 from '../../images/story/13.jpg'
import sImg2 from '../../images/story/14.jpg'
import sImg3 from '../../images/story/15.jpg'

import shape1 from '../../images/story/frame-shape-1.png'
import shape2 from '../../images/story/frame-shape-2.png'

import SectionTitle from '../SectionTitle'


const StorySection7 = (props) => {
    return (

        <section className="wpo-story-section-s6 section-padding pt-0" id="story">
            <div className="container">
                <SectionTitle subTitle={'قصتنا'} MainTitle={'كيف حدث ذلك'} />
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="story-timeline">
                            <div className="round-shape"></div>
                            <div className="row">
                                <div className="col col-lg-6 col-12">
                                    <div className="img-holder right-align-text left-site">
                                        <img src={sImg1} alt="" className="img img-responsive" />
                                        <div className="frame-shape-img-1">
                                            <img src={shape1} alt="" />
                                        </div>
                                        <div className="frame-shape-img-2">
                                            <img src={shape2} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-lg-6 col-12 text-holder">
                                    <span className="heart">
                                        <i className="fi flaticon-heart"></i>
                                    </span>
                                    <div className="story-text">
                                        <span className="date">15 يونيو 2014</span>
                                        <h3>كيف نتجمع</h3>
                                        <p>في مناسبة عائلية ، نلتقي ببعضنا البعض لأول مرة. ثم تعتقد عائلتنا أننا مثاليون لبعضنا البعض. لذلك قرروا الزواج منا في أقرب وقت ممكن.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col col-lg-6 col-12 order-lg-1 order-2 text-holder right-heart">
                                    <span className="heart">
                                        <i className="fi flaticon-heart"></i>
                                    </span>
                                    <div className="story-text right-align-text">
                                        <span className="date">15 يونيو 2014</span>
                                        <h3>اجتماع الأسرة النهائي</h3>
                                        <p>في مناسبة عائلية ، نلتقي ببعضنا البعض لأول مرة. ثم تعتقد عائلتنا أننا مثاليون لبعضنا البعض. لذلك قرروا الزواج منا في أقرب وقت ممكن.
                                        </p>
                                    </div>
                                </div>
                                <div className="col col-lg-6 col-12 order-lg-2 order-1">
                                    <div className="img-holder right-align-img">
                                        <img src={sImg2} alt="" className="img img-responsive" />
                                        <div className="frame-shape-img-1">
                                            <img src={shape1} alt="" />
                                        </div>
                                        <div className="frame-shape-img-2">
                                            <img src={shape2} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col col-lg-6 col-12">
                                    <div className="img-holder video-holder left-site">
                                        <img src={sImg3} alt="" className="img img-responsive" />
                                        <div className="frame-shape-img-1">
                                            <img src={shape1} alt="" />
                                        </div>
                                        <div className="frame-shape-img-2">
                                            <img src={shape2} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-lg-6 col-12 text-holder">
                                    <span className="heart">
                                        <i className="fi flaticon-heart"></i>
                                    </span>
                                    <div className="story-text">
                                        <span className="date"> 15 يونيو 2014</span>
                                        <h3>يوم خطوبتنا</h3>
                                        <p>في مناسبة عائلية ، نلتقي ببعضنا البعض لأول مرة. ثم تعتقد عائلتنا أننا مثاليون لبعضنا البعض. لذلك قرروا الزواج منا في أقرب وقت ممكن.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col offset-lg-6 col-lg-6 col-12 text-holder">
                                    <div className="round-shape-2"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StorySection7;