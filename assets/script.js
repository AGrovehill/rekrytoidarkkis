(function () {
  var STRINGS = {
    en: {
      "nav.profile": "Profile",
      "nav.letter": "Cover letter",
      "nav.strengths": "What I bring",
      "nav.experience": "Experience",
      "nav.education": "Education",
      "nav.skills": "Skills",
      "nav.contact": "Contact",

      "hero.eyebrow": "Open to new opportunities",
      "hero.headline": "Energy Engineer (MSc Tech.) | Simulation, models, analysis",
      "hero.lede": "I develop energy systems and the understanding of their functionality and effectiveness, from the details all the way to system level, through technical computing, code and modelling.",
      "hero.downloadCv": "Download CV (PDF)",
      "cv.href": "assets/aleksi-lehtomaki-cv.pdf",
      "hero.emailMe": "Email me",
      "hero.location": "Lappeenranta, Finland",

      "section.profile": "Profile",
      "profile.text": "I am an energy engineer with an MSc (Tech.) from LUT University. I have a solid foundation in energy systems, thermal and fluid engineering, and energy economics. I joined Aurelia Turbines to write my master's thesis, in which I built a dynamic OpenModelica model of the company's gas turbine as the foundation for a digital twin. I also developed Python middleware that serves as the interface between the model, exported as an FMU, and the Beckhoff TwinCAT automation system over ADS. After graduating, I continued as a simulation engineer in gas turbine R&D. My work covers CFD analysis, process modelling, test planning and data analysis. I also often develop Python-based tools to support both my own work and my colleagues'. I am familiar with Linux and HPC environments. I write and speak fluent Finnish and English.",

      "section.letter": "Cover letter",
      "letter.greeting": "Dear hiring team,",
      "letter.p1": "I am an energy engineer (MSc Tech.). I chose the field because I wanted to do work that I believe in and that matters, and that still motivates me today. I want to help develop the technology the energy transition needs. I am particularly interested in renewable energy, emissions reduction and energy efficiency, whether in energy production, district heating, industrial processes or new energy technology.",
      "letter.p2": "Since 2023, I have worked in gas turbine R&D at Aurelia Turbines, first on my master's thesis and then as a simulation engineer. The work has shown me what I enjoy most: understanding a system all the way from the behaviour of a single component to the performance of the whole, and working with mechanical, electrical and test engineers to get there. When something keeps repeating, I would rather build a tool for it than do it by hand again.",
      "letter.p3": "Simulation is one of my strongest tools, but I see myself first and foremost as an energy engineer. I am just as keen to put my understanding of energy systems to use in design, development and analysis as in modelling, and I am also interested in project work. Alongside my studies and work, I also worked for years as a self-employed translator. As the only person in the business, I handled everything myself: finding clients, delivering the work and keeping the books. That is why I know I can manage my work independently and reliably.",
      "letter.p4": "In my next role, I am looking for clear focus: the chance to take on demanding technical problems and solve them properly, all the way to the end. I do my best work when I can solve a problem right the first time instead of relying on quick fixes and shortcuts, and I thrive where careful engineering and quality are valued. I am open to relocating within Finland for the right position.",
      "letter.p5": "I would be glad to tell you more about my experience and how I could strengthen your team.",
      "letter.closing": "Kind regards,",

      "section.strengths": "What I bring",
      "str1.title": "Energy systems understanding",
      "str1.text": "A broad foundation from my energy technology degree: energy conversion from fuel to heat and power, power plant and boiler technology, fluid machinery and energy economics. I can assess solutions from both a technical and an economic perspective.",
      "str2.title": "Modelling at the right level of detail",
      "str2.text": "From detailed CFD of flow and heat transfer to dynamic system models of a complete gas turbine. I choose the approach that answers the question, and I know what each model can and cannot tell us.",
      "str3.title": "Connecting models to measurements",
      "str3.text": "Planning tests and instrumentation, analysing measured data, and using it to validate models and verify performance. A model can only be trusted once it has been checked against reality.",
      "str4.title": "Programming and automation",
      "str4.text": "Python tools that automate workflows and speed up analysis, along with MATLAB and experience running computations on Linux-based HPC clusters with Slurm.",
      "str5.title": "Cross-disciplinary collaboration",
      "str5.text": "Product development work together with mechanical, electrical and test engineers. A minor in electrical engineering also helps me understand the electrical side's perspective.",
      "str6.title": "Clear communication",
      "str6.text": "Years of professional technical translation have made me a precise writer in both Finnish and English. I document my work so that others can build on it.",

      "section.experience": "Experience",
      "exp1.role": "Simulation Engineer",
      "exp1.dates": "2024–present",
      "exp1.company": "Aurelia Turbines Oy",
      "exp1.location": "Lappeenranta",
      "exp1.b1": "Gas turbine research and development at both component and system level",
      "exp1.b2": "Independent CFD simulations and analyses using Cadence Fidelity",
      "exp1.b3": "System-level process modelling and simulation in OpenModelica",
      "exp1.b4": "Planning of test rigs and instrumentation, and participation in testing",
      "exp1.b5": "Analysis of simulation and test data to validate models and verify performance",
      "exp1.b6": "Development of Python tools that automate workflows and speed up analysis",
      "exp1.b7": "Close collaboration with mechanical, electrical and test teams",

      "exp0.role": "Master's Thesis Student",
      "exp0.dates": "9/2023–2/2024",
      "exp0.b1": "Built a dynamic system model of the company's gas turbine in OpenModelica as the foundation for a digital twin",
      "exp0.b2": "Developed Python middleware as the interface between the FMU-exported model and the Beckhoff TwinCAT automation system (ADS)",
      "exp0.b3": "First application: testing the turbine's automation software virtually during development",
      "thesis.read": "Read the thesis (LUTPub)",

      "exp2.role": "English–Finnish Translator",
      "exp2.dates": "2018–2025",
      "exp2.company": "Self-employed",
      "exp2.b1": "Technical and commercial translation across a wide range of fields",
      "exp2.b2": "Independent management of B2B client relationships, sales and project delivery",
      "exp2.b3": "Accounting and other aspects of running the business",
      "exp2.b4": "Other written content, including marketing copy and SEO texts",

      "section.education": "Education",
      "edu1.degree": "MSc (Tech.), Energy Technology: Bioenergy Systems",
      "edu1.dates": "2016–2024",
      "edu1.school": "LUT University",
      "edu1.location": "Lappeenranta",
      "edu1.thesisLabel": "Master's thesis:",
      "edu1.thesisFor": "(commissioned by Aurelia Turbines Oy)",
      "edu1.content": "The major covered the energy chain from fuels to heat and power: energy systems, bioenergy technology, power plant design, steam boilers, fluid machinery and energy economics.",
      "edu1.note": "Minor in electrical engineering in the BSc degree; MSc completed with an extended major.",

      "section.skills": "Skills",
      "skills.eng": "Engineering",
      "skill.eng1": "Energy systems",
      "skill.eng2": "Thermal engineering",
      "skill.eng3": "Fluid engineering",
      "skill.eng4": "Turbomachinery",
      "skill.eng5": "Testing and instrumentation",
      "skill.eng6": "Optimisation",
      "skills.sim": "Modelling and simulation",
      "skill.sim1": "CFD (Cadence Fidelity)",
      "skill.sim2": "Process simulation (OpenModelica)",
      "skill.sim3": "Dynamic system modelling",
      "skill.sim4": "Data analysis (Python, pandas)",
      "skills.code": "Programming and computing",
      "skill.code1": "Automation and control systems (Beckhoff TwinCAT)",

      "section.languages": "Languages",
      "lang.fi.name": "Finnish", "lang.fi.level": "native",
      "lang.en.name": "English", "lang.en.level": "fluent",
      "lang.sv.name": "Swedish", "lang.sv.level": "basic",

      "section.contact": "Contact",
      "contact.asideCta": "Meet the remote work assistant",
      "contact.aside": "If you read this far, take a look at whose extensive tuna habits my salary enables.",
      "contact.text": "I am open to relocating within Finland for the right role. If my background sounds like a good fit, please get in touch."
    },
    fi: {
      "nav.profile": "Profiili",
      "nav.letter": "Saatekirje",
      "nav.strengths": "Osaaminen",
      "nav.experience": "Työkokemus",
      "nav.education": "Koulutus",
      "nav.skills": "Taidot",
      "nav.contact": "Yhteystiedot",

      "hero.eyebrow": "Avoin uusille mahdollisuuksille",
      "hero.headline": "Energiatekniikan DI | Simulaatioita, malleja, analyyseja",
      "hero.lede": "Kehitän energiajärjestelmiä sekä ymmärrystä niiden toiminnasta ja suorituskyvystä yksityiskohdista järjestelmätasolle asti teknisen laskennan, koodin ja mallinnuksen keinoin.",
      "hero.downloadCv": "Lataa CV (PDF)",
      "cv.href": "assets/aleksi-lehtomaki-cv-fi.pdf",
      "hero.emailMe": "Lähetä sähköpostia",
      "hero.location": "Lappeenranta",

      "section.profile": "Profiili",
      "profile.text": "Olen Lappeenrannan teknillisestä yliopistosta valmistunut energiatekniikan diplomi-insinööri. Minulla on vankka pohja energiajärjestelmissä, lämpö- ja virtaustekniikassa sekä energiataloudessa. Aloitin Aurelia Turbinesilla tekemällä diplomityön, jossa rakensin OpenModelicalla yrityksen kaasuturbiinista dynaamisen mallin digitaalisen kaksosen pohjaksi. Kehitin lisäksi Python-väliohjelmiston, joka toimii rajapintana FMU:ksi käännetyn mallin ja Beckhoff TwinCAT -automaatiojärjestelmän välillä ADS-protokollan kautta. Jatkoin valmistuttuani simulaatioinsinöörinä kaasuturbiinin tuotekehityksessä. Tehtäviini kuuluvat CFD-analyysi, prosessimallinnus, testien suunnittelu ja data-analyysi. Kehitän myös usein Python-pohjaisia aputyökaluja sekä oman että työtovereideni työn tueksi. Linux- ja HPC-ympäristöt ovat minulle tuttuja. Kirjoitan ja puhun sujuvaa suomea ja englantia.",

      "section.letter": "Saatekirje",
      "letter.greeting": "Hei,",
      "letter.p1": "Olen energiatekniikan diplomi-insinööri. Valitsin alan, koska halusin tehdä työtä, johon uskon ja jolla on merkitystä, ja se motivoi minua edelleen. Haluan olla kehittämässä teknologiaa, jota energiamurros tarvitsee. Minua kiinnostavat erityisesti uusiutuva energia, päästöjen vähentäminen ja energiatehokkuus, olipa kyse energiantuotannosta, kaukolämmöstä, teollisuuden prosesseista tai uudesta energiateknologiasta.",
      "letter.p2": "Olen työskennellyt vuodesta 2023 Aurelia Turbinesin kaasuturbiinien tuotekehityksessä, ensin diplomityöntekijänä ja sitten simulaatioinsinöörinä. Työ on näyttänyt, mistä pidän eniten: järjestelmän ymmärtämisestä yksittäisen komponentin käyttäytymisestä koko järjestelmän suorituskykyyn asti sekä yhteistyöstä mekaniikka-, sähkö- ja testi-insinöörien kanssa. Kun jokin toistuu, teen sille mieluummin työkalun kuin toistan saman käsin.",
      "letter.p3": "Simulointi on yksi vahvimmista työkaluistani, mutta näen itseni ennen kaikkea energiatekniikan insinöörinä. Hyödynnän energiajärjestelmien osaamistani yhtä mielelläni suunnittelussa, kehityksessä ja analyysissä kuin mallinnuksessa, ja olen kiinnostunut myös hanketyöstä. Opintojeni ja työni ohella toimin vuosia myös itsenäisenä kääntäjänä. Ainoana työntekijänä vastasin kaikesta itse: asiakashankinnasta, töiden toimittamisesta ja kirjanpidosta. Siksi tiedän pystyväni hoitamaan työni itsenäisesti ja luotettavasti.",
      "letter.p4": "Seuraavalta tehtävältäni toivon selkeää fokusta: mahdollisuutta tarttua vaativiin teknisiin ongelmiin ja ratkaista ne kunnolla loppuun asti. Menestyn parhaiten, kun saan ratkaista ongelman kerralla oikein ilman purkkaratkaisuja ja oikopolkuja, ja viihdyn ympäristössä, jossa huolellinen insinöörityö ja laatu ovat arvossaan. Olen valmis muuttamaan toiselle paikkakunnalle Suomessa sopivan tehtävän perässä.",
      "letter.p5": "Kerron mielelläni lisää kokemuksestani ja siitä, miten voisin vahvistaa tiimiänne.",
      "letter.closing": "Ystävällisin terveisin",

      "section.strengths": "Mitä tuon mukanani",
      "str1.title": "Energiajärjestelmien ymmärrys",
      "str1.text": "Laaja pohja energiatekniikan opinnoista: energian muuntaminen polttoaineesta lämmöksi ja sähköksi, voimalaitos- ja kattilatekniikka, virtauskoneet ja energiatalous. Pystyn arvioimaan ratkaisuja sekä teknisestä että taloudellisesta näkökulmasta.",
      "str2.title": "Mallinnusta oikealla tarkkuudella",
      "str2.text": "Virtauksen ja lämmönsiirron yksityiskohtaisesta CFD-simuloinnista kokonaisen kaasuturbiinin dynaamisiin järjestelmämalleihin. Valitsen lähestymistavan kysymyksen mukaan ja tiedän, mitä kukin malli pystyy kertomaan ja mitä ei.",
      "str3.title": "Mallit ja mittaukset yhteen",
      "str3.text": "Testien ja instrumentoinnin suunnittelu, mittausdatan analysointi sekä sen hyödyntäminen mallien validoinnissa ja suorituskyvyn todentamisessa. Malliin voi luottaa vasta, kun se on tarkistettu todellisuutta vasten.",
      "str4.title": "Ohjelmointi ja automaatio",
      "str4.text": "Python-työkalut, jotka automatisoivat työnkulkuja ja nopeuttavat analyysiä. Lisäksi MATLAB sekä kokemusta laskennasta Linux-pohjaisissa HPC-ympäristöissä Slurmin avulla.",
      "str5.title": "Monialainen yhteistyö",
      "str5.text": "Tuotekehitystyötä yhdessä mekaniikka-, sähkö- ja testi-insinöörien kanssa. Sähkötekniikan sivuaine auttaa ymmärtämään myös sähköpuolen näkökulmaa.",
      "str6.title": "Selkeä viestintä",
      "str6.text": "Vuosien ammattimainen tekninen kääntäminen on tehnyt minusta tarkan kirjoittajan sekä suomeksi että englanniksi. Dokumentoin työni niin, että muut voivat jatkaa siitä.",

      "section.experience": "Työkokemus",
      "exp1.role": "Simulaatioinsinööri",
      "exp1.dates": "2024–",
      "exp1.company": "Aurelia Turbines Oy",
      "exp1.location": "Lappeenranta",
      "exp1.b1": "Kaasuturbiinien tuotekehitys sekä komponentti- että järjestelmätasolla",
      "exp1.b2": "CFD-simuloinnit ja -analyysit itsenäisesti Cadence Fidelityllä",
      "exp1.b3": "Järjestelmätason prosessimallinnus ja simulointi OpenModelicalla",
      "exp1.b4": "Testilaitteistojen ja instrumentoinnin suunnittelu sekä osallistuminen testaukseen",
      "exp1.b5": "Simulointi- ja testidatan analysointi mallien validoimiseksi ja suorituskyvyn todentamiseksi",
      "exp1.b6": "Python-työkalujen kehittäminen työnkulkujen automatisointiin ja analyysin nopeuttamiseen",
      "exp1.b7": "Tiivis yhteistyö mekaniikka-, sähkö- ja testitiimien kanssa",

      "exp0.role": "Diplomityöntekijä",
      "exp0.dates": "9/2023–2/2024",
      "exp0.b1": "Yrityksen kaasuturbiinin dynaamisen järjestelmämallin rakentaminen OpenModelicalla digitaalisen kaksosen pohjaksi",
      "exp0.b2": "Python-väliohjelmiston kehittäminen rajapinnaksi FMU-mallin ja Beckhoff TwinCAT -automaatiojärjestelmän välille (ADS)",
      "exp0.b3": "Ensimmäinen sovellus: turbiinin automaatio-ohjelmiston virtuaalinen testaus tuotekehityksen aikana",
      "thesis.read": "Lue diplomityö (LUTPub)",

      "exp2.role": "Englanti–suomi-kääntäjä",
      "exp2.dates": "2018–2025",
      "exp2.company": "Itsenäinen ammatinharjoittaja",
      "exp2.b1": "Teknisiä ja kaupallisia käännöksiä monilta eri aloilta",
      "exp2.b2": "Yritysasiakkuuksien, myynnin ja projektitoimitusten itsenäinen hoitaminen",
      "exp2.b3": "Kirjanpito ja muu liiketoiminnan pyörittäminen",
      "exp2.b4": "Muuta kirjallista sisältöä, kuten markkinointitekstejä ja hakukoneoptimoituja verkkotekstejä",

      "section.education": "Koulutus",
      "edu1.degree": "Diplomi-insinööri, energiatekniikka: bioenergiajärjestelmät",
      "edu1.dates": "2016–2024",
      "edu1.school": "LUT-yliopisto",
      "edu1.location": "Lappeenranta",
      "edu1.thesisLabel": "Diplomityö:",
      "edu1.thesisFor": "(toimeksiantaja Aurelia Turbines Oy)",
      "edu1.content": "Pääaine kattoi energiaketjun polttoaineista lämpöön ja sähköön: energiajärjestelmät, bioenergiateknologia, voimalaitossuunnittelu, höyrykattilat, virtauskoneet ja energiatalous.",
      "edu1.note": "Kandidaatin tutkinnossa sivuaineena sähkötekniikka, diplomi-insinöörin tutkinnossa laajennettu pääaine.",

      "section.skills": "Taidot",
      "skills.eng": "Tekniikka",
      "skill.eng1": "Energiajärjestelmät",
      "skill.eng2": "Lämpötekniikka",
      "skill.eng3": "Virtaustekniikka",
      "skill.eng4": "Turbokoneet",
      "skill.eng5": "Testaus ja instrumentointi",
      "skill.eng6": "Optimointi",
      "skills.sim": "Mallinnus ja simulointi",
      "skill.sim1": "CFD (Cadence Fidelity)",
      "skill.sim2": "Prosessisimulointi (OpenModelica)",
      "skill.sim3": "Dynaaminen järjestelmämallinnus",
      "skill.sim4": "Data-analyysi (Python, pandas)",
      "skills.code": "Ohjelmointi ja laskenta",
      "skill.code1": "Automaatio- ja ohjausjärjestelmät (Beckhoff TwinCAT)",

      "section.languages": "Kielet",
      "lang.fi.name": "suomi", "lang.fi.level": "äidinkieli",
      "lang.en.name": "englanti", "lang.en.level": "sujuva",
      "lang.sv.name": "ruotsi", "lang.sv.level": "perusteet",

      "section.contact": "Yhteystiedot",
      "contact.asideCta": "Ihastele etätyöassistenttia",
      "contact.aside": "Jos luit tänne asti, tsekkaa ihmeessä myös, kenen runsaiden tonnikalatottumusten ylläpitoon palkkani menee.",
      "contact.text": "Olen valmis muuttamaan toiselle paikkakunnalle Suomessa sopivan tehtävän perässä. Jos taustani vaikuttaa sopivalta, otathan yhteyttä."
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
    document.querySelectorAll("[data-i18n-href]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-href");
      if (dict[key]) el.setAttribute("href", dict[key]);
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

    var yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  });
})();
