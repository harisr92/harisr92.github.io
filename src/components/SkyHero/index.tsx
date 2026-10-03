import React, { FC, useEffect, useRef } from 'react';
import './index.scss';

type RGB = [number, number, number];
type Star = { x: number; y: number; r: number; t: number; th: number };

// Sky keyframes: [progress, top colour, horizon colour]
const SKY_KEYS: [number, RGB, RGB][] = [
  [0.0, [108, 150, 210], [248, 196, 140]],
  [0.3, [72, 86, 160], [240, 150, 140]],
  [0.55, [40, 46, 100], [120, 96, 150]],
  [0.8, [18, 20, 48], [44, 48, 92]],
  [1.0, [9, 10, 28], [24, 27, 60]],
];

// Ridge colours, far to near
const RIDGE_KEYS: [number, string[]][] = [
  [0, ['#6F6FA0', '#50507F', '#34355F']],
  [0.5, ['#3E4275', '#2B2F5C', '#1D2045']],
  [1, ['#1A1D3E', '#121430', '#0A0B1E']],
];

const PHASES = [
  {
    at: 0,
    title: 'Harikrishnan Namboothiri',
    body: 'Senior Backend Engineer. Nine years building APIs that stay up.',
  },
  {
    at: 0.36,
    title: 'Scale is quiet work.',
    body: 'Rails, PostgreSQL and AWS, tuned until the dashboards stop shouting.',
  },
  {
    at: 0.72,
    title: 'Then the traffic arrives.',
    body: 'SaaS platforms taken from MVP to millions of monthly transactions.',
  },
];

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const mix = (c1: RGB, c2: RGB, t: number): RGB =>
  c1.map((v, i) => Math.round(lerp(v, c2[i], t))) as RGB;
const hex = (h: string): RGB =>
  [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16)) as RGB;

function sample<T extends [number, ...unknown[]], R>(
  list: T[],
  p: number,
  fn: (a: T, b: T, t: number) => R,
): R {
  for (let i = 0; i < list.length - 1; i++) {
    const a = list[i];
    const b = list[i + 1];
    if (p <= b[0]) return fn(a, b, (p - a[0]) / (b[0] - a[0]));
  }
  const last = list[list.length - 1];
  return fn(last, last, 0);
}

