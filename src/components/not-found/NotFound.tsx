/* Local dependencies */
import './not-found.style.scss';

export function NotFound(props: any) {
  return (
    <>
      <div className='not-found-body'>
        <header className='not-found-page-header'>404 Not Found</header>
        <main className='not-found-wrapper'>
          <div className='not-found-image-container'>
            <img src='/images/gallery/img-1.jpg' alt='scarecrow' />
          </div>
          <div className='not-found-content'>
            <h1>I have bad news for you.</h1>
            <p>The page you are looking for might be removed or is temporarily unavailable.</p>
            <a className='button' href='#'>
              Back to Homepage
            </a>
          </div>
        </main>
        <footer className='not-found-page-footer'>Maksatbek Bolushov @ maksnurgazy.online</footer>
      </div>
    </>
  );
}
