// hrr second ke baad karte raho 

setInterval(() => {
   date = new Date();
   htime = date.getHours();
   mtime = date.getMinutes();
   stime = date.getSeconds();
  // to rotate hour , minute and second hand formula
   hourhandrotation     = 30*htime + mtime/2; 
   minutehandrotation   = 6*mtime;
   secondhandrotation   = 6*stime;

   // to rotate hour , minute and second hand for how much degree
    hour.style.transform = `rotate(${hourhandrotation}deg)`;
    minute.style.transform = `rotate(${minutehandrotation}deg)`;
    second.style.transform = `rotate(${secondhandrotation}deg)`;
},1000);

