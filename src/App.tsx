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
        <header id='header' className='site-header header-style-1'>
          <div className='topbar'>
            <div className='container'>
              <div className='row'>
                <div className='col col-xs-12'>
                  <div className='site-logo'>
                    <a href='index.html'>
                      <h1>Dorian & Blit</h1>
                      <span>Just Married</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- end topbar --> */}
          <nav className='navigation navbar navbar-default'>
            <div className='container'>
              <div className='navbar-header'>
                <button type='button' className='open-btn'>
                  <span className='sr-only'>Toggle navigation</span>
                  <span className='icon-bar'></span>
                  <span className='icon-bar'></span>
                  <span className='icon-bar'></span>
                </button>
              </div>
              <div id='navbar' className='navbar-collapse collapse navigation-holder'>
                <button className='close-navbar'>
                  <i className='ti-close'></i>
                </button>
                <ul className='nav navbar-nav'>
                  <li className='menu-item-has-children'>
                    <a href='#'>Home</a>
                    <ul className='sub-menu'>
                      <li>
                        <a href='index.html'>Home announcement</a>
                      </li>
                      <li>
                        <a href='index-2.html'>Home announcement static hero</a>
                      </li>
                      <li>
                        <a href='index-3.html'>Home announcement video</a>
                      </li>
                      <li>
                        <a href='index-4.html'>Home planner</a>
                      </li>
                      <li>
                        <a href='index-5.html'>Home planner style 2</a>
                      </li>
                      <li>
                        <a href='index-6.html'>Home planner slider</a>
                      </li>
                      <li>
                        <a href='index-7.html'>Home planner video</a>
                      </li>
                      <li className='menu-item-has-children'>
                        <a href='#Level3'>Thidr level</a>
                        <ul className='sub-menu'>
                          <li>
                            <a href='#'>Level3</a>
                          </li>
                          <li>
                            <a href='#'>Level3</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className='menu-item-has-children'>
                    <a href='#'>The Wedding</a>
                    <ul className='sub-menu'>
                      <li>
                        <a href='story.html'>Our story</a>
                      </li>
                      <li>
                        <a href='invitation.html'>Invitation</a>
                      </li>
                      <li>
                        <a href='bridesmaids-groomsmen.html'>Bridesmaid & Groomsman</a>
                      </li>
                      <li>
                        <a href='accomodation.html'>Accomodation</a>
                      </li>
                      <li>
                        <a href='rsvp.html'>RSVP</a>
                      </li>
                      <li>
                        <a href='gift-registry.html'>Gift registry</a>
                      </li>
                      <li>
                        <a href='gallery.html'>Gallery</a>
                      </li>
                    </ul>
                  </li>
                  <li className='menu-item-has-children'>
                    <a href='#'>Wedding Planner</a>
                    <ul className='sub-menu'>
                      <li>
                        <a href='about.html'>About us</a>
                      </li>
                      <li>
                        <a href='contact.html'>Contact</a>
                      </li>
                      <li>
                        <a href='shop.html'>Bridal shop</a>
                      </li>
                      <li>
                        <a href='shop-single.html'>Shop single</a>
                      </li>
                      <li>
                        <a href='services.html'>Services</a>
                      </li>
                      <li>
                        <a href='Portfolio.html'>Portfolio grid</a>
                      </li>
                      <li>
                        <a href='Portfolio-filter.html'>Portfolio Filter</a>
                      </li>
                      <li>
                        <a href='Portfolio-2-col.html'>Portfolio 2 col</a>
                      </li>
                    </ul>
                  </li>
                  <li className='menu-item-has-children'>
                    <a href='#'>Blog</a>
                    <ul className='sub-menu'>
                      <li>
                        <a href='blog.html'>Blog</a>
                      </li>
                      <li>
                        <a href='blog-left-sidebar.html'>Blog left sidebar</a>
                      </li>
                      <li>
                        <a href='blog-fullwidth.html'>Blog full width</a>
                      </li>
                      <li className='menu-item-has-children'>
                        <a href='#Level3'>Blog details</a>
                        <ul className='sub-menu'>
                          <li>
                            <a href='blog-details.html'>Blog details</a>
                          </li>
                          <li>
                            <a href='blog-details-left-sidebar.html'>Blog details left sidebar</a>
                          </li>
                          <li>
                            <a href='blog-details-fullwidth.html'>Blog details full width</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className='menu-item-has-children'>
                    <a href='#'>Pages</a>
                    <ul className='sub-menu'>
                      <li>
                        <a href='404.html'>404</a>
                      </li>
                      <li>
                        <a href='faq.html'>FAQ</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href='contact.html'>Contact</a>
                  </li>
                </ul>
              </div>
              {/* <!-- end of nav-collapse --> */}
            </div>
            {/* <!-- end of container --> */}
          </nav>
        </header>
        {/* <!-- end of header --> */}

        {/* <!-- start of hero --> */}
        <section className='hero-slider hero-style-1'>
          <div className='swiper-container'>
            <div className='slide-main-text'>
              <div className='container'>
                <div className='slide-title'>
                  <h2>Dorian & Blit</h2>
                </div>
                <div className='wedding-date'>
                  <span>14 Feb 2020</span>
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
                <div className='slide-inner slide-bg-image' data-background='/images/slider/slide-1.jpg'></div>
              </div>

              <div className='swiper-slide'>
                <div className='slide-inner slide-bg-image' data-background='/images/slider/slide-2.jpg'></div>
              </div>

              <div className='swiper-slide'>
                <div className='slide-inner slide-bg-image' data-background='/images/slider/slide-3.jpg'></div>
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
        {/* <!-- end of hero slider --> */}

        {/* <!-- start invitation-section --> */}
        <section className='invitation-section section-padding'>
          <div className='container'>
            <div className='row'>
              <div className='col col-xs-12'>
                <div className='invitation-box'>
                  <div className='left-vec'></div>
                  <div className='right-vec'></div>
                  <div className='inner'>
                    <h2>Save the Date</h2>
                    <span>For the wedding of</span>
                    <h3>Dorian & Blit</h3>
                    <p>Friday February 2020 At 6 O clock PM ,Hotle Seraton, Gulistan Bonani 9500, Dhaka Bangladesh</p>
                    <a href='#rsvp' className='theme-btn' id='scroll'>
                      RSVP now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- end container --> */}
        </section>
        {/* <!-- end invitation-section --> */}

        {/* <!-- start couple-section --> */}
        <section className='couple-section section-padding p-t-0'>
          <div className='container'>
            <div className='row'>
              <div className='col col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1'>
                <div className='section-title'>
                  <h2>Happy Couple</h2>
                  <p>
                    Recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady
                    fitted out with a fur hat
                  </p>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col col-lg-10 col-lg-offset-1'>
                <div className='couple-area'>
                  <div className='couple-row clearfix'>
                    <div className='img-holder'>
                      <img src='/images/couple/img-1.jpg' alt='' />
                    </div>
                    <div className='details'>
                      <div className='inner'>
                        <h2>Dorina Wiliam</h2>
                        <h4>Hi Dear, I am Dorian Wiliam.</h4>
                        <p>
                          A collection of textile samples lay spread out on the table Samsa was a travelling salesman
                          and above it there hung a picture that he had recently cut out of an illustrated magazine And
                          housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat
                          upright
                        </p>
                        <ul className='social-links'>
                          <li>
                            <a href='#'>
                              <i className='ti-facebook'></i>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <i className='ti-twitter-alt'></i>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <i className='ti-linkedin'></i>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <i className='ti-pinterest'></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className='couple-row last-row clearfix'>
                    <div className='details'>
                      <div className='inner'>
                        <h2>Blit Jhon</h2>
                        <h4>Hi Dear, I am Blit Jhon.</h4>
                        <p>
                          A collection of textile samples lay spread out on the table Samsa was a travelling salesman
                          and above it there hung a picture that he had recently cut out of an illustrated magazine And
                          housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat
                          upright
                        </p>
                        <ul className='social-links'>
                          <li>
                            <a href='#'>
                              <i className='ti-facebook'></i>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <i className='ti-twitter-alt'></i>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <i className='ti-linkedin'></i>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <i className='ti-pinterest'></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className='img-holder'>
                      <img src='/images/couple/img-2.jpg' alt='' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- end container --> */}
        </section>
        {/* <!-- end couple-section --> */}

        {/* <!-- start story-section --> */}
        <section className='story-section section-padding p-t-0'>
          <div className='container'>
            <div className='row'>
              <div className='col col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1'>
                <div className='section-title'>
                  <h2>Our story</h2>
                  <p>
                    Recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady
                    fitted out with a fur hat
                  </p>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col col-lg-10 col-lg-offset-1'>
                <div className='story-block'>
                  <ul>
                    <li>
                      <div className='details'>
                        <h3>First meet</h3>
                        <span className='date'>25 Dec 2018</span>
                        <p>
                          Luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae
                          sapien ut libero venenatis faucibus. Nullam quis ante.
                        </p>
                      </div>
                      <div className='img-holder'>
                        <img src='/images/story/img-1.png' alt='' />
                      </div>
                    </li>
                    <li>
                      <div className='img-holder'>
                        <img src='/images/story/img-2.png' alt='' />
                      </div>
                      <div className='details'>
                        <h3>First date</h3>
                        <span className='date'>25 Dec 2018</span>
                        <p>
                          Luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae
                          sapien ut libero venenatis faucibus. Nullam quis ante.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className='details'>
                        <h3>Proposal</h3>
                        <span className='date'>25 Dec 2018</span>
                        <p>
                          Luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae
                          sapien ut libero venenatis faucibus. Nullam quis ante.
                        </p>
                      </div>
                      <div className='img-holder'>
                        <img src='/images/story/img-3.png' alt='' />
                      </div>
                    </li>
                    <li>
                      <div className='img-holder'>
                        <img src='/images/story/img-4.png' alt='' />
                      </div>
                      <div className='details'>
                        <h3>Engagement</h3>
                        <span className='date'>25 Dec 2018</span>
                        <p>
                          Luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae
                          sapien ut libero venenatis faucibus. Nullam quis ante.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- end container --> */}
        </section>
        {/* <!-- end story-section --> */}

        {/* <!-- start gallery-section --> */}
        <section className='gallery-section section-padding p-t-0'>
          <div className='container'>
            <div className='row'>
              <div className='col col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1'>
                <div className='section-title'>
                  <h2>Captured Moments</h2>
                  <p>
                    Recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady
                    fitted out with a fur hat
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
                    <a href='/images/gallery/img-3.jpg' className='fancybox' data-fancybox-group='gall-1'>
                      <img src='/images/gallery/img-3.jpg' className='img img-responsive' alt='' />
                    </a>
                  </div>
                  <div className='grid grid-item'>
                    <a href='/images/gallery/img-4.jpg' className='fancybox' data-fancybox-group='gall-1'>
                      <img src='/images/gallery/img-4.jpg' className='img img-responsive' alt='' />
                    </a>
                  </div>
                  <div className='grid grid-item width2'>
                    <a href='/images/gallery/img-5.jpg' className='fancybox' data-fancybox-group='gall-1'>
                      <img src='/images/gallery/img-5.jpg' className='img img-responsive' alt='' />
                    </a>
                  </div>
                  <div className='grid grid-item width2'>
                    <a href='/images/gallery/img-7.jpg' className='fancybox' data-fancybox-group='gall-1'>
                      <img src='/images/gallery/img-7.jpg' className='img img-responsive' alt='' />
                    </a>
                  </div>
                  <div className='grid grid-item width2'>
                    <a
                      href='https://www.youtube.com/embed/XSGBVzeBUbk?autoplay=1'
                      data-type='iframe'
                      className='video-play-btn'
                    >
                      <img src='/images/gallery/img-6.jpg' className='img img-responsive' alt='' />
                      <i className='ti-control-play'></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- end row --> */}
          </div>
          {/* <!-- end container --> */}
        </section>
        {/* <!-- end gallery-section --> */}

        {/* <!-- start contact-section --> */}
        <section className='contact-section section-padding p-t-0' id='rsvp'>
          <div className='container'>
            <div className='row'>
              <div className='col col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1'>
                <div className='section-title'>
                  <h2>Are you attending?</h2>
                  <p>
                    Recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady
                    fitted out with a fur hat
                  </p>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col col-lg-10 col-lg-offset-1'>
                <div className='contact-form'>
                  <form id='rsvp-form' className='form validate-rsvp-form row' method='post'>
                    <div className='col col-sm-6'>
                      <input type='text' name='name' className='form-control' placeholder='Your Name*' />
                    </div>
                    <div className='col col-sm-6'>
                      <input type='email' name='email' className='form-control' placeholder='Your Email*' />
                    </div>
                    <div className='col col-sm-6'>
                      <select className='form-control' name='guest'>
                        <option disabled value={1}>
                          Number Of Guest*
                        </option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </select>
                    </div>
                    <div className='col col-sm-6'>
                      <select className='form-control' name='events'>
                        <option disabled value={'Al events'}>
                          I Am Attending*
                        </option>
                        <option>Al events</option>
                        <option>Wedding ceremony</option>
                        <option>Reception party</option>
                      </select>
                    </div>
                    <div className='col col-sm-12'>
                      <textarea className='form-control' name='notes' placeholder='Your Message*'></textarea>
                    </div>
                    <div className='col col-sm-12 submit-btn'>
                      <button type='submit' className='theme-btn'>
                        Send Invitation
                      </button>
                      <div id='loader'>
                        <i className='ti-reload'></i>
                      </div>
                    </div>
                    <div className='col col-md-12 success-error-message'>
                      <div id='success'>Thank you</div>
                      <div id='error'> Error occurred while sending email. Please try again later. </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- end container --> */}
        </section>
        {/* <!-- end contact-section --> */}

        {/* <!-- start event-section --> */}
        <section className='event-section section-padding p-t-0'>
          <div className='top-area'>
            <h2>Celebrate Our Love</h2>
            <p className='date'>14 Feb 2020</p>
          </div>
          <div className='container'>
            <div className='row'>
              <div className='col col-xs-12'>
                <div className='event-grids clearfix'>
                  <div className='grid'>
                    <h3>The Reception</h3>
                    <p>13 February, 2020 at 9AM - 11 AM Hotel seraton, Gusal Dhank, Bangladesh</p>
                    <p className='phone'>Ph: 0123456634654</p>
                    <a
                      href='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.672778464467!2d89.55846281543346!3d22.814585729793365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff901c9481c799%3A0x92f932dd6112f8ff!2sHotel+Sheraton+Buliding%2C+29+Khan+Jahan+Ali+Rd%2C+Khulna!5e0!3m2!1sen!2sbd!4v1558933503904!5m2!1sen!2sbd'
                      className='location popup-gmaps'
                    >
                      See location
                    </a>
                  </div>
                  <div className='grid'>
                    <h3>The Reception</h3>
                    <p>13 February, 2020 at 9AM - 11 AM Hotel seraton, Gusal Dhank, Bangladesh</p>
                    <p className='phone'>Ph: 0123456634654</p>
                    <a
                      href='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.672778464467!2d89.55846281543346!3d22.814585729793365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff901c9481c799%3A0x92f932dd6112f8ff!2sHotel+Sheraton+Buliding%2C+29+Khan+Jahan+Ali+Rd%2C+Khulna!5e0!3m2!1sen!2sbd!4v1558933503904!5m2!1sen!2sbd'
                      className='location popup-gmaps'
                    >
                      See location
                    </a>
                  </div>
                  <div className='grid'>
                    <h3>The Reception</h3>
                    <p>13 February, 2020 at 9AM - 11 AM Hotel seraton, Gusal Dhank, Bangladesh</p>
                    <p className='phone'>Ph: 0123456634654</p>
                    <a
                      href='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.672778464467!2d89.55846281543346!3d22.814585729793365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff901c9481c799%3A0x92f932dd6112f8ff!2sHotel+Sheraton+Buliding%2C+29+Khan+Jahan+Ali+Rd%2C+Khulna!5e0!3m2!1sen!2sbd!4v1558933503904!5m2!1sen!2sbd'
                      className='location popup-gmaps'
                    >
                      See location
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- end container --> */}
        </section>
        {/* <!-- end event-section --> */}

        {/* <!-- start partners-section --> */}
        <section className='partners-section section-padding p-t-0'>
          <div className='container'>
            <div className='row'>
              <div className='col col-xs-12'>
                <h2>Gift Registry</h2>
                <div className='partner-grids clearfix'>
                  <div className='grid'>
                    <img src='/images/partners/img-1.jpg' alt='' />
                  </div>
                  <div className='grid'>
                    <img src='/images/partners/img-2.jpg' alt='' />
                  </div>
                  <div className='grid'>
                    <img src='/images/partners/img-3.jpg' alt='' />
                  </div>
                  <div className='grid'>
                    <img src='/images/partners/img-4.jpg' alt='' />
                  </div>
                  <div className='grid'>
                    <img src='/images/partners/img-5.jpg' alt='' />
                  </div>
                  <div className='grid'>
                    <img src='/images/partners/img-6.jpg' alt='' />
                  </div>
                  <div className='grid'>
                    <img src='/images/partners/img-7.jpg' alt='' />
                  </div>
                  <div className='grid'>
                    <img src='/images/partners/img-8.jpg' alt='' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- end container --> */}
        </section>
        {/* <!-- end partners-section --> */}

        {/* <!-- start blog-section --> */}
        <section className='blog-section section-padding'>
          <div className='container'>
            <div className='row'>
              <div className='col col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1'>
                <div className='section-title'>
                  <h2>Latest form the blog</h2>
                  <p>
                    Recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady
                    fitted out with a fur hat
                  </p>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col col-xs-12'>
                <div className='blog-grids clearfix'>
                  <div className='grid'>
                    <div className='entry-media'>
                      <img src='/images/blog/img-1.jpg' alt='' />
                    </div>
                    <div className='details'>
                      <h3>
                        <a href='#'>Hundreds of designs for every wedding style</a>
                      </h3>
                      <p className='date'>
                        <i className='ti-timer'></i> April 14, 2019
                      </p>
                    </div>
                  </div>
                  <div className='grid'>
                    <div className='entry-media'>
                      <img src='/images/blog/img-2.jpg' alt='' />
                    </div>
                    <div className='details'>
                      <h3>
                        <a href='#'>How to plan a perfect wedding in moments</a>
                      </h3>
                      <p className='date'>
                        <i className='ti-timer'></i> April 14, 2019
                      </p>
                    </div>
                  </div>
                  <div className='grid'>
                    <div className='entry-media'>
                      <img src='/images/blog/img-3.jpg' alt='' />
                    </div>
                    <div className='details'>
                      <h3>
                        <a href='#'>Possible no matter where you are on your journey</a>
                      </h3>
                      <p className='date'>
                        <i className='ti-timer'></i> April 14, 2019
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- end container --> */}
        </section>
        {/* <!-- end blog-section --> */}

        {/* <!-- start site-footer --> */}
        <footer className='site-footer footer-style-1'>
          <div className='inner'>
            <div className='couple-pic'>
              <img src='/images/footer-couple-pic.jpg' alt='' />
            </div>
            <h2>Thank you</h2>
            <ul className='social-links'>
              <li>
                <a href='#'>
                  <i className='ti-facebook'></i>
                </a>
              </li>
              <li>
                <a href='#'>
                  <i className='ti-twitter-alt'></i>
                </a>
              </li>
              <li>
                <a href='#'>
                  <i className='ti-linkedin'></i>
                </a>
              </li>
              <li>
                <a href='#'>
                  <i className='ti-pinterest'></i>
                </a>
              </li>
            </ul>
            <p>
              Copyright 2019, Made with love by <a href='http://themeforest.net/user/blue_design'>blue design</a>
            </p>
          </div>
        </footer>
        {/* <!-- end site-footer --> */}
      </div>
      {/* <!-- end of page-wrapper --> */}
    </div>
  );
}

export default App;
