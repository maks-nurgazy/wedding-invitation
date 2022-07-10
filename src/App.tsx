import { BlogSection } from './components/BlogSection';
import { ContactSection } from './components/ContactSection';
import { CoupleSection } from './components/CoupleSection';
import { EventSection } from './components/EventSection';
import { Footer } from './components/Footer';
import { GallerySection } from './components/GallerySection';
import { Header } from './components/Header';
import { HeroSlider } from './components/HeroSlider';
import { InvitationSection } from './components/InvitationSection';
import { PartnersSection } from './components/PartnersSection';
import { StorySection } from './components/StorySection';

function App() {
  return (
    <div className='App'>
      {/* <!-- start page-wrapper --> */}
      <div className='page-wrapper flower-fixed-body'>
        {/* <!-- start preloader --> */}
        <div className='preloader'>
          <div className='middle'>
            <i className='fi flaticon-favorite-heart-button'></i>
            <i className='fi flaticon-favorite-heart-button'></i>
            <i className='fi flaticon-favorite-heart-button'></i>
            <i className='fi flaticon-favorite-heart-button'></i>
          </div>
        </div>
        {/* <!-- end preloader --> */}

        {/* <!-- Start header --> */}
        <Header />
        {/* <!-- end of header --> */}

        {/* <!-- start of hero --> */}
        <HeroSlider />
        {/* <!-- end of hero slider --> */}

        {/* <!-- start invitation-section --> */}
        <InvitationSection />
        {/* <!-- end invitation-section --> */}

        {/* <!-- start couple-section --> */}
        <CoupleSection />
        {/* <!-- end couple-section --> */}

        {/* <!-- start story-section --> */}
        <StorySection />
        {/* <!-- end story-section --> */}

        {/* <!-- start gallery-section --> */}
        <GallerySection />
        {/* <!-- end gallery-section --> */}

        {/* <!-- start contact-section --> */}
        <ContactSection />
        {/* <!-- end contact-section --> */}

        {/* <!-- start event-section --> */}
        <EventSection />
        {/* <!-- end event-section --> */}

        {/* <!-- start partners-section --> */}
        <PartnersSection />
        {/* <!-- end partners-section --> */}

        {/* <!-- start blog-section --> */}
        <BlogSection />
        {/* <!-- end blog-section --> */}

        {/* <!-- start site-footer --> */}
        <Footer />
        {/* <!-- end site-footer --> */}
      </div>
      {/* <!-- end of page-wrapper --> */}
    </div>
  );
}

export default App;
