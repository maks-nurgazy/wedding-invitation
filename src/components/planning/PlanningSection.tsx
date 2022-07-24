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
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d753556.4668595708!2d75.24148805470863!3d42.45795273179457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389b259f87c3f61f%3A0x2fc64168a1c70e54!2z0KDQtdGB0YLQvtGA0LDQvSDQnNGD0YDQsNGB!5e0!3m2!1sru!2skg!4v1657641646185!5m2!1sru!2skg'
                width='600'
                height='450'
                style={{ border: 0 }}
                allowFullScreen={true}
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
