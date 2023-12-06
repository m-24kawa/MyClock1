'use strict';

{
  let pre_msec = 0;
  let blink_On = 0;

  function putStr(tgtStr, ix, iy) {
    const canvas = document.querySelector('canvas');
    if (typeof canvas.getContext === 'undefined') {
      return;
    }
    const ctx = canvas.getContext('2d');
    
    ctx.font = 'bold 64px Courier';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.fillStyle = 'black';
    ctx.fillRect( ix,iy,330,55);
    ctx.fillStyle = 'white';
    ctx.fillText(tgtStr, ix,iy);
  }

  function showSeconds(){
  
    setInterval(()=>{
      const d = new Date();
      const msec = d.getMilliseconds();
      const hour = String(d.getHours()).padStart(2,'0');
      const min = String(d.getMinutes()).padStart(2,'0');
      const sec = String(d.getSeconds()).padStart(2,'0');

      if (msec > 900 && blink_On ===0){
        let curTime = hour + ' ' + min + ' ' + sec;
        console.log(`${hour} ${min} ${sec}`);
        putStr(curTime,100,100);
        blink_On = 1;
      }
      if (msec < pre_msec){
        let curTime = hour + ':' + min + ':' + sec;
        console.log(`${hour}:${min}:${sec}`);
        putStr(curTime,100,100);
        blink_On = 0;
      }
      pre_msec = msec;
    },50);

  }
  showSeconds();
 }  