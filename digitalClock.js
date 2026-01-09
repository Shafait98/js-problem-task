function showClock() {
  const now = new Date();

  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  console.log(`${h}:${m}:${s}`);
}

setInterval(showClock, 1000);