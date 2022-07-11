export function InvitationSection() {
  return (
    <section className='invitation-section section-padding'>
      <div className='container'>
        <div className='row'>
          <div className='col col-xs-12'>
            <div className='invitation-box'>
              <div className='left-vec'></div>
              <div className='right-vec'></div>
              <div className='inner'>
                <h2>Save the Date</h2>
                <span>Дорогой(ая)</span>
                <h3>Максатбек & Актилек</h3>
                <p>
                  спешим сообщить тебе классную новость. У НАС СВАДЬБА! В этот день мы хотим оказаться в окружении самых
                  дорогих, любимых и важных для нас людей. С огромным удовольствием приглашаем вас разделить с нами этот
                  праздник.
                </p>
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
  );
}
