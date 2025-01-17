import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import BlogSingle from '../../components/BlogDetails/BlogSingle.js'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useParams } from 'react-router-dom'
import blogs from '../../api/blogs'
import Footer from '../../components/footer/Footer.js';

const BlogDetailsLeftSiide =() => {

    const { slug } = useParams()
    const BlogDetails = blogs.find(item => item.slug === slug)
    return(
        <Fragment>
            <Navbar hclass={'wpo-header-style-3'}/>
            <PageTitle pageTitle={BlogDetails.title} pagesub={'Blog'}/> 
            <BlogSingle blLeft={'order-lg-1'} blRight={'order-lg-2'}/>
            <Footer footerClass={'wpo-site-footer-s2'}/>
            <Scrollbar/>
        </Fragment>
    )
};
export default BlogDetailsLeftSiide;


