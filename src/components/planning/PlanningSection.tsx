import './planning.style.scss';

export function PlanningSection() {
  return (
    <section id='planning' className='atf-section-padding'>
      <div className='container'>
        <div className='row clearfix'>
          <div className='col-xl-6 col-lg-6 col-12'>
            {/* <!-- Google Map start--> */}
            <div id='atf-map-area'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d753556.4668595708!2d75.24148805470863!3d42.45795273179457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389b259f87c3f61f%3A0x2fc64168a1c70e54!2z0KDQtdGB0YLQvtGA0LDQvSDQnNGD0YDQsNGB!5e0!3m2!1sru!2skg!4v1657641646185!5m2!1sru!2skg'
                width='600'
                height='450'
                style={{ border: 0 }}
                allowFullScreen={true}
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              ></iframe>
            </div>
            {/* <!-- Google Map end --> */}
          </div>
          {/* <!--- END COL --> */}

          <div
            className='col-xl-6 col-lg-6 col-12 pl-lg-5 justify-content-start atf-planning-sinlge wow fadeInRight'
            data-wow-duration='1s'
            data-wow-delay='0.3s'
            data-wow-offset='0'
          >
            <div className='atf-section-title text-left'>
              <h5>Planning</h5>
              <h2 className='mb-3'>When & Where</h2>
            </div>

            <div className='row clearfix'>
              <div className='col-6'>
                <div className='atf-planning-time text-center'>
                  <div className='atf-planning-icon'>
                    <i className='fas fa-carrot'></i>
                  </div>
                  <div className='atf-planning-title'>
                    <h3>The Reception</h3>
                    <ul className='atf-planning-ceremony'>
                      <li className='atf-date'>
                        <a href='#'>Monday, 23 December, 2021</a>
                      </li>
                      <li className='atf-time'>
                        <a href='#'>8am-4pm</a>
                      </li>
                      <li className='atf-location'>
                        <a href='#'>
                          Grafton Street Ireland University <br /> US Ambasi
                        </a>
                      </li>
                      <li className='atf-phone'>
                        <a href='#'>+458787458</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-6'>
                <div className='atf-planning-time text-center'>
                  <div className='atf-planning-icon'>
                    <i className='far fa-lemon'></i>
                  </div>
                  <div className='atf-planning-title'>
                    <h3>The Ceremony</h3>
                    <ul className='atf-planning-ceremony'>
                      <li className='atf-date'>
                        <a href='#'>Monday, 23 December, 2021</a>
                      </li>
                      <li className='atf-time'>
                        <a href='#'>8am-4pm</a>
                      </li>
                      <li className='atf-location'>
                        <a href='#'>
                          Grafton Street Ireland University <br /> US Ambasi
                        </a>
                      </li>
                      <li className='atf-phone'>
                        <a href='#'>+458787458</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--- END COL --> */}
          </div>
          {/* <!--- END COL --> */}
        </div>
        {/* <!--- END ROW --> */}
      </div>
      {/* <!--- END CONTAINER --> */}
    </section>
  );
}
