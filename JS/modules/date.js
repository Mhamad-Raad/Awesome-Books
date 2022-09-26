import { DateTime } from "./luxon.js";
let month= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];

const getDateTime = () => {
  const now = DateTime.now();
  const hour = now.c.hour > 12 ? now.c.hour - 12 : now.c.hour; 
  const hourCounter = now.c.hour > 12 ? 'PM' : 'AM';
  const minute = now.c.minute < 10 ? `0${now.c.minute}` : now.c.minute;
  const second = now.c.second < 10 ? `0${now.c.second}` : now.c.second;

  let dayCounter = now.c.day === 1 ? 'st' : now.c.day === 2 ? 'nd' : now.c.day === 3 ? 'rd' : 'th';

  return month[now.c.month - 1] + ' ' + now.c.day + dayCounter + ' ' + now.c.year + ', '+
   hour + ':' + minute + ':' + second + ' ' + hourCounter;
}

export { getDateTime };