import React from "react";

export default function BackToTop() {
  return (
    <div className="progress-wrap" id="scrollUp">
      <svg
        className="progress-circle svg-content"
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
      >
        {/* دایره پس‌زمینه */}
        <circle
          cx="50"
          cy="50"
          r="48"
          stroke="#00cfff"
          strokeWidth="4"
          fill="none"
          opacity="0.3"
        />
        {/* دایره پیشرفت */}
        <circle
          cx="50"
          cy="50"
          r="48"
          stroke="#00cfff"
          strokeWidth="4"
          fill="none"
          strokeDasharray="301"
          strokeDashoffset="0"
          strokeLinecap="round"
          transform="rotate(-90 50 50)"
        />
        {/* فلش بالا */}
        <polygon
          points="50,30 40,45 45,45 45,60 55,60 55,45 60,45"
          fill="#00cfff"
        />
      </svg>
    </div>
  );
}
