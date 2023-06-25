import React from 'react';

import {
  useTime,
} from '@/hooks';

import './index.scss';

function FaceBasic() {
  const {
    hours,
    minutes,
    seconds,
  } = useTime();
  return (
    <div className="face-basic">
      <span className="time">
        { hours.toString().padStart(2, '0') }
        :{ minutes.toString().padStart(2, '0') }
        :{ seconds.toString().padStart(2, '0') }
      </span>
    </div>
  );
}

export default FaceBasic;
