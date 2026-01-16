(() => {
  // src/js/hamburger-menu.js
  var btn = document.querySelector(".hamburger-btn");
  var menu = document.querySelector("#hamburger-menu");
  var OPEN_CLASS = "hamburger-menu--open";
  var ACTIVE_CLASS = "hamburger-btn--active";
  function initHamburgerMenu() {
    btn.addEventListener("click", () => {
      btn.classList.toggle(ACTIVE_CLASS);
      const isOpen = menu.classList.toggle(OPEN_CLASS);
      menu.setAttribute("aria-hidden", String(!isOpen));
      btn.setAttribute("aria-expanded", String(isOpen));
    });
  }

  // src/js/utils.js
  var BREAKPOINT = 768;
  var spMediaQuery = window.matchMedia(`(max-width: ${BREAKPOINT}px)`);
  var pcMediaQuery = window.matchMedia(`(min-width: ${BREAKPOINT + 1}px)`);
  function isSP() {
    return spMediaQuery.matches;
  }

  // src/js/header-observer.js
  var header = document.querySelector('[data-observe="header"]');
  var trigger = document.querySelector('[data-observe="header-trigger"]');
  var OVERLAY_CLASS = "header--overlay";
  function initHeaderObserver() {
    if (header && trigger) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (isSP()) return;
          if (entries[0].isIntersecting) {
            header.classList.remove(OVERLAY_CLASS);
          } else {
            header.classList.add(OVERLAY_CLASS);
          }
        },
        {
          rootMargin: "-30px",
          threshold: 0
        }
      );
      observer.observe(trigger);
    }
  }

  // src/js/skill-filter.js
  var skills = [
    { id: "html", label: "HTML", category: "web" },
    { id: "css", label: "CSS", category: "web" },
    { id: "js", label: "JavaScript", category: "web" },
    { id: "jquery", label: "jQuery", category: "web" },
    { id: "typescript", label: "TypeScript", category: "web" },
    { id: "react", label: "React", category: "web" },
    { id: "unity", label: "Unity", category: "app" },
    { id: "csharp", label: "C#", category: "app" },
    { id: "blender", label: "Blender", category: "app" },
    { id: "cri", label: "CRIWARE", category: "app" }
  ];
  var activeCategories = /* @__PURE__ */ new Set();
  function render() {
    const list = document.getElementById("skill-list");
    list.innerHTML = "";
    const visibleSkills = skills.filter(
      (skill) => activeCategories.has(skill.category)
    );
    visibleSkills.forEach((skill) => {
      const li = document.createElement("li");
      li.textContent = skill.label;
      list.appendChild(li);
    });
  }
  function initSkillFilter() {
    document.querySelectorAll('input[type="checkbox"]').forEach((e) => {
      e.addEventListener("change", () => {
        const category = e.dataset.skill;
        e.checked ? activeCategories.add(category) : activeCategories.delete(category);
        render();
      });
    });
  }

  // src/js/main.js
  document.addEventListener("DOMContentLoaded", () => {
    initHamburgerMenu();
    initHeaderObserver();
    initSkillFilter();
  });
})();
