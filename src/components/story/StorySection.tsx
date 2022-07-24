/* Local dependencies */
import './story.style.scss';

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
                    <span className='date'>24 Октябрь 2020</span>
                    <p>
                      Однажды поздней осенью ,увидев свои зубы, я подумал , пора бы навестить стоматолога. Знакомая дала
                      номер хорошего врача и им оказалась Жанара. Увидев меня она сразу же потеряла голову от моей
                      красивой внешности и харизмы:) Те же черты я обнаружил в ней и мы решили вместе пройти этот
                      ,полный загадок, жизненный путь.
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
                    <span className='date'>15 Ноябрь 2020</span>
                    <p>
                      С первой минуты нашего знакомства нас не беспокоила ни скромность ,ни скованность. И на первом
                      свидании мы кажется выложили друг другу всё что можно было ,за такой короткий промежуток времени.
                      Это напоминало начало настоящей дружбы и я внезапно обрёл готовность к серьёзным отношениям...
                    </p>
                  </div>
                </li>
                <li>
                  <div className='details'>
                    <h3>Предложение</h3>
                    <span className='date'>25 Май 2022</span>
                    <p>
                      К моменту ,когда я сделал ей предложение в городе Калуга , на территории музея космонавтики, у той
                      самой ракеты что забрала Гагарина на орбиту, от куда открывался приятный вид на Яченское
                      водохранилище, у нас не было сомнений в друг друге. Мы за целый год сблизились так , что это
                      казалось формальностью, но на романтичность момента это никак не сказалось.
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
    </section>
  );
}
