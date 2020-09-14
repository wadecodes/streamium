var countDown = new Date('Jan 01,2021 00:00:00').getTime();
setInterval(() => {
  var now = new Date().getTime();
  var timeleft = countDown - now;
  var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
  var milli = Math.floor((timeleft % (1000)) );
  console.log(`${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds ${milli} MilliSeconds Left`);
}, 1);
