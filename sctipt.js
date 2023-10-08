function updateIsraelTime() {
  const timerCountdown = document.getElementById("timero");
  const israelTimeElement = document.getElementById("israel-clock");
  const israelTime = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Jerusalem",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  israelTimeElement.textContent = "Israel time: " + israelTime;
  //timerCountdown.textContent = "test";
}

// Update the time initially and then every second
updateIsraelTime();
setInterval(updateIsraelTime, 1000);

const cooldown = 2400;
        const duration = 1200;
        const thunderstormInterval = 3;

        function rainTimer() {
            // "https://stackoverflow.com/a/221297"
            const timestamp = Math.floor(Date.now() / 1000);
            // "https://wiki.hypixel.net/SkyBlock_Time"
            // "The epoch starting SkyBlock Time is 1,560,275,700,000"
            const skyblockAge = (timestamp - 1560275700);

            const thunderstorm = skyblockAge % ((cooldown + duration) * thunderstormInterval);
            const rain = skyblockAge % (cooldown + duration);
            document.getElementById('timeLeft').textContent = secsToTime(0);

            if (cooldown <= rain) {
                document.getElementById('rainNow').textContent = "Yes";
                let timeLeft = (cooldown + duration) - rain;
                document.getElementById('timeLeft').textContent = secsToTime(timeLeft);
                document.getElementById('nextRain').textContent = secsToTime(timeLeft + cooldown);
            } else {
                document.getElementById('rainNow').textContent = "No";
                document.getElementById('nextRain').textContent = secsToTime(cooldown - rain);
            }

            if ((cooldown <= thunderstorm) && (thunderstorm < (cooldown + duration))) {
                document.getElementById('thunderstormNow').textContent = "Yes";
                let timeLeft = (cooldown + duration) - rain;
                document.getElementById('timeLeft').textContent = secsToTime(timeLeft);
                document.getElementById('nextThunderstorm').textContent = secsToTime(timeLeft + ((cooldown + duration) * (thunderstormInterval - 1)) + cooldown);
            } else {
                document.getElementById('thunderstormNow').textContent = "No";
                let nextThunderstorm;
                if (thunderstorm < cooldown) {
                    nextThunderstorm = cooldown - thunderstorm;
                } else if ((cooldown + duration) <= thunderstorm) {
                    nextThunderstorm = ((cooldown + duration) * thunderstormInterval) - thunderstorm + cooldown;
                }
                document.getElementById('nextThunderstorm').textContent = secsToTime(nextThunderstorm);
            }
        }

        function secsToTime(seconds) {
            // "https://stackoverflow.com/a/25279340"
            return new Date(seconds * 1000).toISOString().slice(11, 19);
        }

        rainTimer();
        setInterval('rainTimer()', 100);
