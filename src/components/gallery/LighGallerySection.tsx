/* External dependencies */
import LightGallery from 'lightgallery/react';
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';

/* Local dependencies */
import './gallery.style.scss';
import './ligh-gallery.style.scss';

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

        <div className='row'>
          <div className='col col-xs-12'>
            <div className='gallery-container gallery-fancybox masonry-gallery'>
              <LightGallery plugins={[lgZoom, lgVideo]} mode='lg-fade'>
                <div
                  data-src='/images/gallery/img-1.jpg'
                  className=' grid grid-item'
                  // data-lg-size='591-887'
                  data-sub-html="<h4>Photo by - <a href='https://www.instagram.com/maksnurgazy/' >Maksatek Bolushov </a></h4> <p> Location - <a href='https://unsplash.com/s/photos/moscov'>Moscov</a></p>"
                >
                  <a>
                    <img className='img img-responsive tall-img' src='/images/gallery/img-1.jpg' />
                  </a>
                </div>
                <div
                  data-src='/images/gallery/img-2.jpg'
                  className=' grid grid-item'
                  // data-lg-size='591-887'
                  data-sub-html="<h4>Photo by - <a href='https://www.instagram.com/maksnurgazy/' >Maksatek Bolushov </a></h4> <p> Location - <a href='https://unsplash.com/s/photos/moscov'>Moscov</a></p>"
                >
                  <a href='/images/gallery/img-2.jpg' className='fancybox' data-fancybox-group='gall-1'>
                    <img src='/images/gallery/img-2.jpg' className='img img-responsive tall-img' alt='' />
                  </a>
                </div>

                <div
                  data-src='/images/gallery/img-4.jpg'
                  className=' grid grid-item'
                  // data-lg-size='591-887'
                  data-sub-html="<h4>Photo by - <a href='https://www.instagram.com/maksnurgazy/' >Maksatek Bolushov </a></h4> <p> Location - <a href='https://unsplash.com/s/photos/moscov'>Moscov</a></p>"
                >
                  <a href='/images/gallery/img-4.jpg' className='fancybox' data-fancybox-group='gall-1'>
                    <img src='/images/gallery/img-4.jpg' className='img img-responsive tall-img' alt='' />
                  </a>
                </div>

                <div
                  data-src='/images/gallery/img-3.jpg'
                  className=' grid grid-item'
                  // data-lg-size='591-887'
                  data-sub-html="<h4>Photo by - <a href='https://www.instagram.com/maksnurgazy/' >Maksatek Bolushov </a></h4> <p> Location - <a href='https://unsplash.com/s/photos/moscov'>Moscov</a></p>"
                >
                  <a href='/images/gallery/img-3.jpg' className='fancybox' data-fancybox-group='gall-1'>
                    <img src='/images/gallery/img-3.jpg' className='img img-responsive' alt='' />
                  </a>
                </div>

                <div
                  data-src='/images/gallery/img-6.jpg'
                  className=' grid grid-item'
                  // data-lg-size='591-887'
                  data-sub-html="<h4>Photo by - <a href='https://www.instagram.com/maksnurgazy/' >Maksatek Bolushov </a></h4> <p> Location - <a href='https://unsplash.com/s/photos/moscov'>Moscov</a></p>"
                >
                  <a href='/images/gallery/img-6.jpg' className='fancybox' data-fancybox-group='gall-1'>
                    <img src='/images/gallery/img-6.jpg' className='img img-responsive' alt='' />
                  </a>
                </div>

                <div
                  data-src='/images/gallery/img-9.jpg'
                  className=' grid grid-item'
                  // data-lg-size='591-887'
                  data-sub-html="<h4>Photo by - <a href='https://www.instagram.com/maksnurgazy/' >Maksatek Bolushov </a></h4> <p> Location - <a href='https://unsplash.com/s/photos/moscov'>Moscov</a></p>"
                >
                  <a href='/images/gallery/img-9.jpg' className='fancybox' data-fancybox-group='gall-1'>
                    <img src='/images/gallery/img-9.jpg' className='img img-responsive' alt='' />
                  </a>
                </div>
              </LightGallery>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
