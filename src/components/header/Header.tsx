export function Header() {
  return (
    <header id='header' className='site-header header-style-1'>
      <div className='topbar'>
        <div className='container'>
          <div className='row'>
            <div className='col col-xs-12'>
              <div className='site-logo'>
                <a href='index.html'>
                  <h1>Argen & Zhanara</h1>
                  <span>Just Married</span>
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
              <li className='menu-item-has-children'>
                <a href='#'>Home</a>
                <ul className='sub-menu'>
                  <li>
                    <a href='index.html'>Home announcement</a>
                  </li>
                  <li>
                    <a href='index-2.html'>Home announcement static hero</a>
                  </li>
                  <li>
                    <a href='index-3.html'>Home announcement video</a>
                  </li>
                  <li>
                    <a href='index-4.html'>Home planner</a>
                  </li>
                  <li>
                    <a href='index-5.html'>Home planner style 2</a>
                  </li>
                  <li>
                    <a href='index-6.html'>Home planner slider</a>
                  </li>
                  <li>
                    <a href='index-7.html'>Home planner video</a>
                  </li>
                  <li className='menu-item-has-children'>
                    <a href='#Level3'>Thidr level</a>
                    <ul className='sub-menu'>
                      <li>
                        <a href='#'>Level3</a>
                      </li>
                      <li>
                        <a href='#'>Level3</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className='menu-item-has-children'>
                <a href='#'>The Wedding</a>
                <ul className='sub-menu'>
                  <li>
                    <a href='story.html'>Our story</a>
                  </li>
                  <li>
                    <a href='invitation.html'>Invitation</a>
                  </li>
                  <li>
                    <a href='bridesmaids-groomsmen.html'>Bridesmaid & Groomsman</a>
                  </li>
                  <li>
                    <a href='accomodation.html'>Accomodation</a>
                  </li>
                  <li>
                    <a href='rsvp.html'>RSVP</a>
                  </li>
                  <li>
                    <a href='gift-registry.html'>Gift registry</a>
                  </li>
                  <li>
                    <a href='gallery.html'>Gallery</a>
                  </li>
                </ul>
              </li>
              <li className='menu-item-has-children'>
                <a href='#'>Wedding Planner</a>
                <ul className='sub-menu'>
                  <li>
                    <a href='about.html'>About us</a>
                  </li>
                  <li>
                    <a href='contact.html'>Contact</a>
                  </li>
                  <li>
                    <a href='shop.html'>Bridal shop</a>
                  </li>
                  <li>
                    <a href='shop-single.html'>Shop single</a>
                  </li>
                  <li>
                    <a href='services.html'>Services</a>
                  </li>
                  <li>
                    <a href='Portfolio.html'>Portfolio grid</a>
                  </li>
                  <li>
                    <a href='Portfolio-filter.html'>Portfolio Filter</a>
                  </li>
                  <li>
                    <a href='Portfolio-2-col.html'>Portfolio 2 col</a>
                  </li>
                </ul>
              </li>
              <li className='menu-item-has-children'>
                <a href='#'>Blog</a>
                <ul className='sub-menu'>
                  <li>
                    <a href='blog.html'>Blog</a>
                  </li>
                  <li>
                    <a href='blog-left-sidebar.html'>Blog left sidebar</a>
                  </li>
                  <li>
                    <a href='blog-fullwidth.html'>Blog full width</a>
                  </li>
                  <li className='menu-item-has-children'>
                    <a href='#Level3'>Blog details</a>
                    <ul className='sub-menu'>
                      <li>
                        <a href='blog-details.html'>Blog details</a>
                      </li>
                      <li>
                        <a href='blog-details-left-sidebar.html'>Blog details left sidebar</a>
                      </li>
                      <li>
                        <a href='blog-details-fullwidth.html'>Blog details full width</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className='menu-item-has-children'>
                <a href='#'>Pages</a>
                <ul className='sub-menu'>
                  <li>
                    <a href='404.html'>404</a>
                  </li>
                  <li>
                    <a href='faq.html'>FAQ</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href='contact.html'>Contact</a>
              </li>
            </ul>
          </div>
          {/* <!-- end of nav-collapse --> */}
        </div>
        {/* <!-- end of container --> */}
      </nav>
    </header>
  );
}
