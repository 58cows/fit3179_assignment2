window.addEventListener("DOMContentLoaded", () => {

  const todayEl = document.getElementById("today");
  if (todayEl) todayEl.textContent = new Date().toISOString().slice(0, 10);


  const v = "v=2025-10-24-5";

  const opt = { actions: false, renderer: "canvas" };

  const charts = [
    ["#vis-map",      `./specs/map_poverty_latest.json?${v}`],
    ["#vis-bar",      `./specs/bar_rank_poverty.json?${v}`],
    ["#vis-scatter",  `./specs/scatter_income_vs_poverty.json?${v}`],
    ["#vis-lollipop", `./specs/lollipop_income_gap.json?${v}`],
    ["#vis-popshare", `./specs/popshare_100_stacked.json?${v}`]
  ];

  charts.forEach(([sel, spec]) => {
    vegaEmbed(sel, spec, opt).catch(err => {
      console.error(`Embed failed for ${spec}:`, err);
      const el = document.querySelector(sel);
      if (el) {
        el.innerHTML =
          `<pre style="color:#b91c1c;white-space:pre-wrap">Embed failed: ${spec}\n${err}</pre>`;
      }
    });
  });
});
