// ==========================================
// DATOS INICIALES: 20 DISTRITOS · 40 LÍDERES · 64,000 USUARIOS
// (Cada distrito agrupa 3,200 usuarios = 2 equipos de 1,600 por líder)
// ==========================================
const DEFAULT_GROUPS = [
  { id: 1, nombre: "Equipo Distrito Callao", region: "Callao", categoria: "Distrital", admin: "Carlos Mendoza / María Torres", lideres: 2, miembros: 3200, estado: "Conectado (Mod. 2)", activo: true },
  { id: 2, nombre: "Equipo Distrito Ventanilla", region: "Callao", categoria: "Distrital", admin: "Jorge Paredes / Rosaura Jiménez", lideres: 2, miembros: 3200, estado: "Conectado (Mod. 2)", activo: true },
  { id: 3, nombre: "Equipo S.J. de Lurigancho", region: "Lima", categoria: "Distrital", admin: "Lucía Rojas / Marcos Villanueva", lideres: 2, miembros: 3200, estado: "Conectado (Mod. 2)", activo: true },
  { id: 4, nombre: "Equipo Distrito Miraflores", region: "Lima", categoria: "Distrital", admin: "Pedro Castillo / Andrea León", lideres: 2, miembros: 3200, estado: "Conectado (Mod. 2)", activo: true },
  { id: 5, nombre: "Equipo Distrito Comas", region: "Lima", categoria: "Distrital", admin: "Ana Huamán / Renzo Salazar", lideres: 2, miembros: 3200, estado: "Conectado (Mod. 2)", activo: true },
  { id: 6, nombre: "Equipo Distrito Los Olivos", region: "Lima", categoria: "Distrital", admin: "Miguel Cárdenas / Karen Bravo", lideres: 2, miembros: 3200, estado: "Conectado (Mod. 2)", activo: true },
  { id: 7, nombre: "Equipo San Martín de Porres", region: "Lima", categoria: "Distrital", admin: "Esteban Quispe / Claudia Benavides", lideres: 2, miembros: 3200, estado: "Conectado (Mod. 2)", activo: true },
  { id: 8, nombre: "Equipo Distrito Ate", region: "Lima", categoria: "Distrital", admin: "Héctor Navarro / Silvia Campos", lideres: 2, miembros: 3200, estado: "Conectado (Mod. 2)", activo: true },
  { id: 9, nombre: "Equipo Villa El Salvador", region: "Lima", categoria: "Distrital", admin: "Julio Delgado / Nadia Flores", lideres: 2, miembros: 3200, estado: "Conectado (Mod. 2)", activo: true },
  { id: 10, nombre: "Equipo Santiago de Surco", region: "Lima", categoria: "Distrital", admin: "Gabriel Vega / Mónica Ortiz", lideres: 2, miembros: 3200, estado: "Conectado (Mod. 2)", activo: true },
  { id: 11, nombre: "Equipo Distrito Yanahuara", region: "Arequipa", categoria: "Regional", admin: "Roberto Apaza / Valeria Chávez", lideres: 2, miembros: 3200, estado: "Conectado (Mod. 2)", activo: true },
  { id: 12, nombre: "Equipo Distrito Wanchaq", region: "Cusco", categoria: "Regional", admin: "Mateo Condori / Carmen Vargas", lideres: 2, miembros: 3200, estado: "Conectado (Mod. 2)", activo: true },
  { id: 13, nombre: "Equipo Distrito Trujillo", region: "La Libertad", categoria: "Regional", admin: "Luis Sánchez / Paola Zavaleta", lideres: 2, miembros: 3200, estado: "Conectado (Mod. 2)", activo: true },
  { id: 14, nombre: "Equipo Distrito Castilla", region: "Piura", categoria: "Regional", admin: "Diana Morales / Ernesto Merino", lideres: 2, miembros: 3200, estado: "Conectado (Mod. 2)", activo: true },
  { id: 15, nombre: "Equipo Distrito Chiclayo", region: "Lambayeque", categoria: "Regional", admin: "Hugo Salazar / Vanessa Castro", lideres: 2, miembros: 3200, estado: "Conectado (Mod. 2)", activo: true },
  { id: 16, nombre: "Equipo Distrito Huancayo", region: "Junín", categoria: "Regional", admin: "Fiorella Ramírez / César Poma", lideres: 2, miembros: 3200, estado: "Conectado (Mod. 2)", activo: true },
  { id: 17, nombre: "Equipo Distrito Iquitos", region: "Loreto", categoria: "Temático", admin: "Óscar Rengifo / Javier Panduro", lideres: 2, miembros: 3200, estado: "Conectado (Mod. 2)", activo: true },
  { id: 18, nombre: "Equipo Distrito Juliaca", region: "Puno", categoria: "Regional", admin: "Gladys Choque / Wilfredo Mamani", lideres: 2, miembros: 3200, estado: "Conectado (Mod. 2)", activo: true },
  { id: 19, nombre: "Equipo Chimbote y Áncash", region: "Áncash / Ica", categoria: "Regional", admin: "Fernando Medina / Patricia Silva", lideres: 2, miembros: 3200, estado: "Conectado (Mod. 2)", activo: true },
  { id: 20, nombre: "Equipo Tacna y Tarapoto", region: "Tacna / San Martín", categoria: "Temático", admin: "Ricardo Guevara / Sandra Núñez", lideres: 2, miembros: 3200, estado: "Conectado (Mod. 2)", activo: true }
];

// ==========================================
// DATOS INICIALES DEL CANAL DE AVISOS GENERAL
// ==========================================
const DEFAULT_ANNOUNCEMENTS = [
  {
    id: 101,
    fecha: "20/11/2026 08:30",
    autor: "Juan Pérez (GERENTE)",
    titulo: "Coordinación Semanal con los 40 Líderes (20 Distritos)",
    mensaje: "Estimados 40 líderes: cada uno debe compartir este comunicado con su equipo asignado (1,600 usuarios por líder). Así cubrimos a los 64,000 usuarios sin saturar el celular central.",
    alcance: 64000
  }
];

// Subgrupos a los que el Líder está unido inicialmente
const DEFAULT_LEADER_JOINED_GROUPS = [1, 2];
