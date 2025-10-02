import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";
// Import images from SAN RAMON folder
import aniversarioImage from "@/../SAN RAMON/Actividades.jpg";
import festivalDanza1 from "@/../SAN RAMON/festival_de_danza.jpg";
import festivalDanza2 from "@/../SAN RAMON/festival_de_danza_primaria.jpg";
import festivalPlatos from "@/../SAN RAMON/festival de platos tipicosjpg.jpg";
import colegioImage from "@/../SAN RAMON/colegio.jpg";

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
    <div>
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
