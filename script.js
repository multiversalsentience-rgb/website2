const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}

const launch = new Date("2027-05-01T00:00:00-04:00");
const boxes = {
  days: document.querySelector("[data-count='days']"),
  hours: document.querySelector("[data-count='hours']"),
  minutes: document.querySelector("[data-count='minutes']"),
  seconds: document.querySelector("[data-count='seconds']")
};

function updateCountdown() {
  if (!boxes.days) return;
  const remaining = Math.max(0, launch.getTime() - Date.now());
  const totalSeconds = Math.floor(remaining / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  boxes.days.textContent = String(days);
  boxes.hours.textContent = String(hours).padStart(2, "0");
  boxes.minutes.textContent = String(minutes).padStart(2, "0");
  boxes.seconds.textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

const form = document.querySelector("[data-signup]");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = form.querySelector("input[type='email']").value.trim();
    const subject = encodeURIComponent("Launch updates for Autobiography of Elara");
    const body = encodeURIComponent(`Please add ${email} to launch updates for Autobiography of Elara.`);
    window.location.href = `mailto:multiversal.sentience@gmail.com?subject=${subject}&body=${body}`;
  });
}
