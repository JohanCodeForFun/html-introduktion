const results = [];

/* ============================
  Kör tester i FÖRSTA <section>
============================ */
(async () => {
  const page = await TU.getSourceHTML();
  const section = TU.getFirstSectionHTML(page);

  if (!section) {
    results.push('<div class="fail">❌ Hittade ingen &lt;section&gt; i källtexten</div>');
  } else {
    // h1: exakt en + innehåll
    const h1Count = TU.countPairs(section, "h1");
    if (h1Count === 1) {
      const h1Inner = TU.firstPairInner(section, "h1");
      if (TU.stripTags(h1Inner).length > 0) {
        results.push('<div class="pass">✔️ h1 finns exakt en gång och har innehåll</div>');
        // Heuristik: om h1 innehåller ett långt textstycke i ett <span> kan det vara tänkt som ett p-element
        if (/<span[\s\S]*?>[\s\S]{40,}?<\/span>/i.test(h1Inner)) {
          results.push('<div class="fail">❌ Lång text ligger i &lt;span&gt; inuti &lt;h1&gt; – flytta texten till ett separat &lt;p&gt; efter rubriken</div>');
        }
      } else {
        results.push('<div class="fail">❌ h1 saknar innehåll</div>');
      }
    } else if (h1Count === 0) {
      results.push('<div class="fail">❌ h1 saknas i första section</div>');
    } else {
      results.push('<div class="fail">❌ h1 finns fler än en gång i första section</div>');
    }

    // p: minst en och inga tomma (mer specifikt felmeddelande om helt saknas)
    if (TU.hasPair(section, "p")) {
      const pPairs = section.match(/<p\b[\s\S]*?<\/p>/gi) || [];
      const emptyCount = pPairs.filter(p => TU.stripTags(p).length === 0).length;
      if (emptyCount === 0) {
        results.push('<div class="pass">✔️ p-taggar har start-/sluttagg och innehåll</div>');
      } else {
        results.push(`<div class="fail">❌ ${emptyCount} p-taggar saknar innehåll</div>`);
      }
    } else {
      results.push('<div class="fail">❌ Inga &lt;p&gt; element hittades – flytta löptext ur &lt;h1&gt; till &lt;p&gt;</div>');
    }

    // ul + li: exakt struktur – identifiera även textnoder utanför <li>
    const ulMatch = section.match(/<ul\b[\s\S]*?<\/ul>/i);
    if (!ulMatch) {
      results.push('<div class="fail">❌ ul saknas eller är inte korrekt stängd i första section</div>');
    } else {
      const ulHTML = ulMatch[0];
      const liInners = TU.getAllLiPairs(ulHTML);
      const nonEmptyLiCount = liInners.filter(x => TU.stripTags(x).length > 0).length;
      // Leta efter textfragment utanför li
      const inner = ulHTML.replace(/^<ul[^>]*>|<\/ul>$/g, '');
      const strayText = inner
        .replace(/<li[\s\S]*?<\/li>/gi, ' ') // ersätt li med mellanslag
        .replace(/<[^>]*>/g, '') // ta bort andra ev. taggar
        .trim();
      if (strayText.length > 0) {
        results.push('<div class="fail">❌ Text inne i &lt;ul&gt; men utanför &lt;li&gt; måste kapslas i &lt;li&gt;</div>');
      }
      if (nonEmptyLiCount >= 3 && strayText.length === 0) {
        results.push('<div class="pass">✔️ ul har minst tre li med innehåll</div>');
      } else if (nonEmptyLiCount < 3) {
        results.push('<div class="fail">❌ Minst tre &lt;li&gt; med innehåll krävs (just nu: ' + nonEmptyLiCount + ')</div>');
      }
    }

    // img: endast FÖRSTA i FÖRSTA section
    const imgTag = TU.firstImgTag(section);
    if (imgTag) {
      const hasSrc = /\bsrc\s*=\s*("[^"]+"|'[^']+')/i.test(imgTag);
      const hasAlt = /\balt\s*=\s*("[^"]+"|'[^']+')/i.test(imgTag);
      const emptySrc = /\bsrc\s*=\s*(""|'')/i.test(imgTag);
      if (hasSrc && !emptySrc && hasAlt) {
        results.push('<div class="pass">✔️ första img har src och alt med innehåll</div>');
      } else {
        if (!hasSrc || emptySrc) results.push('<div class="fail">❌ img saknar src eller src är tom</div>');
        if (!hasAlt) results.push('<div class="fail">❌ img saknar alt attribut</div>');
      }
    } else {
      results.push('<div class="fail">❌ Ingen img hittades</div>');
    }

    // button: kontrollera även felstavat <buton>
    if (/<buton\b/i.test(section)) {
      results.push('<div class="fail">❌ Felstavat &lt;buton&gt; – ska vara &lt;button&gt;</div>');
    }
    if (TU.hasPair(section, "button")) {
      const btnInner = TU.firstPairInner(section, "button");
      if (TU.stripTags(btnInner).length > 0) {
        results.push('<div class="pass">✔️ första button har innehåll</div>');
      } else {
        results.push('<div class="fail">❌ första button saknar innehåll</div>');
      }
    } else if (!/<buton\b/i.test(section)) {
      results.push('<div class="fail">❌ button saknas i första section</div>');
    }
  }

  // Visa resultaten i den renderade sidans första <section>
  const firstRenderedSection = document.querySelector('section');
  firstRenderedSection
    ? firstRenderedSection.insertAdjacentHTML('beforeend', results.join(''))
    : console.warn('Hittade ingen renderad <section> att skriva resultat i.');
})();
