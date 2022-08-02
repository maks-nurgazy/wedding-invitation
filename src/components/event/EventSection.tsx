/* Local dependencies */
import './event.style.scss';

export function EventSection() {
  return (
    <section className='event-section section-padding p-t-0'>
      <div className='top-area'>
        <h2>Празднуйте нашу любовь вместе с нами</h2>
        <p className='date'>24 Авг 2022</p>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col col-xs-12'>
            <div className='event-grids clearfix'>
              {/* <div className='grid'>
                <h3>Фуршет</h3>
                <p>Среда 13:00, 24 Авг 2022, Marco Polo, Каракол</p>
                <p></p>
                <a href='#planning' className='location popup-gmaps'>
                  Посмотреть местоположение
                </a>
              </div>
              <div className='grid'>
                <h3>Церемония</h3>
                <p>Среда 15:00, 24 Авг 2022, Marco Polo, Каракол</p>
                <p></p>
                <a href='#planning' className='location popup-gmaps'>
                  Посмотреть местоположение
                </a>
              </div> */}
              <div className='grid'>
                <h3>Банкет</h3>
                <p>Среда 17:00, 24 Авг 2022, Алтын көл, Каракол</p>
                <p></p>
                <a href='#planning' className='location popup-gmaps'>
                  Посмотреть местоположение
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
