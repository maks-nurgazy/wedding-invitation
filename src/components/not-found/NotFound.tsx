/* Local dependencies */
import './not-found.style.scss';

export function NotFound(props: any) {
  return (
    <>
      <header className='page-header'>404 Not Found</header>
      <main className='wrapper'>
        <div className='image-container'>
          <img src='/images/gallery/img-1.jpg' alt='scarecrow' />
        </div>
        <div className='content'>
          <h1>I have bad news for you.</h1>
          <p>The page you are looking for might be removed or is temporarily unavailable.</p>
          <a className='button' href='#'>
            Back to Homepage
          </a>
        </div>
      </main>
      <footer className='page-footer'>Maksatbek Bolushov @ maksnurgazy.online</footer>
    </>
  );
}
