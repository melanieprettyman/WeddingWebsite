import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Homepage from '../HomePage'
import HomePage2 from '../HomePage2/HomePage2';
import HomePage3 from '../HomePage3/HomePage3';
import HomePage4 from '../HomePage4/HomePage4';
import HomePage5 from '../HomePage5/HomePage5';
import HomePage6 from '../HomePage6/HomePage6';
import HomePage7 from '../HomePage7/HomePage7';
import InvitationPage1 from '../InvitationPage1/InvitationPage1';
import InvitationPage2 from '../InvitationPage2/InvitationPage2';
import HomePlanner1 from '../HomePlanner1/HomePlanner1';
import HomePlanner2 from '../HomePlanner2/HomePlanner2';
import HomePlanner3 from '../HomePlanner3/HomePlanner3';
import HomeShop1 from '../HomeShop1/HomeShop1';
import HomeShop2 from '../HomeShop2/HomeShop2';
import HomeShop3 from '../HomeShop3/HomeShop3';
import HomeShop4 from '../HomeShop4/HomeShop4';
import AboutPage from '../AboutPage/AboutPage';
import StoryPage1 from '../StoryPage1/StoryPage1';
import StoryPage2 from '../StoryPage2/StoryPage2';
import StoryPage3 from '../StoryPage3/StoryPage3';
import StoryPage4 from '../StoryPage4/StoryPage4';
import StoryPage5 from '../StoryPage5/StoryPage5';
import StoryPage6 from '../StoryPage6/StoryPage6';
import AccomodationPage from '../AccomodationPage/AccomodationPage';
import RsvpPage1 from '../RsvpPage1/RsvpPage1';
import RsvpPage2 from '../RsvpPage2/RsvpPage2';
import RsvpPage3 from '../RsvpPage3/RsvpPage3';
import RsvpPage4 from '../RsvpPage4/RsvpPage4';
import RsvpPage5 from '../RsvpPage5/RsvpPage5';
import RsvpPage6 from '../RsvpPage6/RsvpPage6';
import RsvpPage7 from '../RsvpPage7/RsvpPage7';
import GalleryPage from '../GalleryPage/GalleryPage';
import PlannerPage from '../PlannerPage/PlannerPage';
import TeamSinglePage from '../TeamSinglePage/TeamSinglePage';
import BrideGroomsPage from '../BrideGroomsPage/BrideGroomsPage';
import ServicePage from '../ServicePage/ServicePage';
import ServicePageS2 from '../ServicePageS2/ServicePageS2';
import ServicePageS3 from '../ServicePageS3/ServicePageS3';
import SeviceSinglePage from '../SeviceSinglePage';
import PricingPage from '../PricingPage/PricingPage';
import ProductSinglePage from '../ProductSinglePage';
import PortfolioGridPage from '../PortfolioGridPage/PortfolioGridPage';
import PortfolioMasonaryPage from '../PortfolioMasonaryPage/PortfolioMasonaryPage';
import PortfolioMasonaryPageS2 from '../PortfolioMasonaryPageS2/PortfolioMasonaryPageS2';
import PortfolioMasonaryPageS3 from '../PortfolioMasonaryPageS3/PortfolioMasonaryPageS3';
import ProjectSinglePage from '../ProjectSinglePage';
import ShopPage from '../ShopPage';
import CartPage from '../CartPage/CartPage';
import WishlistPage from '../WishlistPage/WishlistPage';
import CheckoutPage from '../CheckoutPage';
import OrderRecived from '../OrderRecived/OrderRecived';
import BlogDetails from '../BlogDetails/BlogDetails';
import BlogPage from '../BlogPage/BlogPage';
import BlogPageLeft from '../BlogPageLeft/BlogPageLeft';
import BlogDetailsFull from '../BlogDetailsFull/BlogDetailsFull';
import BlogDetailsLeftSiide from '../BlogDetailsLeftSiide/BlogDetailsLeftSiide';
import BlogPageFullwidth from '../BlogPageFullwidth/BlogPageFullwidth';
import ContactPage from '../ContactPage/ContactPage';
import ComingSoonPage from '../ComingSoonPage/ComingSoonPage';
import ErrorPage from '../ErrorPage/ErrorPage';
import LoginPage from '../LoginPage'
import SignUpPage from '../SignUpPage'
import ForgotPassword from '../ForgotPassword'

