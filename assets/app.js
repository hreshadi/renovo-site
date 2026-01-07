// highlight current page in nav + simple reveal animation
(function () {
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".nav a").forEach(a => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if ((path === "" || path === "index.html") && (href === "index.html" || href === "./" || href === "/")) a.classList.add("active");
    if (href.includes(path)) a.classList.add("active");
  });

  const els = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add("show");
    });
  }, { threshold: 0.12 });

  els.forEach(el => io.observe(el));

  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
