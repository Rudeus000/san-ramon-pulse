import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen, Video, FileText, Globe } from "lucide-react";

const Recursos = () => {
  const plataformas = [
    {
      icon: Globe,
      titulo: "Ministerio de Educación",
      descripcion: "Portal oficial del MINEDU con recursos y normativas educativas.",
      url: "https://www.gob.pe/minedu",
    },
    {
      icon: BookOpen,
      titulo: "Aprendo en Casa",
      descripcion: "Plataforma educativa con contenido para todos los niveles.",
      url: "https://aprendoencasa.pe",
    },
    {
      icon: Video,
      titulo: "Biblioteca Digital",
      descripcion: "Acceso a libros digitales y material de lectura complementario.",
      url: "#",
    },
    {
      icon: FileText,
      titulo: "Recursos Educativos",
      descripcion: "Material didáctico y guías de estudio por áreas curriculares.",
      url: "#",
    },
  ];

  const materiales = [
    {
      categoria: "Matemática",
      items: [
        "Guía de Ejercicios - Álgebra",
        "Problemas Resueltos - Geometría",
        "Fichas de Trabajo - Aritmética",
      ],
    },
    {
      categoria: "Comunicación",
      items: [
        "Comprensión Lectora - Nivel Avanzado",
        "Producción de Textos",
        "Gramática y Ortografía",
      ],
    },
    {
      categoria: "Ciencias",
      items: [
        "Manual de Laboratorio - Química",
        "Guía de Experimentos - Física",
        "Atlas de Biología",
      ],
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
              Recursos <span className="text-secondary">Educativos</span>
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Herramientas y material de apoyo para el aprendizaje
            </p>
          </motion.div>
        </div>
      </section>

      {/* Plataformas */}
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
              Plataformas <span className="text-primary">Educativas</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Accede a recursos en línea para complementar tu educación
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-20">
            {plataformas.map((plataforma, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
                  <CardHeader>
                    <div className="bg-primary/10 p-4 rounded-lg w-fit mb-4">
                      <plataforma.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{plataforma.titulo}</CardTitle>
                    <CardDescription className="text-sm">
                      {plataforma.descripcion}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full" variant="outline" asChild>
                      <a href={plataforma.url} target="_blank" rel="noopener noreferrer">
                        Visitar
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Material de Apoyo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Material de <span className="text-primary">Apoyo</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Descarga fichas, guías y documentos de estudio
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {materiales.map((material, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">
                      {material.categoria}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {material.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <Button variant="ghost" className="w-full justify-start text-left h-auto py-2">
                            <FileText className="h-4 w-4 mr-2 flex-shrink-0 text-primary" />
                            <span className="text-sm">{item}</span>
                          </Button>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Recursos;
