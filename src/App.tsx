/* External dependencies */
import { useParams } from 'react-router-dom';

/* Local dependencies */
import { ContactSection } from './components/contact/ContactSection';
import { EventSection } from './components/event/EventSection';
import { Footer } from './components/footer/Footer';
import { GallerySection } from './components/gallery/GallerySection';
import { Header } from './components/header/Header';
import { HeroSlider } from './components/hero-slider/HeroSlider';
import { InvitationSection } from './components/invitation/InvitationSection';
import { PlanningSection } from './components/planning/PlanningSection';
import { Preloader } from './components/preloader/Preloader';
import { StorySection } from './components/story/StorySection';

function App() {
  let params = useParams();

  return (
    <div className='App'>
      <div className='page-wrapper flower-fixed-body'>
        <Preloader />
        <Header />
        <HeroSlider date={new Date('08/22/2022 23:59:59')} />
        <InvitationSection guest={params.guest + ':'} />
        {/* <CoupleSection /> */}
        <StorySection />
        <GallerySection />
        <EventSection />
        <PlanningSection />
        <ContactSection />
        {/* <PartnersSection /> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
