import React, { useState, useRef, useEffect, useCallback } from "react";
import "../project-lab.css";

export default function ProjectSectionUnified() {
  const containerRef = useRef(null);
  const [zoomedImage, setZoomedImage] = useState(null);

  const baseItems = [
    { id: "p1", type: "img", src: "assets/img/project/cosmetic.png" },
    { id: "p2", type: "img", src: "assets/img/project/food.png" },
    { id: "p3", type: "img", src: "assets/img/project/arat.png" },
    { id: "p4", type: "img", src: "assets/img/project/arat1.png" },
    { id: "p5", type: "img", src: "assets/img/project/irankala.png" },
  ];

  const getRandomPositions = (containerWidth, containerHeight) => {
    const padding = 20;
    const used = [];
    const ITEM_SIZE = 250; // اندازه بزرگ دسکتاپ
    return baseItems.map((it) => {
      let left, top;
      let tries = 0;
      do {
        left = Math.random() * (containerWidth - ITEM_SIZE - padding) + padding / 2;
        top = Math.random() * (containerHeight - ITEM_SIZE - padding) + padding / 2;
        tries++;
      } while (
        used.some(
          (p) =>
            Math.abs(p.left - left) < ITEM_SIZE * 0.8 &&
            Math.abs(p.top - top) < ITEM_SIZE * 0.8
        ) &&
        tries < 50
      );
      used.push({ left, top });
      return { ...it, left, top };
    });
  };

  const [items, setItems] = useState([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    setItems(getRandomPositions(rect.width, rect.height));
  }, []);

  const itemRefs = useRef({});
  const posRef = useRef({});
  const draggingRef = useRef({
    id: null,
    startX: 0,
    startY: 0,
    origLeft: 0,
    origTop: 0,
    recent: [],
    inertiaFrame: null,
    isTouch: false,
  });

  const clampPosition = (left, top, rect, el) => {
    if (!el) return { left, top };
    const itemWidth = el.offsetWidth;
    const itemHeight = el.offsetHeight;
    return {
      left: Math.min(Math.max(left, 0), rect.width - itemWidth),
      top: Math.min(Math.max(top, 0), rect.height - itemHeight),
    };
  };

  const applyTransform = (id, left, top, vx = 0) => {
    const el = itemRefs.current[id];
    if (!el) return;
    const rot = Math.max(Math.min(vx * 0.06, 6), -6);
    el.style.transform = `translate3d(${Math.round(left)}px, ${Math.round(top)}px, 0) rotate(${rot}deg)`;
  };

  const startInertia = useCallback((id, initVx, initVy) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const el = itemRefs.current[id];
    let left = posRef.current[id]?.left ?? 0;
    let top = posRef.current[id]?.top ?? 0;
    let vx = initVx;
    let vy = initVy;
    const friction = 0.92;
    const minSpeed = 0.35;

    if (draggingRef.current.inertiaFrame) {
      cancelAnimationFrame(draggingRef.current.inertiaFrame);
      draggingRef.current.inertiaFrame = null;
    }

    const step = () => {
      left += vx;
      top += vy;
      vx *= friction;
      vy *= friction;
      const clamped = clampPosition(left, top, rect, el);
      if (clamped.left !== left) vx = -vx * 0.36;
      if (clamped.top !== top) vy = -vy * 0.36;
      left = clamped.left;
      top = clamped.top;

      posRef.current[id] = { left, top };
      applyTransform(id, left, top, vx);

      if (Math.hypot(vx, vy) >= minSpeed) {
        draggingRef.current.inertiaFrame = requestAnimationFrame(step);
      } else {
        draggingRef.current.inertiaFrame = null;
      }
    };

    draggingRef.current.inertiaFrame = requestAnimationFrame(step);
  }, []);

  const onPointerMove = (e) => {
    if (!draggingRef.current.id) return;
    const d = draggingRef.current;
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = d.isTouch ? e.touches[0].clientX : e.clientX;
    const clientY = d.isTouch ? e.touches[0].clientY : e.clientY;

    let newLeft = d.origLeft + (clientX - d.startX);
    let newTop = d.origTop + (clientY - d.startY);
    const clamped = clampPosition(newLeft, newTop, rect, itemRefs.current[d.id]);
    posRef.current[d.id] = { left: clamped.left, top: clamped.top };
    applyTransform(d.id, clamped.left, clamped.top, clientX - d.startX);

    const now = performance.now();
    d.recent.push({ x: clientX, y: clientY, t: now });
    if (d.recent.length > 10) d.recent.shift();
  };

  const stopDragging = () => {
    const d = draggingRef.current;
    if (!d.id) return;
    if (!d.isTouch && d.recent.length >= 2) {
      let vx = 0, vy = 0;
      const last = d.recent[d.recent.length - 1];
      let refSample = d.recent[0];
      for (let i = d.recent.length - 2; i >= 0; i--) {
        if (last.t - d.recent[i].t > 70) {
          refSample = d.recent[i];
          break;
        }
      }
      const dt = last.t - refSample.t || 16;
      vx = ((last.x - refSample.x) / dt) * 16.66;
      vy = ((last.y - refSample.y) / dt) * 16.66;
      startInertia(d.id, vx, vy);
    }
    d.id = null;
    d.recent = [];
    document.body.style.userSelect = "";
  };

  useEffect(() => {
    window.addEventListener("mousemove", onPointerMove);
    window.addEventListener("mouseup", stopDragging);
    window.addEventListener("touchmove", onPointerMove, { passive: false });
    window.addEventListener("touchend", stopDragging);
    window.addEventListener("touchcancel", stopDragging);
    return () => {
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("mouseup", stopDragging);
      window.removeEventListener("touchmove", onPointerMove);
      window.removeEventListener("touchend", stopDragging);
      window.removeEventListener("touchcancel", stopDragging);
    };
  }, [startInertia]);

  const handlePointerDown = (e, item) => {
    const isTouch = e.type.startsWith("touch");
    const clientX = isTouch ? e.touches[0].clientX : e.clientX;
    const clientY = isTouch ? e.touches[0].clientY : e.clientY;

    draggingRef.current = {
      id: item.id,
      startX: clientX,
      startY: clientY,
      origLeft: posRef.current[item.id]?.left ?? item.left,
      origTop: posRef.current[item.id]?.top ?? item.top,
      recent: [{ x: clientX, y: clientY, t: performance.now() }],
      inertiaFrame: null,
      isTouch,
    };
    document.body.style.userSelect = "none";

    const handleClickCheck = (upEvent) => {
      const endX = isTouch ? upEvent.changedTouches[0].clientX : upEvent.clientX;
      const endY = isTouch ? upEvent.changedTouches[0].clientY : upEvent.clientY;
      if (Math.hypot(endX - clientX, endY - clientY) < 5 && item.type === "img") {
        setZoomedImage(item.src);
      }
      if (isTouch) window.removeEventListener("touchend", handleClickCheck);
      else window.removeEventListener("mouseup", handleClickCheck);
    };
    if (isTouch) window.addEventListener("touchend", handleClickCheck);
    else window.addEventListener("mouseup", handleClickCheck);
  };

  return (
    <section className="project-section lab" id="project-section">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="section-title" style={{ fontFamily: '"Clash Display", sans-serif', fontWeight: 600, fontSize: "2.5rem", color: "#00cfff" }}>
            Projects
          </h2>
        </div>

        <div className="lab-container" ref={containerRef}>
          {items.map((item, idx) => (
            <div
              key={item.id}
              ref={(el) => (itemRefs.current[item.id] = el)}
              className="lab-item"
              style={{ transform: `translate3d(${item.left}px, ${item.top}px, 0)`, zIndex: 100 + idx }}
              onMouseDown={(e) => handlePointerDown(e, item)}
              onTouchStart={(e) => handlePointerDown(e, item)}
            >
              <div className="lab-item__inner">
                <img src={item.src} alt={item.id} draggable="false" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {zoomedImage && (
        <div
          onClick={() => setZoomedImage(null)}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 99999,
            backdropFilter: "blur(6px)",
          }}
        >
          <img
            src={zoomedImage}
            alt="zoomed"
            style={{
              maxWidth: "80vw",
              maxHeight: "80vh",
              borderRadius: "16px",
              boxShadow: "0 0 40px rgba(0,0,0,0.5)",
              transition: "transform 0.3s ease",
            }}
          />
        </div>
      )}
    </section>
  );
}
