// ==========================================
// ICONOS SVG MINIMALISTAS (SIN EMOJIS)
// ==========================================
const ICONS = {
  dashboard: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>',
  users: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  send: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/></svg>',
  globe: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>',
  smartphone: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>',
  eye: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>',
  eyeOff: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"/><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"/><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"/><path d="m2 2 20 20"/></svg>',
  megaphone: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>',
  compass: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>'
};

// ==========================================
// GESTIÓN DE TEMA (CLARO / OSCURO)
// ==========================================
function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("sgc_theme", theme);
  syncThemeButtons(theme);
}

function syncThemeButtons(theme) {
  document.querySelectorAll(".theme-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-theme-option") === theme);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
  syncThemeButtons(currentTheme);
});

// ==========================================
// DEFINICIÓN DE MENÚS POR ROL (SEPARACIÓN ESTRICTA)
// ==========================================
const MENUS_BY_ROLE = {
  gerente: [
    { id: "dashboard", icon: ICONS.dashboard, label: "Panel General Nacional" },
    { id: "avisos", icon: ICONS.megaphone, label: "Canal de Avisos" },
    { id: "personas", icon: ICONS.users, label: "Persona Idónea (Directorio)" },
    { id: "envios", icon: ICONS.send, label: "Envío Segmentado" },
    { id: "comunidad", icon: ICONS.globe, label: "Comunidad y Moderación" },
    { id: "equipo", icon: ICONS.smartphone, label: "Acta y Equipo Asignado" }
  ],
  lider: [
    { id: "dashboard", icon: ICONS.dashboard, label: "Mi Panel Operativo" },
    { id: "avisos", icon: ICONS.megaphone, label: "Canal de Avisos" },
    { id: "explorar", icon: ICONS.compass, label: "Explorar Subgrupos" },
    { id: "personas", icon: ICONS.users, label: "Personas de mi Red" },
    { id: "envios", icon: ICONS.send, label: "Enviar Aviso Local" }
  ]
};

let selectedLoginRole = "gerente";
let currentUser = null;
let showUnmaskedPhones = false;

const PROFILE_MIGRATION = {
  "Coordinador Zonal": "Encargado de Zona",
  "Líder Vecinal": "Líder de Zona",
  "Profesional Especialista": "Especialista",
  "Autoridad Local": "Autoridad Local",
  "Participante Jornada": "Asistente"
};

function migrateUsers(list) {
  return list.map(u => ({
    ...u,
    provincia: u.provincia || (typeof inferProvinceFromUbigeo === "function" ? inferProvinceFromUbigeo(u.dept, u.distrito) : ""),
    perfil: PROFILE_MIGRATION[u.perfil] || u.perfil
  }));
}

const DATA_VERSION = "v3_ubigeo";
if (localStorage.getItem("sgc_version") !== DATA_VERSION) {
  localStorage.removeItem("sgc_users");
  localStorage.removeItem("sgc_groups");
  localStorage.removeItem("sgc_history");
  localStorage.removeItem("sgc_announcements");
  localStorage.removeItem("sgc_joined_groups");
  localStorage.setItem("sgc_version", DATA_VERSION);
}

let usersData = migrateUsers(JSON.parse(localStorage.getItem("sgc_users")) || DEFAULT_USERS);
let groupsData = JSON.parse(localStorage.getItem("sgc_groups")) || DEFAULT_GROUPS;
let historyData = JSON.parse(localStorage.getItem("sgc_history")) || DEFAULT_HISTORY;
let announcementsData = JSON.parse(localStorage.getItem("sgc_announcements")) || DEFAULT_ANNOUNCEMENTS;
let joinedGroupIds = JSON.parse(localStorage.getItem("sgc_joined_groups")) || DEFAULT_LEADER_JOINED_GROUPS;

function saveState() {
  localStorage.setItem("sgc_version", DATA_VERSION);
  localStorage.setItem("sgc_users", JSON.stringify(usersData));
  localStorage.setItem("sgc_groups", JSON.stringify(groupsData));
  localStorage.setItem("sgc_history", JSON.stringify(historyData));
  localStorage.setItem("sgc_announcements", JSON.stringify(announcementsData));
  localStorage.setItem("sgc_joined_groups", JSON.stringify(joinedGroupIds));
}

function resetLocalData() {
  usersData = DEFAULT_USERS.map(u => ({ ...u }));
  groupsData = DEFAULT_GROUPS.map(g => ({ ...g }));
  historyData = [...DEFAULT_HISTORY];
  announcementsData = [...DEFAULT_ANNOUNCEMENTS];
  joinedGroupIds = [...DEFAULT_LEADER_JOINED_GROUPS];
  saveState();
  initAppViews();
  showToast("Datos de prueba restablecidos (64,000 usuarios · 20 distritos · 40 líderes).");
}

// ==========================================
// MENÚ MÓVIL / TABLET
// ==========================================
function toggleMobileMenu() {
  document.getElementById("sidebar").classList.toggle("open");
  document.getElementById("sidebarOverlay").classList.toggle("active");
}

// ==========================================
// LOGIN Y ROLES
// ==========================================
function selectRole(role) {
  selectedLoginRole = role;
  document.getElementById("tabGerente").classList.toggle("active", role === "gerente");
  document.getElementById("tabLider").classList.toggle("active", role === "lider");
  document.getElementById("loginError").style.display = "none";
}

