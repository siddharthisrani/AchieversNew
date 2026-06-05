/* =====================================================
   DNDC — main behaviour
   Loader, Lenis, GSAP / ScrollTrigger, Three.js mount,
   text reveals, magnetic buttons, custom cursor,
   chatbot, etc.
   ===================================================== */

(function () {
  // ---------- Wait for libs (GSAP etc.) ----------
  document.addEventListener('DOMContentLoaded', boot);

  function boot() {
    if (window.gsap && window.ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
    }

    initCursor();
    initLoader();
    initLenis();
    initNavScroll();
    initHero();
    initHeroVisual();
    initThreeMounts();
    initSectionReveals();
    initCourseCards();
    initAboutStory();
    initCounters();
    initAboutHorizontal();
    initTestimonialRail();
    initFooterChars();
    initMagnetic();
    initChatbot();
  }

  /* ---------- Custom cursor ---------- */
  function initCursor() {
    const cursor = document.getElementById('cursor');
    const dot = document.getElementById('cursorDot');
    if (!cursor || !dot) return;
    if (matchMedia('(hover: none)').matches) return;

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const pos = { x: target.x, y: target.y };
    const dotPos = { x: target.x, y: target.y };

    window.addEventListener('pointermove', (e) => {
      target.x = e.clientX;
      target.y = e.clientY;
    });

    function loop() {
      pos.x += (target.x - pos.x) * 0.18;
      pos.y += (target.y - pos.y) * 0.18;
      dotPos.x += (target.x - dotPos.x) * 0.5;
      dotPos.y += (target.y - dotPos.y) * 0.5;
      cursor.style.transform = `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`;
      dot.style.transform = `translate(${dotPos.x}px, ${dotPos.y}px) translate(-50%, -50%)`;
      requestAnimationFrame(loop);
    }
    loop();

    const hoverable = 'a, button, [data-magnetic], .course-card, .why__item, .t-card, summary';
    document.addEventListener('pointerover', (e) => {
      if (e.target.closest(hoverable)) cursor.classList.add('is-hover');
    });
    document.addEventListener('pointerout', (e) => {
      if (e.target.closest(hoverable)) cursor.classList.remove('is-hover');
    });
  }

  /* ---------- Loader ---------- */
  function initLoader() {
    const loader = document.getElementById('loader');
    if (!loader) return;
    const bar = document.getElementById('loaderBar');
    const count = document.getElementById('loaderCount');
    const sub = loader.querySelector('.loader__sub');

    // Logo SVG handles its own draw-in via CSS keyframes.
    if (sub) gsap.to(sub, { opacity: 1, duration: 0.8, delay: 1.4 });

    if (bar && count) {
      const progress = { v: 0 };
      gsap.to(progress, {
        v: 100,
        duration: 1.6,
        ease: 'power2.inOut',
        delay: 0.9,
        onUpdate() {
          const val = Math.round(progress.v);
          bar.style.width = val + '%';
          count.textContent = val;
        },
      });
    }

    // exit
    gsap.to(loader, {
      autoAlpha: 0,
      duration: 1,
      delay: 2.8,
      ease: 'expo.inOut',
      onComplete() { loader.style.display = 'none'; },
    });
    gsap.from('.nav, .hero__content > *, .hero__meta-item, .hero__scroll', {
      y: 40,
      opacity: 0,
      duration: 1.1,
      stagger: 0.08,
      ease: 'expo.out',
      delay: 3.0,
      clearProps: 'transform,opacity',
    });

    // editorial visual entrance — wipe-up reveal of the photo
    const visual = document.getElementById('heroVisual');
    if (visual) {
      gsap.from(visual.querySelector('.hero__visual-wrap'), {
        clipPath: 'inset(100% 0 0 0)',
        duration: 1.6,
        ease: 'expo.out',
        delay: 3.2,
      });
      gsap.from(visual.querySelector('.hero__visual-caption'), {
        opacity: 0, y: 20,
        duration: 1,
        ease: 'expo.out',
        delay: 4.0,
      });
    }
  }

  /* ---------- Lenis smooth scroll ---------- */
  let lenis = null;
  function initLenis() {
    if (typeof Lenis === 'undefined') return;
    lenis = new Lenis({
      duration: 1.2,
      smoothTouch: false,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    if (window.ScrollTrigger) {
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((t) => lenis.raf(t * 1000));
      gsap.ticker.lagSmoothing(0);
    }

    // anchor links → lenis scroll
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener('click', (e) => {
        const id = a.getAttribute('href');
        if (id && id.length > 1) {
          const tgt = document.querySelector(id);
          if (tgt) {
            e.preventDefault();
            lenis.scrollTo(tgt, { offset: -40 });
          }
        }
      });
    });
  }

  /* ---------- Nav scroll style ---------- */
  function initNavScroll() {
    const nav = document.getElementById('nav');
    if (!nav) return;
    let hidden = false;
    let lastY = 0;
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      const down = y > lastY;
      if (y > 200 && down && !hidden) {
        gsap.to(nav, { y: -120, duration: 0.5, ease: 'expo.out' });
        hidden = true;
      } else if ((!down || y < 100) && hidden) {
        gsap.to(nav, { y: 0, duration: 0.5, ease: 'expo.out' });
        hidden = false;
      }
      lastY = y;
    }, { passive: true });
  }

  /* ---------- Hero text reveal ---------- */
  function initHero() {
    const title = document.getElementById('heroTitle');
    const sub = document.getElementById('heroSub');
    if (!title) return;

    // Animate each .line by splitting via SplitType
    title.querySelectorAll('.line').forEach((line) => {
      // wrap inner in span for transform
      if (!line.querySelector('.line__inner')) {
        const inner = document.createElement('span');
        inner.className = 'line__inner';
        inner.style.display = 'inline-block';
        inner.innerHTML = line.innerHTML;
        line.innerHTML = '';
        line.appendChild(inner);
      }
    });

    gsap.set('.hero__title .line__inner', { yPercent: 110 });
    gsap.to('.hero__title .line__inner', {
      yPercent: 0,
      duration: 1.4,
      ease: 'expo.out',
      stagger: 0.08,
      delay: 3.1,
    });

    if (sub && window.SplitType) {
      const split = new SplitType(sub, { types: 'words' });
      gsap.set(split.words, { opacity: 0, y: 14 });
      gsap.to(split.words, {
        opacity: 1, y: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.018,
        delay: 3.5,
      });
    }
  }

  /* ---------- Hero editorial visual ---------- */
  function initHeroVisual() {
    if (matchMedia('(hover: none)').matches) return;
    const wrap = document.querySelector('.hero__visual-wrap');
    const img = document.querySelector('.hero__visual-img');
    if (!wrap || !img) return;

    let rect;
    const refresh = () => { rect = wrap.getBoundingClientRect(); };
    refresh();
    window.addEventListener('resize', refresh);
    window.addEventListener('scroll', refresh, { passive: true });

    wrap.addEventListener('pointerenter', refresh);
    wrap.addEventListener('pointermove', (e) => {
      if (!rect) refresh();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      gsap.to(img, {
        x: x * -18, y: y * -18,
        duration: 0.9, ease: 'power3.out',
      });
      gsap.to(wrap, {
        rotateX: -y * 3, rotateY: x * 4,
        transformPerspective: 1200,
        duration: 0.9, ease: 'power3.out',
      });
    });
    wrap.addEventListener('pointerleave', () => {
      gsap.to(img, { x: 0, y: 0, duration: 1, ease: 'power3.out' });
      gsap.to(wrap, { rotateX: 0, rotateY: 0, duration: 1, ease: 'power3.out' });
    });
  }

  /* ---------- Three.js mounts ---------- */
  function initThreeMounts() {
    if (typeof THREE === 'undefined' || !window.DNDCScene) return;
    // Home hero now uses an editorial photograph rather than the shader.
    const courseMount = document.getElementById('courseCanvas');
    if (courseMount) {
      // softer, less saturated palette so the panel never feels muddy
      DNDCScene.init(courseMount, {
        palette: {
          a: [0.055, 0.045, 0.038],   // near-black
          b: [0.18, 0.13, 0.10],      // dark warm grey
          c: [0.78, 0.36, 0.22],      // single warm highlight tip
        },
      });
    }
  }

  /* ---------- Section title reveals ---------- */
  function initSectionReveals() {
    if (!window.ScrollTrigger) return;

    document.querySelectorAll('.section__title').forEach((el) => {
      if (window.SplitType) {
        const split = new SplitType(el, { types: 'lines, words', tagName: 'span' });
        split.lines.forEach((line) => {
          line.style.overflow = 'hidden';
          line.style.display = 'block';
        });
        gsap.set(split.words, { yPercent: 110 });
        gsap.to(split.words, {
          yPercent: 0,
          duration: 1.1,
          ease: 'expo.out',
          stagger: 0.04,
          scrollTrigger: { trigger: el, start: 'top 85%' },
        });
      }
    });

    // section ledes & meta
    document.querySelectorAll('.section__lede, .section__index').forEach((el) => {
      gsap.from(el, {
        opacity: 0, y: 24, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 90%' },
      });
    });
  }

  /* ---------- Course cards ---------- */
  function initCourseCards() {
    document.querySelectorAll('.course-card').forEach((card) => {
      const color = card.dataset.color;
      if (color) card.style.setProperty('--card-color', color);

      gsap.from(card, {
        opacity: 0, y: 32,
        duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: card, start: 'top 92%' },
      });
    });
  }

  /* ---------- About story reveal ---------- */
  function initAboutStory() {
    if (!window.ScrollTrigger) return;
    const words = document.querySelectorAll('.about__head .word');
    if (!words.length) return;
    gsap.to(words, {
      opacity: 1,
      stagger: 0.08,
      ease: 'none',
      scrollTrigger: {
        trigger: '#aboutStory',
        start: 'top 75%',
        end: 'bottom 30%',
        scrub: 0.6,
      },
    });
  }

  /* ---------- Counters ---------- */
  function initCounters() {
    document.querySelectorAll('.counter__num').forEach((el) => {
      const target = parseInt(el.dataset.target, 10);
      if (!target) return;
      const obj = { v: 0 };
      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        once: true,
        onEnter() {
          gsap.to(obj, {
            v: target,
            duration: 2,
            ease: 'power3.out',
            onUpdate() { el.textContent = Math.round(obj.v); },
          });
        },
      });
    });
  }

  /* ---------- About horizontal scroll ---------- */
  function initAboutHorizontal() {
    if (!window.ScrollTrigger) return;
    const wrap = document.getElementById('aboutHorizontal');
    const track = document.getElementById('aboutTrack');
    if (!wrap || !track) return;
    if (window.innerWidth < 860) return;

    const totalScroll = () =>  track.scrollWidth - wrap.clientWidth;;

    gsap.to(track, {
      x: () => -totalScroll(),
      ease: 'none',
      scrollTrigger: {
        trigger: wrap,
        start: 'top top',
        end: () => '+=' + totalScroll(),
        scrub: 0.8,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });
  }

  /* ---------- Testimonial rail (continuous auto-scroll marquee) ---------- */
  function initTestimonialRail() {
    const rail = document.getElementById('testimonialsRail');
    if (!rail) return;

    // Duplicate the cards once so the loop is seamless.
    const originals = Array.from(rail.children);
    if (!originals.length) return;
    originals.forEach((node) => {
      const clone = node.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      rail.appendChild(clone);
    });

    if (!window.gsap) return;

    // Width of the original (non-cloned) set, including the trailing gap.
    const railStyle = getComputedStyle(rail);
    const gap = parseFloat(railStyle.columnGap || railStyle.gap || '0') || 0;
    const loopWidth = () =>
      originals.reduce((sum, el) => sum + el.getBoundingClientRect().width + gap, 0);

    // Speed: pixels per second — slow, editorial drift.
    const SPEED = 55;
    let tween;

    const build = () => {
      if (tween) tween.kill();
      gsap.set(rail, { x: 0 });
      const dist = loopWidth();
      // Because the card set is duplicated, sliding by exactly the width of one
      // set lands the clones precisely where the originals were — so the repeat
      // restart at x:0 is invisible and the end never shows empty space.
      tween = gsap.to(rail, {
        x: -dist,
        duration: dist / SPEED,
        ease: 'none',
        repeat: -1,
      });
    };

    build();
    window.addEventListener('resize', build);

    // Pause on hover, resume on leave.
    rail.addEventListener('mouseenter', () => tween && tween.pause());
    rail.addEventListener('mouseleave', () => tween && tween.play());
  }

  /* ---------- Footer big chars ---------- */
  function initFooterChars() {
    if (!window.ScrollTrigger) return;
    const chars = document.querySelectorAll('.footer__big .footer__char');
    if (!chars.length) return;
    gsap.from(chars, {
      y: 220,
      duration: 1.4,
      ease: 'expo.out',
      stagger: 0.08,
      scrollTrigger: { trigger: '.footer__big', start: 'top 90%' },
    });
  }

  /* ---------- Magnetic buttons ---------- */
  function initMagnetic() {
    if (matchMedia('(hover: none)').matches) return;
    document.querySelectorAll('[data-magnetic]').forEach((el) => {
      let rect;
      function refresh() { rect = el.getBoundingClientRect(); }
      refresh();
      window.addEventListener('resize', refresh);

      el.addEventListener('pointerenter', refresh);
      el.addEventListener('pointermove', (e) => {
        if (!rect) refresh();
        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);
        gsap.to(el, { x: x * 0.25, y: y * 0.35, duration: 0.6, ease: 'power3.out' });
      });
      el.addEventListener('pointerleave', () => {
        gsap.to(el, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1, 0.5)' });
      });
    });
  }

  /* ---------- Chatbot ---------- */
  function initChatbot() {
    const root = document.getElementById('chatbot');
    if (!root) return;
    const toggle = document.getElementById('chatToggle');
    const close = document.getElementById('chatClose');
    const body = document.getElementById('chatBody');
    const form = document.getElementById('chatForm');
    const input = document.getElementById('chatInput');
    const quick = root.querySelectorAll('.chatbot__quick button');

    function open() { root.classList.add('is-open'); setTimeout(() => input?.focus(), 250); }
    function shut() { root.classList.remove('is-open'); }

    toggle?.addEventListener('click', () => {
      root.classList.contains('is-open') ? shut() : open();
    });
    close?.addEventListener('click', shut);

   function addMsg(text, who = 'user') {
  const el = document.createElement('div');
  el.className = `msg msg--${who}`;

  if (who === 'bot') {
    el.innerHTML = `
      <p>${escapeHtml(text)}</p>

      <a
        href="https://wa.me/916261437008?text=Hi%20DNDC%20Team,%20I%20want%20more%20information%20about%20your%20courses."
        target="_blank"
        class="mentor-btn"
      >
        💬 Talk With Our Mentor
      </a>
    `;
  } else {
    el.innerHTML = `<p>${escapeHtml(text)}</p>`;
  }

  body.appendChild(el);
  body.scrollTop = body.scrollHeight;
  return el;
}
    function addTyping() {
      const el = document.createElement('div');
      el.className = 'msg msg--bot msg--typing';
      el.innerHTML = '<span></span><span></span><span></span>';
      body.appendChild(el);
      body.scrollTop = body.scrollHeight;
      return el;
    }
    function escapeHtml(s) {
      return s.replace(/[&<>"']/g, (m) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));
    }

    function reply(question) {
      const q = question.toLowerCase();
      let answer = "Thanks! A counsellor will follow up shortly. In the meantime — any specific course or batch you're curious about?";
      if (/mern|react|node/.test(q)) answer = "MERN Full Stack is 5 months, project-first, with a capstone product. Next batch Every Week.";
      else if (/fee|cost|price|emi/.test(q)) answer = "Fees vary by program — Courses starts at INR 5,000. 0% EMI is available on most courses.";
      else if (/batch|start|schedule/.test(q)) answer = "Next major intake is 15 June 2026. Weekend & weekday cohorts both run.";
      else if (/placement|job/.test(q)) answer = "We've placed 96% of recent cohorts with referrals to 180+ partner companies.";
      else if (/python/.test(q)) answer = "Python Full Stack covers Django, FastAPI, PostgreSQL and modern deploys — 6 months.";
      else if (/ai|ml|data/.test(q)) answer = "AI/ML is 7 months, project-heavy. Data Analytics is 4 months, dashboard-led.";
      else if (/hi|hello|hey/.test(q)) answer = "Hey! Happy to help. Are you exploring development, AI/ML, or data tracks?";
      return answer;
    }

    function send(text) {
      if (!text.trim()) return;
      addMsg(text, 'user');
      const typing = addTyping();
      setTimeout(() => {
        typing.remove();
        addMsg(reply(text), 'bot');
      }, 900 + Math.random() * 600);
    }

    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      const v = input.value;
      input.value = '';
      send(v);
    });
    quick.forEach((b) => b.addEventListener('click', () => send(b.dataset.quick)));
  }
})();
