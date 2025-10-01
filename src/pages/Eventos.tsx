import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";

const Eventos = () => {
  const eventos = [
    {
      titulo: "Aniversario Institucional",
      fecha: "15 de Abril, 2024",
      descripcion: "Celebración de los 177 años de fundación con desfile cívico, actuaciones y ceremonias especiales.",
      lugar: "Instalaciones del Colegio",
    },
    {
      titulo: "Feria de Ciencias",
      fecha: "20 de Mayo, 2024",
      descripcion: "Exposición de proyectos científicos y tecnológicos elaborados por nuestros estudiantes.",
      lugar: "Patio Principal",
    },
    {
      titulo: "Día de la Madre",
      fecha: "12 de Mayo, 2024",
      descripcion: "Homenaje especial a todas las madres de nuestra comunidad educativa.",
      lugar: "Auditorio Institucional",
    },
    {
      titulo: "Concurso de Matemática",
      fecha: "8 de Junio, 2024",
      descripcion: "Competencia interescolar de habilidades matemáticas y razonamiento lógico.",
      lugar: "Aulas Nivel Secundaria",
    },
    {
      titulo: "Festival de Danzas",
      fecha: "28 de Junio, 2024",
      descripcion: "Presentación de danzas típicas de nuestra región Ayacucho.",
      lugar: "Plaza de Armas",
    },
    {
      titulo: "Día del Maestro",
      fecha: "6 de Julio, 2024",
      descripcion: "Reconocimiento y homenaje a nuestros dedicados docentes.",
      lugar: "Auditorio Institucional",
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="py-20 bg-gradient-to-b from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
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

      {/* Calendario de Eventos */}
      <section className="py-20 bg-background">
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
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
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

      {/* Galería destacada */}
      <section className="py-20 bg-muted">
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
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="aspect-video bg-gradient-to-br from-primary to-primary/70 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center"
              >
                <Calendar className="h-16 w-16 text-primary-foreground/50" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Eventos;
