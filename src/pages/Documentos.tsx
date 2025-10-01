import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";

const Documentos = () => {
  const documentos = [
    {
      categoria: "Reglamentos",
      items: [
        { titulo: "Reglamento Interno 2024", fecha: "Enero 2024" },
        { titulo: "Reglamento de Evaluación", fecha: "Marzo 2024" },
        { titulo: "Normas de Convivencia", fecha: "Febrero 2024" },
      ],
    },
    {
      categoria: "Plan Anual",
      items: [
        { titulo: "Plan Anual de Trabajo 2024", fecha: "Enero 2024" },
        { titulo: "Plan Curricular Institucional", fecha: "Diciembre 2023" },
        { titulo: "Programación Anual", fecha: "Marzo 2024" },
      ],
    },
    {
      categoria: "Comunicados Oficiales",
      items: [
        { titulo: "Comunicado - Inicio de Clases", fecha: "Marzo 2024" },
        { titulo: "Calendario Académico 2024", fecha: "Enero 2024" },
        { titulo: "Matrícula 2024", fecha: "Diciembre 2023" },
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
              Documentos de <span className="text-secondary">Gestión</span>
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Accede a todos los documentos oficiales y normativa institucional
            </p>
          </motion.div>
        </div>
      </section>

      {/* Documentos */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-12 max-w-5xl mx-auto">
            {documentos.map((categoria, catIndex) => (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                  {categoria.categoria}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoria.items.map((doc, docIndex) => (
                    <Card
                      key={docIndex}
                      className="hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20"
                    >
                      <CardHeader>
                        <div className="bg-primary/10 p-4 rounded-lg w-fit mb-4">
                          <FileText className="h-8 w-8 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{doc.titulo}</CardTitle>
                        <CardDescription>Actualizado: {doc.fecha}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button className="w-full" variant="outline">
                          <Download className="h-4 w-4 mr-2" />
                          Descargar PDF
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Documentos;
