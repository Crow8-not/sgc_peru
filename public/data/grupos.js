// ==========================================
// DATOS INICIALES DE GRUPOS (MODALIDAD 2)
// ==========================================
const DEFAULT_GROUPS = [
  { id: 1, nombre: "Comunidad Callao Central", region: "Callao", categoria: "Distrital", admin: "Lic. Patricia Gómez", miembros: 1420, estado: "Vinculado (Mod. 2)", activo: true },
  { id: 2, nombre: "Lima Metropolitana Norte y Este", region: "Lima", categoria: "Regional", admin: "Ing. Marcos Villanueva", miembros: 4850, estado: "Vinculado (Mod. 2)", activo: true },
  { id: 3, nombre: "Macro Región Sur - Arequipa", region: "Arequipa", categoria: "Regional", admin: "Dra. Claudia Benavides", miembros: 1680, estado: "Vinculado (Mod. 2)", activo: true },
  { id: 4, nombre: "Red Andina Cusco y Puno", region: "Cusco / Puno", categoria: "Regional", admin: "Lic. Wilfredo Quispe", miembros: 1540, estado: "Vinculado (Mod. 2)", activo: true },
  { id: 5, nombre: "Macro Región Norte (Trujillo/Piura)", region: "La Libertad / Piura", categoria: "Regional", admin: "Mg. Rosaura Paredes", miembros: 1920, estado: "Vinculado (Mod. 2)", activo: true },
  { id: 6, nombre: "Red Amazónica Loreto y San Martín", region: "Loreto / San Martín", categoria: "Temático", admin: "Lic. Javier Panduro", miembros: 1040, estado: "Vinculado (Mod. 2)", activo: true }
];

// ==========================================
// DATOS INICIALES DEL CANAL DE AVISOS GENERAL
// ==========================================
const DEFAULT_ANNOUNCEMENTS = [
  {
    id: 101,
    fecha: "19/11/2026 08:45",
    autor: "Juan Pérez (GERENTE)",
    titulo: "Inicio de Jornadas Institucionales Nacionales",
    mensaje: "Se comunica a todos los miembros de la comunidad que esta semana inician las jornadas de coordinación en Callao, Lima y regiones. Recuerda que tu número permanece privado y protegido.",
    alcance: 12450
  }
];

// Subgrupos a los que el Líder está unido inicialmente
const DEFAULT_LEADER_JOINED_GROUPS = [1, 2];
