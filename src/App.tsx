/* Local dependencies */
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
import { Preloader } from './components/Preloader';
import { StorySection } from './components/StorySection';

function App() {
  return (
    <div className='App'>
      <div className='page-wrapper flower-fixed-body'>
        <Preloader />
        <Header />
        <HeroSlider date={new Date('08/22/2022 23:59:59')} />
        <InvitationSection />
        <CoupleSection />
        <StorySection />
        <GallerySection />
        <ContactSection />
        <EventSection />
        <PartnersSection />
        <BlogSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
