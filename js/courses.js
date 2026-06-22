/* =====================================================
   DNDC — Course detail page behaviour
   Reads ?program= , renders the program from
   window.DNDC_COURSES, then runs entrance animations.
   ===================================================== */

(function () {
  document.addEventListener('DOMContentLoaded', () => {
    if (window.gsap && window.ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
    }

    // Populate the DOM from data BEFORE animations bind to it.
    initProgram();

    initCourseHero();
    initTechReveal();
    initTiers();
    initProjectVisuals();
    initCareerRail();
    initMentors();
    initFaq();

    // Content was injected dynamically — recalculate trigger positions so
    // every reveal fires correctly (otherwise tail-end chips/tiers can stay
    // stuck at opacity 0). Refresh now and again after fonts/images settle.
    if (window.ScrollTrigger) {
      ScrollTrigger.refresh();
      window.addEventListener('load', () => ScrollTrigger.refresh());
    }
  });

  /* ---------- Resolve program + populate the page ---------- */
  function initProgram() {
    const data = window.DNDC_COURSES;
    if (!data) return;

  let key = "mern";


const path = window.location.pathname;

if (
  path.startsWith("/courses/") &&
  path.split("/").pop() !== "courses"
) {
  key = path.split("/").pop().toLowerCase();
  const slugMap = {
  "mern": "mern",
  "python": "python",
  "java": "java",
  "data-analytics": "analytics",
  "data-science": "datascience",
  "machine-learning": "ml",
  "artificial-intelligence": "ai"
};

key = slugMap[key] || key;
} else {
  const params = new URLSearchParams(window.location.search);
  key = (params.get("program") || "mern").toLowerCase();
}
    const program = data[key] || data.mern;
    if (!program) return;

    document.title =
`${program.name} Course in Bhopal | DNDC Training Institute`;

const desc = document.querySelector(
'meta[name="description"]'
);

if(desc){
  desc.content =
  `${program.name} training course in Bhopal at DNDC. Live projects, placement assistance, mentorship and industry-ready curriculum.`;
}

let canonical =
document.querySelector('link[rel="canonical"]');

const reverseSlugMap = {
  analytics: "data-analytics",
  datascience: "data-science",
  ml: "machine-learning",
  ai: "artificial-intelligence",
  mern: "mern",
  python: "python",
  java: "java"
};

const seoSlug = reverseSlugMap[key] || key;

if(canonical){
   canonical.href =
   `https://dndc.in/courses/${seoSlug}`;
}
document
  .querySelector('meta[property="og:title"]')
  ?.setAttribute(
    "content",
    `${program.name} Course in Bhopal | DNDC`
  );

document
  .querySelector('meta[property="og:description"]')
  ?.setAttribute(
    "content",
    `${program.name} training course with placement assistance at DNDC Bhopal`
  );
    // Simple text bindings
    const durationRange = computeDurationRange(program.tiers);
    const values = Object.assign({}, program, { durationRange });
    document.querySelectorAll('[data-bind]').forEach((el) => {
      const field = el.getAttribute('data-bind');
      if (values[field] != null) el.textContent = values[field];
    });

    // Hero title lines
    const titleEl = document.getElementById('cHeroTitle');
    if (titleEl && Array.isArray(program.titleLines)) {
      titleEl.innerHTML = program.titleLines
        .map((line, i) => `<span class="line${i === program.titleLines.length - 1 ? ' italic' : ''}">${line}</span>`)
        .join('');
    }

    // Tech chips
    const techGrid = document.getElementById('techGrid');
    if (techGrid && Array.isArray(program.stack)) {
      techGrid.innerHTML = program.stack
        .map((t) => `<div class="tech__chip">${t}</div>`)
        .join('');
    }

    // Stacked tiers
    const tiersEl = document.getElementById('tiers');
    if (tiersEl && Array.isArray(program.tiers)) {
      tiersEl.innerHTML = program.tiers.map((tier, ti) => {
        const modules = tier.modules.map((m, mi) => `
          <li class="tier__module">
            <span class="tier__module-num">${pad(mi + 1)}</span>
            <div class="tier__module-body">
              <h4>${m.t}</h4>
              <p>${m.d}</p>
            </div>
          </li>`).join('');
        return `
          <article class="tier" style="--tier-i:${ti}">
            <header class="tier__head">
              <div class="tier__head-main">
                <span class="tier__index">Track ${pad(ti + 1)}</span>
                <h3 class="tier__name">${tier.name}</h3>
                <p class="tier__blurb">${tier.blurb}</p>
              </div>
              <div class="tier__badges">
                <span class="tier__duration">${tier.duration}</span>
                <span class="tier__level">${tier.level}</span>
              </div>
            </header>
            <ol class="tier__modules">${modules}</ol>
          </article>`;
      }).join('');
    }
  }

  function pad(n) { return n < 10 ? '0' + n : '' + n; }

  function computeDurationRange(tiers) {
    if (!Array.isArray(tiers) || !tiers.length) return '';
    const nums = [];
    tiers.forEach((t) => {
      (String(t.duration).match(/\d+/g) || []).forEach((n) => nums.push(parseInt(n, 10)));
    });
    if (!nums.length) return tiers[0].duration || '';
    const min = Math.min.apply(null, nums);
    const max = Math.max.apply(null, nums);
    return min === max ? min + ' Months' : min + ' – ' + max + ' Months';
  }

  /* ---------- Course hero entrance ---------- */
  function initCourseHero() {
    document.querySelectorAll('.c-hero__title .line').forEach((line) => {
      if (!line.querySelector('.line__inner')) {
        const inner = document.createElement('span');
        inner.className = 'line__inner';
        inner.style.display = 'inline-block';
        inner.innerHTML = line.innerHTML;
        line.innerHTML = '';
        line.appendChild(inner);
      }
    });
    if (!window.gsap) return;
    gsap.set('.c-hero__title .line__inner', { yPercent: 110 });
    gsap.to('.c-hero__title .line__inner', {
      yPercent: 0,
      duration: 1.4,
      ease: 'expo.out',
      stagger: 0.1,
      delay: 0.6,
    });

    gsap.from('.c-hero__meta, .c-hero__sub, .c-hero__stats li, .c-hero__ctas', {
      opacity: 0, y: 24, duration: 0.9,
      ease: 'power3.out',
      stagger: 0.08,
      delay: 0.9,
      clearProps: 'transform,opacity',
    });
  }

  /* ---------- Tech chip stagger ---------- */
  function initTechReveal() {
    if (!window.ScrollTrigger) return;
    gsap.from('.tech__chip', {
      opacity: 0, y: 24, scale: 0.96,
      duration: 0.7,
      ease: 'power3.out',
      stagger: { amount: 0.4, from: 'start' },
      clearProps: 'opacity,transform',
      scrollTrigger: { trigger: '.tech__grid', start: 'top 95%', once: true },
    });
  }

  /* ---------- Stacked tiers reveal ---------- */
  function initTiers() {
    if (!window.ScrollTrigger) return;
    document.querySelectorAll('.tier').forEach((tier) => {
      gsap.from(tier, {
        opacity: 0, y: 50,
        duration: 0.9, ease: 'power3.out',
        clearProps: 'opacity,transform',
        scrollTrigger: { trigger: tier, start: 'top 88%', once: true },
      });
      gsap.from(tier.querySelectorAll('.tier__module'), {
        opacity: 0, y: 24,
        duration: 0.6, ease: 'power3.out',
        stagger: 0.05,
        clearProps: 'opacity,transform',
        scrollTrigger: { trigger: tier, start: 'top 80%', once: true },
      });
    });
  }

  /* ---------- Project visuals: color shading + parallax ---------- */
  function initProjectVisuals() {
    document.querySelectorAll('.p-card').forEach((card) => {
      const visual = card.querySelector('.p-card__visual');
      const shade = visual?.dataset.shade;
      if (visual && shade) visual.style.setProperty('--p-shade', shade);

      gsap.from(card, {
        opacity: 0, y: 50,
        duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: card, start: 'top 88%' },
      });

      if (visual) {
        card.addEventListener('pointermove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width - 0.5;
          const y = (e.clientY - rect.top) / rect.height - 0.5;
          gsap.to(visual, { x: x * 16, y: y * 12, duration: 0.6, ease: 'power3.out' });
        });
        card.addEventListener('pointerleave', () => {
          gsap.to(visual, { x: 0, y: 0, duration: 0.7, ease: 'power3.out' });
        });
      }
    });
  }

  /* ---------- Career rail ---------- */
  function initCareerRail() {
    if (!window.ScrollTrigger) return;
    gsap.from('.career__step', {
      opacity: 0, y: 30,
      duration: 0.8, ease: 'power3.out',
      stagger: 0.08,
      scrollTrigger: { trigger: '.career__rail', start: 'top 85%' },
    });
  }

  /* ---------- Mentors ---------- */
  function initMentors() {
    document.querySelectorAll('.mentor__card').forEach((card) => {
      const photo = card.querySelector('.mentor__photo');
      const tone = photo?.dataset.tone;
      if (photo && tone) photo.style.setProperty('--mentor-tone', tone);

      gsap.from(card, {
        opacity: 0, y: 40,
        duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: card, start: 'top 88%' },
      });
    });
  }

  /* ---------- FAQ ---------- */
  function initFaq() {
    document.querySelectorAll('.faq__item').forEach((item) => {
      const summary = item.querySelector('summary');
      const body = item.querySelector('p');
      if (!summary || !body) return;

      summary.addEventListener('click', (e) => {
        e.preventDefault();
        const open = item.hasAttribute('open');
        if (open) {
          gsap.to(body, {
            height: 0, opacity: 0, paddingTop: 0, paddingBottom: 0,
            duration: 0.4, ease: 'power3.inOut',
            onComplete() { item.removeAttribute('open'); body.style.cssText = ''; },
          });
        } else {
          item.setAttribute('open', '');
          gsap.fromTo(body,
            { height: 0, opacity: 0, paddingTop: 0, paddingBottom: 0 },
            { height: 'auto', opacity: 1, paddingTop: 0, paddingBottom: 32,
              duration: 0.5, ease: 'power3.out',
              onComplete() { body.style.height = ''; } });
        }
      });

      gsap.from(item, {
        opacity: 0, y: 20,
        duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: item, start: 'top 92%' },
      });
    });
  }
})();
