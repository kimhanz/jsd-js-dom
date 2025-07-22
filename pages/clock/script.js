const hoursDisplay = document.getElementById("hours");

const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const ampmDisplay = document.getElementById("ampm");

const dateDisplay = document.getElementById("dateDisplay");
const dayDisplay = document.getElementById("dayDisplay");

function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  const mins = now.getMinutes();
  const secs = now.getSeconds();
  const day = now.toLocaleString("en-US", { weekday: "long" });
  const month = now.toLocaleString("en-US", { month: "long" });
  const date = now.getDate();
  const year = now.getFullYear();

  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;

  hoursDisplay.textContent = padZero(hours);
  minutesDisplay.textContent = padZero(mins);
  secondsDisplay.textContent = padZero(secs);
  ampmDisplay.textContent = ampm;

  dateDisplay.textContent = `${month} ${date}, ${year}`;
  dayDisplay.textContent = day;
}
