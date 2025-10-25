// map-interaction.js
// Adds tooltip interactivity for select municipalities in the Altos Sur map.

(function () {
  const MAP_SVG_URL = './assets/images/mapa_interactivo/mapa_interactivo.svg';
  const TOOLTIP_ID = 'map-tooltip';

  const MUNICIPALITIES = [
    // Altos Sur
    {
      slug: 'acatic',
      name: 'Acatic',
      clave: '001',
      escudoSrc: './assets/images/mapa_interactivo/acatic_escudo.jpg',
      selector: '#municipio-acatic, [data-municipio="acatic"]',
    },
    {
      slug: 'arandas',
      name: 'Arandas',
      clave: '008',
      escudoSrc: './assets/images/mapa_interactivo/arandas_escudo.png',
      selector: '#municipio-arandas, [data-municipio="arandas"]',
    },
    {
      slug: 'canadas-de-obregon',
      name: 'Cañadas de Obregón',
      clave: '117',
      escudoSrc: './assets/images/mapa_interactivo/canadasdeobregon_escudo.jpg',
      selector: '#municipio-117, [data-municipio="canadas-de-obregon"]',
    },
    {
      slug: 'jalostotitlan',
      name: 'Jalostotitlán',
      clave: '046',
      escudoSrc: './assets/images/mapa_interactivo/jalostotitlan_escudo.png',
      selector: '#municipio-jalostotitlan, [data-municipio="jalostotitlan"]',
    },
    {
      slug: 'jesus-maria',
      name: 'Jesús María',
      clave: '048',
      escudoSrc: './assets/images/mapa_interactivo/jesusmaria_escudo.jpg',
      selector: '#municipio-jesus-maria, [data-municipio="jesus-maria"]',
    },
    {
      slug: 'mexticacan',
      name: 'Mexticacán',
      clave: '060',
      escudoSrc: './assets/images/mapa_interactivo/mexticacan_escudo.jpg',
      selector: '#municipio-mexticacan, [data-municipio="mexticacan"]',
    },
    {
      slug: 'san-ignacio-cerro-gordo',
      name: 'San Ignacio Cerro Gordo',
      clave: '125',
      escudoSrc: './assets/images/mapa_interactivo/sanignacio_escudo.png',
      selector: '#municipio-san-ignacio, [data-municipio="san-ignacio-cerro-gordo"]',
    },
    {
      slug: 'san-julian',
      name: 'San Julián',
      clave: '074',
      escudoSrc: './assets/images/mapa_interactivo/sanjulian_escudo.jpg',
      selector: '#municipio-san-julian, [data-municipio="san-julian"]',
    },
    {
      slug: 'san-miguel-el-alto',
      name: 'San Miguel el Alto',
      clave: '078',
      escudoSrc: './assets/images/mapa_interactivo/sanmiguel_escudo.png',
      selector: '#municipio-san-miguel, [data-municipio="san-miguel-el-alto"]',
    },
    {
      slug: 'tepatitlan-de-morelos',
      name: 'Tepatitlán de Morelos',
      clave: '093',
      escudoSrc: './assets/images/mapa_interactivo/tepatitlan_escudo.jpg',
      selector: '#municipio-tepatitlan, [data-municipio="tepatitlan-de-morelos"]',
    },
    {
      slug: 'valle-de-guadalupe',
      name: 'Valle de Guadalupe',
      clave: '111',
      escudoSrc: './assets/images/mapa_interactivo/valledeguadalupe_escudo.jpg',
      selector: '#municipio-valle-de-guadalupe, [data-municipio="valle-de-guadalupe"]',
    },
    {
      slug: 'yahualica-de-gonzalez-gallo',
      name: 'Yahualica de González Gallo',
      clave: '118',
      escudoSrc: './assets/images/mapa_interactivo/yahualica_escudo.jpeg',
      selector: '#municipio-yahualica, [data-municipio="yahualica-de-gonzalez-gallo"]',
    },

    // Altos Norte
    {
      slug: 'encarnacion-de-diaz',
      name: 'Encarnación de Díaz',
      clave: '035',
      escudoSrc: './assets/images/mapa_interactivo/encarnaciondedias_escudo.png',
      selector: '#municipio-encarnacion, [data-municipio="encarnacion-de-diaz"]',
    },
    {
      slug: 'lagos-de-moreno',
      name: 'Lagos de Moreno',
      clave: '053',
      escudoSrc: './assets/images/mapa_interactivo/lagosdemoreno_escudo.jpg',
      selector: '#municipio-lagos, [data-municipio="lagos-de-moreno"]',
    },
    {
      slug: 'ojuelos-de-jalisco',
      name: 'Ojuelos de Jalisco',
      clave: '064',
      escudoSrc: './assets/images/mapa_interactivo/ojuelos_escudo.jpg',
      selector: '#municipio-ojuelos, [data-municipio="ojuelos-de-jalisco"]',
    },
    {
      slug: 'san-diego-de-alejandria',
      name: 'San Diego de Alejandría',
      clave: '072',
      escudoSrc: './assets/images/mapa_interactivo/sandiego_escudo.jpg',
      selector: '#municipio-san-diego, [data-municipio="san-diego-de-alejandria"]',
    },
    {
      slug: 'san-juan-de-los-lagos',
      name: 'San Juan de los Lagos',
      clave: '073',
      escudoSrc: 'assets/images/mapa_interactivo/sanjuan_escudo.png',
      selector: '#municipio-san-juan, [data-municipio="san-juan-de-los-lagos"]',
    },
    {
      slug: 'teocaltiche',
      name: 'Teocaltiche',
      clave: '091',
      escudoSrc: './assets/images/mapa_interactivo/teocaltiche_escudo.jpg',
      selector: '#municipio-teocaltiche, [data-municipio="teocaltiche"]',
    },
    {
      slug: 'union-de-san-antonio',
      name: 'Unión de San Antonio',
      clave: '109',
      escudoSrc: './assets/images/mapa_interactivo/uniondesanantonio_escudo.jpg',
      selector: '#municipio-union-san-antonio, [data-municipio="union-de-san-antonio"]',
    },
    {
      slug: 'villa-hidalgo',
      name: 'Villa Hidalgo',
      clave: '116',
      escudoSrc: './assets/images/mapa_interactivo/villahidalgo_escudo.jpg',
      selector: '#municipio-villa-hidalgo, [data-municipio="villa-hidalgo"]',
    },
  ];

  function createTooltip() {
    const tip = document.createElement('div');
    tip.id = TOOLTIP_ID;
    tip.setAttribute('role', 'dialog');
    tip.setAttribute('aria-hidden', 'true');
    tip.className = 'map-tooltip';
    tip.innerHTML = `
      <div class="map-tooltip__card">
        <img src="" alt="" class="map-tooltip__shield" />
        <div class="map-tooltip__text">
          <strong class="map-tooltip__name"></strong>
          <div class="map-tooltip__code"></div>
        </div>
      </div>
    `;
    document.body.appendChild(tip);

    return {
      element: tip,
      shieldEl: tip.querySelector('.map-tooltip__shield'),
      nameEl: tip.querySelector('.map-tooltip__name'),
      codeEl: tip.querySelector('.map-tooltip__code'),
    };
  }

  function positionTooltip(tip, evt) {
    const padding = 16;
    const rect = tip.getBoundingClientRect();
    const pointerX = evt.clientX;
    const pointerY = evt.clientY;

    let x = pointerX - rect.width / 2;
    let y = pointerY - rect.height - padding;

    if (x < padding) {
      x = padding;
    }
    const maxX = Math.max(padding, window.innerWidth - rect.width - padding);
    if (x > maxX) {
      x = maxX;
    }

    if (y < padding) {
      y = pointerY + padding;
      const maxY = window.innerHeight - rect.height - padding;
      if (y > maxY) {
        y = Math.max(padding, maxY);
      }
    }

    tip.style.left = Math.round(x) + 'px';
    tip.style.top = Math.round(y) + 'px';
  }

  function normalizeSvgMarkup(svgText) {
    let normalized = svgText;
    if (normalized.includes('ns0:')) {
      normalized = normalized.replace(/ns0:/g, '');
    }
    if (!/xmlns="http:\/\/www\.w3\.org\/2000\/svg"/.test(normalized)) {
      normalized = normalized.replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"');
    }
    return normalized;
  }

  function fetchAndInlineSVG(container) {
    return fetch(MAP_SVG_URL)
      .then((r) => {
        if (!r.ok) {
          throw new Error(`No se pudo cargar el SVG (estatus ${r.status})`);
        }
        return r.text();
      })
      .then((svgText) => {
        const normalized = normalizeSvgMarkup(svgText);
        const parser = new DOMParser();
        const doc = parser.parseFromString(normalized, 'image/svg+xml');
        const parserError = doc.querySelector('parsererror');
        if (parserError) {
          throw new Error('No fue posible analizar el SVG: ' + parserError.textContent);
        }

        const rawSvg = doc.documentElement;
        if (!rawSvg || rawSvg.nodeName.toLowerCase() !== 'svg') {
          throw new Error('map-interaction: el contenido no contiene un elemento <svg> válido');
        }

        const svg = document.importNode(rawSvg, true);
        container.innerHTML = '';
        container.appendChild(svg);
        svg.setAttribute('aria-hidden', 'false');
        return svg;
      });
  }

  function findMunicipality(svgRoot, municipality) {
    if (!svgRoot) return null;

    if (municipality.selector) {
      const el = svgRoot.querySelector(municipality.selector);
      if (el) return el;
    }

    if (municipality.slug) {
      const el = svgRoot.querySelector(`[data-municipio="${municipality.slug}"]`);
      if (el) return el;
    }

    if (municipality.name) {
      const lowerName = municipality.name.toLowerCase();
      const candidates = svgRoot.querySelectorAll('[data-name], title');
      for (const candidate of candidates) {
        const text = (candidate.getAttribute('data-name') || candidate.textContent || '').toLowerCase();
        if (text.includes(lowerName)) {
          return candidate.tagName === 'title' ? candidate.parentElement : candidate;
        }
      }
    }

    return null;
  }

  function makeInteractive(el, tooltip, municipality) {
    if (!el || !tooltip) return;

    const { element: tip, shieldEl, nameEl, codeEl } = tooltip;
    const { name, clave, escudoSrc } = municipality;

    const ariaLabel = clave ? `${name} (clave ${clave})` : name;

    el.style.cursor = 'pointer';
    el.setAttribute('tabindex', '0');
    el.setAttribute('role', 'button');
    el.setAttribute('aria-label', ariaLabel);

    function updateTooltipContent() {
      if (shieldEl) {
        shieldEl.src = escudoSrc;
        shieldEl.alt = `Escudo ${name}`;
      }
      if (nameEl) nameEl.textContent = name;
      if (codeEl) {
        if (clave) {
          codeEl.textContent = `Clave: ${clave}`;
          codeEl.hidden = false;
        } else {
          codeEl.textContent = '';
          codeEl.hidden = true;
        }
      }
    }

    function show(e) {
      updateTooltipContent();
      tip.setAttribute('aria-hidden', 'false');
      tip.classList.add('visible');
      positionTooltip(tip, e);
    }

    function move(e) {
      positionTooltip(tip, e);
    }

    function hide() {
      tip.setAttribute('aria-hidden', 'true');
      tip.classList.remove('visible');
    }

    function showFromFocus() {
      updateTooltipContent();
      const rect = el.getBoundingClientRect();
      const virtualEvent = {
        clientX: rect.left + rect.width / 2,
        clientY: rect.top + rect.height / 2,
      };
      show(virtualEvent);
    }

    function handlePointerDown(e) {
      if (e.pointerType === 'touch') {
        show(e);
      }
    }

    function handlePointerUp(e) {
      if (e.pointerType === 'touch') {
        hide();
      }
    }

    el.addEventListener('pointerenter', show);
    el.addEventListener('pointermove', move);
    el.addEventListener('pointerleave', hide);
    el.addEventListener('pointerdown', handlePointerDown);
    el.addEventListener('pointerup', handlePointerUp);
    el.addEventListener('focus', showFromFocus);
    el.addEventListener('blur', hide);

    el.addEventListener('click', () => {
      if (municipality.link) {
        window.location.href = municipality.link;
      }
    });

    el.addEventListener('keydown', (ev) => {
      if (ev.key === 'Enter' || ev.key === ' ') {
        ev.preventDefault();
        if (municipality.link) {
          window.location.href = municipality.link;
        }
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('map-container');
    if (!container) return;

    const tooltip = createTooltip();

    fetchAndInlineSVG(container)
      .then((svg) => {
        if (!svg) throw new Error('SVG not loaded');

        let attached = 0;
        MUNICIPALITIES.forEach((municipality) => {
          const targetEl = findMunicipality(svg, municipality);
          if (!targetEl) {
            console.warn(`No se encontró el elemento para ${municipality.name}`);
            return;
          }
          makeInteractive(targetEl, tooltip, municipality);
          attached += 1;
        });

        console.info(`map-interaction: se activó interactividad en ${attached} municipios.`);
      })
      .catch((err) => {
        console.error('Error loading inline SVG for interactivity', err);
        container.innerHTML = '<img src="' + MAP_SVG_URL + '" alt="Mapa de la región" />';
      });
  });
})();
