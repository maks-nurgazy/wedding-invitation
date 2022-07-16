/* Local dependencies */
import './event.style.scss';

export function EventSection() {
  return (
    <section className='event-section section-padding p-t-0'>
      <div className='top-area'>
        <h2>Празднуйте нашу любовь</h2>
        <p className='date'>23 Авг 2022</p>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col col-xs-12'>
            <div className='event-grids clearfix'>
              <div className='grid'>
                <h3>Фуршет</h3>
                <p>Пон, 23 Авг, 2022, "Мурас" этно-ресторан, Каракол</p>
                <p className='phone'>Тел: +996700105000</p>
                <a
                  href='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.672778464467!2d89.55846281543346!3d22.814585729793365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff901c9481c799%3A0x92f932dd6112f8ff!2sHotel+Sheraton+Buliding%2C+29+Khan+Jahan+Ali+Rd%2C+Khulna!5e0!3m2!1sen!2sbd!4v1558933503904!5m2!1sen!2sbd'
                  className='location popup-gmaps'
                >
                  Посмотреть местоположение
                </a>
              </div>
              <div className='grid'>
                <h3>Церемония</h3>
                <p>Пон, 23 Авг, 2022, "Мурас" этно-ресторан, Каракол</p>
                <p className='phone'>Тел: 0123456634654</p>
                <a
                  href='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.672778464467!2d89.55846281543346!3d22.814585729793365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff901c9481c799%3A0x92f932dd6112f8ff!2sHotel+Sheraton+Buliding%2C+29+Khan+Jahan+Ali+Rd%2C+Khulna!5e0!3m2!1sen!2sbd!4v1558933503904!5m2!1sen!2sbd'
                  className='location popup-gmaps'
                >
                  Посмотреть местоположение
                </a>
              </div>
              <div className='grid'>
                <h3>Банкет</h3>
                <p>Пон, 23 Авг, 2022, Marco Polo, Каракол</p>
                <p className='phone'>Тел: +996701751595</p>
                <a
                  href='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.672778464467!2d89.55846281543346!3d22.814585729793365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff901c9481c799%3A0x92f932dd6112f8ff!2sHotel+Sheraton+Buliding%2C+29+Khan+Jahan+Ali+Rd%2C+Khulna!5e0!3m2!1sen!2sbd!4v1558933503904!5m2!1sen!2sbd'
                  className='location popup-gmaps'
                >
                  Посмотреть местоположение
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end container --> */}
    </section>
  );
}
