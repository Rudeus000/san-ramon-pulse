import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import primariaImage from "@/assets/primaria.jpg";
import secundariaImage from "@/assets/secundaria.jpg";

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
    </div>
  );
};

export default Niveles;
