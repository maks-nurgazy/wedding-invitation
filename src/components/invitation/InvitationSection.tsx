/* Local dependencies */
import { getGuest } from '../../guests';
import './invitation.style.scss';

interface InvitationSectionProps {
  loading: boolean;
  guest: {
    title: string;
    names: string;
    uri: string;
    url: string;
    id: number;
    lang: 'ru' | 'kg';
  };
}

export function InvitationSection({ guest, loading }: InvitationSectionProps) {
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
                <h3>{guest.names}</h3>
                <p>
                  Спешим сообщить классную новость. У нас свадьба! В этот день мы хотим оказаться в окружении самых
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
