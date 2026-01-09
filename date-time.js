// const now = new Date();
// console.log(now);
// console.log(now.getDay());

// console.log(now.getHours());

//

// const year = 2025;
// const month = 11;
// const day = 22;
// const hour = 10;
// const minute = 35;
// const second = 0;

// const d = new Date(year,month,day,hour,minute,second);

// console.log(d.getDate().toString());

// const timeDate = new Date();
// console.log(timeDate);

// setTimeout()

function showClock() {
  const now = new Date();

  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  console.log(`${h}:${m}:${s}`);
}

setInterval(showClock, 1000);

