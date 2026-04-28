/**
 * slide-fx.js — 页内元素分层入场动画
 * 所有 slide 引用此脚本，无需各自写动画逻辑
 */
(function () {
  // 按视觉层级定义入场顺序和动画类型
  const LAYERS = [
    { sel: '.kicker',          anim: 'fadeLeft', base: 0   },
    { sel: 'h1',               anim: 'fadeUp',   base: 80  },
    { sel: '.desc',            anim: 'fadeUp',   base: 160 },
    // 内容区各类卡片/行，stagger 间距 55ms
    { sel: '.card, .concept-card, .rule-card, .info-card, .market-card, .submit-box', anim: 'fadeUp', base: 240, stagger: 55 },
    { sel: '.code-block, pre', anim: 'fadeUp',   base: 240, stagger: 55 },
    { sel: '.feature-row, .feature-item, .fi-text', anim: 'fadeUp', base: 260, stagger: 50 },
    { sel: '.tl-step, .step',  anim: 'fadeLeft', base: 240, stagger: 60 },
    { sel: '.event-row',       anim: 'fadeLeft', base: 240, stagger: 55 },
    { sel: '.practice-item',   anim: 'fadeUp',   base: 240, stagger: 50 },
    { sel: '.comp-row',        anim: 'fadeLeft', base: 300, stagger: 45 },
    { sel: '.desc-item',       anim: 'fadeUp',   base: 280, stagger: 60 },
    { sel: '.phase-card',      anim: 'fadeUp',   base: 240, stagger: 50 },
    { sel: '.cmd-row',         anim: 'fadeUp',   base: 240, stagger: 45 },
    { sel: '.plugin-row',      anim: 'fadeLeft', base: 260, stagger: 50 },
    { sel: '.field-card',      anim: 'fadeUp',   base: 240, stagger: 50 },
    { sel: '.priority-item',   anim: 'fadeLeft', base: 240, stagger: 55 },
    { sel: '.summary-item',    anim: 'fadeUp',   base: 320, stagger: 40 },
    { sel: '.fb',              anim: 'fadeIn',   base: 400, stagger: 60 },
    { sel: '.nest-layer',      anim: 'fadeIn',   base: 200, stagger: 120 },
    { sel: '.big-quote',       anim: 'fadeUp',   base: 60  },
    { sel: '.quote-sub',       anim: 'fadeUp',   base: 180 },
    { sel: '.terminal',        anim: 'fadeUp',   base: 240 },
    { sel: '.flow-diagram',    anim: 'fadeUp',   base: 260 },
    { sel: '.dir-tree',        anim: 'fadeUp',   base: 260 },
    { sel: '.scope-table',     anim: 'fadeUp',   base: 340 },
    { sel: '.props-grid',      anim: 'fadeUp',   base: 320 },
    { sel: '.invoke-box, .cmd-box, .tip-box, .highlight-box, .rule-box', anim: 'fadeUp', base: 360, stagger: 60 },
  ];

  const CSS = `
    @keyframes _fadeUp   { from { opacity:0; transform:translateY(18px); } to { opacity:1; transform:translateY(0); } }
    @keyframes _fadeLeft { from { opacity:0; transform:translateX(-16px); } to { opacity:1; transform:translateX(0); } }
    @keyframes _fadeIn   { from { opacity:0; } to { opacity:1; } }
    .fx-hidden { opacity: 0 !important; }
  `;

  function injectCSS() {
    const s = document.createElement('style');
    s.textContent = CSS;
    document.head.appendChild(s);
  }

  function animName(type) {
    return type === 'fadeLeft' ? '_fadeLeft' : type === 'fadeIn' ? '_fadeIn' : '_fadeUp';
  }

  function run() {
    injectCSS();

    // 先隐藏所有目标元素
    const seen = new Set();
    LAYERS.forEach(({ sel }) => {
      document.querySelectorAll(sel).forEach(el => {
        if (!seen.has(el)) {
          el.classList.add('fx-hidden');
          seen.add(el);
        }
      });
    });

    // 按层级依次触发
    LAYERS.forEach(({ sel, anim, base, stagger = 0 }) => {
      document.querySelectorAll(sel).forEach((el, i) => {
        if (!seen.has(el)) return;
        const delay = base + i * stagger;
        setTimeout(() => {
          el.classList.remove('fx-hidden');
          el.style.animation = `${animName(anim)} 0.45s cubic-bezier(0.22,1,0.36,1) both`;
        }, delay);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    // 已加载完毕（如动态注入），稍微延迟确保渲染
    requestAnimationFrame(run);
  }
})();
