/* Local dependencies */
import './header.style.scss';

interface HeaderProps {
  id: string;
}

export function Header(props: HeaderProps) {
  const logoHref = `/${props.id}`;

  return (
    <header id='header' className='site-header header-style-1'>
      <div className='topbar'>
        <div className='container'>
          <div className='row'>
            <div className='col col-xs-12'>
              <div className='site-logo'>
                <a href={logoHref}>
                  <h1>Argen & Zhanara</h1>
                  <span>Свадьба</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end topbar --> */}
      <nav className='navigation navbar navbar-default'>
        <div className='container'>
          <div className='navbar-header'>
            <button type='button' className='open-btn'>
              <span className='sr-only'>Toggle navigation</span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
            </button>
          </div>
          <div id='navbar' className='navbar-collapse collapse navigation-holder'>
            <button className='close-navbar'>
              <i className='ti-close'></i>
            </button>
            <ul className='nav navbar-nav'>
              <li>
                <a href='#'>Главная</a>
              </li>
              <li>
                <a href='#story-section'>История любви</a>
              </li>
              <li>
                <a href='#gallery-section'>Галерея</a>
              </li>
              <li>
                <a href='#planning'>Адрес</a>
              </li>
              <li>
                <a href='#contact-section'>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
