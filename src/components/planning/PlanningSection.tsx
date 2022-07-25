/* Local dependencies */
import './planning.style.scss';

export function PlanningSection() {
  return (
    <section id='planning' className='atf-section-padding'>
      <div className='container'>
        <div className='row clearfix'>
          <div className='col-xl-12 col-lg-12 col-12'>
            <div id='atf-map-area'>
              <iframe
                src='https://www.google.com.qa/maps/d/u/0/embed?mid=1Ig53jTqe4Jr7Vba-yClxy7v8e8ulgLU&ehbc=2E312F'
                width='640'
                height='600'
              ></iframe>
              {/* <div style={{ width: '100%', overflow: 'hidden', height: '800px' }}>
              <iframe
                src='https://www.google.com.qa/maps/d/u/0/embed?mid=1Ig53jTqe4Jr7Vba-yClxy7v8e8ulgLU&ehbc=2E312F'
                width='1200'
                height='800'
                frameBorder={0}
                style={{ border: 0, marginTop: '-150px' }}
              ></iframe>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
