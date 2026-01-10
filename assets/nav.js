(() => {
  const nav = [
    { href: "index.html", label: "HOME" },
    { href: "games.html", label: "GAMES" },
    { href: "apps.html", label: "APPS" },
    { href: "records.html", label: "RECORDS" },
    { href: "about.html", label: "ABOUT" },
  ];

  // 今いるページ名を取り出す（例: games.html）
  const path = location.pathname.split("/").filter(Boolean);
  const here = (path[path.length - 1] || "index.html").toLowerCase();

  // HTML側にこれがある前提: <div data-common-nav></div>
  const host = document.querySelector("[data-common-nav]");
  if (!host) return;

  const el = document.createElement("nav");
  el.className = "top";
  el.setAttribute("aria-label", "Primary");

  nav.forEach(item => {
    const a = document.createElement("a");
    a.href = item.href;              // ← 余計な prefix を付けず、同じフォルダ内移動にする
    a.textContent = item.label;

    if (item.href.toLowerCase() === here) {
      a.setAttribute("aria-current", "page");
    }
    el.appendChild(a);
  });

  host.replaceChildren(el);
})();
