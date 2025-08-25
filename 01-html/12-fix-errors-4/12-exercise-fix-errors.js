const results12 = [];

// Use shared TU helpers

(async () => {
  const page = await TU.getSourceHTML();
  const section = TU.getFirstSectionHTML(page);

  if (!section) {
    results12.push('<div class="fail">❌ Hittade ingen &lt;section&gt; i källtexten</div>');
  } else {
    // nav + a: minst 3 korrekt par av <a></a> med href och text
    if (TU.hasPair(section, 'nav')) {
      const navInner = TU.firstPairInner(section, 'nav');
      const aPairs = navInner.match(/<a\b[^>]*>[\s\S]*?<\/a>/gi) || [];
      const hasMin = aPairs.length >= 3;
      const textOk = aPairs.every(a => TU.stripTags(a).length > 0);
      const hrefOk = aPairs.every(a => /\bhref\s*=\s*("[^"]+"|'[^']+')/i.test(a));
      const ok = hasMin && textOk && hrefOk;
      results12.push(
        ok
          ? '<div class="pass">✔️ Nav-länkar har starttag, href, innehåll och sluttag (minst 3)</div>'
          : '<div class="fail">❌ Nav-länkar saknar href, innehåll, sluttag eller är färre än 3</div>'
      );
    } else {
      results12.push('<div class="fail">❌ nav saknas eller är inte korrekt stängd</div>');
    }

    // h1
    if (TU.hasPair(section, 'h1')) {
      const inner = TU.firstPairInner(section, 'h1');
      results12.push(TU.stripTags(inner).length > 0 ? '<div class="pass">✔️ h1 har starttag, innehåll och sluttag</div>' : '<div class="fail">❌ h1 saknar innehåll</div>');
    } else {
      results12.push('<div class="fail">❌ h1 saknas eller är inte korrekt stängd</div>');
    }

    // form med label, input, button
    if (TU.hasPair(section, 'form')) {
      const fi = TU.firstPairInner(section, 'form');
      const labels = fi.match(/<label\b[^>]*>[\s\S]*?<\/label>/gi) || [];
      const inputs = fi.match(/<input\b[^>]*>/gi) || [];
      const buttons = fi.match(/<button\b[^>]*>[\s\S]*?<\/button>/gi) || [];
  const labelOk = labels.length >= 1 && labels.every(l => TU.stripTags(l).length > 0);
      const inputOk = inputs.length >= 1; // input saknar sluttagg, endast >
  const buttonOk = buttons.length >= 1 && buttons.every(b => TU.stripTags(b).length > 0);
      const ok = labelOk && inputOk && buttonOk;
      results12.push(ok ? '<div class="pass">✔️ form har label, input och button korrekt</div>' : '<div class="fail">❌ form-element saknar starttag, innehåll eller sluttag</div>');
    } else {
      results12.push('<div class="fail">❌ form saknas eller är inte korrekt stängd</div>');
    }
  }

  const firstRenderedSection = document.querySelector('section');
  firstRenderedSection && firstRenderedSection.insertAdjacentHTML('beforeend', results12.join(''));
})();
