/* =========================================================
   Ruta Tángara · Lógica del sitio
   - Menú adaptable para celular
   - Tarjetas, calendario y filtros de salidas
   - Ficha de detalle con galería y pestañas
   - Formulario de inscripción con validación y cálculo del total
   - Página de confirmación
   - Botones para copiar datos
   - Video del proyecto (YouTube)
   ========================================================= */

/* ---------------------------------------------------------
   CONFIGURACIÓN DEL VIDEO DEL PROYECTO
   Pega aquí el enlace de YouTube del video de demostración.
   Ejemplos válidos:
     "https://youtu.be/AbCdEfGhIjk"
     "https://www.youtube.com/watch?v=AbCdEfGhIjk"
   --------------------------------------------------------- */
const VIDEO_PROYECTO = "";

(function () {
  "use strict";

  const ICONOS = {
    cal: '<svg class="ic" aria-hidden="true"><use href="#i-cal"/></svg>',
    reloj: '<svg class="ic" aria-hidden="true"><use href="#i-clock"/></svg>',
    personas: '<svg class="ic" aria-hidden="true"><use href="#i-users"/></svg>',
    pin: '<svg class="ic" aria-hidden="true"><use href="#i-pin"/></svg>',
    bino: '<svg class="ic" aria-hidden="true"><use href="#i-bino"/></svg>',
    copiar: '<svg class="ic" aria-hidden="true"><use href="#i-copy"/></svg>'
  };

  /* ---------- Utilidades ---------- */
  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));
  const pesos = new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 });
  const fechaLarga = new Intl.DateTimeFormat("es-CO", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
  const fechaCorta = new Intl.DateTimeFormat("es-CO", { day: "numeric", month: "long" });

  function aFecha(iso) {
    const p = iso.split("-").map(Number);
    return new Date(p[0], p[1] - 1, p[2]);
  }
  function fechaTexto(iso) {
    const t = fechaLarga.format(aFecha(iso));
    return t.charAt(0).toUpperCase() + t.slice(1);
  }
  function buscarSalida(id) {
    return SALIDAS.find(s => s.id === id) || null;
  }
  function parametro(nombre) {
    return new URLSearchParams(location.search).get(nombre);
  }
  function porFecha(a, b) {
    return aFecha(a.fecha) - aFecha(b.fecha);
  }

  /* ---------- Menú para celular ---------- */
  function iniciarMenu() {
    const boton = $(".menu-btn");
    const menu = $("#menu-principal");
    if (!boton || !menu) return;
    boton.addEventListener("click", () => {
      const abierto = menu.classList.toggle("abierto");
      boton.setAttribute("aria-expanded", String(abierto));
    });
  }

  /* ---------- Tarjeta de salida ---------- */
  function tarjeta(s) {
    const pocos = s.disponibles <= 4 ? ' class="pocos"' : "";
    return `
      <article class="card trip">
        <img src="${s.imagen}" alt="${s.imagenAlt}" loading="lazy" width="600" height="400">
        <div class="body">
          <span class="tag ${s.nivel}">${s.nivel}</span>
          <h3><a href="salida.html?id=${s.id}">${s.nombre}</a></h3>
          <p class="lugar">${s.lugar}</p>
          <ul class="meta">
            <li>${ICONOS.cal}${fechaTexto(s.fecha)}</li>
            <li>${ICONOS.reloj}${s.duracion} · ${s.horario}</li>
            <li${pocos}>${ICONOS.personas}Cupos disponibles: ${s.disponibles} de ${s.cupos}</li>
          </ul>
          <div class="foot">
            <span class="price">${pesos.format(s.valor)} <small>/ persona</small></span>
            <a class="btn ghost small" href="salida.html?id=${s.id}">Ver salida</a>
          </div>
        </div>
      </article>`;
  }

  /* ---------- Inicio: próximas salidas y calendario ---------- */
  function iniciarInicio() {
    const proximas = $("#proximas");
    if (proximas) proximas.innerHTML = SALIDAS.slice().sort(porFecha).slice(0, 3).map(tarjeta).join("");
    const cuerpo = $("#calendario tbody");
    if (cuerpo) {
      cuerpo.innerHTML = SALIDAS.slice().sort(porFecha).map(s => `
        <tr>
          <td>${fechaCorta.format(aFecha(s.fecha))}</td>
          <td><a href="salida.html?id=${s.id}">${s.nombre}</a></td>
          <td><span class="tag ${s.nivel}">${s.nivel}</span></td>
          <td>${s.duracion}</td>
          <td class="num">${pesos.format(s.valor)}</td>
        </tr>`).join("");
    }
  }

  /* ---------- Salidas: filtro por nivel y orden ---------- */
  function iniciarSalidas() {
    const grilla = $("#grilla-salidas");
    if (!grilla) return;
    const chips = $$(".chip[data-nivel]");
    const orden = $("#orden");
    const conteo = $("#conteo");
    let nivel = "Todos";

    function pintar() {
      let lista = SALIDAS.filter(s => nivel === "Todos" || s.nivel === nivel);
      if (orden.value === "fecha") lista.sort(porFecha);
      if (orden.value === "menor") lista.sort((a, b) => a.valor - b.valor);
      if (orden.value === "mayor") lista.sort((a, b) => b.valor - a.valor);
      grilla.innerHTML = lista.length
        ? lista.map(tarjeta).join("")
        : '<p class="card vacio">No hay salidas de este nivel por ahora.</p>';
      conteo.textContent = `Mostrando ${lista.length} de ${SALIDAS.length} salidas programadas.`;
    }
    chips.forEach(chip => chip.addEventListener("click", () => {
      nivel = chip.dataset.nivel;
      chips.forEach(c => c.setAttribute("aria-pressed", String(c === chip)));
      pintar();
    }));
    orden.addEventListener("change", pintar);
    pintar();
  }

  /* ---------- Reproductor de xeno-canto ---------- */
  function audioXC(a, titulo) {
    return `
      <iframe src="https://www.xeno-canto.org/${a.xc}/embed" scrolling="no" loading="lazy"
        title="${titulo || "Grabación de " + a.especie + " en xeno-canto"}"></iframe>
      <p class="small muted">${a.especie} (<i class="cientifico">${a.cientifico}</i>), ${a.tipo}.
        Grabación: ${a.autor}, <a class="ext" href="https://www.xeno-canto.org/${a.xc}" target="_blank" rel="noopener">XC${a.xc}</a>.
        Licencia: ${a.licencia}.</p>`;
  }

  /* ---------- Detalle de salida ---------- */
  function iniciarDetalle() {
    const zona = $("#detalle");
    if (!zona) return;
    const s = buscarSalida(parametro("id")) || SALIDAS[0];
    document.title = `${s.nombre} · Ruta Tángara`;

    $("#miga-actual").textContent = s.nombre;
    const imagenes = [{ src: s.imagen, alt: s.imagenAlt }].concat(
      s.aves.slice(0, 2).map(a => ({ src: a.imagen, alt: `Ilustración de ${a.nombre.toLowerCase()} (${a.cientifico})` })));
    const principal = $("#foto-principal");
    principal.src = imagenes[0].src;
    principal.alt = imagenes[0].alt;
    $("#miniaturas").innerHTML = imagenes.map((im, i) => `
      <button type="button" aria-pressed="${i === 0}" aria-label="Ver imagen ${i + 1} de ${imagenes.length}">
        <img src="${im.src}" alt="" loading="lazy">
      </button>`).join("");
    $$("#miniaturas button").forEach((b, i) => b.addEventListener("click", () => {
      principal.src = imagenes[i].src;
      principal.alt = imagenes[i].alt;
      $$("#miniaturas button").forEach(x => x.setAttribute("aria-pressed", String(x === b)));
    }));

    $("#nivel").textContent = s.nivel;
    $("#nivel").className = `tag ${s.nivel}`;
    $("#titulo").textContent = s.nombre;
    $("#lugar").textContent = s.lugar;
    $("#descripcion").innerHTML = s.descripcion.map(p => `<p>${p}</p>`).join("");
    $("#hechos").innerHTML = `
      <div class="fact"><div class="badge-ic">${ICONOS.cal}</div><div><small>Fecha</small><strong>${fechaTexto(s.fecha)}</strong></div></div>
      <div class="fact"><div class="badge-ic">${ICONOS.reloj}</div><div><small>Duración</small><strong>${s.duracion} (${s.horario})</strong></div></div>
      <div class="fact"><div class="badge-ic">${ICONOS.pin}</div><div><small>Punto de encuentro</small><strong>${s.encuentro}</strong></div></div>
      <div class="fact"><div class="badge-ic">${ICONOS.personas}</div><div><small>Cupos disponibles</small><strong>${s.disponibles} de ${s.cupos}</strong></div></div>`;
    $("#valor").innerHTML = `${pesos.format(s.valor)} <small>/ persona</small>`;
    $("#btn-inscribir").href = `inscripcion.html?id=${s.id}`;
    $("#destacado").innerHTML = `<strong>Dato destacado</strong>${s.destacado}`;

    $("#tabla-itinerario tbody").innerHTML = s.itinerario.map(f => `<tr><td class="num">${f[0]}</td><td>${f[1]}</td></tr>`).join("");
    $("#lista-llevar").innerHTML = s.llevar.map(x => `<li>${x}</li>`).join("");
    $("#lista-incluye").innerHTML = s.incluye.map(x => `<li>${x}</li>`).join("") + `<li>Transporte: ${s.transporte.charAt(0).toLowerCase() + s.transporte.slice(1)}.</li>`;
    $("#lista-aves").innerHTML = s.aves.map(a => `
      <div class="card ave"><img src="${a.imagen}" alt="" loading="lazy">
        <div><strong>${a.nombre}</strong><br><i class="cientifico">${a.cientifico}</i><br><span class="small muted">${a.nota}</span></div></div>`).join("");

    $("#audio").innerHTML = audioXC(s.audio);
    $("#audio-titulo").textContent = `Escucha ${articulo(s.audio.especie)} antes de ir`;
    $("#mas-info").innerHTML = `<a class="ext" href="${s.masInfo.url}" target="_blank" rel="noopener">${s.masInfo.texto}</a>`;

    $("#otras").innerHTML = SALIDAS.filter(x => x.id !== s.id).sort(porFecha).slice(0, 3).map(tarjeta).join("");
    iniciarPestanas();
  }
  function articulo(especie) {
    const femeninas = ["Tingua bogotana", "Mirla patinaranja", "Monjita"];
    return (femeninas.includes(especie) ? "a la " : "al ") + especie.toLowerCase();
  }

  /* ---------- Pestañas accesibles ---------- */
  function iniciarPestanas() {
    const tabs = $$('[role="tab"]');
    if (!tabs.length) return;
    function activar(tab, foco) {
      tabs.forEach(t => {
        const sel = t === tab;
        t.setAttribute("aria-selected", String(sel));
        t.tabIndex = sel ? 0 : -1;
        document.getElementById(t.getAttribute("aria-controls")).hidden = !sel;
      });
      if (foco) tab.focus();
    }
    tabs.forEach((t, i) => {
      t.addEventListener("click", () => activar(t));
      t.addEventListener("keydown", e => {
        if (e.key === "ArrowRight") activar(tabs[(i + 1) % tabs.length], true);
        if (e.key === "ArrowLeft") activar(tabs[(i - 1 + tabs.length) % tabs.length], true);
      });
    });
    activar(tabs[0]);
  }

  /* ---------- Inscripción ---------- */
  const CLAVE = "rutaTangara.inscripcion";

  function iniciarInscripcion() {
    const form = $("#form-inscripcion");
    if (!form) return;
    const select = $("#salida");
    select.innerHTML = SALIDAS.slice().sort(porFecha).map(s =>
      `<option value="${s.id}">${s.nombre} · ${fechaCorta.format(aFecha(s.fecha))} · ${pesos.format(s.valor)}</option>`).join("");
    const inicial = buscarSalida(parametro("id"));
    if (inicial) select.value = inicial.id;

    function actual() { return buscarSalida(select.value); }
    function participantes() { return Number((form.querySelector('input[name="participantes"]:checked') || {}).value || 1); }

    function actualizar() {
      const s = actual();
      $("#elegida").innerHTML = `
        <img src="${s.imagen}" alt="" width="96" height="64">
        <div><strong>${s.nombre}</strong>
          <ul class="meta" style="margin-top:4px">
            <li>${ICONOS.cal}${fechaTexto(s.fecha)}</li>
            <li>${ICONOS.pin}${s.encuentro}</li>
          </ul></div>`;
      $$('input[name="participantes"]').forEach(r => {
        r.disabled = Number(r.value) > s.disponibles;
        if (r.disabled && r.checked) form.querySelector('input[name="participantes"][value="1"]').checked = true;
      });
      $("#ayuda-cupos").textContent = `Quedan ${s.disponibles} cupos en esta salida.`;
      const n = participantes();
      $("#r-salida").textContent = s.nombre;
      $("#r-fecha").textContent = fechaTexto(s.fecha);
      $("#r-participantes").textContent = n;
      $("#r-valor").textContent = pesos.format(s.valor);
      $("#r-binoculares").textContent = form.binoculares.value === "si" ? `Sí (${n})` : "No";
      $("#r-total").textContent = pesos.format(s.valor * n);
    }

    const reglas = {
      nombre: v => v.trim().split(/\s+/).length >= 2 ? "" : "Escribe tu nombre y apellido.",
      celular: v => /^3\d{9}$/.test(v.replace(/\s|-/g, "")) ? "" : "Debe tener 10 dígitos y empezar por 3.",
      correo: v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? "" : "Escribe un correo válido.",
      acepto: (v, el) => el.checked ? "" : "Debes autorizar el tratamiento de tus datos."
    };
    function validar(campo) {
      const el = form.elements[campo];
      const msg = reglas[campo](el.value, el);
      const caja = el.closest(".field");
      caja.classList.toggle("invalido", !!msg);
      el.setAttribute("aria-invalid", msg ? "true" : "false");
      $(`#error-${campo}`).textContent = msg;
      return !msg;
    }
    Object.keys(reglas).forEach(c => {
      const el = form.elements[c];
      el.addEventListener("blur", () => validar(c));
      // Si el campo ya estaba marcado con error, se revisa otra vez mientras la persona corrige.
      el.addEventListener(c === "acepto" ? "change" : "input", () => {
        if (el.getAttribute("aria-invalid") === "true") validar(c);
      });
    });

    form.addEventListener("change", actualizar);
    form.addEventListener("submit", e => {
      e.preventDefault();
      const validos = Object.keys(reglas).map(validar).every(Boolean);
      const alerta = $("#alerta");
      if (!validos) {
        alerta.hidden = false;
        alerta.textContent = "Revisa los campos marcados en rojo antes de confirmar.";
        const primero = form.querySelector('[aria-invalid="true"]');
        if (primero) primero.focus();
        return;
      }
      alerta.hidden = true;
      const s = actual();
      const n = participantes();
      const datos = {
        codigo: "RT-" + s.fecha.slice(2, 4) + s.fecha.slice(5, 7) + "-" + String(Math.floor(1000 + Math.random() * 9000)),
        id: s.id,
        nombre: form.nombre.value.trim(),
        correo: form.correo.value.trim(),
        celular: form.celular.value.trim(),
        participantes: n,
        binoculares: form.binoculares.value === "si",
        total: s.valor * n
      };
      try {
        sessionStorage.setItem(CLAVE, JSON.stringify(datos));
        location.href = "confirmacion.html";
      } catch (err) {
        location.href = "confirmacion.html?d=" + encodeURIComponent(JSON.stringify(datos));
      }
    });
    actualizar();
  }

  /* ---------- Confirmación ---------- */
  function iniciarConfirmacion() {
    const zona = $("#confirmacion");
    if (!zona) return;
    let datos = null;
    try { datos = JSON.parse(sessionStorage.getItem(CLAVE)); } catch (err) { datos = null; }
    if (!datos && parametro("d")) {
      try { datos = JSON.parse(parametro("d")); } catch (err) { datos = null; }
    }
    const s = datos && buscarSalida(datos.id);
    if (!s) {
      $("#sin-datos").hidden = false;
      zona.hidden = true;
      return;
    }
    $("#codigo-texto").textContent = datos.codigo;
    $("#codigo-btn").dataset.copiar = datos.codigo;
    $("#saludo").textContent = `Gracias, ${datos.nombre.split(" ")[0]}. Te escribiremos a ${datos.correo} con el punto de encuentro y la lista de qué llevar.`;
    $("#c-imagen").src = s.imagen;
    $("#c-imagen").alt = s.imagenAlt;
    $("#tabla-confirmacion tbody").innerHTML = [
      ["Salida", s.nombre],
      ["Lugar", s.lugar],
      ["Fecha", fechaTexto(s.fecha)],
      ["Horario", s.horario],
      ["Punto de encuentro", s.encuentro],
      ["Participantes", datos.participantes],
      ["Binoculares en préstamo", datos.binoculares ? "Sí" : "No"]
    ].map(f => `<tr><th scope="row">${f[0]}</th><td>${f[1]}</td></tr>`).join("");
    $("#c-total").textContent = pesos.format(datos.total);
    $("#c-llevar").innerHTML = s.llevar.map(x => `<li>${x}</li>`).join("");
  }

  /* ---------- Botones para copiar ---------- */
  function iniciarCopiar() {
    document.addEventListener("click", e => {
      const btn = e.target.closest(".copiar");
      if (!btn) return;
      const texto = btn.dataset.copiar;
      const listo = () => {
        const original = btn.innerHTML;
        btn.classList.add("ok");
        btn.innerHTML = ICONOS.copiar + "Copiado";
        setTimeout(() => { btn.classList.remove("ok"); btn.innerHTML = original; }, 1600);
      };
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(texto).then(listo, () => copiarRespaldo(texto) && listo());
      } else if (copiarRespaldo(texto)) {
        listo();
      }
    });
  }
  function copiarRespaldo(texto) {
    const area = document.createElement("textarea");
    area.value = texto;
    area.setAttribute("readonly", "");
    area.style.position = "absolute";
    area.style.left = "-9999px";
    document.body.appendChild(area);
    area.select();
    let ok = false;
    try { ok = document.execCommand("copy"); } catch (err) { ok = false; }
    document.body.removeChild(area);
    return ok;
  }

  /* ---------- Video del proyecto ---------- */
  function idYoutube(url) {
    const m = String(url).match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/);
    return m ? m[1] : null;
  }
  function iniciarVideoProyecto() {
    const zona = $("#video-proyecto");
    if (!zona) return;
    const id = idYoutube(VIDEO_PROYECTO);
    if (id) {
      zona.innerHTML = `<div class="video"><iframe src="https://www.youtube-nocookie.com/embed/${id}"
        title="Video: demostración de la creación del sitio Ruta Tángara" loading="lazy"
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe></div>
        <p class="small muted" style="margin-top:8px"><a class="ext" href="https://youtu.be/${id}" target="_blank" rel="noopener">Ver el video en YouTube</a></p>`;
    }
  }

  /* ---------- Arranque ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    iniciarMenu();
    iniciarInicio();
    iniciarSalidas();
    iniciarDetalle();
    iniciarInscripcion();
    iniciarConfirmacion();
    iniciarCopiar();
    iniciarVideoProyecto();
    const anio = $("#anio");
    if (anio) anio.textContent = new Date().getFullYear();
  });
})();
