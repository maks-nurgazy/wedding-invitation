/* External dependencies */

/* Local dependencies */
import banner from '../../assets/images/banner.jpg';
import { weddingInfo } from '../../information';
import Timer from '../timer/Timer';
import { days, months } from '../../constants';
import './style.scss';

export function Banner() {
  const { bride, groom, date } = weddingInfo;

  return (
    <div className='banner'>
      <img src={banner} alt='Wedding banner' />
      <div className='banner_text'>
        <div className='bride_groom_info'>
          <p>{bride.firstName}</p>&<p>{groom.firstName}</p>
        </div>
        <div className='wedding_date'>
          <div className='date_text'>{days[date.getDay()]}</div>
          <div className='date_number'>
            <span>{date.getDate()}</span>
            <span>{date.getFullYear()}</span>
          </div>
          <div className='date_text'>{months[date.getMonth()]}</div>
        </div>
        <div className='remaining_days'>
          <p>До свадьбы осталось</p>
          <Timer date={date} />
        </div>
      </div>
    </div>
  );
}
