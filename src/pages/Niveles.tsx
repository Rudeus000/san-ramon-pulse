import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// Imágenes desde la carpeta pública SAN RAMON (servidas desde la raíz)
const primariaImage = "/primaria.jpg";
const secundariaImage = "/educacionsecundaria2jpg.jpg";
const aulaPrimariaImage = "/eduacionprimaria.jpg";
const aulaSecundariaImage = "/secuandaria.jpg";
const bibliotecaImage = "/colegio2.jpg"; // Imagen del colegio para biblioteca
const laboratorioImage = "/Laboratorio.jpg";
const deportesImage = "/Actividades.jpg"; // Usando imagen de actividades deportivas
const arteImage = "/talleres.jpg";

const Niveles = () => {
  const primariaCursos = [
    "Comunicación",
    "Matemática",
    "Personal Social",
    "Ciencia y Tecnología",
    "Arte y Cultura",
    "Educación Física",
    "Educación Religiosa",
    "Inglés",
  ];

  const secundariaCursos = [
    "Comunicación",
    "Matemática",
    "Ciencias Sociales",
    "Ciencia y Tecnología",
    "Educación para el Trabajo",
    "Arte y Cultura",
    "Educación Física",
    "Inglés",
    "Tutoría",
  ];

  return (
    <div className="relative min-h-screen">
      {/* Fondo de la página */}
      <div 
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${primariaImage})`,
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
              Niveles <span className="text-secondary">Educativos</span>
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Educación integral desde primaria hasta secundaria
            </p>
          </motion.div>
        </div>
      </section>

      {/* Primaria */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-8 items-center mb-20"
            >
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Nivel <span className="text-primary">Primaria</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  En el nivel primario, brindamos una formación integral que desarrolla las
                  competencias fundamentales de nuestros estudiantes. Nos enfocamos en crear
                  una base sólida de conocimientos y valores que serán la piedra angular de su
                  desarrollo académico futuro.
                </p>
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="text-xl">Áreas Curriculares</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-3">
                      {primariaCursos.map((curso, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 text-sm bg-muted p-2 rounded-md"
                        >
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          <span>{curso}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
                <img
                  src={primariaImage}
                  alt="Nivel Primaria"
                  className="rounded-lg shadow-xl w-full h-[400px] object-cover"
                />
              </motion.div>
            </motion.div>

            {/* Secundaria */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-8 items-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img
                  src={secundariaImage}
                  alt="Nivel Secundaria"
                  className="rounded-lg shadow-xl w-full h-[400px] object-cover"
                />
              </motion.div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Nivel <span className="text-primary">Secundaria</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  La educación secundaria en San Ramón prepara a los estudiantes para los retos
                  de la educación superior y la vida profesional. Promovemos el pensamiento crítico,
                  la investigación científica y el desarrollo de habilidades que les permitan ser
                  ciudadanos competentes y responsables.
                </p>
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="text-xl">Áreas Curriculares</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-3">
                      {secundariaCursos.map((curso, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 text-sm bg-muted p-2 rounded-md"
                        >
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          <span>{curso}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Galería de Actividades */}
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
              Vida <span className="text-primary">Estudiantil</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nuestros estudiantes desarrollan sus habilidades en diversos espacios de aprendizaje
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={aulaPrimariaImage}
                alt="Aula de Primaria"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-4">
                <p className="text-white font-semibold">Aulas de Primaria</p>
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
                src={aulaSecundariaImage}
                alt="Aula de Secundaria"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-4">
                <p className="text-white font-semibold">Aulas de Secundaria</p>
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
                src={bibliotecaImage}
                alt="Biblioteca"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-4">
                <p className="text-white font-semibold">Biblioteca</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={laboratorioImage}
                alt="Laboratorio de Ciencias"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-4">
                <p className="text-white font-semibold">Laboratorio</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg shadow-lg lg:col-span-2"
            >
              <img
                src={deportesImage}
                alt="Actividades Deportivas"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-4">
                <p className="text-white font-semibold">Educación Física y Deportes</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg shadow-lg lg:col-span-2"
            >
              <img
                src={arteImage}
                alt="Talleres de Arte"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-4">
                <p className="text-white font-semibold">Arte y Cultura</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Niveles;