function togglePasswordVisibility() {
  const input = document.getElementById("password");
  const btn = document.getElementById("togglePasswordBtn");
  const isPassword = input.type === "password";
  input.type = isPassword ? "text" : "password";
  btn.innerHTML = isPassword ? ICONS.eyeOff : ICONS.eye;
  btn.setAttribute("aria-label", isPassword ? "Ocultar contraseña" : "Mostrar contraseña");
}

function handleLogin(e) {
  e.preventDefault();
  const u = document.getElementById("username").value.trim();
  const p = document.getElementById("password").value.trim();
  const err = document.getElementById("loginError");

  if (selectedLoginRole === "gerente" && u === "jperez" && p === "gerencia2026") {
    currentUser = { name: "Juan Pérez", role: "gerente", label: "GERENTE", scope: "Acceso Nacional (Todo el Perú)" };
  } else if (selectedLoginRole === "lider" && u === "lider" && p === "lideres2026") {
    currentUser = { name: "Líder Regional", role: "lider", label: "LÍDERES", scope: "Acceso Operativo (Sin gestión de grupos)" };
  } else {
    err.style.display = "block";
    return;
  }

  err.style.display = "none";
  document.getElementById("loginScreen").style.display = "none";
  document.getElementById("appContainer").style.display = "block";
  configureRoleUI();
  initAppViews();
  showSection("dashboard");
}

function configureRoleUI() {
  const isGerente = currentUser.role === "gerente";

  document.getElementById("sidebarUserName").textContent = currentUser.name;
  document.getElementById("sidebarScope").textContent = currentUser.scope;
  document.getElementById("mobileUserRole").textContent = currentUser.name;

  const sBadge = document.getElementById("sidebarRoleBadge");
  const mBadge = document.getElementById("mobileRoleBadge");
  sBadge.textContent = currentUser.label;
  mBadge.textContent = currentUser.label;
  sBadge.className = isGerente ? "role-badge" : "role-badge lider";
  mBadge.className = isGerente ? "role-badge" : "role-badge lider";

  const navMenu = document.getElementById("navMenu");
  navMenu.innerHTML = "";
  MENUS_BY_ROLE[currentUser.role].forEach((item, idx) => {
    navMenu.innerHTML += `
      <div class="nav-item ${idx === 0 ? 'active' : ''}" id="nav-${item.id}" onclick="showSection('${item.id}')">
        ${item.icon}<span>${item.label}</span>
      </div>
    `;
  });

  document.getElementById("gerenteTopActions").style.display = isGerente ? "block" : "none";
  document.getElementById("dashboardGerenteView").style.display = isGerente ? "grid" : "none";
  document.getElementById("dashboardLiderView").style.display = isGerente ? "none" : "block";
  document.getElementById("announcementFormCard").style.display = isGerente ? "block" : "none";
  document.getElementById("announcementReadOnlyCard").style.display = isGerente ? "none" : "block";

  const btnPrivacy = document.getElementById("btnTogglePrivacy");
  const btnOnlyLeaders = document.getElementById("btnSelectOnlyLeaders");
  if (isGerente) {
    btnPrivacy.style.display = "inline-flex";
    if (btnOnlyLeaders) btnOnlyLeaders.style.display = "inline-flex";
  } else {
    showUnmaskedPhones = false;
    btnPrivacy.style.display = "none";
    if (btnOnlyLeaders) btnOnlyLeaders.style.display = "none";
  }

  const sendChannel = document.getElementById("sendChannel");
  if (isGerente) {
    sendChannel.innerHTML = `
      <option value="Envío en Cascada (Gerente → Líderes)">Envío en Cascada (Gerente → Líderes)</option>
      <option value="Mensaje Individual Privado (Sin mostrar números)">Mensaje Individual Privado (Sin mostrar números)</option>
      <option value="Canal de Avisos General de la Comunidad">Canal de Avisos General de la Comunidad</option>
    `;
  } else {
    sendChannel.innerHTML = `
      <option value="Difusión del Líder a su Equipo (1,600 usuarios)">Difusión del Líder a su Equipo (1,600 usuarios)</option>
      <option value="Mensaje Individual Privado (Tu Red)">Mensaje Individual Privado (Tu Red)</option>
    `;
  }
}

function logout() {
  currentUser = null;
  showUnmaskedPhones = false;
  document.getElementById("username").value = "";
  const pwdInput = document.getElementById("password");
  pwdInput.value = "";
  pwdInput.type = "password";
  const toggleBtn = document.getElementById("togglePasswordBtn");
  if (toggleBtn) toggleBtn.innerHTML = ICONS.eye;
  document.getElementById("sidebar").classList.remove("open");
  document.getElementById("sidebarOverlay").classList.remove("active");
  document.getElementById("appContainer").style.display = "none";
  document.getElementById("loginScreen").style.display = "flex";
}

