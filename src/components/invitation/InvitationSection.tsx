/* Local dependencies */
import './invitation.style.scss';

interface InvitationSectionProps {
  id: string;
}

interface Guest {
  title: string;
  name: string;
}

const guests: Record<string, Guest> = {
  aika: {
    title: 'Дорогая',
    name: 'Айгерим',
  },
  maks: {
    title: 'Дорогой',
    name: 'Максатбек',
  },
  tilek: {
    title: 'Дорогой',
    name: 'Тилек',
  },
  uli: {
    title: 'Дорогая',
    name: 'Уулжан',
  },
};

export function InvitationSection(props: InvitationSectionProps) {
  const guest = guests[props.id] || {
    title: 'Дорогой(ая)',
    name: '',
  };

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
                  спешим сообщить тебе классную новость. У НАС СВАДЬБА! В этот день мы хотим оказаться в окружении самых
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
