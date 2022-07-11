import './style.scss';

export function ContactSection() {
  return (
    <section className='contact-section section-padding p-t-0' id='rsvp'>
      <div className='container'>
        <div className='row'>
          <div className='col col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1'>
            <div className='section-title'>
              <h2>ВЫ ПРИЕЗЖАЕТЕ НА СВАДЬБУ?</h2>
              <p>
                Recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted
                out with a fur hat
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
  );
}