// ==========================================
// NAVEGACIÓN CON PROTECCIÓN DE ROL
// ==========================================
function showSection(secId) {
  const allowedIds = MENUS_BY_ROLE[currentUser.role].map(m => m.id);
  if (!allowedIds.includes(secId)) {
    showToast("Acceso denegado: Módulo exclusivo de Gerencia.");
    return;
  }

  document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
  document.getElementById("sec-" + secId).classList.add("active");
  document.querySelectorAll(".nav-item").forEach(n => n.classList.remove("active"));
  const activeNav = document.getElementById("nav-" + secId);
  if (activeNav) activeNav.classList.add("active");

  const titlesGerente = {
    dashboard: ["Panel General Nacional", "64,000 usuarios organizados en 20 distritos mediante 40 líderes"],
    avisos: ["Canal de Avisos Centralizado", "Publica avisos generales sin exponer los números de teléfono"],
    personas: ["Directorio de Personas Idóneas", "40 Líderes y contactos filtrables por distrito o rol"],
    envios: ["Envío Segmentado Nacional", "El Gerente escribe solo a los Líderes o al filtro elegido sin saturar su celular"],
    comunidad: ["Comunidad y Moderación (50+ Grupos)", "20 distritos conectados y espacio para crecer a 50+ grupos"],
    equipo: ["Acta y Equipo Asignado", "Celular corporativo del Gerente y solución en cascada"]
  };

  const titlesLider = {
    dashboard: ["Mi Panel Operativo", "Recibe avisos de Gerencia y compártelos con tu equipo de 1,600 usuarios"],
    avisos: ["Canal de Avisos Centralizado", "Avisos oficiales publicados por Gerencia (solo lectura)"],
    explorar: ["Explorar Subgrupos", "Elige libremente a qué grupos unirte o de cuáles salir"],
    personas: ["Personas de mi Red", "Busca contactos por zona o rol (números ocultos por seguridad)"],
    envios: ["Enviar Aviso Local", "Envía mensajes a tu equipo sin mostrar números de teléfono"]
  };

  const t = currentUser.role === "gerente" ? titlesGerente[secId] : titlesLider[secId];
  document.getElementById("pageTitle").textContent = t[0];
  document.getElementById("pageSubtitle").textContent = t[1];

  document.getElementById("sidebar").classList.remove("open");
  document.getElementById("sidebarOverlay").classList.remove("active");
}

// ==========================================
// RENDERIZADO DE VISTAS
// ==========================================
function initAppViews() {
  populateDeptSelects();
  renderKPIs();
  renderRegionStats();
  renderUsersTable();
  renderGroupsTable();
  renderExploreGroups();
  renderAnnouncements();
  updateRecipientPreview();
  renderHistory();
}

function populateDeptSelects() {
  const catalogDepts = typeof PERU_UBIGEO === "object" ? Object.keys(PERU_UBIGEO) : [];
  const userDepts = usersData.map(u => u.dept);
  const depts = [...new Set([...catalogDepts, ...userDepts])].sort((a, b) => a.localeCompare(b, "es"));

  const filterDept = document.getElementById("filterDept");
  const sendDept = document.getElementById("sendDept");
  const newDept = document.getElementById("newDept");

  const prevFilterDept = filterDept.value;
  const prevSendDept = sendDept.value;
  const prevNewDept = newDept ? newDept.value : "";

  filterDept.innerHTML = '<option value="">Todos los Departamentos</option>';
  sendDept.innerHTML = '<option value="">Todo el Perú (Nacional)</option>';
  if (newDept) newDept.innerHTML = '<option value="">Elige Departamento</option>';

  depts.forEach(d => {
    filterDept.innerHTML += `<option value="${d}">${d}</option>`;
    sendDept.innerHTML += `<option value="${d}">${d}</option>`;
    if (newDept) newDept.innerHTML += `<option value="${d}">${d}</option>`;
  });

  if (prevFilterDept && depts.includes(prevFilterDept)) filterDept.value = prevFilterDept;
  if (prevSendDept && depts.includes(prevSendDept)) sendDept.value = prevSendDept;
  if (newDept && prevNewDept && depts.includes(prevNewDept)) newDept.value = prevNewDept;

  syncCascadeSelects("filter", false);
  syncCascadeSelects("send", false);
  syncCascadeSelects("new", true);
}

function getProvincesForDept(dept) {
  if (!dept) return [];
  const catalogProvs = (typeof PERU_UBIGEO === "object" && PERU_UBIGEO[dept])
    ? Object.keys(PERU_UBIGEO[dept])
    : [];
  const userProvs = usersData
    .filter(u => u.dept === dept && u.provincia)
    .map(u => u.provincia);
  return [...new Set([...catalogProvs, ...userProvs])].sort((a, b) => a.localeCompare(b, "es"));
}

function getDistrictsForProvince(dept, prov) {
  if (!dept || !prov) return [];
  const catalogDists = (typeof PERU_UBIGEO === "object" && PERU_UBIGEO[dept] && PERU_UBIGEO[dept][prov])
    ? PERU_UBIGEO[dept][prov]
    : [];
  const userDists = usersData
    .filter(u => u.dept === dept && (u.provincia || "") === prov && u.distrito)
    .map(u => u.distrito);
  return [...new Set([...catalogDists, ...userDists])].sort((a, b) => a.localeCompare(b, "es"));
}

