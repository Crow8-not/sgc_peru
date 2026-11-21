// ==========================================
// DATOS INICIALES: 40 LÍDERES EN 20 DISTRITOS + EQUIPO BASE
// (Cada líder gestiona un equipo de 1,600 usuarios = 64,000 total)
// ==========================================
const DEFAULT_USERS = [
  // 20 Distritos x 2 Líderes = 40 Líderes de Zona
  { id: 1, nombre: "Carlos Mendoza Quispe", celular: "987654321", dept: "Callao", provincia: "Callao", distrito: "Callao", perfil: "Líder de Zona", equipo: 1600, jornada: "Sí" },
  { id: 2, nombre: "María Elena Torres Vega", celular: "945112233", dept: "Callao", provincia: "Callao", distrito: "Callao", perfil: "Líder de Zona", equipo: 1600, jornada: "Sí" },
  { id: 3, nombre: "Jorge Luis Paredes Ríos", celular: "998877665", dept: "Callao", provincia: "Callao", distrito: "Ventanilla", perfil: "Líder de Zona", equipo: 1600, jornada: "Sí" },
  { id: 4, nombre: "Rosaura Jiménez Soto", celular: "945223344", dept: "Callao", provincia: "Callao", distrito: "Ventanilla", perfil: "Líder de Zona", equipo: 1600, jornada: "Sí" },
  { id: 5, nombre: "Lucía Fernanda Rojas Díaz", celular: "912345678", dept: "Lima", provincia: "Lima", distrito: "San Juan de Lurigancho", perfil: "Líder de Zona", equipo: 1600, jornada: "Sí" },
  { id: 6, nombre: "Marcos Villanueva Cruz", celular: "912349900", dept: "Lima", provincia: "Lima", distrito: "San Juan de Lurigancho", perfil: "Líder de Zona", equipo: 1600, jornada: "Sí" },
  { id: 7, nombre: "Pedro Pablo Castillo Cruz", celular: "955443322", dept: "Lima", provincia: "Lima", distrito: "Miraflores", perfil: "Líder de Zona", equipo: 1600, jornada: "Sí" },
  { id: 8, nombre: "Andrea Paola León", celular: "955448811", dept: "Lima", provincia: "Lima", distrito: "Miraflores", perfil: "Líder de Zona", equipo: 1600, jornada: "Sí" },
  { id: 9, nombre: "Ana Sofía Huamán Flores", celular: "966778899", dept: "Lima", provincia: "Lima", distrito: "Comas", perfil: "Líder de Zona", equipo: 1600, jornada: "Sí" },
  { id: 10, nombre: "Renzo David Salazar", celular: "966771122", dept: "Lima", provincia: "Lima", distrito: "Comas", perfil: "Líder de Zona", equipo: 1600, jornada: "Sí" },
  { id: 11, nombre: "Miguel Ángel Cárdenas", celular: "931112233", dept: "Lima", provincia: "Lima", distrito: "Los Olivos", perfil: "Líder de Zona", equipo: 1600, jornada: "Sí" },
  { id: 12, nombre: "Karen Melissa Bravo", celular: "931445566", dept: "Lima", provincia: "Lima", distrito: "Los Olivos", perfil: "Líder de Zona", equipo: 1600, jornada: "Sí" },
  { id: 13, nombre: "Esteban Quispe Ramos", celular: "932223344", dept: "Lima", provincia: "Lima", distrito: "San Martín de Porres", perfil: "Líder de Zona", equipo: 1600, jornada: "Sí" },
  { id: 14, nombre: "Claudia Benavides Rey", celular: "932556677", dept: "Lima", provincia: "Lima", distrito: "San Martín de Porres", perfil: "Líder de Zona", equipo: 1600, jornada: "Sí" },
  { id: 15, nombre: "Héctor Raúl Navarro", celular: "934112233", dept: "Lima", provincia: "Lima", distrito: "Ate", perfil: "Líder de Zona", equipo: 1600, jornada: "Sí" },
  { id: 16, nombre: "Silvia Teresa Campos", celular: "934445566", dept: "Lima", provincia: "Lima", distrito: "Ate", perfil: "Líder de Zona", equipo: 1600, jornada: "Sí" },
  { id: 17, nombre: "Julio César Delgado", celular: "935112233", dept: "Lima", provincia: "Lima", distrito: "Villa El Salvador", perfil: "Líder de Zona", equipo: 1600, jornada: "Sí" },
  { id: 18, nombre: "Nadia Lorena Flores", celular: "935445566", dept: "Lima", provincia: "Lima", distrito: "Villa El Salvador", perfil: "Líder de Zona", equipo: 1600, jornada: "Sí" },
  { id: 19, nombre: "Gabriel Alonso Vega", celular: "936112233", dept: "Lima", provincia: "Lima", distrito: "Santiago de Surco", perfil: "Líder de Zona", equipo: 1600, jornada: "Sí" },
  { id: 20, nombre: "Mónica Beatriz Ortiz", celular: "936445566", dept: "Lima", provincia: "Lima", distrito: "Santiago de Surco", perfil: "Líder de Zona", equipo: 1600, jornada: "Sí" },
  { id: 21, nombre: "Roberto Carlos Apaza", celular: "933221100", dept: "Arequipa", provincia: "Arequipa", distrito: "Yanahuara", perfil: "Líder de Zona", equipo: 1600, jornada: "Sí" },
  { id: 22, nombre: "Valeria Alejandra Chávez", celular: "944556677", dept: "Arequipa", provincia: "Arequipa", distrito: "Yanahuara", perfil: "Líder de Zona", equipo: 1600, jornada: "Sí" },
  { id: 23, nombre: "Mateo Sebastián Condori", celular: "977889900", dept: "Cusco", provincia: "Cusco", distrito: "Wanchaq", perfil: "Líder de Zona", equipo: 1600, jornada: "Sí" },
  { id: 24, nombre: "Carmen Rosa Vargas León", celular: "922334455", dept: "Cusco", provincia: "Cusco", distrito: "Wanchaq", perfil: "Líder de Zona", equipo: 1600, jornada: "Sí" },
  { id: 25, nombre: "Luis Alberto Sánchez", celular: "911223344", dept: "La Libertad", provincia: "Trujillo", distrito: "Trujillo", perfil: "Líder de Zona", equipo: 1600, jornada: "Sí" },
  { id: 26, nombre: "Paola Andrea Zavaleta", celular: "911556677", dept: "La Libertad", provincia: "Trujillo", distrito: "Trujillo", perfil: "Líder de Zona", equipo: 1600, jornada: "Sí" },
  { id: 27, nombre: "Diana Carolina Morales", celular: "988990011", dept: "Piura", provincia: "Piura", distrito: "Castilla", perfil: "Líder de Zona", equipo: 1600, jornada: "Sí" },
  { id: 28, nombre: "Ernesto Javier Merino", celular: "988223344", dept: "Piura", provincia: "Piura", distrito: "Castilla", perfil: "Líder de Zona", equipo: 1600, jornada: "Sí" },
  { id: 29, nombre: "Hugo Enrique Salazar", celular: "954321987", dept: "Lambayeque", provincia: "Chiclayo", distrito: "Chiclayo", perfil: "Líder de Zona", equipo: 1600, jornada: "Sí" },
  { id: 30, nombre: "Vanessa Pilar Castro", celular: "954654321", dept: "Lambayeque", provincia: "Chiclayo", distrito: "Chiclayo", perfil: "Líder de Zona", equipo: 1600, jornada: "Sí" },
  { id: 31, nombre: "Fiorella Beatriz Ramírez", celular: "965432198", dept: "Junín", provincia: "Huancayo", distrito: "Huancayo", perfil: "Líder de Zona", equipo: 1600, jornada: "Sí" },
  { id: 32, nombre: "César Augusto Poma", celular: "965789456", dept: "Junín", provincia: "Huancayo", distrito: "Huancayo", perfil: "Líder de Zona", equipo: 1600, jornada: "Sí" },
  { id: 33, nombre: "Óscar Iván Rengifo", celular: "976543219", dept: "Loreto", provincia: "Maynas", distrito: "Iquitos", perfil: "Líder de Zona", equipo: 1600, jornada: "Sí" },
  { id: 34, nombre: "Javier Panduro Ríos", celular: "976112233", dept: "Loreto", provincia: "Maynas", distrito: "Iquitos", perfil: "Líder de Zona", equipo: 1600, jornada: "Sí" },
  { id: 35, nombre: "Gladys Marisol Choque", celular: "987123456", dept: "Puno", provincia: "San Román", distrito: "Juliaca", perfil: "Líder de Zona", equipo: 1600, jornada: "Sí" },
  { id: 36, nombre: "Wilfredo Mamani Ticona", celular: "987456789", dept: "Puno", provincia: "San Román", distrito: "Juliaca", perfil: "Líder de Zona", equipo: 1600, jornada: "Sí" },
  { id: 37, nombre: "Fernando José Medina", celular: "943216789", dept: "Áncash", provincia: "Santa", distrito: "Chimbote", perfil: "Líder de Zona", equipo: 1600, jornada: "Sí" },
  { id: 38, nombre: "Patricia Milagros Silva", celular: "932165498", dept: "Ica", provincia: "Ica", distrito: "Ica", perfil: "Líder de Zona", equipo: 1600, jornada: "Sí" },
  { id: 39, nombre: "Ricardo Alonso Guevara", celular: "921987654", dept: "Tacna", provincia: "Tacna", distrito: "Tacna", perfil: "Líder de Zona", equipo: 1600, jornada: "Sí" },
  { id: 40, nombre: "Sandra Paola Núñez", celular: "919876543", dept: "San Martín", provincia: "San Martín", distrito: "Tarapoto", perfil: "Líder de Zona", equipo: 1600, jornada: "Sí" },

  // Muestra de miembros de equipo y especialistas (para filtro por otros roles)
  { id: 41, nombre: "Elena Vargas Huerta", celular: "991122334", dept: "Callao", provincia: "Callao", distrito: "Callao", perfil: "Especialista", equipo: 0, jornada: "Sí" },
  { id: 42, nombre: "Rodrigo Palomino Vera", celular: "992233445", dept: "Lima", provincia: "Lima", distrito: "Miraflores", perfil: "Encargado de Zona", equipo: 0, jornada: "Sí" },
  { id: 43, nombre: "Martha Lucero Peña", celular: "993344556", dept: "Lima", provincia: "Lima", distrito: "Comas", perfil: "Autoridad Local", equipo: 0, jornada: "No" },
  { id: 44, nombre: "Diego Armando Quispe", celular: "994455667", dept: "Arequipa", provincia: "Arequipa", distrito: "Yanahuara", perfil: "Asistente", equipo: 0, jornada: "Sí" },
  { id: 45, nombre: "Sofía Milagros Cerna", celular: "995566778", dept: "Callao", provincia: "Callao", distrito: "Ventanilla", perfil: "Asistente", equipo: 0, jornada: "Sí" }
];
