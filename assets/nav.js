(() => {
  const nav = [
    { href: "index.html", label: "HOME" },
    { href: "games.html", label: "GAMES" },
    { href: "apps.html", label: "APPS" },
    { href: "records.html", label: "RECORDS" },
    { href: "about.html", label: "ABOUT" },
  ];

  const path = location.pathname.split("/").filter(Boolean);
  const here = (path[path.length - 1] || "index.html").toLowerCase();

  const host = document.querySelector("[data-common-nav]");
  if (!host) return;

  const el = document.createElement("nav");
  el.className = "top";

  nav.forEach(item => {
    const a = document.createElement("a");
    a.href = item.href;
    a.textContent = item.label;
    if (item.href.toLowerCase() === here) {
      a.setAttribute("aria-current", "page");
    }
    el.appendChild(a);
  });

  host.replaceChildren(el);
})();
