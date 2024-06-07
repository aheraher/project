import React from 'react';
import style from '../../MyComponent.module.css';

const SampleDownload = () => {
  return (
    <div className='font-serif flex flex-wrap gap-10 justify-center items-center'>
      <div className={`${style.book} w-full sm:w-1/2 lg:w-1/4`}>
        <p>LOVE YOU ❤️‍🔥</p>
        <div className={style.cover}>
          <p className={style.p}>I</p>
        </div>
      </div>

      <div className={`${style.book} w-full sm:w-1/2 lg:w-1/4`}>
        <p>LOVE YOU ❤️‍🔥</p>
        <div className={style.cover}>
          <p className={style.p}>I</p>
        </div>
      </div>
      
      <div className={`${style.book} w-full sm:w-1/2 lg:w-1/4`}>
        <p>LOVE YOU ❤️‍🔥</p>
        <div className={style.cover}>
          <p className={style.p}>I</p>
        </div>
      </div>
      
      <div className={`${style.book} w-full sm:w-1/2 lg:w-1/4`}>
        <p>LOVE YOU ❤️‍🔥</p>
        <div className={style.cover}>
          <p className={style.p}>I</p>
        </div>
      </div>
    </div>
  );
};

export default SampleDownload;
