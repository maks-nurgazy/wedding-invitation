import { useEffect, useState } from 'react';

interface HeroSliderProps {
  date: Date;
}

export function HeroSlider(props: HeroSliderProps) {
  const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = props.date;

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setPartyTime(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [props.date]);

  return (
    <section className='hero-slider hero-style-1'>
      <div className='swiper-container'>
        <div className='slide-main-text'>
          <div className='container'>
            <div className='slide-title'>
              <h2>Argen & Zhanara</h2>
            </div>
            <div className='wedding-date'>
              <span>24 Август 2022</span>
            </div>
            <div className='clearfix'></div>
            <div className='count-down-clock'>
              <div id='clock'>
                <div className='box'>
                  <div>{days}</div> <span>дней</span>{' '}
                </div>
                <div className='box'>
                  <div>{hours}</div> <span>часов</span>{' '}
                </div>
                <div className='box'>
                  <div>{minutes}</div> <span>минут</span>{' '}
                </div>
                <div className='box'>
                  <div>{seconds}</div> <span>секунд</span>{' '}
                </div>
              </div>
            </div>
          </div>
          <div className='pattern'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className='swiper-wrapper'>
          <div className='swiper-slide'>
            <div
              className='slide-inner slide-bg-image'
              data-background='/images/slider/slide-1.jpg'
              style={{ backgroundImage: 'url(/images/slider/slide-3.jpg)' }}
            ></div>
          </div>

          <div className='swiper-slide'>
            <div
              className='slide-inner slide-bg-image'
              data-background='/images/slider/slide-2.jpg'
              style={{ backgroundImage: 'url(/images/slider/slide-2.jpg)' }}
            ></div>
          </div>

          <div className='swiper-slide'>
            <div
              className='slide-inner slide-bg-image'
              data-background='/images/slider/slide-3.jpg'
              style={{ backgroundImage: 'url(/images/slider/slide-3.jpg)' }}
            ></div>
          </div>
          {/* <!-- end swiper-slide --> */}
        </div>
        {/* <!-- end swiper-wrapper --> */}

        {/* <!-- swipper controls --> */}
        <div className='swiper-pagination'></div>
        <div className='swiper-button-next'></div>
        <div className='swiper-button-prev'></div>
      </div>
    </section>
  );
}