function syncCascadeSelects(prefix, isRequired) {
  const deptEl = document.getElementById(prefix + "Dept");
  const provEl = document.getElementById(prefix + "Provincia");
  const distEl = document.getElementById(prefix + "Distrito");
  if (!deptEl || !provEl || !distEl) return;

  const dept = deptEl.value;
  const currentProv = provEl.value;
  const provs = getProvincesForDept(dept);

  if (!dept) {
    provEl.innerHTML = `<option value="">${isRequired ? "Primero elige departamento" : "Primero elige un departamento"}</option>`;
    provEl.disabled = true;
    distEl.innerHTML = `<option value="">${isRequired ? "Primero elige provincia" : "Primero elige una provincia"}</option>`;
    distEl.disabled = true;
    return;
  }

  provEl.innerHTML = `<option value="">${isRequired ? "Elige Provincia" : "Todas las Provincias"}</option>`;
  provs.forEach(p => {
    provEl.innerHTML += `<option value="${p}">${p}</option>`;
  });
  provEl.disabled = false;
  if (currentProv && provs.includes(currentProv)) {
    provEl.value = currentProv;
  }

  const selectedProv = provEl.value;
  const currentDist = distEl.value;
  if (!selectedProv) {
    distEl.innerHTML = `<option value="">${isRequired ? "Primero elige provincia" : "Primero elige una provincia"}</option>`;
    distEl.disabled = true;
    return;
  }

  const dists = getDistrictsForProvince(dept, selectedProv);
  distEl.innerHTML = `<option value="">${isRequired ? "Elige Distrito" : "Todos los Distritos"}</option>`;
  dists.forEach(d => {
    distEl.innerHTML += `<option value="${d}">${d}</option>`;
  });
  distEl.disabled = false;
  if (currentDist && dists.includes(currentDist)) {
    distEl.value = currentDist;
  }
}

function onFilterDeptChange() {
  document.getElementById("filterProvincia").value = "";
  document.getElementById("filterDistrito").value = "";
  syncCascadeSelects("filter", false);
  renderUsersTable();
}

function onFilterProvinciaChange() {
  document.getElementById("filterDistrito").value = "";
  syncCascadeSelects("filter", false);
  renderUsersTable();
}

function onSendDeptChange() {
  document.getElementById("sendProvincia").value = "";
  document.getElementById("sendDistrito").value = "";
  syncCascadeSelects("send", false);
  updateRecipientPreview();
}

function onSendProvinciaChange() {
  document.getElementById("sendDistrito").value = "";
  syncCascadeSelects("send", false);
  updateRecipientPreview();
}

function onNewDeptChange() {
  document.getElementById("newProvincia").value = "";
  document.getElementById("newDistrito").value = "";
  syncCascadeSelects("new", true);
}

function onNewProvinciaChange() {
  document.getElementById("newDistrito").value = "";
  syncCascadeSelects("new", true);
}

function renderKPIs() {
  const container = document.getElementById("kpiGridContainer");
  const totalGroupMembers = groupsData.reduce((acc, g) => acc + Number(g.miembros), 0);
  const totalLeaders = usersData.filter(u => u.perfil === "Líder de Zona").length;

  if (currentUser.role === "gerente") {
    container.innerHTML = `
      <div class="kpi-card">
        <div class="kpi-label">Total de Usuarios</div>
        <div class="kpi-value">${totalGroupMembers.toLocaleString("es-PE")}</div>
        <div class="kpi-sub">En ${groupsData.length} distritos conectados</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">Líderes a Cargo</div>
        <div class="kpi-value">${totalLeaders}</div>
        <div class="kpi-sub">1,600 usuarios por cada líder</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">Distritos Organizados</div>
        <div class="kpi-value">${groupsData.length}</div>
        <div class="kpi-sub">Capacidad para 50+ grupos</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">Mensajes por Filtro</div>
        <div class="kpi-value">${historyData.length}</div>
        <div class="kpi-sub">Sin saturar el celular central</div>
      </div>
    `;
  } else {
    const liderHistoryCount = historyData.filter(h => h.role === "lider").length;
    const gerenteReceivedCount = historyData.filter(h => h.role === "gerente").length;
    container.innerHTML = `
      <div class="kpi-card">
        <div class="kpi-label">Mi Equipo Asignado</div>
        <div class="kpi-value">1,600</div>
        <div class="kpi-sub">Usuarios en tu distrito</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">Recibidos de Gerencia</div>
        <div class="kpi-value">${gerenteReceivedCount}</div>
        <div class="kpi-sub">Listos para reenviar al equipo</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">Avisos a tu Equipo</div>
        <div class="kpi-value">${liderHistoryCount}</div>
        <div class="kpi-sub">Envío privado sin exponer números</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">Privacidad de Números</div>
        <div class="kpi-value">100%</div>
        <div class="kpi-sub">Teléfonos ocultos</div>
      </div>
    `;
  }
}

function renderRegionStats() {
  const container = document.getElementById("regionStatsContainer");
  const total = groupsData.reduce((acc, g) => acc + Number(g.miembros), 0) || 1;

  // Agrupar distritos por región/departamento para mostrar un resumen limpio
  const byRegion = {};
  groupsData.forEach(g => {
    const key = g.region;
    if (!byRegion[key]) byRegion[key] = { miembros: 0, distritos: 0 };
    byRegion[key].miembros += Number(g.miembros);
    byRegion[key].distritos += 1;
  });

  container.innerHTML = "";
  Object.entries(byRegion).forEach(([region, info]) => {
    const pct = Math.round((info.miembros / total) * 100);
    const distLabel = info.distritos === 1 ? "1 distrito" : `${info.distritos} distritos`;
    container.innerHTML += `
      <div class="progress-row">
        <div class="progress-label">
          <span><strong>${region}</strong> <span class="meta-label">(${distLabel})</span></span>
          <span>${info.miembros.toLocaleString("es-PE")} (${pct}%)</span>
        </div>
        <div class="progress-track">
          <div class="progress-fill" style="width:${pct}%"></div>
        </div>
      </div>
    `;
  });
}

