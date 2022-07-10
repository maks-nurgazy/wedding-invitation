export function HeroSlider() {
  return (
    <section className='hero-slider hero-style-1'>
      <div className='swiper-container'>
        <div className='slide-main-text'>
          <div className='container'>
            <div className='slide-title'>
              <h2>Argen & Zhanara</h2>
            </div>
            <div className='wedding-date'>
              <span>24 Aug 2022</span>
            </div>
            <div className='clearfix'></div>
            <div className='count-down-clock'>
              <div id='clock'></div>
            </div>
          </div>
          <div className='pattern'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className='swiper-wrapper'>
          <div className='swiper-slide'>
            <div
              className='slide-inner slide-bg-image'
              data-background='/images/slider/slide-1.jpg'
              style={{ backgroundImage: 'url(/images/slider/slide-1.jpg)' }}
            ></div>
          </div>

          <div className='swiper-slide'>
            <div
              className='slide-inner slide-bg-image'
              data-background='/images/slider/slide-2.jpg'
              style={{ backgroundImage: 'url(/images/slider/slide-2.jpg)' }}
            ></div>
          </div>

          <div className='swiper-slide'>
            <div
              className='slide-inner slide-bg-image'
              data-background='/images/slider/slide-3.jpg'
              style={{ backgroundImage: 'url(/images/slider/slide-3.jpg)' }}
            ></div>
          </div>
          {/* <!-- end swiper-slide --> */}
        </div>
        {/* <!-- end swiper-wrapper --> */}

        {/* <!-- swipper controls --> */}
        <div className='swiper-pagination'></div>
        <div className='swiper-button-next'></div>
        <div className='swiper-button-prev'></div>
      </div>
    </section>
  );
}
