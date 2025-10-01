import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, BookOpen, FlaskConical, Library, Palette, Trophy } from "lucide-react";
import bibliotecaImage from "@/assets/biblioteca.jpg";
import laboratorioImage from "@/assets/laboratorio.jpg";
import deportesImage from "@/assets/deportes.jpg";

const Servicios = () => {
  const servicios = [
    {
      icon: Users,
      titulo: "Orientación y Tutoría",
      descripcion:
        "Acompañamiento personalizado para el desarrollo académico y personal de cada estudiante, con profesionales especializados en educación.",
    },
    {
      icon: Trophy,
      titulo: "Actividades Extracurriculares",
      descripcion:
        "Deportes, clubes de ciencia, talleres de arte y música para el desarrollo integral de habilidades y talentos.",
    },
    {
      icon: Library,
      titulo: "Biblioteca Institucional",
      descripcion:
        "Amplio acervo bibliográfico con material físico y digital para la investigación y el aprendizaje autónomo.",
    },
    {
      icon: FlaskConical,
      titulo: "Laboratorios",
      descripcion:
        "Laboratorios de ciencias, física, química y cómputo equipados con tecnología moderna para el aprendizaje práctico.",
    },
    {
      icon: Palette,
      titulo: "Talleres de Arte",
      descripcion:
        "Espacios dedicados al desarrollo de la creatividad a través de la música, danza, teatro y artes plásticas.",
    },
    {
      icon: BookOpen,
      titulo: "Reforzamiento Académico",
      descripcion:
        "Programas de apoyo y nivelación para estudiantes que requieren atención especial en áreas específicas.",
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
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 group">
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
                  </CardContent>
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
    </div>
  );
};

export default Servicios;