const AllRoute = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='home' element={<Homepage />} />
          <Route path='home-2' element={<HomePage2 />} />
          <Route path='home-3' element={<HomePage3 />} />
          <Route path='home-4' element={<HomePage4 />} />
          <Route path='home-5' element={<HomePage5 />} />
          <Route path='home-6' element={<HomePage6 />} />
          <Route path='home-rtl' element={<HomePage7 />} />
          <Route path='invitation-1' element={<InvitationPage1 />} />
          <Route path='invitation-2' element={<InvitationPage2 />} />
          <Route path='home-7' element={<HomePlanner1 />} />
          <Route path='home-8' element={<HomePlanner2 />} />
          <Route path='home-9' element={<HomePlanner3 />} />
          <Route path='shop-home' element={<HomeShop1 />} />
          <Route path='shop-home-2' element={<HomeShop2 />} />
          <Route path='shop-home-video-bg' element={<HomeShop3 />} />
          <Route path='shop-home-3' element={<HomeShop4 />} />
          <Route path='/product-single/:slug' element={<ProductSinglePage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='story' element={<StoryPage1 />} />
          <Route path='story-2' element={<StoryPage2 />} />
          <Route path='story-3' element={<StoryPage3 />} />
          <Route path='story-4' element={<StoryPage4 />} />
          <Route path='story-5' element={<StoryPage5 />} />
          <Route path='story-6' element={<StoryPage6 />} />
          <Route path='accomodation' element={<AccomodationPage />} />
          <Route path='rsvp' element={<RsvpPage1 />} />
          <Route path='rsvp-2' element={<RsvpPage2 />} />
          <Route path='rsvp-3' element={<RsvpPage3 />} />
          <Route path='rsvp-4' element={<RsvpPage4 />} />
          <Route path='rsvp-5' element={<RsvpPage5 />} />
          <Route path='rsvp-6' element={<RsvpPage6 />} />
          <Route path='rsvp-7' element={<RsvpPage7 />} />
          <Route path='gallery' element={<GalleryPage />} />
          <Route path='planner' element={<PlannerPage />} />
          <Route path='team-single/:slug' element={<TeamSinglePage />} />
          <Route path='groom-bride' element={<BrideGroomsPage />} />
          <Route path='service' element={<ServicePage />} />
          <Route path='service-s2' element={<ServicePageS2 />} />
          <Route path='service-s3' element={<ServicePageS3 />} />
          <Route path='service-single/:slug' element={<SeviceSinglePage />} />
          <Route path='/pricing' element={<PricingPage />} />
          <Route path='/coming' element={<ComingSoonPage />} />
          <Route path='/portfolio-grid' element={<PortfolioGridPage />} />
          <Route path='/portfolio-masonary' element={<PortfolioMasonaryPage />} />
          <Route path='/portfolio-masonary-s2' element={<PortfolioMasonaryPageS2 />} />
          <Route path='/portfolio-masonary-s3' element={<PortfolioMasonaryPageS3 />} />
          <Route path='/project-single/:slug' element={<ProjectSinglePage />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/wishlist' element={<WishlistPage />} />
          <Route path='/checkout' element={<CheckoutPage />} />
          <Route path='/order_received' element={<OrderRecived />} />
          <Route path='/blog-single/:slug' element={<BlogDetails />} />
          <Route path='/blog-single-left-sidebar/:slug' element={<BlogDetailsLeftSiide />} />
          <Route path='/blog-single-fullwidth/:slug' element={<BlogDetailsFull />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route path='/blog-left-sidebar' element={<BlogPageLeft />} />
          <Route path='/blog-fullwidth' element={<BlogPageFullwidth />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/404' element={<ErrorPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<SignUpPage />} />
          <Route path='forgot' element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default AllRoute;
