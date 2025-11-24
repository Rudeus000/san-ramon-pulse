import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, BookOpen, FlaskConical, Library, Palette, Trophy, Wrench } from "lucide-react";
import { useState } from "react";
// Imágenes desde la carpeta pública SAN RAMON (servidas desde la raíz)
const bibliotecaImage = "/colegio2.jpg";
const laboratorioImage = "/Laboratorio.jpg";
const deportesImage = "/Actividades.jpg";
const talleresImage = "/talleres.jpg";
const laboratorio1 = "/Laboratorio.jpg";
const laboratorio2 = "/laboratorio2.jpg";
const instalacion1 = "/colegio3.jpg";
const instalacion2 = "/colegio4.jpg";
const instalacion3 = "/colegio5.jpg";

const Servicios = () => {
  const [servicioSeleccionado, setServicioSeleccionado] = useState<string | null>(null);

  const servicios = [
    {
      id: "biblioteca",
      icon: Library,
      titulo: "Biblioteca Institucional",
      descripcion:
        "Amplio acervo bibliográfico con material físico y digital para la investigación y el aprendizaje autónomo.",
      imagenes: [bibliotecaImage],
    },
    {
      id: "laboratorios",
      icon: FlaskConical,
      titulo: "Laboratorios",
      descripcion:
        "Laboratorios de ciencias, física, química y cómputo equipados con tecnología moderna para el aprendizaje práctico.",
      imagenes: [laboratorioImage, laboratorio1, laboratorio2],
    },
    {
      id: "deportes",
      icon: Trophy,
      titulo: "Áreas Deportivas",
      descripcion:
        "Campos multiusos y espacios recreativos para el desarrollo físico y deportivo de nuestros estudiantes.",
      imagenes: [deportesImage],
    },
    {
      id: "talleres",
      icon: Wrench,
      titulo: "Talleres",
      descripcion:
        "Espacios dedicados al desarrollo de habilidades técnicas y creativas a través de diversos talleres especializados.",
      imagenes: [talleresImage],
    },
    {
      id: "orientacion",
      icon: Users,
      titulo: "Orientación y Tutoría",
      descripcion:
        "Acompañamiento personalizado para el desarrollo académico y personal de cada estudiante, con profesionales especializados en educación.",
      imagenes: [],
    },
    {
      id: "refuerzo",
      icon: BookOpen,
      titulo: "Reforzamiento Académico",
      descripcion:
        "Programas de apoyo y nivelación para estudiantes que requieren atención especial en áreas específicas.",
      imagenes: [],
    },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Fondo de la página */}
      <div 
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${laboratorioImage})`,
          opacity: 0.12,
          filter: 'blur(2px)'
        }}
      />
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-background via-background/96 to-background" />
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
              Nuestros <span className="text-secondary">Servicios</span>
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Infraestructura y recursos para una educación de calidad
            </p>
          </motion.div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {servicios.map((servicio, index) => (
              <motion.div
                key={servicio.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card 
                  className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 group cursor-pointer"
                  onClick={() => setServicioSeleccionado(servicioSeleccionado === servicio.id ? null : servicio.id)}
                >
                  <CardHeader>
                    <div className="bg-primary/10 group-hover:bg-primary p-4 rounded-lg w-fit mb-4 transition-colors duration-300">
                      <servicio.icon className="h-10 w-10 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <CardTitle className="text-xl">{servicio.titulo}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {servicio.descripcion}
                    </CardDescription>
                    {servicio.imagenes.length > 0 && (
                      <div className="mt-4 text-sm text-primary font-medium">
                        Ver galería →
                      </div>
                    )}
                  </CardContent>
                  
                  {/* Galería interna expandible */}
                  {servicioSeleccionado === servicio.id && servicio.imagenes.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-4 border-t">
                        <h4 className="text-sm font-semibold mb-3 text-foreground">Galería de Fotos</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {servicio.imagenes.map((img, imgIndex) => (
                            <motion.div
                              key={imgIndex}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: imgIndex * 0.1 }}
                              className="relative overflow-hidden rounded-lg aspect-square"
                            >
                              <img
                                src={img}
                                alt={`${servicio.titulo} - Imagen ${imgIndex + 1}`}
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                              />
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instalaciones con Imágenes */}
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
              Nuestras <span className="text-primary">Instalaciones</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Infraestructura moderna y espacios adecuados para el aprendizaje
            </p>
          </motion.div>

          {/* Galería de Instalaciones */}
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={bibliotecaImage}
                alt="Biblioteca Institucional"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="font-bold text-xl mb-1">Biblioteca</h3>
                  <p className="text-sm text-white/90">Amplio acervo bibliográfico y digital</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={laboratorioImage}
                alt="Laboratorio de Ciencias"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="font-bold text-xl mb-1">Laboratorios</h3>
                  <p className="text-sm text-white/90">Equipados con tecnología moderna</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={deportesImage}
                alt="Instalaciones Deportivas"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="font-bold text-xl mb-1">Áreas Deportivas</h3>
                  <p className="text-sm text-white/90">Campos multiusos y espacios recreativos</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Galería adicional de instalaciones */}
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={instalacion1}
                alt="Instalaciones del Colegio"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="font-bold text-xl mb-1">Aulas y Espacios</h3>
                  <p className="text-sm text-white/90">Ambientes modernos para el aprendizaje</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={talleresImage}
                alt="Talleres"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="font-bold text-xl mb-1">Talleres</h3>
                  <p className="text-sm text-white/90">Espacios para desarrollo creativo</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={instalacion2}
                alt="Instalaciones del Colegio"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="font-bold text-xl mb-1">Infraestructura</h3>
                  <p className="text-sm text-white/90">Instalaciones de primer nivel</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-xl">Espacios Académicos</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                      <span>Aulas amplias y bien iluminadas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                      <span>Laboratorios de ciencias equipados</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                      <span>Sala de cómputo con internet</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                      <span>Biblioteca con amplio acervo</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-xl">Espacios Recreativos</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                      <span>Campo deportivo multiusos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                      <span>Áreas verdes y patios amplios</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                      <span>Auditorio para eventos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                      <span>Cafetería institucional</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sección de Talleres */}
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
              Nuestros <span className="text-primary">Talleres</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Espacios de aprendizaje práctico para el desarrollo de habilidades técnicas y creativas
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                titulo: "Taller de Arte y Cultura",
                descripcion: "Desarrollo de habilidades artísticas y expresión cultural",
                icon: Palette,
              },
              {
                titulo: "Taller de Música",
                descripcion: "Formación musical y desarrollo de talentos artísticos",
                icon: Palette,
              },
              {
                titulo: "Taller de Educación para el Trabajo",
                descripcion: "Preparación técnica y vocacional para el mundo laboral",
                icon: Wrench,
              },
              {
                titulo: "Taller de Ciencias",
                descripcion: "Experimentación y proyectos científicos innovadores",
                icon: FlaskConical,
              },
            ].map((taller, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                  <CardHeader>
                    <div className="bg-primary/10 p-4 rounded-lg w-fit mb-4">
                      <taller.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{taller.titulo}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">
                      {taller.descripcion}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Imagen destacada de talleres */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 max-w-4xl mx-auto"
          >
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img
                src={talleresImage}
                alt="Talleres del Colegio San Ramón"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="font-bold text-2xl mb-2">Espacios de Aprendizaje Práctico</h3>
                  <p className="text-white/90">Desarrollando habilidades y talentos en nuestros estudiantes</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Servicios;
