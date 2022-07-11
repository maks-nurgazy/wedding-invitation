export function BlogSection() {
  return (
    <section className='blog-section section-padding'>
      <div className='container'>
        <div className='row'>
          <div className='col col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1'>
            <div className='section-title'>
              <h2>Latest form the blog</h2>
              <p>
                Recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted
                out with a fur hat
              </p>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col col-xs-12'>
            <div className='blog-grids clearfix'>
              <div className='grid'>
                <div className='entry-media'>
                  <img src='/images/blog/img-1.jpg' alt='' />
                </div>
                <div className='details'>
                  <h3>
                    <a href='#'>Hundreds of designs for every wedding style</a>
                  </h3>
                  <p className='date'>
                    <i className='ti-timer'></i> April 14, 2019
                  </p>
                </div>
              </div>
              <div className='grid'>
                <div className='entry-media'>
                  <img src='/images/blog/img-2.jpg' alt='' />
                </div>
                <div className='details'>
                  <h3>
                    <a href='#'>How to plan a perfect wedding in moments</a>
                  </h3>
                  <p className='date'>
                    <i className='ti-timer'></i> April 14, 2019
                  </p>
                </div>
              </div>
              <div className='grid'>
                <div className='entry-media'>
                  <img src='/images/blog/img-3.jpg' alt='' />
                </div>
                <div className='details'>
                  <h3>
                    <a href='#'>Possible no matter where you are on your journey</a>
                  </h3>
                  <p className='date'>
                    <i className='ti-timer'></i> April 14, 2019
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end container --> */}
    </section>
  );
}