function maskPhone(phone) {
  if (showUnmaskedPhones && currentUser && currentUser.role === "gerente") {
    return phone;
  }
  return phone.slice(0, 3) + " *** " + phone.slice(6);
}

function togglePhoneMask() {
  if (currentUser.role !== "gerente") return;
  showUnmaskedPhones = !showUnmaskedPhones;
  document.getElementById("btnTogglePrivacy").innerHTML = showUnmaskedPhones
    ? `${ICONS.eyeOff} Ocultar Números`
    : `${ICONS.eye} Mostrar Números`;
  renderUsersTable();
}

function renderUsersTable() {
  const search = document.getElementById("filterSearch").value.toLowerCase();
  const dept = document.getElementById("filterDept").value;
  const provincia = document.getElementById("filterProvincia").value;
  const distrito = document.getElementById("filterDistrito").value;
  const profile = document.getElementById("filterProfile").value;
  const jornada = document.getElementById("filterJornada").value;

  const filtered = usersData.filter(u => {
    const userProv = u.provincia || (typeof inferProvinceFromUbigeo === "function" ? inferProvinceFromUbigeo(u.dept, u.distrito) : "");
    const matchSearch = u.nombre.toLowerCase().includes(search) ||
                        userProv.toLowerCase().includes(search) ||
                        u.distrito.toLowerCase().includes(search);
    const matchDept = !dept || u.dept === dept;
    const matchProv = !provincia || userProv === provincia;
    const matchDist = !distrito || u.distrito === distrito;
    const matchProf = !profile || u.perfil === profile;
    const matchJor = !jornada || u.jornada === jornada;
    return matchSearch && matchDept && matchProv && matchDist && matchProf && matchJor;
  });

  const tbody = document.getElementById("usersTableBody");
  tbody.innerHTML = "";
  filtered.forEach(u => {
    const userProv = u.provincia || (typeof inferProvinceFromUbigeo === "function" ? inferProvinceFromUbigeo(u.dept, u.distrito) : "");
    const tagClass = u.perfil.includes("Encargado") ? "tag-blue" :
                     u.perfil.includes("Líder") ? "tag-green" :
                     u.perfil.includes("Autoridad") ? "tag-purple" : "tag-amber";
    tbody.innerHTML += `
      <tr>
        <td><strong>${u.nombre}</strong></td>
        <td><code>${maskPhone(u.celular)}</code></td>
        <td>${u.dept}</td>
        <td>${userProv}</td>
        <td>${u.distrito}</td>
        <td><span class="tag ${tagClass}">${u.perfil}</span></td>
        <td>${u.jornada}</td>
        <td>
          <button class="btn btn-wa btn-sm" onclick="quickSelectForSend('${u.dept}', '${userProv}', '${u.distrito}', '${u.perfil}')">Enviar</button>
        </td>
      </tr>
    `;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = '<tr><td colspan="8" style="text-align:center; color:var(--muted);">No se encontraron personas con esos filtros.</td></tr>';
  }
}

function quickSelectForSend(dept, provincia, distrito, perfil) {
  const sendDeptEl = document.getElementById("sendDept");
  const sendProvEl = document.getElementById("sendProvincia");
  const sendDistEl = document.getElementById("sendDistrito");

  sendDeptEl.value = dept;
  syncCascadeSelects("send", false);
  if (provincia) {
    sendProvEl.value = provincia;
    syncCascadeSelects("send", false);
  }
  if (distrito) {
    sendDistEl.value = distrito;
  }

  document.getElementById("sendProfile").value = perfil;
  updateRecipientPreview();
  showSection("envios");
}

function openAddContactModal() {
  const card = document.getElementById("addContactCard");
  card.style.display = card.style.display === "none" ? "block" : "none";
}

function addNewContact(e) {
  e.preventDefault();
  const dept = document.getElementById("newDept").value;
  const provincia = document.getElementById("newProvincia").value;
  const distrito = document.getElementById("newDistrito").value;
  if (!dept || !provincia || !distrito) {
    showToast("Selecciona departamento, provincia y distrito.");
    return;
  }

  const newContact = {
    id: Date.now(),
    nombre: document.getElementById("newNombre").value.trim(),
    celular: document.getElementById("newCelular").value.trim(),
    dept,
    provincia,
    distrito,
    perfil: document.getElementById("newPerfil").value,
    equipo: document.getElementById("newPerfil").value === "Líder de Zona" ? 1600 : 0,
    jornada: "Sí"
  };
  usersData.unshift(newContact);
  saveState();
  e.target.reset();
  onNewDeptChange();
  document.getElementById("addContactCard").style.display = "none";
  initAppViews();
  showToast("Contacto guardado con número protegido.");
}

// ==========================================
// ENVÍO POR FILTRO
// ==========================================
function getFilteredRecipients() {
  const dept = document.getElementById("sendDept").value;
  const provincia = document.getElementById("sendProvincia").value;
  const distrito = document.getElementById("sendDistrito").value;
  const profile = document.getElementById("sendProfile").value;

  return usersData.filter(u => {
    const userProv = u.provincia || (typeof inferProvinceFromUbigeo === "function" ? inferProvinceFromUbigeo(u.dept, u.distrito) : "");
    const mDept = !dept || u.dept === dept;
    const mProv = !provincia || userProv === provincia;
    const mDist = !distrito || u.distrito === distrito;
    const mProf = !profile || u.perfil === profile;
    return mDept && mProv && mDist && mProf;
  });
}

function selectOnlyLeadersForSend() {
  document.getElementById("sendDept").value = "";
  document.getElementById("sendProvincia").value = "";
  document.getElementById("sendDistrito").value = "";
  syncCascadeSelects("send", false);
  document.getElementById("sendProfile").value = "Líder de Zona";
  updateRecipientPreview();
  showToast("Filtro ajustado: solo los 40 Líderes seleccionados.");
}

function updateRecipientPreview() {
  const list = getFilteredRecipients();
  const teamTotal = list.reduce((acc, u) => acc + (Number(u.equipo) || 0), 0);
  const namesPreview = list.slice(0, 3).map(u => `${u.nombre} (${maskPhone(u.celular)})`).join(", ");
  const extra = list.length > 3 ? ` y ${list.length - 3} más...` : "";
  const cascadeNote = teamTotal > 0
    ? ` · cubren <strong>${teamTotal.toLocaleString("es-PE")}</strong> usuarios en sus equipos`
    : "";
  document.getElementById("recipientPreviewBox").innerHTML = `
    Personas encontradas para enviar: <strong>${list.length}</strong>${cascadeNote}<br/>
    <span style="font-size:12px; color:var(--muted);">${list.length > 0 ? "Ej: " + namesPreview + extra : "Cambia los filtros para elegir a quiénes enviar."}</span>
  `;
}

function executeSegmentedSend() {
  const list = getFilteredRecipients();
  const msg = document.getElementById("sendMessageText").value.trim();
  const channel = document.getElementById("sendChannel").value;
  const dept = document.getElementById("sendDept").value || "Todo el Perú";
  const prov = document.getElementById("sendProvincia").value;
  const dist = document.getElementById("sendDistrito").value;
  const prof = document.getElementById("sendProfile").value || "Todos los roles";

  if (list.length === 0) {
    showToast("No hay personas seleccionadas para enviar.");
    return;
  }
  if (!msg) {
    showToast("Por favor, escribe el mensaje antes de enviar.");
    return;
  }

  const locationParts = [dept];
  if (prov) locationParts.push(prov);
  if (dist) locationParts.push(dist);

  const now = new Date();
  const fechaStr = now.toLocaleDateString("es-PE") + " " + now.toLocaleTimeString("es-PE", { hour: "2-digit", minute: "2-digit" });

  historyData.unshift({
    fecha: fechaStr,
    emisor: `${currentUser.name} (${currentUser.label})`,
    role: currentUser.role,
    destino: `${locationParts.join(" / ")} • ${prof}`,
    canal: channel,
    cantidad: list.length,
    mensaje: msg
  });

  saveState();
  document.getElementById("sendMessageText").value = "";
  renderHistory();
  renderKPIs();
  showToast(`Mensaje enviado de forma privada a ${list.length} persona(s).`);
}

function forwardToMyTeam(idx) {
  const gerenteMsgs = historyData.filter(h => h.role === "gerente");
  const original = gerenteMsgs[idx];
  if (!original || !currentUser || currentUser.role !== "lider") return;

  const now = new Date();
  const fechaStr = now.toLocaleDateString("es-PE") + " " + now.toLocaleTimeString("es-PE", { hour: "2-digit", minute: "2-digit" });

  historyData.unshift({
    fecha: fechaStr,
    emisor: `${currentUser.name} (LÍDER)`,
    role: "lider",
    destino: "Mi Equipo Asignado (Callao)",
    canal: "Difusión en Cascada al Equipo",
    cantidad: 1600,
    mensaje: original.mensaje
  });

  saveState();
  renderHistory();
  renderKPIs();
  showToast("Aviso replicado de forma privada a tu equipo de 1,600 usuarios.");
}

function renderHistory() {
  const container = document.getElementById("sentHistoryContainer");
  container.innerHTML = "";

  if (historyData.length === 0) {
    container.innerHTML = '<p style="font-size:13px; color:var(--muted);">Aún no hay mensajes registrados.</p>';
  } else {
    historyData.forEach(h => {
      const isFromGerente = h.role === "gerente";
      const directionTag = currentUser.role === "lider"
        ? (isFromGerente
            ? '<span class="tag tag-blue">Recibido de Gerencia</span>'
            : '<span class="tag tag-amber">Enviado por Líder</span>')
        : '';
      container.innerHTML += `
        <div class="history-item ${currentUser.role === 'lider' && isFromGerente ? 'from-gerente' : ''}">
          <div class="history-meta">
            <span><strong>${h.emisor}</strong></span>
            <span>${h.fecha}</span>
          </div>
          <div class="history-dest">${h.destino} (${Number(h.cantidad).toLocaleString("es-PE")} destinatarios)</div>
          <div class="history-msg">"${h.mensaje}"</div>
          <div class="history-tags">
            <span class="tag tag-green">${h.canal}</span>
            ${directionTag}
          </div>
        </div>
      `;
    });
  }

  const liderInbox = document.getElementById("liderInboxContainer");
  if (liderInbox) {
    const gerenteMsgs = historyData.filter(h => h.role === "gerente");
    if (gerenteMsgs.length === 0) {
      liderInbox.innerHTML = '<p style="font-size:13px; color:var(--muted);">No tienes mensajes nuevos de Gerencia.</p>';
    } else {
      liderInbox.innerHTML = gerenteMsgs.map((h, idx) => `
        <div class="history-item from-gerente">
          <div class="history-meta">
            <span><strong>${h.emisor}</strong></span>
            <span>${h.fecha}</span>
          </div>
          <div class="history-dest">${h.destino} (${Number(h.cantidad).toLocaleString("es-PE")} destinatarios)</div>
          <div class="history-msg">"${h.mensaje}"</div>
          <div class="history-tags" style="justify-content:space-between; align-items:center;">
            <span class="tag tag-blue">Comunicado de Gerencia</span>
            <button type="button" class="btn btn-wa btn-sm" onclick="forwardToMyTeam(${idx})">Reenviar a mi equipo (1,600)</button>
          </div>
        </div>
      `).join("");
    }
  }
}

// ==========================================
// CANAL DE AVISOS CENTRALIZADO
// ==========================================
function publishAnnouncement(e) {
  e.preventDefault();
  if (!currentUser || currentUser.role !== "gerente") return;

  const titulo = document.getElementById("annTitle").value.trim();
  const mensaje = document.getElementById("annMessage").value.trim();
  const alcance = groupsData
    .filter(g => g.activo !== false)
    .reduce((acc, g) => acc + Number(g.miembros), 0);

  const now = new Date();
  const fechaStr = now.toLocaleDateString("es-PE") + " " + now.toLocaleTimeString("es-PE", { hour: "2-digit", minute: "2-digit" });

  announcementsData.unshift({
    id: Date.now(),
    fecha: fechaStr,
    autor: `${currentUser.name} (${currentUser.label})`,
    titulo,
    mensaje,
    alcance
  });

  saveState();
  e.target.reset();
  renderAnnouncements();
  showToast(`Anuncio difundido a ${alcance.toLocaleString("es-PE")} miembros con privacidad protegida.`);
}

function renderAnnouncements() {
  const feed = document.getElementById("announcementsFeed");
  const countLabel = document.getElementById("announcementsCountLabel");
  const reachBox = document.getElementById("announcementReachBox");

  const activeReach = groupsData
    .filter(g => g.activo !== false)
    .reduce((acc, g) => acc + Number(g.miembros), 0);

  if (reachBox) {
    reachBox.innerHTML = `Personas en grupos activos que recibirán el aviso: <strong>${activeReach.toLocaleString("es-PE")}</strong> (números privados).`;
  }
  if (countLabel) {
    countLabel.textContent = `${announcementsData.length} ${announcementsData.length === 1 ? "aviso" : "avisos"}`;
  }
  if (!feed) return;

  if (announcementsData.length === 0) {
    feed.innerHTML = '<p style="font-size:13px; color:var(--muted);">Aún no hay avisos publicados.</p>';
    return;
  }

  feed.innerHTML = announcementsData.map(a => `
    <div class="history-item from-gerente">
      <div class="history-meta">
        <span><strong>${a.autor}</strong></span>
        <span>${a.fecha}</span>
      </div>
      <div class="history-dest">${a.titulo}</div>
      <div class="history-msg">${a.mensaje}</div>
      <div class="history-tags">
        <span class="tag tag-blue">Llega a ${Number(a.alcance).toLocaleString("es-PE")} personas</span>
        <span class="tag tag-green">Mensaje privado · Números ocultos</span>
      </div>
    </div>
  `).join("");
}

// ==========================================
// COMUNIDAD Y MODERACIÓN (SOLO GERENTE)
// ==========================================
function toggleGroupForm() {
  const f = document.getElementById("addGroupForm");
  f.style.display = f.style.display === "none" ? "block" : "none";
}

function addNewGroup(e) {
  e.preventDefault();
  if (currentUser.role !== "gerente") return;
  groupsData.push({
    id: Date.now(),
    nombre: document.getElementById("grpName").value.trim(),
    region: document.getElementById("grpRegion").value.trim(),
    categoria: document.getElementById("grpCategory").value,
    admin: document.getElementById("grpAdmin").value.trim(),
    miembros: Number(document.getElementById("grpMembers").value),
    estado: "Conectado (Mod. 2)",
    activo: true
  });
  saveState();
  e.target.reset();
  toggleGroupForm();
  initAppViews();
  showToast("Grupo conectado a la comunidad correctamente.");
}

function toggleGroupStatus(id) {
  if (!currentUser || currentUser.role !== "gerente") return;
  const grp = groupsData.find(g => g.id === id);
  if (!grp) return;
  grp.activo = grp.activo === false ? true : false;
  saveState();
  initAppViews();
  showToast(grp.activo ? `Grupo "${grp.nombre}" activado.` : `Grupo "${grp.nombre}" pausado.`);
}

function unlinkGroup(id) {
  if (!currentUser || currentUser.role !== "gerente") return;
  const grp = groupsData.find(g => g.id === id);
  if (!grp) return;
  groupsData = groupsData.filter(g => g.id !== id);
  joinedGroupIds = joinedGroupIds.filter(gid => gid !== id);
  saveState();
  initAppViews();
  showToast(`Grupo "${grp.nombre}" quitado de la comunidad.`);
}

function renderGroupsTable() {
  const tbody = document.getElementById("groupsTableBody");
  const capBadge = document.getElementById("groupCapacityBadge");
  if (capBadge) {
    capBadge.textContent = `${groupsData.length} / 50+ grupos conectados`;
  }
  if (!tbody) return;

  const search = (document.getElementById("grpFilterSearch")?.value || "").toLowerCase();
  const region = (document.getElementById("grpFilterRegion")?.value || "").toLowerCase();
  const category = document.getElementById("grpFilterCategory")?.value || "";

  const filtered = groupsData.filter(g => {
    const cat = g.categoria || "Regional";
    const mSearch = g.nombre.toLowerCase().includes(search) || g.admin.toLowerCase().includes(search);
    const mRegion = !region || g.region.toLowerCase().includes(region);
    const mCat = !category || cat === category;
    return mSearch && mRegion && mCat;
  });

  tbody.innerHTML = "";
  filtered.forEach(g => {
    const isActive = g.activo !== false;
    const cat = g.categoria || "Regional";
    tbody.innerHTML += `
      <tr>
        <td><strong>${g.nombre}</strong></td>
        <td>${g.region} <span class="meta-label">· ${cat}</span></td>
        <td>${g.admin}</td>
        <td>${Number(g.miembros).toLocaleString("es-PE")}</td>
        <td>
          <span class="tag ${isActive ? 'tag-green' : 'tag-amber'}">${isActive ? 'Activo' : 'Pausado'}</span>
        </td>
        <td>
          <div class="action-group">
            <button class="btn btn-outline btn-sm" onclick="toggleGroupStatus(${g.id})">${isActive ? 'Pausar' : 'Activar'}</button>
            <button class="btn btn-danger-outline btn-sm" onclick="unlinkGroup(${g.id})">Quitar</button>
          </div>
        </td>
      </tr>
    `;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = '<tr><td colspan="6" style="text-align:center; color:var(--muted);">No hay grupos que coincidan con los filtros.</td></tr>';
  }
}

// ==========================================
// EXPLORAR SUBGRUPOS (LIBERTAD DE PARTICIPACIÓN - LÍDERES)
// ==========================================
function toggleGroupMembership(id) {
  const grp = groupsData.find(g => g.id === id);
  if (!grp) return;
  if (grp.activo === false) {
    showToast("Este grupo está pausado temporalmente por Gerencia.");
    return;
  }

  const isJoined = joinedGroupIds.includes(id);
  if (isJoined) {
    joinedGroupIds = joinedGroupIds.filter(gid => gid !== id);
    showToast(`Saliste del grupo "${grp.nombre}".`);
  } else {
    joinedGroupIds.push(id);
    showToast(`Te uniste al grupo "${grp.nombre}".`);
  }
  saveState();
  renderExploreGroups();
}

function renderExploreGroups() {
  const grid = document.getElementById("exploreGroupsGrid");
  const countEl = document.getElementById("joinedGroupsCount");
  if (countEl) {
    const activeJoined = joinedGroupIds.filter(id => groupsData.some(g => g.id === id)).length;
    countEl.textContent = `Unido a ${activeJoined} de ${groupsData.length} grupos`;
  }
  if (!grid) return;

  const search = (document.getElementById("expFilterSearch")?.value || "").toLowerCase();
  const region = (document.getElementById("expFilterRegion")?.value || "").toLowerCase();
  const category = document.getElementById("expFilterCategory")?.value || "";

  const filtered = groupsData.filter(g => {
    const cat = g.categoria || "Regional";
    const mSearch = g.nombre.toLowerCase().includes(search) || g.admin.toLowerCase().includes(search);
    const mRegion = !region || g.region.toLowerCase().includes(region);
    const mCat = !category || cat === category;
    return mSearch && mRegion && mCat;
  });

  if (filtered.length === 0) {
    grid.innerHTML = '<p style="font-size:13px; color:var(--muted);">No se encontraron grupos con esos filtros.</p>';
    return;
  }

  grid.innerHTML = filtered.map(g => {
    const isJoined = joinedGroupIds.includes(g.id);
    const isActive = g.activo !== false;
    const cat = g.categoria || "Regional";
    return `
      <div class="subgroup-card ${isJoined ? 'joined' : ''}">
        <div>
          <div class="subgroup-title">${g.nombre}</div>
          <div class="subgroup-meta">
            ${g.region} · ${cat}<br/>
            Responsable: ${g.admin} · ${Number(g.miembros).toLocaleString("es-PE")} miembros
          </div>
        </div>
        <div class="subgroup-footer">
          <span class="tag ${!isActive ? 'tag-amber' : isJoined ? 'tag-green' : 'tag-blue'}">
            ${!isActive ? 'Pausado' : isJoined ? 'Miembro activo' : 'Disponible'}
          </span>
          <button class="btn ${isJoined ? 'btn-outline' : 'btn-wa'} btn-sm" onclick="toggleGroupMembership(${g.id})" ${!isActive ? 'disabled style="opacity:0.5; cursor:not-allowed;"' : ''}>
            ${isJoined ? 'Salir del grupo' : 'Unirse'}
          </button>
        </div>
      </div>
    `;
  }).join("");
}

// ==========================================
// UTILIDADES
// ==========================================
let toastTimer = null;

function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    t.classList.remove("show");
  }, 3400);
}
