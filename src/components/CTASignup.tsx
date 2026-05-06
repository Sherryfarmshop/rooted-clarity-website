"use client";
import { useEffect, useRef } from "react";

export default function CTASignup() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let w = canvas.offsetWidth, h = canvas.offsetHeight;
    canvas.width = w; canvas.height = h;
    let t = 0, animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < 3; i++) {
        const x = w * (0.2 + 0.3 * i) + Math.sin(t * 0.0004 + i * 2) * 60;
        const y = h * 0.5 + Math.cos(t * 0.0003 + i) * 40;
        const grad = ctx.createRadialGradient(x, y, 0, x, y, w * 0.3);
        grad.addColorStop(0, `rgba(201,168,76,0.04)`);
        grad.addColorStop(1, `rgba(201,168,76,0)`);
        ctx.fillStyle = grad; ctx.beginPath(); ctx.arc(x, y, w * 0.3, 0, Math.PI * 2); ctx.fill();
      }
      t++; animId = requestAnimationFrame(draw);
    };
    draw();
    const resize = () => { w = canvas.offsetWidth; h = canvas.offsetHeight; canvas.width = w; canvas.height = h; };
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <section
      id="signup"
      className="relative px-6 py-10 sm:py-12 text-center overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0e2218 0%, #1B3A2A 40%, #152d20 80%, #0e2218 100%)" }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 45% at 50% 55%, rgba(201,168,76,0.06) 0%, transparent 70%)" }} />
      <div className="absolute inset-0 pointer-events-none opacity-15" style={{ background: "radial-gradient(ellipse 80% 40% at 50% 0%, rgba(255,255,255,0.05) 0%, transparent 60%)" }} />

      <div className="relative z-10 max-w-2xl mx-auto">

        <p className="text-[#C9A84C]/60 text-xs font-normal uppercase tracking-widest mb-3">
          Rooted Clarity Health
        </p>

        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white font-bold leading-tight mb-3">
          Finally understand what your body<br className="hidden sm:block" />
          <span style={{ color: "#b8893a" }}> has been trying to say.</span>
        </h2>

        <div className="mb-5 space-y-0.5">
          <p className="text-green-100/70 text-sm leading-relaxed">
            Your labs, symptoms, energy, and metabolism all tell a story.
          </p>
          <p className="text-green-100 text-sm font-semibold">
            We help you finally understand it.
          </p>
        </div>

        <a
          href="/upload"
          className="inline-block text-[#1a1a1a] font-bold px-8 py-3 rounded-xl text-sm uppercase tracking-widest mb-3 transition-all duration-300 hover:-translate-y-0.5"
          style={{ background: "#C9A84C", boxShadow: "0 4px 20px rgba(201,168,76,0.22)" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#b0873a"; (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 28px rgba(201,168,76,0.28)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#C9A84C"; (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 20px rgba(201,168,76,0.22)"; }}
        >
          Start My Review
        </a>

        <p className="text-green-300/40 text-xs">
          No subscriptions. No overwhelm. Just clarity.
        </p>

      </div>
    </section>
  );
}
