export function StorySection() {
  return (
    <section className='story-section section-padding p-t-0'>
      <div className='container'>
        <div className='row'>
          <div className='col col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1'>
            <div className='section-title'>
              <h2>Our story</h2>
              <p>
                Recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted
                out with a fur hat
              </p>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col col-lg-10 col-lg-offset-1'>
            <div className='story-block'>
              <ul>
                <li>
                  <div className='details'>
                    <h3>First meet</h3>
                    <span className='date'>25 Dec 2018</span>
                    <p>
                      Luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae
                      sapien ut libero venenatis faucibus. Nullam quis ante.
                    </p>
                  </div>
                  <div className='img-holder'>
                    <img src='/images/story/img-1.png' alt='' />
                  </div>
                </li>
                <li>
                  <div className='img-holder'>
                    <img src='/images/story/img-2.png' alt='' />
                  </div>
                  <div className='details'>
                    <h3>First date</h3>
                    <span className='date'>25 Dec 2018</span>
                    <p>
                      Luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae
                      sapien ut libero venenatis faucibus. Nullam quis ante.
                    </p>
                  </div>
                </li>
                <li>
                  <div className='details'>
                    <h3>Proposal</h3>
                    <span className='date'>25 Dec 2018</span>
                    <p>
                      Luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae
                      sapien ut libero venenatis faucibus. Nullam quis ante.
                    </p>
                  </div>
                  <div className='img-holder'>
                    <img src='/images/story/img-3.png' alt='' />
                  </div>
                </li>
                <li>
                  <div className='img-holder'>
                    <img src='/images/story/img-4.png' alt='' />
                  </div>
                  <div className='details'>
                    <h3>Engagement</h3>
                    <span className='date'>25 Dec 2018</span>
                    <p>
                      Luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae
                      sapien ut libero venenatis faucibus. Nullam quis ante.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end container --> */}
    </section>
  );
}
