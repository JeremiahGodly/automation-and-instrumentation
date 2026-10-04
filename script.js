(function () {
  var pages = [
    ["index.html", "Home & PYQ Map"],
    ["module1.html", "Module 1 · Sensors & Transducers"],
    ["module2.html", "Module 2 · Signal Conditioning & Final Control"],
    ["module3.html", "Module 3 · Data Transmission & Virtual Instrumentation"],
    ["module4.html", "Module 4 · PLC"],
    ["module5.html", "Module 5 · SCADA & DCS"]
  ];
  var here = location.pathname.split("/").pop() || "index.html";
  var nav = document.createElement("nav");
  nav.className = "side";
  var h = '<h1>EET468 Industrial Instrumentation & Automation</h1><div class="sub">KTU S8 · PYQ answers 2023 – 2026</div>';
  pages.forEach(function (p) {
    h += '<a href="' + p[0] + '"' + (p[0] === here ? ' class="active"' : "") + ">" + p[1] + "</a>";
  });
  var heads = document.querySelectorAll("main h2[id]");
  if (heads.length) {
    h += '<div class="mini">On this page</div>';
    heads.forEach(function (e) {
      h += '<a href="#' + e.id + '">' + e.textContent + "</a>";
    });
  }
  nav.innerHTML = h;
  var layout = document.querySelector(".layout");
  layout.insertBefore(nav, layout.firstChild);
  var btn = document.createElement("button");
  btn.id = "menu";
  btn.textContent = "☰ Menu";
  btn.onclick = function () { nav.classList.toggle("open"); };
  document.body.appendChild(btn);
  nav.addEventListener("click", function () { nav.classList.remove("open"); });

  var s = document.getElementById("search");
  if (s) {
    s.addEventListener("input", function () {
      var q = s.value.toLowerCase();
      document.querySelectorAll(".qa").forEach(function (e) {
        e.style.display = e.textContent.toLowerCase().indexOf(q) > -1 ? "" : "none";
      });
    });
  }

  window.addEventListener("load", function () {
    if (window.renderMathInElement) {
      renderMathInElement(document.body, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false }
        ],
        throwOnError: false
      });
    }
  });
})();
