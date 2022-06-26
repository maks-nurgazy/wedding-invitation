/* External dependencies */

/* Local dependencies */
import history from '../../assets/images/history-background.jpg';
import './style.scss';

export function History() {
  return (
    <div className='history'>
      <img src={history} alt='Wedding history' />
      <div className='history_text'>
        <p className='title'>История любви</p>
        <p className='body'>
          Однажды осенью, увидев свои зубы, я подумал, пора бы навестить стоматолога. Знакомая дала номер хорошего врача
          и им оказалась Жанара. Увидев меня она сразу же потеряла голову от моей красивой внешности и харизмы😊 Те же
          черты я обнаружил в ней и мы решили дать этому миру и людям, возвожность наслаждаться нашим союзом.
        </p>
      </div>
    </div>
  );
}
