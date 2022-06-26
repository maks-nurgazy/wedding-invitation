/* External dependencies */
import { useEffect, useState } from 'react';

/* Local dependencies */
import './style.scss';

interface TimerProps {
  date: Date;
}

const Timer = (props: TimerProps) => {
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

  return partyTime ? (
    <div>Party</div>
  ) : (
    <div className='timer-wrapper'>
      <div className='timer-segment'>
        <span className='time'>{days}</span>
        <span className='label'>Дней</span>
      </div>
      <span className='divider'>|</span>
      <div className='timer-segment'>
        <span className='time'>{hours}</span>
        <span className='label'>Часов</span>
      </div>
      <span className='divider'>|</span>
      <div className='timer-segment'>
        <span className='time'>{minutes}</span>
        <span className='label'>Минут</span>
      </div>
      <span className='divider'>|</span>
      <div className='timer-segment'>
        <span className='time'>{seconds}</span>
        <span className='label'>Секунд</span>
      </div>
    </div>
  );
};

export default Timer;
