/* External dependencies */
import LightGallery from 'lightgallery/react';
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import { LightGallerySettings } from 'lightgallery/lg-settings';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';

/* Local dependencies */
import './gallery.style.scss';

export function LightGallerySection() {
  const onInit = () => {
    console.log('lightGallery has been initialized');
  };

  return (
    <section id='gallery-section' className='gallery-section section-padding p-t-0'>
      <div className='container'>
        <div className='row'>
          <div className='col col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1'>
            <div className='section-title'>
              <h2>Галерея</h2>
              <p>
                {/* Recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted
                out with a fur hat */}
              </p>
            </div>
          </div>
        </div>
        <LightGallery plugins={[lgZoom, lgVideo]} mode='lg-fade'>
          <a
            data-lg-size='591-887'
            className='gallery-item'
            data-src='/images/gallery/img-1.jpg'
            data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@entrycube' >Diego Guzmán </a></h4> <p> Location - <a href='https://unsplash.com/s/photos/fushimi-inari-taisha-shrine-senbontorii%2C-68%E7%95%AA%E5%9C%B0-fukakusa-yabunouchicho%2C-fushimi-ward%2C-kyoto%2C-japan'>Fushimi Ward, Kyoto, Japan</a></p>"
          >
            <img className='img-responsive' src='/images/gallery/img-1.jpg' />
          </a>
        </LightGallery>
      </div>
    </section>
  );
}
