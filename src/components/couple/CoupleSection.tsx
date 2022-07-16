/* Local dependencies */
import './couple.style.scss';

export function CoupleSection() {
  return (
    <section className='couple-section section-padding p-t-0'>
      <div className='container'>
        <div className='row'>
          <div className='col col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1'>
            <div className='section-title'>
              <h2>СЧАСТЛИВАЯ ПАРА</h2>
              <p>
                Recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted
                out with a fur hat
              </p>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col col-lg-10 col-lg-offset-1'>
            <div className='couple-area'>
              <div className='couple-row clearfix'>
                <div className='img-holder'>
                  <img src='/images/couple/janara.jpg' alt='' />
                </div>
                <div className='details'>
                  <div className='inner'>
                    <h2>Zhanara Maisalbekova</h2>
                    <h4>Hi Dear, I am Zhanara Maisalbekova.</h4>
                    <p>
                      A collection of textile samples lay spread out on the table Samsa was a travelling salesman and
                      above it there hung a picture that he had recently cut out of an illustrated magazine And housed
                      in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright
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
                      A collection of textile samples lay spread out on the table Samsa was a travelling salesman and
                      above it there hung a picture that he had recently cut out of an illustrated magazine And housed
                      in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright
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
  );
}
