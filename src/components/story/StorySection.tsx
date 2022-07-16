export function StorySection() {
  return (
    <section id='story-section' className='story-section section-padding p-t-0'>
      <div className='container'>
        <div className='row'>
          <div className='col col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1'>
            <div className='section-title'>
              <h2>История любви</h2>
              <p></p>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col col-lg-10 col-lg-offset-1'>
            <div className='story-block'>
              <ul>
                <li>
                  <div className='details'>
                    <h3>Первая встреча</h3>
                    <span className='date'>25 Dec 2018</span>
                    <p>
                      Однажды осенью, увидев свои зубы, я подумал, пора бы навестить стоматолога. Знакомая дала номер
                      хорошего врача и им оказалась Жанара.
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
                    <h3>Первое свидание</h3>
                    <span className='date'>25 Декабрь 2020</span>
                    <p>Увидев меня она сразу же потеряла голову от моей красивой внешности и харизмы😊</p>
                  </div>
                </li>
                <li>
                  <div className='details'>
                    <h3>Предложение</h3>
                    <span className='date'>25 Декабрь 2021</span>
                    <p>
                      Те же черты я обнаружил в ней и мы решили дать этому миру и людям, возвожность наслаждаться нашим
                      союзом.
                    </p>
                  </div>
                  <div className='img-holder'>
                    <img src='/images/story/img-3.png' alt='' />
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
