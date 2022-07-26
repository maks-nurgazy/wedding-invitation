/* External dependencies */
import { useParams } from 'react-router-dom';

/* Local dependencies */
import { NotFound } from './components/not-found/NotFound';
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
import { hasInvited } from './guests';
import { ddbClient } from './clients/clients';
import { useEffect, useState } from 'react';
import _ from 'lodash';
import { LightGallerySection } from './components/gallery/LighGallerySection';

function App() {
  let params = useParams();
  const guestId = params.id;
  let [guests, setGuests] = useState([]);
  const [loading, setLoading] = useState(true);
  let invited = true;

  useEffect(() => {
    ddbClient.get('/guest/list').then((res) => {
      setGuests(res.data);
      setLoading(false);
    });
  }, []);

  let groupGuest: any = {
    id: 1,
    lang: 'ru',
    title: 'Дорогой(ая)',
    names: '',
    uri: '',
    url: '',
  };

  if (!loading && guestId) {
    const data = _.groupBy(guests, 'uri');
    if (data[guestId]) {
      groupGuest = data[guestId][0];
    } else {
      invited = false;
    }
  }

  const allPage = (
    <div className='App'>
      <div className='page-wrapper flower-fixed-body'>
        <Preloader />
        <Header id={`${guestId}`} />
        <HeroSlider date={new Date('08/24/2022 18:00:00')} />
        <InvitationSection guest={groupGuest} loading={loading} />
        {/* <CoupleSection /> */}
        <StorySection />
        {/* <GallerySection /> */}
        <LightGallerySection />
        <EventSection />
        <PlanningSection />
        <ContactSection names={groupGuest.names} />
        {/* <PartnersSection /> */}
        <Footer />
      </div>
    </div>
  );

  return invited ? allPage : <NotFound />;
}

export default App;
