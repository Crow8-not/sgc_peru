// ==========================================
// CATÁLOGO GEOGRÁFICO DEL PERÚ (DEPARTAMENTO → PROVINCIA → DISTRITO)
// ==========================================
const PERU_UBIGEO = {
  "Amazonas": {
    "Chachapoyas": ["Chachapoyas", "Huancas", "Leimebamba", "Molinopampa"],
    "Bagua": ["Bagua", "Aramango", "Copallín", "La Peca"],
    "Utcubamba": ["Bagua Grande", "Cajaruro", "Cumba", "El Milagro"]
  },
  "Áncash": {
    "Huaraz": ["Huaraz", "Independencia", "Jangas", "Tarica"],
    "Santa": ["Chimbote", "Nuevo Chimbote", "Coishco", "Santa", "Nepeña"],
    "Huaylas": ["Caraz", "Huaylas", "Mato", "Pamparomás"],
    "Casma": ["Casma", "Buena Vista Alta", "Comandante Noel", "Yaután"]
  },
  "Apurímac": {
    "Abancay": ["Abancay", "Curahuasi", "Lambrama", "Tamburco"],
    "Andahuaylas": ["Andahuaylas", "San Jerónimo", "Talavera", "Pacucha"]
  },
  "Arequipa": {
    "Arequipa": ["Arequipa", "Yanahuara", "Cayma", "Cerro Colorado", "José Luis Bustamante y Rivero", "Miraflores", "Paucarpata", "Sachaca", "Socabaya"],
    "Camaná": ["Camaná", "José María Quimper", "Mariano Nicolás Valcárcel", "Samuel Pastor"],
    "Caylloma": ["Chivay", "Majes", "Caylloma", "Yanque"],
    "Islay": ["Mollendo", "Cocachacra", "Deán Valdivia", "Mejía"]
  },
  "Ayacucho": {
    "Huamanga": ["Ayacucho", "Carmen Alto", "Jesús Nazareno", "San Juan Bautista", "Andrés Avelino Cáceres Dorregaray"],
    "Huanta": ["Huanta", "Luricocha", "Sivia", "Llochegua"]
  },
  "Cajamarca": {
    "Cajamarca": ["Cajamarca", "Baños del Inca", "Llacanora", "Namora"],
    "Jaén": ["Jaén", "Bellavista", "Colasay", "Pomahuaca"],
    "Chota": ["Chota", "Bambamarca", "Lajas", "Tacabamba"]
  },
  "Callao": {
    "Callao": ["Callao", "Bellavista", "Carmen de la Legua Reynoso", "La Perla", "La Punta", "Ventanilla", "Mi Perú"]
  },
  "Cusco": {
    "Cusco": ["Cusco", "Wanchaq", "San Sebastián", "San Jerónimo", "Santiago", "Poroy"],
    "Urubamba": ["Urubamba", "Chinchero", "Machupicchu", "Ollantaytambo"],
    "La Convención": ["Santa Ana", "Echarate", "Maranura", "Quellouno"],
    "Canchis": ["Sicuani", "Combapata", "Maranganí", "Tinta"]
  },
  "Huancavelica": {
    "Huancavelica": ["Huancavelica", "Ascensión", "Acoria", "Yauli"],
    "Tayacaja": ["Pampas", "Acraquia", "Colcabamba", "Daniel Hernández"]
  },
  "Huánuco": {
    "Huánuco": ["Huánuco", "Amarilis", "Pillco Marca", "Santa María del Valle"],
    "Leoncio Prado": ["Rupa-Rupa", "Castillo Grande", "José Crespo y Castillo", "Luyando"]
  },
  "Ica": {
    "Ica": ["Ica", "La Tinguiña", "Los Aquijes", "Parcona", "Subtanjalla"],
    "Chincha": ["Chincha Alta", "Grocio Prado", "Pueblo Nuevo", "Sunampe"],
    "Pisco": ["Pisco", "Paracas", "San Andrés", "Túpac Amaru Inca"],
    "Nasca": ["Nasca", "Marcona", "Vista Alegre"]
  },
  "Junín": {
    "Huancayo": ["Huancayo", "El Tambo", "Chilca", "Pilcomayo", "Sapallanga"],
    "Chanchamayo": ["Chanchamayo", "Pichanaqui", "San Ramón", "Perené"],
    "Satipo": ["Satipo", "Mazamari", "Pangoa", "Río Negro"],
    "Tarma": ["Tarma", "Acobamba", "Palca", "San Pedro de Cajas"]
  },
  "La Libertad": {
    "Trujillo": ["Trujillo", "El Porvenir", "Florencia de Mora", "Huanchaco", "La Esperanza", "Laredo", "Moche", "Víctor Larco Herrera"],
    "Ascope": ["Ascope", "Casa Grande", "Chocope", "Paiján"],
    "Pacasmayo": ["San Pedro de Lloc", "Guadalupe", "Pacasmayo", "Jequetepeque"],
    "Sánchez Carrión": ["Huamachuco", "Chugay", "Sanagorán", "Sarin"]
  },
  "Lambayeque": {
    "Chiclayo": ["Chiclayo", "José Leonardo Ortiz", "La Victoria", "Pimentel", "Monsefú", "Reque"],
    "Lambayeque": ["Lambayeque", "Mórrope", "Motupe", "Olmos"],
    "Ferreñafe": ["Ferreñafe", "Pueblo Nuevo", "Pitipo"]
  },
  "Lima": {
    "Lima": ["Ate", "Barranco", "Breña", "Carabayllo", "Chorrillos", "Comas", "El Agustino", "Independencia", "Jesús María", "La Molina", "La Victoria", "Lima", "Lince", "Los Olivos", "Lurigancho", "Lurín", "Magdalena del Mar", "Miraflores", "Pueblo Libre", "Puente Piedra", "Rímac", "San Borja", "San Isidro", "San Juan de Lurigancho", "San Juan de Miraflores", "San Luis", "San Martín de Porres", "San Miguel", "Santa Anita", "Santiago de Surco", "Surquillo", "Villa El Salvador", "Villa María del Triunfo"],
    "Cañete": ["San Vicente de Cañete", "Asia", "Chilca", "Imperial", "Mala"],
    "Huaral": ["Huaral", "Aucallama", "Chancay"],
    "Huaura": ["Huacho", "Huaura", "Santa María", "Végueta"],
    "Barranca": ["Barranca", "Paramonga", "Pativilca", "Supe"]
  },
  "Loreto": {
    "Maynas": ["Iquitos", "Belén", "Punchana", "San Juan Bautista"],
    "Alto Amazonas": ["Yurimaguas", "Balsapuerto", "Lagunas"],
    "Loreto": ["Nauta", "Parinari", "Tigre"]
  },
  "Madre de Dios": {
    "Tambopata": ["Tambopata", "Inambari", "Las Piedras", "Laberinto"],
    "Tahuamanu": ["Iñapari", "Iberia", "Tahuamanu"]
  },
  "Moquegua": {
    "Mariscal Nieto": ["Moquegua", "Samegua", "Torata"],
    "Ilo": ["Ilo", "El Algarrobal", "Pacocha"]
  },
  "Pasco": {
    "Pasco": ["Chaupimarca", "Yanacancha", "Simón Bolívar"],
    "Oxapampa": ["Oxapampa", "Villa Rica", "Puerto Bermúdez"]
  },
  "Piura": {
    "Piura": ["Piura", "Castilla", "Veintiséis de Octubre", "Catacaos", "Tambogrande"],
    "Sullana": ["Sullana", "Bellavista", "Marcavelica", "Querecotillo"],
    "Talara": ["Pariñas", "La Brea", "Los Órganos", "Máncora"],
    "Paita": ["Paita", "Colán", "La Huaca"]
  },
  "Puno": {
    "Puno": ["Puno", "Acora", "Chucuito", "Platería"],
    "San Román": ["Juliaca", "San Miguel", "Cabana", "Caracoto"],
    "Azángaro": ["Azángaro", "Asillo", "Chupa"]
  },
  "San Martín": {
    "San Martín": ["Tarapoto", "La Banda de Shilcayo", "Morales", "Cacatachi"],
    "Moyobamba": ["Moyobamba", "Calzada", "Habana", "Soritor"],
    "Rioja": ["Rioja", "Nueva Cajamarca", "Pardo Miguel"]
  },
  "Tacna": {
    "Tacna": ["Tacna", "Alto de la Alianza", "Ciudad Nueva", "Gregorio Albarracín Lanchipa", "Pocollay"],
    "Jorge Basadre": ["Locumba", "Ilabaya", "Ite"]
  },
  "Tumbes": {
    "Tumbes": ["Tumbes", "Corrales", "La Cruz", "San Jacinto"],
    "Zarumilla": ["Zarumilla", "Aguas Verdes", "Papayal"]
  },
  "Ucayali": {
    "Coronel Portillo": ["Callería", "Manantay", "Yarinacocha", "Campo Verde"],
    "Padre Abad": ["Padre Abad", "Curimaná", "Irazola"]
  }
};

function inferProvinceFromUbigeo(dept, distrito) {
  const provinces = PERU_UBIGEO[dept];
  if (!provinces) return "";
  if (distrito) {
    const target = distrito.toLowerCase();
    for (const [prov, dists] of Object.entries(provinces)) {
      if (dists.some(d => d.toLowerCase() === target)) {
        return prov;
      }
    }
  }
  const provNames = Object.keys(provinces);
  return provNames[0] || "";
}