const SkyHero: FC = () => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);
  const r1Ref = useRef<SVGSVGElement>(null);
  const r2Ref = useRef<SVGSVGElement>(null);
  const r3Ref = useRef<SVGSVGElement>(null);
  const phaseRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const scene = sceneRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    const r1 = r1Ref.current;
    const r2 = r2Ref.current;
    const r3 = r3Ref.current;
    if (!scene || !canvas || !ctx || !r1 || !r2 || !r3) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let W = 0;
    let H = 0;
    let stars: Star[] = [];
    let progress = 0;
    let frame = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = canvas.clientWidth;
      H = canvas.clientHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.round((W * H) / 2600);
      stars = Array.from({ length: n }, () => ({
        x: Math.random() * W,
        y: Math.random() * H * 0.75,
        r: Math.random() * 1.3 + 0.2,
        t: Math.random() * 6.28,
        th: Math.random(),
      }));
    };

    const readScroll = () => {
      const rect = scene.getBoundingClientRect();
      const total = scene.offsetHeight - window.innerHeight;
      progress = Math.min(1, Math.max(0, -rect.top / total));
    };

    const draw = (now: number) => {
      const p = progress;
      const [top, hor] = sample(SKY_KEYS, p, (A, B, t) => [mix(A[1], B[1], t), mix(A[2], B[2], t)]);
      const g = ctx.createLinearGradient(0, 0, 0, H);
      g.addColorStop(0, `rgb(${top})`);
      g.addColorStop(0.72, `rgb(${hor})`);
      g.addColorStop(1, `rgb(${hor})`);
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);

      // Sun sinking behind the ridge
      const sunY = lerp(H * 0.42, H * 0.95, Math.min(1, p / 0.45));
      const sunA = Math.max(0, 1 - p / 0.45);
      if (sunA > 0) {
        const sg = ctx.createRadialGradient(W * 0.62, sunY, 0, W * 0.62, sunY, H * 0.35);
        sg.addColorStop(0, `rgba(255,214,160,${0.55 * sunA})`);
        sg.addColorStop(1, 'rgba(255,214,160,0)');
        ctx.fillStyle = sg;
        ctx.fillRect(0, 0, W, H);
        ctx.fillStyle = `rgba(255,226,180,${sunA})`;
        ctx.beginPath();
        ctx.arc(W * 0.62, sunY, Math.min(W, H) * 0.06, 0, 6.283);
        ctx.fill();
      }

      // Milky Way band, late in the evening
      const mw = Math.max(0, (p - 0.7) / 0.3);
      if (mw > 0) {
        ctx.save();
        ctx.translate(W * 0.5, H * 0.35);
        ctx.rotate(-0.5);
        const b = ctx.createLinearGradient(0, -H * 0.12, 0, H * 0.12);
        b.addColorStop(0, 'rgba(200,190,255,0)');
        b.addColorStop(0.5, `rgba(220,210,255,${0.12 * mw})`);
        b.addColorStop(1, 'rgba(200,190,255,0)');
        ctx.fillStyle = b;
        ctx.fillRect(-W, -H * 0.12, W * 2, H * 0.24);
        ctx.restore();
      }

      // Stars
      const vis = Math.max(0, (p - 0.35) / 0.55);
      if (vis > 0) {
        for (const s of stars) {
          if (s.th > vis + 0.05) continue;
          const tw = reduce ? 1 : 0.65 + 0.35 * Math.sin(now * 0.002 + s.t);
          ctx.fillStyle = `rgba(244,242,255,${Math.min(1, (vis - s.th + 0.05) * 4) * tw})`;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r, 0, 6.283);
          ctx.fill();
        }
      }

      // Ridges: colour + parallax
      const rc = sample(RIDGE_KEYS, p, (A, B, t) =>
        A[1].map((c, i) => `rgb(${mix(hex(c), hex(B[1][i]), t)})`),
      );
      r3.style.fill = rc[0];
      r2.style.fill = rc[1];
      r1.style.fill = rc[2];
      r3.style.transform = `translateY(${p * 6}%)`;
      r2.style.transform = `translateY(${p * 3}%)`;

      // Copy phases
      let idx = 0;
      PHASES.forEach((ph, i) => {
        if (p >= ph.at) idx = i;
      });
      phaseRefs.current.forEach((el, i) => el?.classList.toggle('on', i === idx));
      if (hintRef.current) hintRef.current.style.opacity = p > 0.05 ? '0' : '0.8';
    };

    const loop = (now: number) => {
      // Skip drawing while the hero is fully off screen
      if (scene.getBoundingClientRect().bottom > 0) {
        readScroll();
        draw(now);
      }
      frame = requestAnimationFrame(loop);
    };

    resize();
    window.addEventListener('resize', resize);
    frame = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="sky-scene" id="sky-scene" ref={sceneRef}>
      <div className="sky-stage">
        <canvas className="sky-canvas" ref={canvasRef} aria-hidden="true" />
        <div className="sky-ridges" aria-hidden="true">
          <svg ref={r3Ref} viewBox="0 0 1440 400" preserveAspectRatio="none">
            <path d="M0 220 L140 150 L260 190 L400 90 L520 170 L660 120 L800 180 L950 70 L1090 160 L1230 110 L1440 190 L1440 400 L0 400Z" />
          </svg>
          <svg ref={r2Ref} viewBox="0 0 1440 400" preserveAspectRatio="none">
            <path d="M0 280 L180 210 L330 260 L470 180 L640 250 L790 200 L940 270 L1100 190 L1260 250 L1440 220 L1440 400 L0 400Z" />
          </svg>
          <svg ref={r1Ref} viewBox="0 0 1440 400" preserveAspectRatio="none">
            <path d="M0 330 C200 290 340 350 520 320 C700 290 820 340 1000 310 C1180 280 1300 330 1440 305 L1440 400 L0 400Z" />
            <rect x="1010" y="276" width="46" height="34" rx="2" />
            <path d="M1004 278 A29 29 0 0 1 1062 278Z" />
          </svg>
        </div>

        <div className="sky-copy">
          {PHASES.map((ph, i) => {
            const Title = i === 0 ? 'h1' : 'h2';
            return (
              <div
                key={ph.title}
                className={`sky-phase${i === 0 ? ' on' : ''}`}
                ref={(el) => {
                  phaseRefs.current[i] = el;
                }}
              >
                <Title>{ph.title}</Title>
                <p>{ph.body}</p>
              </div>
            );
          })}
        </div>

        <div className="sky-hint" ref={hintRef}>
          Scroll to watch the evening
        </div>
      </div>
    </div>
  );
};

export default SkyHero;
