!function(s){
  "use strict";

  // toggle light mode
  s(".switch").on("click", function(){
    s("body").hasClass("light") ? (s("body").removeClass("light"), s(".switch").removeClass("switched")) : (s("body").addClass("light"), s(".switch").addClass("switched"))
  });

  s(document).ready(function(){
    // محافظت برای المان SVG/path که ممکنه وجود نداشته باشه
    var e = document.querySelector(".progress-wrap path");
    var t = 0;

    if (e && typeof e.getTotalLength === "function") {
      try {
        t = e.getTotalLength();
        // init stroke dash only if we have a valid length
        e.style.transition = e.style.WebkitTransition = "none";
        e.style.strokeDasharray = t + " " + t;
        e.style.strokeDashoffset = t;
        // force reflow
        e.getBoundingClientRect();
        e.style.transition = e.style.WebkitTransition = "stroke-dashoffset 10ms linear";
      } catch (err) {
        console.warn("backToTop: could not compute path length:", err);
        t = 0;
      }
    } else {
      // element missing — log (optional) and skip svg-related initialization
      // console.warn("backToTop: .progress-wrap path not found — skipping svg init");
      t = 0;
    }

    // update function only uses svg if t > 0 and element exists
    var o = function(){
      if (!e || t <= 0) return;
      var o = s(window).scrollTop();
      var r = s(document).height() - s(window).height();
      var i = t - (o * t / r);
      // ensure number
      if (isFinite(i)) {
        e.style.strokeDashoffset = i;
      }
    };

    // call update only if svg exists
    if (e && t > 0) {
      o();
      s(window).scroll(o);
    }

    // other behaviors (don't depend on svg)
    jQuery(window).on("scroll", function(){
      jQuery(this).scrollTop() > 50 ? jQuery(".progress-wrap").addClass("active-progress") : jQuery(".progress-wrap").removeClass("active-progress");
    });

    jQuery(".progress-wrap").on("click", function(s){
      s.preventDefault();
      jQuery("html, body").animate({ scrollTop: 0 }, 550);
      return false;
    });
  });
}(jQuery);
