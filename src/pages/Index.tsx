import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, FileText, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-school.jpg";

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/80" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Colegio Emblemático<br />
              <span className="text-secondary">San Ramón</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
              177 años formando generaciones con excelencia académica y valores
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/nosotros">
                <Button variant="hero" size="lg" className="text-base">
                  Conócenos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/nosotros">
                <Button variant="hero-outline" size="lg" className="text-base">
                  Nuestra Historia
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lo más reciente */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Lo Más <span className="text-primary">Reciente</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-2 hover:border-primary/20">
                <div className="h-48 bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                  <Calendar className="h-20 w-20 text-primary-foreground" />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>15 de Abril, 2024</span>
                  </div>
                  <CardTitle className="text-xl">Aniversario 177</CardTitle>
                  <CardDescription className="text-base">
                    Celebramos con orgullo 177 años de historia y tradición educativa en Ayacucho.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/eventos">
                    <Button variant="outline" className="w-full">
                      Ver Evento Completo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-2 hover:border-primary/20">
                <div className="h-48 bg-gradient-to-br from-secondary to-secondary/70 flex items-center justify-center">
                  <FileText className="h-20 w-20 text-secondary-foreground" />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <FileText className="h-4 w-4" />
                    <span>Documento Oficial</span>
                  </div>
                  <CardTitle className="text-xl">Plan Anual 2024</CardTitle>
                  <CardDescription className="text-base">
                    Ya está disponible nuestro Plan Anual de Trabajo para el año académico 2024.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/documentos">
                    <Button variant="outline" className="w-full">
                      Descargar Documento
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Estadísticas rápidas */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">177</div>
              <div className="text-sm md:text-base">Años de Historia</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">1200+</div>
              <div className="text-sm md:text-base">Estudiantes</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">80+</div>
              <div className="text-sm md:text-base">Docentes</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">100%</div>
              <div className="text-sm md:text-base">Compromiso</div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
