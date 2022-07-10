function App() {
  return (
    <div className='App'>
      {/* <!-- Preloader --> */}
      <div className='preloader'>
        <div className='lds-heart'>
          <div></div>
        </div>
      </div>
      {/* <!-- Progress-wrapp scroll-button --> */}
      <div className='progress-wrap'>
        <svg className='progress-circle svg-content' width='100%' height='100%' viewBox='-1 -1 102 102'>
          <path d='M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98' />
        </svg>
      </div>
      {/* <!-- Navbar --> */}
      <nav className='navbar navbar-expand-lg'>
        <div className='container'>
          {/* <!-- Logo --> */}
          <div className='logo-wrapper navbar-brand valign'>
            <div className='logo'>
              {/* <!-- <img src="images/logo-light.png" className="logo-img" alt=""> --> */}
              <a href='index.html'>
                <h2>Mary &amp; Brian</h2>
              </a>
            </div>
          </div>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            {' '}
            <span className='icon-bar'>
              <i className='ti-line-double'></i>
            </span>{' '}
          </button>
          {/* <!-- Navbar links --> */}
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item'>
                <a className='nav-link active' href='#' data-scroll-nav='0'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#' data-scroll-nav='1'>
                  Couple
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#' data-scroll-nav='2'>
                  Story
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#' data-scroll-nav='3'>
                  Friends
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#' data-scroll-nav='4'>
                  Events
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#' data-scroll-nav='5'>
                  Gallery
                </a>
              </li>
              {/* <!-- Dropdown Menu example
                    <li className="nav-item dropdown"> <span className="nav-link"> Dropdown <i className="ti-angle-down"></i></span>
                        <ul className="dropdown-menu last">
                            <li className="dropdown-item"><a href="#">Dropdown 2</a></li>
                            <li className="dropdown-item"><a href="#">Dropdown 2</a></li>
                            <li className="dropdown-item"><span>Dropdown 2 <i className="ti-angle-right"></i></span>
                                <ul className="sub-menu last">
                                    <li className="dropdown-item"><a href="#">Dropdown 3</a></li>
                                    <li className="dropdown-item"><a href="#">Dropdown 3</a></li>
                                 </ul>
                             </li>
                        </ul>
                    </li>
                    --> */}
              <li className='nav-item'>
                <a className='nav-link' href='#' data-scroll-nav='6'>
                  When & Where
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#' data-scroll-nav='7'>
                  R.S.V.P
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='blog.html'>
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <!-- Slider section --> */}
      <header id='home' data-scroll-index='0'>
        <div className='mary-hero js-fullheight'>
          <div className='flexslider js-fullheight'>
            <ul className='slides'>
              <li
                className='bg-fixed'
                style={{ backgroundImage: `url(/images/slider/1.jpg)`, height: '20' }}
                data-overlay-dark='2'
              >
                <div className='overlay'></div>
                <div className='container'>
                  <div className='row'>
                    <div className='col-md-12 text-center js-fullheight slider-text'>
                      <div className='slider-text-inner mx-auto'>
                        <h2>Mary & Brian</h2>
                        <h6>24 December, 2022 — New York</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className='bg-fixed' style={{ backgroundImage: `url('/images/slider/2.jpg')` }} data-overlay-dark='2'>
                <div className='overlay'></div>
                <div className='container'>
                  <div className='row'>
                    <div className='col-md-12 text-center js-fullheight slider-text'>
                      <div className='slider-text-inner mx-auto'>
                        <h2>We hope to see you soon</h2>
                        <h6>24 December, 2022 — New York</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </header>
      {/* <!-- Welcome section --> */}
      <div id='welcome' className='welcome section-padding'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 text-center'>
              <div className='welcome-mt'>
                <div className='welcome-image-wrapper'>
                  <div className='img'>
                    <a href='#' data-scroll-nav='1'>
                      <img src='images/couple.png' alt='' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-8 offset-md-2 text-center'>
              <h6 className='section-subtitle'>Hello & Welcome</h6>
              <h2 className='section-title'>We're getting married!</h2>
              <p>
                Today and always, beyond tomorrow, I need you beside me, always as my best friend, lover and forever
                soul mate. Curabit aliquet orci elit genes tristique lorem commodo vitae. Tuliaum tincidunt nete sede
                gravida alisuan neque libero hendrerit magnation sit amet mollis lacus ithe maurise. Dunya erat couple
                wedding eda the semper. Event elit miss eget the solin miss citudino phasellus rutrum in the lacusi
                events vestibulum elen ornare drana company tortori eget the solin miss citudino sellus rutrum in lacus
                miss semper.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Bride & Groom section --> */}
      <div id='couple' className='bride-groom clear section-padding bg-cream' data-scroll-index='1'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 text-center mb-30 animate-box' data-animate-effect='fadeInUp'>
              <h6 className='section-subtitle'>Bride & Groom</h6>
              <h2 className='section-title'>Happy Couple</h2>
            </div>
            <div className='col-md-4 offset-md-2 text-center animate-box' data-animate-effect='fadeInLeft'>
              <div className='item mb-30'>
                <div className='img'>
                  {' '}
                  <img src='/images/bride.png' alt='' />{' '}
                </div>
                <div className='info valign'>
                  <div className='full-width'>
                    <h6>Mary Brown</h6> <span>The Bride</span>
                    <p>
                      Mary fringilla dui at elit finibus viverra nec alan seda couple the miss druane sema the wedding
                      intono miss sollicitudin non the fermen.
                    </p>
                    <div className='social'>
                      <div className='full-width'>
                        <a href='#0' className='icon'>
                          {' '}
                          <i className='ti-facebook'></i>{' '}
                        </a>
                        <a href='#0' className='icon'>
                          {' '}
                          <i className='ti-twitter'></i>{' '}
                        </a>
                        <a href='#0' className='icon'>
                          {' '}
                          <i className='ti-instagram'></i>{' '}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4 text-center animate-box' data-animate-effect='fadeInRight'>
              <div className='item mb-30'>
                <div className='img'>
                  {' '}
                  <img src='images/groom.png' alt='' />{' '}
                </div>
                <div className='info valign'>
                  <div className='full-width'>
                    <h6>Brian Martin</h6> <span>The Groom</span>
                    <p>
                      Mary fringilla dui at elit finibus viverra nec alan seda couple the miss druane sema the wedding
                      intono miss sollicitudin non the fermen.
                    </p>
                    <div className='social'>
                      <div className='full-width'>
                        <a href='#0' className='icon'>
                          {' '}
                          <i className='ti-facebook'></i>{' '}
                        </a>
                        <a href='#0' className='icon'>
                          {' '}
                          <i className='ti-twitter'></i>{' '}
                        </a>
                        <a href='#0' className='icon'>
                          {' '}
                          <i className='ti-instagram'></i>{' '}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Countdown section --> */}
      <div
        id='countdown'
        className='section-padding bg-img bg-fixed'
        data-overlay-dark='1'
        data-background='images/banner/1.jpg'
      >
        <div className='container'>
          <div className='row'>
            <div className='section-head col-md-12'>
              <h6>We will become a family in</h6>
              <h2>We're getting married in</h2>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12'>
              <ul>
                <li>
                  <span id='days'></span>Days
                </li>
                <li>
                  <span id='hours'></span>Hours
                </li>
                <li>
                  <span id='minutes'></span>Minutes
                </li>
                <li>
                  <span id='seconds'></span>Seconds
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Story section --> */}
      <div id='story' className='story section-padding' data-scroll-index='2'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 text-center animate-box' data-animate-effect='fadeInUp'>
              <h6 className='section-subtitle'>Mary & Brian</h6>
              <h2 className='section-title'>Our Love Story</h2>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 animate-box' data-animate-effect='fadeInUp'>
              <div className='owl-carousel owl-theme'>
                <div className='story left'>
                  <figure>
                    <img src='images/story/4.jpg' alt='' className='img-fluid' />
                  </figure>
                  <div className='caption'>
                    <h6>July 20, 2015</h6>
                    <h4>First time we meet</h4>
                    <p>
                      First time we meet viverra tristique duis vitae diam the nesumen nivamus aestan ateuene artines
                      finibus. Nedana setlie the love thermen inilla duimane elit finibus nec a lacus durana meeta
                      nonsaiere viventa miss the fermen.
                    </p>
                  </div>
                </div>
                <div className='story left'>
                  <figure>
                    <img src='images/story/2.jpg' alt='' className='img-fluid' />
                  </figure>
                  <div className='caption'>
                    <h6>May 20, 2016</h6>
                    <h4>We fall in love each other</h4>
                    <p>
                      First time we meet viverra tristique duis vitae diam the nesumen nivamus aestan ateuene artines
                      finibus. Nedana setlie the love thermen inilla duimane elit finibus nec a lacus durana meeta
                      nonsaiere viventa miss the fermen.
                    </p>
                  </div>
                </div>
                <div className='story left'>
                  <figure>
                    <img src='images/story/1.jpg' alt='' className='img-fluid' />
                  </figure>
                  <div className='caption'>
                    <h6>June 20, 2020</h6>
                    <h4>Marriage proposal</h4>
                    <p>
                      First time we meet viverra tristique duis vitae diam the nesumen nivamus aestan ateuene artines
                      finibus. Nedana setlie the love thermen inilla duimane elit finibus nec a lacus durana meeta
                      nonsaiere viventa miss the fermen.
                    </p>
                  </div>
                </div>
                <div className='story left'>
                  <figure>
                    <img src='images/story/3.jpg' alt='' className='img-fluid' />
                  </figure>
                  <div className='caption'>
                    <h6>December 24, 2022</h6>
                    <h4>The wedding day</h4>
                    <p>
                      First time we meet viverra tristique duis vitae diam the nesumen nivamus aestan ateuene artines
                      finibus. Nedana setlie the love thermen inilla duimane elit finibus nec a lacus durana meeta
                      nonsaiere viventa miss the fermen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Friends section --> */}
      <div id='friends' className='friends section-padding bg-cream' data-scroll-index='3'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 text-center'>
              <h6 className='section-subtitle'>Best friends</h6>
              <h2 className='section-title'>Thanks for being there</h2>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 bridesmaid'>
              <div className='owl-carousel owl-theme'>
                <div className='item'>
                  <div className='img'>
                    {' '}
                    <img src='images/friends/b1.jpg' alt='' />{' '}
                  </div>
                  <div className='info valign'>
                    <div className='full-width'>
                      <h6>Eleanor Chris</h6>
                      <span>Bridesmaid</span>
                    </div>
                  </div>
                </div>
                <div className='item'>
                  <div className='img'>
                    {' '}
                    <img src='images/friends/b2.jpg' alt='' />{' '}
                  </div>
                  <div className='info valign'>
                    <div className='full-width'>
                      <h6>Vanessa Brown</h6>
                      <span>Bridesmaid</span>
                    </div>
                  </div>
                </div>
                <div className='item'>
                  <div className='img'>
                    {' '}
                    <img src='images/friends/b3.jpg' alt='' />{' '}
                  </div>
                  <div className='info valign'>
                    <div className='full-width'>
                      <h6>Fredia Halle</h6>
                      <span>Bridesmaid</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 groomsmen'>
              <div className='owl-carousel owl-theme'>
                <div className='item'>
                  <div className='img'>
                    {' '}
                    <img src='images/friends/w1.jpg' alt='' />{' '}
                  </div>
                  <div className='info valign'>
                    <div className='full-width'>
                      <h6>Stefano Smiht</h6>
                      <span>Groomsmen</span>
                    </div>
                  </div>
                </div>
                <div className='item'>
                  <div className='img'>
                    {' '}
                    <img src='images/friends/w3.jpg' alt='' />{' '}
                  </div>
                  <div className='info valign'>
                    <div className='full-width'>
                      <h6>Matthew Brown</h6>
                      <span>Groomsmen</span>
                    </div>
                  </div>
                </div>
                <div className='item'>
                  <div className='img'>
                    {' '}
                    <img src='images/friends/w2.jpg' alt='' />{' '}
                  </div>
                  <div className='info valign'>
                    <div className='full-width'>
                      <h6>Pablo Dante</h6>
                      <span>Groomsmen</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Video section --> */}
      <div
        id='video'
        className='story-video section-padding bg-img bg-fixed'
        data-overlay-dark='2'
        data-background='images/banner/3.jpg'
      >
        <div className='container'>
          <div className='video-wrapper'>
            <div className='row'>
              <div className='col-md-12 text-center'>
                <div className='caption'>
                  <h6 className='subtitle'>A love story begining</h6>
                  <h2 className='title'>Watch our love story</h2>
                  <br />
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-12 mb-60 img text-center'>
                <a className='vid valign' href='https://youtu.be/bkMjpEixNrg?t=8'>
                  <div className='vid-butn'>
                    <span className='icon'>
                      <i className='ti-control-play'></i>
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Events section --> */}
      <div id='events' className='events section-padding' data-scroll-index='4'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 text-center animate-box' data-animate-effect='fadeInUp'>
              <h6 className='section-subtitle'>Organization</h6>
              <h2 className='section-title'>Wedding Events</h2>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 animate-box' data-animate-effect='fadeInUp'>
              <div className='owl-carousel owl-theme'>
                <div className='events'>
                  <figure>
                    <img src='images/event/1.jpg' alt='' className='img-fluid' />
                  </figure>
                  <div className='caption'>
                    <h6>
                      <sup>1</sup>/<sub style={{ marginRight: '5px' }}>4</sub> Information
                    </h6>
                    <h4>Wedding Ceremony</h4>
                    <p>
                      Wedding ceremony the viverra tristique duis vitaenion diamnen numen nivamus aestan ateuene artines
                      finibus. Nedana setlie the love thermen inilla duimane elit finibus nec a lacus durana nonsaiere
                      viventa miss the fermen.
                    </p>
                  </div>
                </div>
                <div className='events'>
                  <figure>
                    <img src='images/event/2.jpg' alt='' className='img-fluid' />
                  </figure>
                  <div className='caption'>
                    <h6>
                      <sup>2</sup>/<sub style={{ marginRight: '10px' }}>4</sub> Information
                    </h6>
                    <h4>Lunch Time</h4>
                    <p>
                      Wedding ceremony the viverra tristique duis vitaenion diamnen numen nivamus aestan ateuene artines
                      finibus. Nedana setlie the love thermen inilla duimane elit finibus nec a lacus durana nonsaiere
                      viventa miss the fermen.
                    </p>
                  </div>
                </div>
                <div className='events'>
                  <figure>
                    <img src='images/event/3.jpg' alt='' className='img-fluid' />
                  </figure>
                  <div className='caption'>
                    <h6>
                      <sup>3</sup>/<sub style={{ marginRight: '10px' }}>4</sub> Information
                    </h6>
                    <h4>Wedding Party</h4>
                    <p>
                      Wedding ceremony the viverra tristique duis vitaenion diamnen numen nivamus aestan ateuene artines
                      finibus. Nedana setlie the love thermen inilla duimane elit finibus nec a lacus durana nonsaiere
                      viventa miss the fermen.
                    </p>
                  </div>
                </div>
                <div className='events'>
                  <figure>
                    <img src='images/event/4.jpg' alt='' className='img-fluid' />
                  </figure>
                  <div className='caption'>
                    <h6>
                      <sup>4</sup>/<sub style={{ marginRight: '10px' }}>4</sub> Information
                    </h6>
                    <h4>Cake Cutting</h4>
                    <p>
                      Wedding ceremony the viverra tristique duis vitaenion diamnen numen nivamus aestan ateuene artines
                      finibus. Nedana setlie the love thermen inilla duimane elit finibus nec a lacus durana nonsaiere
                      viventa miss the fermen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Gallery section --> */}
      <div id='gallery' className='section-padding bg-cream' data-scroll-index='5'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 text-center'>
              <h6 className='section-subtitle'>Our Gallery</h6>
              <h2 className='section-title'>Our Memories</h2>
            </div>
          </div>
          <div className='row'>
            <ul className='col-md-12 text-center list-unstyled list-inline gallery-menu' id='gallery-filter'>
              <li className='list-inline-item'>
                <a className='active' data-filter='*'>
                  All
                </a>
              </li>
              <li className='list-inline-item'>
                <a className='' data-filter='.ceremony'>
                  Ceremony
                </a>
              </li>
              <li className='list-inline-item'>
                <a className='' data-filter='.party'>
                  Party
                </a>
              </li>
            </ul>
          </div>
          <div className='row gallery-filter'>
            <div className='col-md-4 gallery-item ceremony'>
              <a href='images/gallery/1.jpg' className='img-zoom'>
                <div className='gallery-box'>
                  <div className='gallery-img'>
                    {' '}
                    <img src='images/gallery/1.jpg' className='img-fluid mx-auto d-block' alt='' />{' '}
                  </div>
                  <div className='gallery-detail'>
                    <h4 className='mb-0'>Wedding Ceremony</h4>
                  </div>
                </div>
              </a>
            </div>
            <div className='col-md-4 gallery-item party'>
              <a href='images/gallery/2.jpg' className='img-zoom'>
                <div className='gallery-box'>
                  <div className='gallery-img'>
                    {' '}
                    <img src={'/images/gallery/2.jpg'} className='img-fluid mx-auto d-block' alt='' />{' '}
                  </div>
                  <div className='gallery-detail'>
                    <h4 className='mb-0'>Wedding Party</h4>
                  </div>
                </div>
              </a>
            </div>
            <div className='col-md-4 gallery-item ceremony'>
              <a href='images/gallery/3.jpg' className='img-zoom'>
                <div className='gallery-box'>
                  <div className='gallery-img'>
                    {' '}
                    <img src='images/gallery/3.jpg' className='img-fluid mx-auto d-block' alt='' />{' '}
                  </div>
                  <div className='gallery-detail'>
                    <h4 className='mb-0'>Wedding Ceremony</h4>
                  </div>
                </div>
              </a>
            </div>
            <div className='col-md-4 gallery-item party'>
              <a href='images/gallery/4.jpg' className='img-zoom'>
                <div className='gallery-box'>
                  <div className='gallery-img'>
                    {' '}
                    <img src='images/gallery/4.jpg' className='img-fluid mx-auto d-block' alt='' />{' '}
                  </div>
                  <div className='gallery-detail'>
                    <h4 className='mb-0'>Wedding Party</h4>
                  </div>
                </div>
              </a>
            </div>
            <div className='col-md-4 gallery-item ceremony'>
              <a href='images/gallery/5.jpg' className='img-zoom'>
                <div className='gallery-box'>
                  <div className='gallery-img'>
                    {' '}
                    <img src='images/gallery/5.jpg' className='img-fluid mx-auto d-block' alt='' />{' '}
                  </div>
                  <div className='gallery-detail'>
                    <h4 className='mb-0'>Wedding Ceremony</h4>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Banner section --> */}
      <div
        id='banner'
        className='section-padding bg-img bg-fixed'
        data-overlay-dark='1'
        data-background='images/banner/1.jpg'
      >
        <div className='container'>
          <div className='row'>
            <div className='section-head col-md-12'>
              <h6>Save the date</h6>
              <h2>Looking forward to see you!</h2>
              <h1>24.11.2022</h1>
              <h1>
                <i className='ti-heart'></i>
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- When & Where section --> */}
      <div id='whenwhere' className='when-where section-padding' data-scroll-index='6'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 text-center animate-box' data-animate-effect='fadeInUp'>
              <h6 className='section-subtitle'>Save the date</h6>
              <h2 className='section-title'>When & Where</h2>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6 animate-box' data-animate-effect='fadeInLeft'>
              <div className='img left'>
                <img src='images/whenwhere/01.jpg' alt='' />
              </div>
            </div>
            <div className='col-md-6 valign animate-box' data-animate-effect='fadeInRight'>
              <div className='content'>
                <div className='date'>
                  <h3>24</h3>
                  <h6>Dec 2022</h6>
                </div>
                <div className='cont'>
                  <div className='info'>
                    <h6>Are you ready?</h6>
                  </div>
                  <h4>Wedding Ceremony</h4>
                  <ul className='list-unstyled cont-list'>
                    <li>
                      <div className='icon'>
                        {' '}
                        <span className='ti-location-pin'></span>{' '}
                      </div>
                      <div className='text'>
                        <p>
                          175 Broadway, Brooklyn NY
                          <br />
                          New York 11244, USA
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className='icon'>
                        {' '}
                        <span className='ti-time'></span>{' '}
                      </div>
                      <div className='text'>
                        <p>12:00am – 13:00pm</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6 order2 valign animate-box' data-animate-effect='fadeInLeft'>
              <div className='content'>
                <div className='date'>
                  <h3>24</h3>
                  <h6>Dec 2022</h6>
                </div>
                <div className='cont'>
                  <div className='info'>
                    <h6>Are you ready?</h6>
                  </div>
                  <h4>Wedding Party</h4>
                  <ul className='list-unstyled cont-list'>
                    <li>
                      <div className='icon'>
                        {' '}
                        <span className='ti-location-pin'></span>{' '}
                      </div>
                      <div className='text'>
                        <p>
                          Nusret Restaurant, 149 Broadway
                          <br />
                          Brooklyn, New York, USA
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className='icon'>
                        {' '}
                        <span className='ti-time'></span>{' '}
                      </div>
                      <div className='text'>
                        <p>14:00pm</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-md-6 order1 animate-box' data-animate-effect='fadeInRight'>
              <div className='img'>
                <img src='images/whenwhere/02.jpg' alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- RSVP Form section --> */}
      <div
        id='rsvp'
        className='rsvp section-padding bg-img bg-fixed'
        data-background='images/banner/2.jpg'
        data-scroll-index='7'
      >
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 offset-md-3 bg-white p-60'>
              <h2 className='text-center'>R.S.V.P</h2>
              <h6 className='text-center'>Will you attend?</h6>
              <form className='contact__form' method='post' action='mail.php'>
                {/* <!-- form message --> */}
                <div className='row'>
                  <div className='col-12'>
                    <div className='alert alert-success contact__msg' style={{ display: 'none' }} role='alert'>
                      Your message was sent successfully.
                    </div>
                  </div>
                </div>
                {/* <!-- form element --> */}
                <div className='row'>
                  <div className='col-md-12'>
                    <div className='form-group'>
                      <input name='name' type='text' className='form-control' placeholder='Name' required />{' '}
                    </div>
                  </div>
                  <div className='col-md-12'>
                    <div className='form-group'>
                      <input name='email' type='email' className='form-control' placeholder='Email' required />{' '}
                    </div>
                  </div>
                  <div className='col-md-12'>
                    <div className='form-group'>
                      <input name='guests' type='text' className='form-control' placeholder='Guests' required />{' '}
                    </div>
                  </div>
                  <div className='col-md-12'>
                    <div className='form-group'>
                      <textarea
                        name='message'
                        id='message'
                        cols={30}
                        rows={7}
                        className='form-control'
                        placeholder='Message'
                      ></textarea>
                    </div>
                  </div>
                  <div className='col-md-12'>
                    <div className='form-group'>
                      <input name='submit' type='submit' className='btn' value='SEND' />{' '}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Gift Registry section --> */}
      <div id='gift' className='gift-registry'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 text-center'>
              <h6 className='section-subtitle'>Gift Registry</h6>
              <h2 className='section-title'>The Registry</h2>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-10 offset-md-1'>
              <div className='owl-carousel owl-theme'>
                <div className='gift-registry-logo'>
                  <a href='#0'>
                    <img src='images/gift/1.jpg' alt='' />
                  </a>
                </div>
                <div className='gift-registry-logo'>
                  <a href='#0'>
                    <img src='images/gift/2.jpg' alt='' />
                  </a>
                </div>
                <div className='gift-registry-logo'>
                  <a href='#0'>
                    <img src='images/gift/3.jpg' alt='' />
                  </a>
                </div>
                <div className='gift-registry-logo'>
                  <a href='#0'>
                    <img src='images/gift/4.jpg' alt='' />
                  </a>
                </div>
                <div className='gift-registry-logo'>
                  <a href='#0'>
                    <img src='images/gift/5.jpg' alt='' />
                  </a>
                </div>
                <div className='gift-registry-logo'>
                  <a href='#0'>
                    <img src='images/gift/6.jpg' alt='' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Instagram section --> */}
      <div className='insta'>
        <div className='container flex'>
          <div className='img'>
            <a href='#0'>
              {' '}
              <img src='images/insta/1.jpg' alt='' />{' '}
            </a>{' '}
            <i className='ti-instagram'></i>
          </div>
          <div className='img'>
            <a href='#0'>
              {' '}
              <img src='images/insta/2.jpg' alt='' />{' '}
            </a>{' '}
            <i className='ti-instagram'></i>
          </div>
          <div className='img'>
            <a href='#0'>
              {' '}
              <img src='images/insta/3.jpg' alt='' />{' '}
            </a>{' '}
            <i className='ti-instagram'></i>
          </div>
          <div className='img'>
            <a href='#0'>
              {' '}
              <img src='images/insta/4.jpg' alt='' />{' '}
            </a>{' '}
            <i className='ti-instagram'></i>
          </div>
          <div className='img'>
            <a href='#0'>
              {' '}
              <img src='images/insta/5.jpg' alt='' />{' '}
            </a>{' '}
            <i className='ti-instagram'></i>
          </div>
          <div className='follow'>
            <a href='#0' className='text-bg'>
              {' '}
              <span>
                <i className='ti-instagram'></i> / MaryBrian
              </span>
            </a>
          </div>
        </div>
      </div>
      {/* <!-- Footer section --> */}
      <footer id='footer'>
        <div className='container'>
          <div className='top-footer'>
            <div className='row'>
              <div className='col-md-12 text-center'>
                <div className='section-padding'>
                  <h2>
                    <span>
                      Mary <small>&amp;</small> Brian
                    </span>
                  </h2>
                  <h6>24 December 2022, NEW YORK</h6>
                </div>
              </div>
            </div>
          </div>
          <div className='sub-footer'>
            <div className='row'>
              <div className='col-md-12 text-center'>
                <p>Make with love. All right reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
