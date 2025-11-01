import React from "react";

export default function BackToTop() {
  return (
    <div className="progress-wrap" id="scrollUp">
      <svg className="progress-circle svg-content" viewBox="0 0 100 100">
        {/* دایره پس‌زمینه */}
        <circle className="progress-bg" cx="50" cy="50" r="45" />
        {/* دایره پیشرفت */}
        <circle className="progress-bar" cx="50" cy="50" r="45" />
        {/* فلش بالا */}
        <polygon points="50,20 35,40 45,40 45,60 55,60 55,40 65,40" />
      </svg>
    </div>
  );
}
