/* =====================================================
   DNDC — Three.js artistic scene
   A soft, organic, displaced plane that follows the
   mouse. No particles, no globes — just fluid form.
   ===================================================== */

window.DNDCScene = (function () {
  // ---------- Shaders ----------
  const vertexShader = /* glsl */ `
    varying vec2 vUv;
    varying float vDispl;
    uniform float uTime;
    uniform vec2 uMouse;
    uniform float uIntensity;

    // 3D simplex-style noise (compact, smooth)
    vec3 mod289(vec3 x){return x - floor(x * (1.0/289.0)) * 289.0;}
    vec4 mod289(vec4 x){return x - floor(x * (1.0/289.0)) * 289.0;}
    vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}
    vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

    float snoise(vec3 v){
      const vec2 C = vec2(1.0/6.0, 1.0/3.0);
      const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
      vec3 i  = floor(v + dot(v, C.yyy));
      vec3 x0 = v - i + dot(i, C.xxx);
      vec3 g = step(x0.yzx, x0.xyz);
      vec3 l = 1.0 - g;
      vec3 i1 = min(g.xyz, l.zxy);
      vec3 i2 = max(g.xyz, l.zxy);
      vec3 x1 = x0 - i1 + C.xxx;
      vec3 x2 = x0 - i2 + C.yyy;
      vec3 x3 = x0 - D.yyy;
      i = mod289(i);
      vec4 p = permute(permute(permute(
                i.z + vec4(0.0, i1.z, i2.z, 1.0))
              + i.y + vec4(0.0, i1.y, i2.y, 1.0))
              + i.x + vec4(0.0, i1.x, i2.x, 1.0));
      float n_ = 0.142857142857;
      vec3 ns = n_ * D.wyz - D.xzx;
      vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
      vec4 x_ = floor(j * ns.z);
      vec4 y_ = floor(j - 7.0 * x_ );
      vec4 x = x_ * ns.x + ns.yyyy;
      vec4 y = y_ * ns.x + ns.yyyy;
      vec4 h = 1.0 - abs(x) - abs(y);
      vec4 b0 = vec4(x.xy, y.xy);
      vec4 b1 = vec4(x.zw, y.zw);
      vec4 s0 = floor(b0)*2.0 + 1.0;
      vec4 s1 = floor(b1)*2.0 + 1.0;
      vec4 sh = -step(h, vec4(0.0));
      vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
      vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
      vec3 p0 = vec3(a0.xy, h.x);
      vec3 p1 = vec3(a0.zw, h.y);
      vec3 p2 = vec3(a1.xy, h.z);
      vec3 p3 = vec3(a1.zw, h.w);
      vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
      p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
      vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
      m = m * m;
      return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
    }

    void main(){
      vUv = uv;
      vec3 pos = position;

      // base flowing noise
      float n = snoise(vec3(pos.xy * 1.3, uTime * 0.18)) * 0.6;
      // secondary slow swell
      float n2 = snoise(vec3(pos.xy * 0.5 + 4.0, uTime * 0.08)) * 0.35;
      // mouse-driven distortion focused around cursor
      vec2 m = uMouse * 1.6;
      float mouseDist = length(pos.xy - m);
      float mouseInfl = exp(-mouseDist * 1.4) * uIntensity;

      float displ = (n + n2) * 0.5 + mouseInfl * 0.45;
      vDispl = displ;
      pos.z += displ;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `;

  const fragmentShader = /* glsl */ `
    varying vec2 vUv;
    varying float vDispl;
    uniform float uTime;
    uniform vec3 uColorA;
    uniform vec3 uColorB;
    uniform vec3 uColorC;

    void main(){
      // soft gradient between three warm tones, modulated by displacement
      float t = smoothstep(-0.6, 0.6, vDispl);
      vec3 mid = mix(uColorA, uColorB, smoothstep(0.0, 0.6, vUv.y));
      vec3 col = mix(mid, uColorC, t);

      // gentle vignette
      float dist = length(vUv - 0.5);
      float vignette = smoothstep(0.85, 0.25, dist);
      col *= vignette;

      // film grain
      float grain = (fract(sin(dot(vUv * uTime * 0.01, vec2(12.9898, 78.233))) * 43758.5453) - 0.5) * 0.04;
      col += grain;

      gl_FragColor = vec4(col, 1.0);
    }
  `;

  // ---------- Scene factory ----------
  function init(mountEl, opts = {}) {
    if (!mountEl || typeof THREE === 'undefined') return null;

    const palette = opts.palette || {
      a: [0.08, 0.06, 0.05],   // deep warm black
      b: [0.45, 0.22, 0.10],   // rust
      c: [0.85, 0.47, 0.26],   // muted orange
    };

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const { clientWidth: w, clientHeight: h } = mountEl;
    renderer.setSize(w, h);
    mountEl.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 100);
    camera.position.z = 3.4;

    // high subdivision plane → smooth displacement
    const geom = new THREE.PlaneGeometry(4.5, 4.5, 220, 220);
    const mat = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime:      { value: 0 },
        uMouse:     { value: new THREE.Vector2(0, 0) },
        uIntensity: { value: 0 },
        uColorA:    { value: new THREE.Color().fromArray(palette.a) },
        uColorB:    { value: new THREE.Color().fromArray(palette.b) },
        uColorC:    { value: new THREE.Color().fromArray(palette.c) },
      },
      transparent: true,
    });

    const mesh = new THREE.Mesh(geom, mat);
    mesh.rotation.x = -0.25;
    mesh.rotation.z = 0.15;
    scene.add(mesh);

    // ---------- mouse handling ----------
    const mouseTarget = { x: 0, y: 0 };
    const mouseSmooth = { x: 0, y: 0 };
    const intensityTarget = { v: 0 };
    const intensitySmooth = { v: 0 };

    function onPointerMove(e) {
      const rect = mountEl.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseTarget.x = nx;
      mouseTarget.y = ny;
      intensityTarget.v = 1;
    }
    function onPointerLeave() { intensityTarget.v = 0; }

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    mountEl.addEventListener('pointerleave', onPointerLeave);

    // ---------- resize ----------
    function resize() {
      const w = mountEl.clientWidth;
      const h = mountEl.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }
    const resizeObs = new ResizeObserver(resize);
    resizeObs.observe(mountEl);

    // ---------- animation loop ----------
    const clock = new THREE.Clock();
    let rafId = null;
    let running = true;

    function tick() {
      if (!running) return;
      const dt = clock.getDelta();
      const t = clock.elapsedTime;

      mouseSmooth.x += (mouseTarget.x - mouseSmooth.x) * Math.min(dt * 4, 1);
      mouseSmooth.y += (mouseTarget.y - mouseSmooth.y) * Math.min(dt * 4, 1);
      intensitySmooth.v += (intensityTarget.v - intensitySmooth.v) * Math.min(dt * 2.5, 1);

      mat.uniforms.uTime.value = t;
      mat.uniforms.uMouse.value.set(mouseSmooth.x, mouseSmooth.y);
      mat.uniforms.uIntensity.value = intensitySmooth.v;

      // very gentle drift of the mesh itself
      mesh.rotation.z = 0.15 + Math.sin(t * 0.18) * 0.04;
      mesh.position.y = Math.sin(t * 0.22) * 0.06;

      renderer.render(scene, camera);
      rafId = requestAnimationFrame(tick);
    }
    tick();

    // pause when offscreen for perf
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if (!running) { running = true; clock.start(); tick(); }
      } else {
        running = false;
        if (rafId) cancelAnimationFrame(rafId);
      }
    }, { threshold: 0.01 });
    io.observe(mountEl);

    return {
      destroy() {
        running = false;
        if (rafId) cancelAnimationFrame(rafId);
        window.removeEventListener('pointermove', onPointerMove);
        mountEl.removeEventListener('pointerleave', onPointerLeave);
        resizeObs.disconnect();
        io.disconnect();
        geom.dispose();
        mat.dispose();
        renderer.dispose();
        if (renderer.domElement.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement);
      },
    };
  }

  return { init };
})();
