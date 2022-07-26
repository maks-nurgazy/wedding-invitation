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
        <LightGallery plugins={[lgZoom, lgVideo]} mode='lg-fade'>
          <a
            data-lg-size='591-887'
            className='gallery-item'
            data-src='/images/gallery/img-1.jpg'
            data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@entrycube' >Diego Guzmán </a></h4> <p> Location - <a href='https://unsplash.com/s/photos/fushimi-inari-taisha-shrine-senbontorii%2C-68%E7%95%AA%E5%9C%B0-fukakusa-yabunouchicho%2C-fushimi-ward%2C-kyoto%2C-japan'>Fushimi Ward, Kyoto, Japan</a></p>"
          >
            <img className='img-responsive' src='/images/gallery/img-1.jpg' />
          </a>
          <a
            data-lg-size='1400-1400'
            data-pinterest-text='Shinimamiya, Osaka, Japan'
            data-tweet-text='Shinimamiya, Osaka, Japan'
            className='gallery-item'
            data-src='https://images.unsplash.com/photo-1544550285-f813152fb2fd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80'
            data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@asoshiation' >Shah </a></h4><p> Location - <a href='https://unsplash.com/s/photos/shinimamiya%2C-osaka%2C-japan'>Shinimamiya, Osaka, Japan</a></p>"
          >
            <img
              className='img-responsive'
              src='https://images.unsplash.com/photo-1544550285-f813152fb2fd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80'
            />
          </a>
          <a
            data-lg-size='1400-1400'
            className='gallery-item'
            data-src='https://images.unsplash.com/photo-1584592740039-cddf0671f3d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80'
            data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@katherine_xx11' >Katherine Gu </a></h4><p> For all those years we were alone and helpless.</p>"
          >
            <img
              className='img-responsive'
              src='https://images.unsplash.com/photo-1584592740039-cddf0671f3d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80'
            />
          </a>
        </LightGallery>
      </div>
    </section>
  );
}
