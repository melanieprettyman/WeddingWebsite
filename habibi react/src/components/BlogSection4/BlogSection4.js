import React from "react";
import { Slide } from "react-awesome-reveal";
import blogs from '../../api/blogs'
import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle";
import shape1 from '../../images/blog/shape-1.svg'
import shape2 from '../../images/blog/shape-2.svg'


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const BlogSection3 = (props) => {
    return (
        <section className={`wpo-blog-section-s3 section-padding ${props.bgClass}`}>
            <div className="container">
                <div className="row">
                    <SectionTitle subTitle={'مدونتنا'} MainTitle={'آخر أخبار الزفاف لدينا'} />
                </div>
                <div className="wpo-blog-items">
                    <div className="row">
                        {blogs.slice(6, 9).map((blog, bl) => (
                            <div className="col col-lg-4 col-md-6 col-12" key={bl}>
                                <Slide direction="up" duration={blog.animation} triggerOnce="true">
                                    <div className="wpo-blog-item">
                                        <div className="wpo-blog-img">
                                            <img src={blog.screens} alt="" />
                                        </div>
                                        <div className="wpo-blog-content">
                                            <ul>
                                                <li>By <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>{blog.author}</Link></li>
                                                <li>{blog.create_at}</li>
                                            </ul>
                                            <h2><Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>{blog.title2}</Link></h2>
                                        </div>
                                    </div>
                                </Slide>
                            </div>
                        ))}
                    </div>
                    <div className="b-shape-2">
                        <img src={shape2} alt="" />
                    </div>
                </div>
            </div>
            <div className="b-shape">
                <img src={shape1} alt="" />
            </div>
        </section>
    );
}

export default BlogSection3;