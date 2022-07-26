/* Local dependencies */
import './footer.style.scss';

export function Footer() {
  return (
    <footer className='site-footer footer-style-1'>
      <div className='inner'>
        {/* <div className='couple-pic'>
          <img src='/images/footer-couple-pic.jpg' alt='' />
        </div> */}
        <h2>Thank you</h2>
        <ul className='social-links'>
          <li>
            <a href='https://www.facebook.com/fMaksatbek/'>
              <i className='ti-facebook'></i>
            </a>
          </li>
          <li>
            <a href='https://twitter.com/maksnurgazy'>
              <i className='ti-twitter-alt'></i>
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/maksatbek-bolushov/'>
              <i className='ti-linkedin'></i>
            </a>
          </li>
          <li>
            <a href='https://www.pinterest.com/maksatbekbolushov/'>
              <i className='ti-pinterest'></i>
            </a>
          </li>
        </ul>
        <p>
          Copyright {new Date().getFullYear()}, Made with love by{' '}
          <a href='https://www.instagram.com/maksnurgazy/'>Maksatbek Bolushov</a>
        </p>
      </div>
    </footer>
  );
}
