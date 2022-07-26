/* External dependencies */
import LightGallery from 'lightgallery/react';
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';

/* Local dependencies */
import './gallery.style.scss';

export function GallerySection() {
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

        <div className='row'>
          <div className='col col-xs-12'>
            <div className='gallery-container gallery-fancybox masonry-gallery'>
              <div className='grid grid-item'>
                <a href='/images/gallery/img-1.jpg' className='fancybox' data-fancybox-group='gall-1'>
                  <img src='/images/gallery/img-1.jpg' className='img img-responsive' alt='' />
                </a>
              </div>

              <div className='grid grid-item'>
                <a href='/images/gallery/img-2.jpg' className='fancybox' data-fancybox-group='gall-1'>
                  <img src='/images/gallery/img-2.jpg' className='img img-responsive' alt='' />
                </a>
              </div>

              <div className='grid grid-item'>
                <a href='/images/gallery/img-4.jpg' className='fancybox' data-fancybox-group='gall-1'>
                  <img src='/images/gallery/img-4.jpg' className='img img-responsive' alt='' />
                </a>
              </div>

              <div className='grid grid-item width2'>
                <a href='/images/gallery/img-3.jpg' className='fancybox' data-fancybox-group='gall-1'>
                  <img src='/images/gallery/img-3.jpg' className='img img-responsive' alt='' />
                </a>
              </div>

              <div className='grid grid-item width2'>
                <a href='/images/gallery/img-7.jpg' className='fancybox' data-fancybox-group='gall-1'>
                  <img src='/images/gallery/img-7.jpg' className='img img-responsive' alt='' />
                </a>
              </div>

              {/* <div className='grid grid-item width2'>
                <a href='/images/gallery/img-7.jpg' className='fancybox' data-fancybox-group='gall-1'>
                  <img src='/images/gallery/img-7.jpg' className='img img-responsive' alt='' />
                </a>
              </div> */}

              <div className='grid grid-item width2'>
                <a href='/images/gallery/img-6.jpg' className='fancybox' data-fancybox-group='gall-1'>
                  <img src='/images/gallery/img-6.jpg' className='img img-responsive' alt='' />
                </a>
              </div>

              {/* <div className='grid grid-item'>
                <a
                  href='https://www.youtube.com/embed/XSGBVzeBUbk?autoplay=1'
                  data-type='iframe'
                  className='video-play-btn'
                >
                  <img src='/images/gallery/img-6.jpg' className='img img-responsive' alt='' />
                  <i className='ti-control-play'></i>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
