document.querySelectorAll(".slider-nav a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const wrapper = link.closest(".slider-wrapper");
    const slider = wrapper.querySelector(".slider");
    const nav = wrapper.querySelector(".slider-nav");

    // active state only inside this slider
    nav.querySelectorAll("a").forEach((a) => a.classList.remove("active"));
    link.classList.add("active");

    const target = document.getElementById(link.getAttribute("href").slice(1) );

    if (target) {
      slider.scrollTo({
        left: target.offsetLeft,
        behavior: "smooth",
      });
    }
  });
});

const links = [
  "https://github.com/SkProGL/Translatorium",
  "",
  "",
  "https://github.com/SkProGL/Housing-Bot-Netherlands",
  "https://github.com/SkProGL/Booking-System-Website",
];

document.querySelectorAll(".overview li").forEach((li, index) => {
  // prevent duplicates
  if (li.querySelector(".li-icon")) return;

  const hasLink = !!links[index];
  const icon = document.createElement(hasLink ? "a" : "span");
  icon.className = "li-icon";
  if (hasLink) {
    icon.href = links[index];
    icon.target = "_blank";
  }

  const img = document.createElement("img");
  img.src = hasLink ? "src/icons/braces.svg" : "src/icons/ban.svg";
  icon.title = hasLink ? "View repository" : "Private repository";
  img.width = 18;
  img.alt = hasLink ? "Source available" : "Source not available";

  icon.appendChild(img);
  li.prepend(icon);
});
