/* Local dependencies */
import { getGuest } from '../../guests';
import './invitation.style.scss';

interface InvitationSectionProps {
  id: string;
}

export function InvitationSection(props: InvitationSectionProps) {
  const guest = getGuest(props.id);

  return (
    <section className='invitation-section section-padding'>
      <div className='container'>
        <div className='row'>
          <div className='col col-xs-12'>
            <div className='invitation-box'>
              <div className='left-vec'></div>
              <div className='right-vec'></div>
              <div className='inner'>
                <h2>{guest.title}</h2>
                <h3>{guest.name}</h3>
                <p>
                  Спешим сообщить тебе классную новость. У нас свадьба! В этот день мы хотим оказаться в окружении самых
                  дорогих, любимых и важных для нас людей. С огромным удовольствием приглашаем вас разделить с нами этот
                  праздник.
                </p>
                <a href='#contact-section' className='theme-btn' id='scroll'>
                  Подтвердить присутствие
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
