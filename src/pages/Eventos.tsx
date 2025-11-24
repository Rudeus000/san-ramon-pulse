import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
// Imágenes desde la carpeta pública SAN RAMON (servidas desde la raíz)
const aniversarioImage = "/Actividades.jpg";
const festivalDanza1 = "/festival_de_danza.jpg";
const festivalDanza2 = "/festival_de_danza_primaria.jpg";
const festivalPlatos = "/festival de platos tipicosjpg.jpg";
const colegioImage = "/colegio.jpg";

// Diagonal divider component
const DiagonalDivider = ({ flip = false, bgColor = 'bg-background', topColor = 'from-primary to-primary/90' }) => (
  <div className={`relative h-16 w-full overflow-hidden ${bgColor}`}>
    <div 
      className={`absolute w-full h-32 transform ${flip ? 'origin-top-left -skew-y-2 -top-16' : 'origin-top-left skew-y-2 -top-16'}`}
      style={{
        background: `linear-gradient(to bottom right, ${topColor} 49.5%, transparent 50%)`,
      }}
    />
  </div>
);

const Eventos = () => {
  // Contador regresivo para el aniversario (31 de agosto)
  const [tiempoRestante, setTiempoRestante] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0
  });

  useEffect(() => {
    const calcularTiempoRestante = () => {
      const hoy = new Date();
      const añoActual = hoy.getFullYear();
      let fechaAniversario = new Date(añoActual, 7, 31, 0, 0, 0); // Agosto es el mes 7 (0-indexed)
      
      // Si ya pasó el aniversario este año, calcular para el próximo año
      if (hoy > fechaAniversario) {
        fechaAniversario = new Date(añoActual + 1, 7, 31, 0, 0, 0);
      }
      
      const diferencia = fechaAniversario.getTime() - hoy.getTime();
      
      if (diferencia > 0) {
        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
        
        setTiempoRestante({ dias, horas, minutos, segundos });
      }
    };

    calcularTiempoRestante();
    const interval = setInterval(calcularTiempoRestante, 1000); // Actualizar cada segundo

    return () => clearInterval(interval);
  }, []);

  const eventos = [
    {
      titulo: "Festival de Danzas Folklóricas",
      fecha: "28 de Junio, 2024",
      descripcion: "Espectáculo cultural con presentaciones de danzas típicas de las diferentes regiones del Perú.",
      lugar: "Coliseo del Colegio",
      imagen: festivalDanza1,
    },
    {
      titulo: "Festival de Danzas Primaria",
      fecha: "15 de Julio, 2024",
      descripcion: "Nuestros estudiantes de primaria demuestran su talento en este colorido festival de danzas.",
      lugar: "Patio Principal",
      imagen: festivalDanza2,
    },
    {
      titulo: "Festival de Platos Típicos",
      fecha: "28 de Julio, 2024",
      descripcion: "Exposición y degustación de la rica gastronomía peruana, preparada por nuestra comunidad educativa.",
      lugar: "Patio de Comedor",
      imagen: festivalPlatos,
    },
    {
      titulo: "Aniversario Institucional",
      fecha: "15 de Abril, 2024",
      descripcion: "Celebración de los 177 años de fundación con desfile cívico, actuaciones y ceremonias especiales.",
      lugar: "Instalaciones del Colegio",
      imagen: aniversarioImage,
    },
    {
      titulo: "Feria de Ciencias",
      fecha: "20 de Mayo, 2024",
      descripcion: "Exposición de proyectos científicos y tecnológicos elaborados por nuestros estudiantes.",
      lugar: "Patio Principal",
      imagen: colegioImage,
    },
    {
      titulo: "Festival de Danzas Ayacuchanas",
      fecha: "15 de Agosto, 2024",
      descripcion: "Presentación de danzas típicas de nuestra región Ayacucho.",
      lugar: "Plaza de Armas",
      imagen: festivalDanza1,
    },
    {
      titulo: "Día del Maestro",
      fecha: "6 de Julio, 2024",
      descripcion: "Reconocimiento y homenaje a nuestros dedicados docentes.",
      lugar: "Auditorio Institucional",
      imagen: aniversarioImage,
    }
  ];

  return (
    <div className="relative min-h-screen">
      {/* Fondo de la página */}
      <div 
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${colegioImage})`,
          opacity: 0.12,
          filter: 'blur(2px)'
        }}
      />
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-background via-background/96 to-background" />
      {/* Header */}
      <section className="relative py-40 bg-cover bg-center text-primary-foreground overflow-hidden" style={{ backgroundImage: `url(${colegioImage})`, backgroundPosition: 'center 30%' }}>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70"></div>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto relative z-10 px-4"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nuestros <span className="text-secondary">Eventos</span>
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Conoce las actividades y celebraciones de nuestra comunidad educativa
            </p>
          </motion.div>
        </div>
      </section>

      <DiagonalDivider flip={false} bgColor="bg-background" topColor="from-primary to-primary/90" />

      {/* Contador Regresivo para el Aniversario - Estilo Moderno */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-primary/20 to-gray-900 text-white overflow-hidden">
        {/* Efectos de fondo futurista */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
            animate={{
              x: [0, -100, 0],
              y: [0, -50, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-5xl mx-auto"
          >
            {/* Título con efecto glow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
                <span className="bg-gradient-to-r from-white via-secondary to-white bg-clip-text text-transparent drop-shadow-2xl" style={{
                  textShadow: '0 0 30px rgba(255, 193, 7, 0.5), 0 0 60px rgba(255, 193, 7, 0.3)'
                }}>
                  ANIVERSARIO SAN RAMÓN
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-300 font-medium">
                177 años de excelencia educativa
              </p>
            </motion.div>

            {/* Contador con módulos estilo futurista */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto mb-12"
            >
              {/* Días */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-primary/90 to-primary/70 rounded-xl p-6 md:p-8 shadow-2xl border-2 border-primary/50 relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    animate={{
                      x: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <div className="relative z-10">
                    <motion.div
                      key={tiempoRestante.dias}
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-5xl md:text-7xl font-black text-white mb-2"
                      style={{
                        textShadow: '0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 193, 7, 0.6)'
                      }}
                    >
                      {String(tiempoRestante.dias).padStart(2, '0')}
                    </motion.div>
                    <div className="text-sm md:text-base text-gray-200 font-semibold uppercase tracking-wider">
                      Días
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Horas */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-primary/90 to-primary/70 rounded-xl p-6 md:p-8 shadow-2xl border-2 border-primary/50 relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    animate={{
                      x: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                      delay: 0.5,
                    }}
                  />
                  <div className="relative z-10">
                    <motion.div
                      key={tiempoRestante.horas}
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-5xl md:text-7xl font-black text-white mb-2"
                      style={{
                        textShadow: '0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 193, 7, 0.6)'
                      }}
                    >
                      {String(tiempoRestante.horas).padStart(2, '0')}
                    </motion.div>
                    <div className="text-sm md:text-base text-gray-200 font-semibold uppercase tracking-wider">
                      Horas
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Minutos */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-primary/90 to-primary/70 rounded-xl p-6 md:p-8 shadow-2xl border-2 border-primary/50 relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    animate={{
                      x: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                      delay: 1,
                    }}
                  />
                  <div className="relative z-10">
                    <motion.div
                      key={tiempoRestante.minutos}
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-5xl md:text-7xl font-black text-white mb-2"
                      style={{
                        textShadow: '0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 193, 7, 0.6)'
                      }}
                    >
                      {String(tiempoRestante.minutos).padStart(2, '0')}
                    </motion.div>
                    <div className="text-sm md:text-base text-gray-200 font-semibold uppercase tracking-wider">
                      Minutos
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Segundos */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-primary/90 to-primary/70 rounded-xl p-6 md:p-8 shadow-2xl border-2 border-primary/50 relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    animate={{
                      x: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                      delay: 1.5,
                    }}
                  />
                  <div className="relative z-10">
                    <motion.div
                      key={tiempoRestante.segundos}
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-5xl md:text-7xl font-black text-white mb-2"
                      style={{
                        textShadow: '0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 193, 7, 0.6)'
                      }}
                    >
                      {String(tiempoRestante.segundos).padStart(2, '0')}
                    </motion.div>
                    <div className="text-sm md:text-base text-gray-200 font-semibold uppercase tracking-wider">
                      Segundos
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Información adicional */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-3 text-gray-300"
            >
              <Calendar className="h-5 w-5 text-secondary" />
              <p className="text-lg md:text-xl font-semibold">
                31 de Agosto - Celebración del Aniversario
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Calendario de Eventos */}
      <section className="relative py-20 bg-background overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 -mr-32 -mt-32 bg-primary/5 rounded-full"></div>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Calendario <span className="text-primary">2024</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mantente informado sobre todas nuestras actividades académicas y culturales
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {eventos.map((evento, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{evento.fecha}</span>
                    </div>
                    <CardTitle className="text-xl">{evento.titulo}</CardTitle>
                    <CardDescription className="text-base">
                      {evento.descripcion}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>{evento.lugar}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <DiagonalDivider flip={true} bgColor="bg-muted" topColor="bg-background" />

      {/* Galería destacada */}
      <section className="relative py-20 bg-muted overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-64 h-64 -ml-32 -mb-32 bg-primary/5 rounded-full"></div>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Galería de <span className="text-primary">Recuerdos</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Momentos especiales de nuestras celebraciones y actividades
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={aniversarioImage}
                alt="Aniversario Institucional"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end p-6" style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 50%, transparent 100%)' }}>
                <div className="text-white">
                  <h3 className="font-bold text-2xl mb-2">Aniversario 177 años</h3>
                  <p className="text-white/90">Desfile cívico y ceremonia especial</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={festivalDanza2}
                alt="Festival de Danzas Primaria"
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end p-4" style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.3) 50%, transparent 100%)' }}>
                <p className="text-white font-semibold">Festival de Danzas Primaria</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={festivalPlatos}
                alt="Festival de Platos Típicos"
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end p-4" style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.3) 50%, transparent 100%)' }}>
                <p className="text-white font-semibold">Festival de Platos Típicos</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="aspect-video bg-gradient-to-br from-primary to-primary/70 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-bold text-lg">Ver más eventos</span>
              </div>
              <Calendar className="h-16 w-16 text-primary-foreground/50 group-hover:scale-110 transition-transform duration-300" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="aspect-video bg-gradient-to-br from-primary to-primary/70 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center"
            >
              <Calendar className="h-16 w-16 text-primary-foreground/50" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="aspect-video bg-gradient-to-br from-primary to-primary/70 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center"
            >
              <Calendar className="h-16 w-16 text-primary-foreground/50" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Eventos;
