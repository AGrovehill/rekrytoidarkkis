(function () {
  var STRINGS = {
    en: {
      "nav.profile": "Profile",
      "nav.whatido": "What I do",
      "nav.why": "What I'm looking for",
      "nav.experience": "Experience",
      "nav.education": "Education",
      "nav.skills": "Skills",
      "nav.contact": "Contact",

      "hero.eyebrow": "Looking for my next challenge",
      "hero.headline": "Energy Engineer Who Makes Complex Systems Work",
      "hero.lede": "I'm an MSc energy engineer who models and simulates complex energy systems, tests them in practice, and writes the Python tools that make the whole process faster.",
      "hero.downloadCv": "Download CV (PDF)",
      "hero.emailMe": "Email me",
      "hero.location": "Lappeenranta, Finland",

      "section.profile": "Profile",
      "profile.text": "My background is in modelling and simulating complex energy systems: CFD, thermal analysis, and process behaviour, with turbomachinery among the domains I've worked in. Most of my work lives in the overlap: fluid flow, heat transfer, process engineering, simulation, R&D, and optimisation, plus whatever custom tool gets the job done faster. Comfortable in Linux and HPC environments.",

      "section.whatido": "What I do",
      "whatido.summary": "See what that looks like day to day",
      "whatido.b1": "Setting up and running CFD simulations from start to finish: meshing, boundary conditions, results",
      "whatido.b2": "Planning test campaigns: what to measure, how to instrument it, and what the data actually needs to tell us",
      "whatido.b3": "Digging through test and simulation data to see whether the design does what it's supposed to",
      "whatido.b4": "Building process models so we get a picture of how a system behaves before it's even built",
      "whatido.b5": "Writing Python tools once doing the same thing by hand for the fifth time stops making sense",
      "whatido.b6": "Working with mechanical, electrical, and test teams to keep gas turbine R&D moving",
      "whatido.b7": "Writing things down so the next person doesn't have to redo the work",

      "section.why": "What I'm looking for",
      "why.p1": "Three years into my current job, I've become the person people come to for CFD, testing, process modelling, and tooling, often all at once. I've picked up a fair number of different roles along the way, and honestly, I'd like to put a few of them down. What I want now is more focus: room to take one problem all the way to a solid result, instead of juggling ten (of course urgent) things at once.",
      "why.p2": "I also want to work with something I actually believe in. That's why I got into energy engineering in the first place: I wanted a career that moves things in the right direction. I'm especially interested in renewable energy, emissions reduction, and efficiency work.",
      "why.p3": "I'm open to relocating within Finland if the job's worth it. I'm not looking for just any next step: I want something genuinely interesting, technically deep, and worth doing properly.",

      "section.experience": "Experience",
      "exp1.role": "Simulation Engineer",
      "exp1.dates": "2023 — Present",
      "exp1.company": "Aurelia Turbines Oy",
      "exp1.location": "Lappeenranta",
      "exp1.b1": "Run CFD simulations and analyses independently using Cadence Fidelity",
      "exp1.b2": "Plan test rigs and instrumentation, and take part in testing",
      "exp1.b3": "Analyse simulation and test data to validate models and performance",
      "exp1.b4": "Process simulation with OpenModelica",
      "exp1.b5": "Build Python tools to automate workflows and speed up analysis",
      "exp1.b6": "Involved in gas turbine R&D, at both component and system level",

      "exp2.role": "EN–FI Translator",
      "exp2.dates": "2018 — 2025",
      "exp2.company": "Self-employed",
      "exp2.b1": "Translated technical and commercial texts across a bunch of different fields",
      "exp2.b2": "Handled client relationships, sales, and project delivery myself",
      "exp2.b3": "Took care of bookkeeping and the rest of running the business",
      "exp2.b4": "Wrote other content too, like marketing copy and SEO texts",

      "section.education": "Education",
      "edu1.degree": "MSc (Technology), Bioenergy Systems",
      "edu1.dates": "2016 — 2024",
      "edu1.school": "LUT University",
      "edu1.location": "Lappeenranta",
      "edu1.note": "Minor in Electrical Engineering (BSc), plus an extended major for the MSc.",

      "section.skills": "Skills",
      "skill.1": "CFD",
      "skill.2": "Process simulation (Modelica)",
      "skill.3": "Thermal engineering",
      "skill.4": "Fluid engineering",
      "skill.5": "Optimisation",
      "skill.6": "Engineering problem solving",
      "skill.7": "Turbomachinery",
      "skill.8": "Python",
      "skill.9": "MATLAB",
      "skill.10": "Linux",
      "skill.11": "HPC",
      "skill.12": "Slurm",

      "section.languages": "Languages",
      "lang.fi.name": "Finnish", "lang.fi.level": "Native",
      "lang.en.name": "English", "lang.en.level": "Fluent",
      "lang.sv.name": "Swedish", "lang.sv.level": "Basics",

      "section.contact": "Contact",
      "contact.text": "Open to relocating within Finland for the right role. If this sounds like a fit, let's talk."
    },
    fi: {
      "nav.profile": "Profiili",
      "nav.whatido": "Mitä teen",
      "nav.why": "Mitä etsin",
      "nav.experience": "Kokemus",
      "nav.education": "Koulutus",
      "nav.skills": "Taidot",
      "nav.contact": "Yhteystiedot",

      "hero.eyebrow": "Etsin seuraavaa haastetta",
      "hero.headline": "Energiatekniikan DI, joka saa monimutkaiset järjestelmät toimimaan",
      "hero.lede": "Olen energiatekniikan diplomi-insinööri, joka mallintaa ja simuloi monimutkaisia energiajärjestelmiä, testaa ne käytännössä ja kirjoittaa Python-työkalut, jotka nopeuttavat koko prosessia.",
      "hero.downloadCv": "Lataa CV (PDF)",
      "hero.emailMe": "Lähetä sähköpostia",
      "hero.location": "Lappeenranta, Suomi",

      "section.profile": "Profiili",
      "profile.text": "Taustani on monimutkaisten energiajärjestelmien mallinnuksessa ja simuloinnissa: CFD, lämpöanalyysit ja prosessien käyttäytyminen, turbokoneet mukaan lukien. Suurin osa työstäni tapahtuu juuri siinä välimaastossa: virtausoppi, lämmönsiirto, prosessisuunnittelu, simulaatio, tuotekehitys ja optimointi, sekä mikä tahansa työkalu, joka saa homman valmiiksi nopeammin. Viihdyn myös Linux- ja HPC-ympäristöissä.",

      "section.whatido": "Mitä teen",
      "whatido.summary": "Katso, miltä se näyttää arjessa",
      "whatido.b1": "CFD-simulaatioiden pystyttäminen ja ajaminen alusta loppuun: verkotus, reunaehdot, tulokset",
      "whatido.b2": "Testikampanjoiden suunnittelu: mitä mitataan, millä instrumentoinnilla ja mitä datan pitää oikeasti kertoa",
      "whatido.b3": "Testi- ja simulaatiodatan tonkiminen sen selvittämiseksi, toimiiko suunnittelu niin kuin pitäisi",
      "whatido.b4": "Prosessimallien rakentaminen, jotta järjestelmän käyttäytymisestä saa kuvan jo suunnitteluvaiheessa",
      "whatido.b5": "Python-työkalujen kirjoittaminen silloin, kun sama asia pitäisi tehdä käsin viidennen kerran",
      "whatido.b6": "Yhteistyö mekaniikka-, sähkö- ja testitiimien kanssa, jotta kaasuturbiinien tuotekehitys etenee",
      "whatido.b7": "Löydösten dokumentointi niin, ettei seuraavan tarvitse tehdä samaa työtä uudestaan",

      "section.why": "Mitä etsin",
      "why.p1": "Kolmen vuoden aikana nykyisessä työssäni minusta on tullut se tyyppi, jonka puoleen käännytään CFD:ssä, testauksessa, prosessimallinnuksessa ja työkalukehityksessä, usein samanaikaisesti. Matkan varrella on kertynyt useita eri rooleja, ja vähemmälläkin pärjäisi. Haluaisinkin enemmän fokusta: mahdollisuus viedä ongelma kunnolla maaliin asti sen sijaan, että pyörittäisin kymmentä asiaa yhtä aikaa, joilla kaikilla on luonnollisesti kiire.",
      "why.p2": "Haluan myös, että työni menee suuntaan, johon uskon. Siksi hakeuduin energia-alalle: halusin uran, joka vie asioita oikeaan suuntaan. Minua kiinnostavat erityisesti uusiutuva energia, päästöjen vähentäminen ja energiatehokkuus: asiat, jotka monessa paikassa jäävät korulauseeksi, mutta joiden haluaisin olevan totta.",
      "why.p3": "Olen valmis muuttamaan toiselle paikkakunnalle Suomen sisällä. En etsi mitä tahansa seuraavaa askelta urallani, vaan sellaista, joka on aidosti kiinnostava, teknisesti syvällinen ja tekemisen arvoinen.",

      "section.experience": "Kokemus",
      "exp1.role": "Simulaatioinsinööri",
      "exp1.dates": "2023–nyt",
      "exp1.company": "Aurelia Turbines Oy",
      "exp1.location": "Lappeenranta",
      "exp1.b1": "Teen CFD-simulaatioita ja -analyysejä itsenäisesti Cadence Fidelityllä",
      "exp1.b2": "Suunnittelen testilaitteistoa ja instrumentointia ja olen mukana testauksessa",
      "exp1.b3": "Analysoin simulaatio- ja testidataa mallien ja suorituskyvyn validoimiseksi",
      "exp1.b4": "Teen prosessimallinnusta OpenModelicalla",
      "exp1.b5": "Rakennan Python-työkaluja työnkulkujen automatisointiin ja analyysin nopeuttamiseen",
      "exp1.b6": "Olen mukana kaasuturbiinin tuotekehityksessä sekä komponentti- että järjestelmätasolla",

      "exp2.role": "Englanti–suomi-kääntäjä",
      "exp2.dates": "2018–2025",
      "exp2.company": "Itsenäinen ammatinharjoittaja",
      "exp2.b1": "Käänsin teknisiä ja kaupallisia tekstejä monilta eri aloilta",
      "exp2.b2": "Hoidin asiakassuhteet, myynnin ja projektien vetämisen itse",
      "exp2.b3": "Vastasin kirjanpidosta ja muusta yrityksen pyörittämisestä",
      "exp2.b4": "Kirjoitin myös muuta sisältöä, kuten markkinointi- ja SEO-tekstejä",

      "section.education": "Koulutus",
      "edu1.degree": "Energiatekniikan diplomi-insinööri, Bioenergiajärjestelmät",
      "edu1.dates": "2016–2024",
      "edu1.school": "LUT-yliopisto",
      "edu1.location": "Lappeenranta",
      "edu1.note": "Sivuaineena tekniikan kandidaatti (TkK), sähkötekniikka. Diplomi-insinöörin tutkinto laajennetulla pääaineella.",

      "section.skills": "Taidot",
      "skill.1": "CFD",
      "skill.2": "Prosessisimulaatio (Modelica)",
      "skill.3": "Lämpötekniikka",
      "skill.4": "Virtaustekniikka",
      "skill.5": "Optimointi",
      "skill.6": "Insinööriongelmien ratkaisu",
      "skill.7": "Turbokoneet",
      "skill.8": "Python",
      "skill.9": "MATLAB",
      "skill.10": "Linux",
      "skill.11": "HPC",
      "skill.12": "Slurm",

      "section.languages": "Kielet",
      "lang.fi.name": "Suomi", "lang.fi.level": "Äidinkieli",
      "lang.en.name": "Englanti", "lang.en.level": "Sujuva",
      "lang.sv.name": "Ruotsi", "lang.sv.level": "Perusteet",

      "section.contact": "Yhteystiedot",
      "contact.text": "Olen valmis muuttamaan toiselle paikkakunnalle Suomen sisällä oikean työn perässä. Jos tämä kuulostaa sopivalta, jutellaan."
    }
  };

  var STORAGE_KEY = "al-cv-lang";

  function detectDefaultLang() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "en" || saved === "fi") return saved;
    } catch (e) {}
    return navigator.language && navigator.language.toLowerCase().indexOf("fi") === 0 ? "fi" : "en";
  }

  function applyLang(lang) {
    var dict = STRINGS[lang] || STRINGS.en;
    document.documentElement.setAttribute("lang", lang);
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });
    var toggle = document.getElementById("langToggle");
    if (toggle) toggle.setAttribute("data-active", lang);
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  document.addEventListener("DOMContentLoaded", function () {
    var current = detectDefaultLang();
    applyLang(current);

    var toggle = document.getElementById("langToggle");
    if (toggle) {
      toggle.addEventListener("click", function () {
        current = current === "en" ? "fi" : "en";
        applyLang(current);
      });
    }

    var whatidoToggle = document.getElementById("whatidoToggle");
    var whatidoPanel = document.getElementById("whatidoPanel");
    if (whatidoToggle && whatidoPanel) {
      whatidoToggle.addEventListener("click", function () {
        var isOpen = whatidoToggle.getAttribute("aria-expanded") === "true";
        whatidoToggle.setAttribute("aria-expanded", String(!isOpen));
        whatidoPanel.classList.toggle("is-open", !isOpen);
      });
    }

    var yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  });
})();
