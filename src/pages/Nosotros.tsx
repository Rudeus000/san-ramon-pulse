import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Heart, Users, Award } from "lucide-react";

const Nosotros = () => {
  const timeline = [
    { year: "1767", event: "Fundación del primer seminario" },
    { year: "1784", event: "Establecimiento de la educación formal" },
    { year: "1821", event: "Transición a la era republicana" },
    { year: "1848", event: "Creación oficial como Colegio San Ramón" },
    { year: "1920", event: "Reconocimiento como colegio emblemático" },
    { year: "1950", event: "Expansión de infraestructura" },
    { year: "2000", event: "Modernización tecnológica" },
    { year: "2024", event: "177 años de excelencia educativa" },
  ];

  const values = [
    {
      icon: BookOpen,
      title: "Excelencia Académica",
      description: "Compromiso con la educación de calidad y el desarrollo integral de nuestros estudiantes.",
    },
    {
      icon: Heart,
      title: "Valores y Respeto",
      description: "Fomentamos la formación ética y el respeto mutuo en toda nuestra comunidad educativa.",
    },
    {
      icon: Users,
      title: "Comunidad Unida",
      description: "Construimos lazos fuertes entre estudiantes, docentes y familias para el éxito común.",
    },
    {
      icon: Award,
      title: "Tradición e Innovación",
      description: "Honramos nuestra historia mientras abrazamos las metodologías educativas modernas.",
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
              Sobre <span className="text-secondary">Nosotros</span>
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Más de un siglo y medio de historia dedicada a la formación de generaciones en Ayacucho
            </p>
          </motion.div>
        </div>
      </section>

      {/* Presentación */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              El Colegio Emblemático San Ramón es una institución educativa con una rica tradición
              que se remonta a 1848. Durante 177 años, hemos sido un pilar fundamental en la
              educación de Ayacucho, formando ciudadanos íntegros, competentes y comprometidos con
              el desarrollo de nuestra sociedad.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nuestra misión es brindar una educación de excelencia que combine tradición e innovación,
              valores éticos sólidos y preparación académica de primer nivel, preparando a nuestros
              estudiantes para los desafíos del mundo moderno.
            </p>
          </motion.div>

          {/* Valores */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-shadow duration-300 border-2 hover:border-primary/20">
                  <CardHeader>
                    <div className="mx-auto mb-4 bg-primary/10 p-4 rounded-full w-fit">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Nuestra <span className="text-primary">Historia</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Línea vertical */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30" />
                
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-20 pb-12"
                  >
                    <div className="absolute left-5 top-0 w-6 h-6 rounded-full bg-primary border-4 border-background shadow-lg" />
                    <div className="bg-card p-6 rounded-lg shadow-md border-2 hover:border-primary/20 transition-colors">
                      <div className="text-2xl font-bold text-primary mb-2">{item.year}</div>
                      <div className="text-foreground">{item.event}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Nosotros;
