// ASTELME : interactions légères (aucune dépendance, aucun traceur)
(function () {
  var header = document.querySelector(".header");
  var burger = document.querySelector(".burger");
  var nav = document.getElementById("nav");

  // En-tête : fond opaque après le début du défilement
  function onScroll() {
    header.classList.toggle("scrolled", window.scrollY > 24);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Menu mobile
  function closeMenu() {
    header.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
  }
  if (burger) {
    burger.addEventListener("click", function () {
      var open = header.classList.toggle("open");
      burger.setAttribute("aria-expanded", String(open));
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) closeMenu();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
  }

  // Méthode : les étapes s'allument quand la section arrive à l'écran
  var steps = document.querySelector(".steps");
  if (steps) {
    if (!("IntersectionObserver" in window)) {
      steps.classList.add("go");
    } else {
      var stepsObs = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) {
          steps.classList.add("go");
          stepsObs.disconnect();
        }
      }, { threshold: 0.4 });
      stepsObs.observe(steps);
    }
  }

  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach(function (el) {
      el.classList.add("in");
    });
    return;
  }

  // Apparition des blocs au défilement
  var revealer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          revealer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  );
  document.querySelectorAll(".reveal").forEach(function (el) {
    // Le premier écran apparaît tout de suite, sans attendre le défilement
    if (el.closest(".hero")) {
      requestAnimationFrame(function () { el.classList.add("in"); });
    } else {
      revealer.observe(el);
    }
  });

  // Lien de navigation actif selon la section visible
  var links = {};
  document.querySelectorAll('.nav a[href^="#"]').forEach(function (a) {
    links[a.getAttribute("href").slice(1)] = a;
  });
  var spy = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        var link = links[entry.target.id];
        if (!link || !entry.isIntersecting) return;
        Object.keys(links).forEach(function (id) {
          links[id].classList.remove("active");
        });
        link.classList.add("active");
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  Object.keys(links).forEach(function (id) {
    var section = document.getElementById(id);
    if (section) spy.observe(section);
  });
})();

// Barre de contact mobile : visible après le premier écran,
// masquée quand la section contact ou le pied de page est à l'écran.
(function () {
  var bar = document.querySelector(".mobile-bar");
  var hero = document.querySelector(".hero");
  if (!bar || !hero || !("IntersectionObserver" in window)) return;

  var hidden = { hero: true, contact: false, footer: false };
  function update() {
    bar.classList.toggle("show", !hidden.hero && !hidden.contact && !hidden.footer);
  }
  function watch(el, key) {
    if (!el) return;
    new IntersectionObserver(function (entries) {
      hidden[key] = entries[0].isIntersecting;
      update();
    }).observe(el);
  }
  watch(hero, "hero");
  watch(document.getElementById("contact"), "contact");
  watch(document.querySelector(".footer"), "footer");
})();
