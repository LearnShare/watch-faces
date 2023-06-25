import {
  useState,
  useEffect,
} from 'react';

function useTime() {
  // initial time
  const now = new Date();

  // -hours
  const [
    hours,
    setHours,
  ] = useState(now.getHours());
  // -minutes
  const [
    minutes,
    setMinutes,
  ] = useState(now.getMinutes());
  // -seconds
  const [
    seconds,
    setSeconds,
  ] = useState(now.getSeconds());

  // update every 1000ms
  useEffect(() => {
    const timer = window.setInterval(() => {
      const time = new Date();

      setHours(time.getHours());
      setMinutes(time.getMinutes());
      setSeconds(time.getSeconds());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  return {
    hours,
    minutes,
    seconds,
  };
}

export default useTime;
