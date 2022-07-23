/* External dependencies */
import { useState } from 'react';

/* Local dependencies */
import './contact.style.scss';

export function ContactSection() {
  const [contactInfo, setContactInfo] = useState({
    name: '',
    notes: '',
  });

  const handleChange = (event: any) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: any) => {
    // prevents the submit button from refreshing the page
    event.preventDefault();
    setContactInfo({ name: '', notes: '' });
  };

  

  return (
    <section id='contact-section' className='contact-section section-padding p-t-0'>
      <div className='container'>
        <div className='row'>
          <div className='col col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1'>
            <div className='section-title'>
              <h2>Вы подтверждаете присутствие?</h2>
              <p>Подтвердите свое присутствие, заполнив поля ниже</p>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col col-lg-10 col-lg-offset-1'>
            <div className='contact-form'>
              <form id='rsvp-form' className='form validate-rsvp-form row' onSubmit={handleSubmit}>
                <div className='col col-12'>
                  <input
                    type='text'
                    name='name'
                    className='form-control'
                    placeholder='Ваше имя*'
                    onChange={handleChange}
                    value={contactInfo.name}
                  />
                </div>
                <div className='col col-12'>
                  <textarea
                    className='form-control'
                    name='notes'
                    placeholder='Ваше сообщение*'
                    onChange={handleChange}
                    value={contactInfo.notes}
                  />
                </div>
                <div className='col col-12 submit-btn'>
                  <button type='submit' className='theme-btn'>
                    Подтвердить
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
    </section>
  );
}
