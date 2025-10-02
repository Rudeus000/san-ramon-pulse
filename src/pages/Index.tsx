import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, FileText, ArrowRight, BookOpen, School, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import portadaImage from "@/../SAN RAMON/Portada.jpg";

const Index = () => {
  return (
    <div>
      {/* Hero Section - Imagen de Portada */}
      <section className="relative h-[70vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${portadaImage})` }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto h-full flex items-center">
          <motion.div 
            className="z-10 text-white max-w-md ml-8 md:ml-16"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              Bienvenidos a San Ramón
            </h1>
            <p className="text-base md:text-lg mb-6">
              Formando líderes con excelencia académica y valores cristianos desde 1847
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/niveles">
                <Button size="sm" className="text-sm">
                  Nuestros Niveles
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/admision">
                <Button 
                  size="sm"
                  variant="outline" 
                  className="text-sm bg-transparent border-white text-white hover:bg-white/10"
                >
                  Admisión 2025
                </Button>
              </Link>
              <Link to="/contacto" className="w-full sm:w-auto">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="mt-2 bg-transparent border-white text-white hover:bg-white/10"
                >
                  Contáctanos
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sección de Niveles Académicos */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nuestros <span className="text-primary">Niveles Educativos</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Nivel Inicial',
                description: '5 secciones: 1 de 3 años, 2 de 4 años y 2 de 5 años',
                color: 'from-blue-500 to-blue-600',
                icon: <BookOpen className="w-8 h-8 text-white" />,
                coordinadora: 'Ana María Huamán Palomino',
                docentes: [
                  'Liz Torrez Manza',
                  'Elvia Ataucusi Huamán'
                ],
                auxiliares: 2,
                imagen: '/SAN RAMON/eduacionprimaria.jpg'
              },
              {
                title: 'Nivel Primaria',
                description: '800 estudiantes en Educación Básica Regular',
                color: 'from-green-500 to-green-600',
                icon: <School className="w-8 h-8 text-white" />,
                director: 'Prof. Sixto Alejandro ENCISO PALOMINO',
                imagen: '/SAN RAMON/primaria.jpg'
              },
              {
                title: 'Nivel Secundaria',
                description: 'Más de 2,500 estudiantes en Educación Básica Regular y Alternativa',
                color: 'from-red-500 to-red-600',
                icon: <GraduationCap className="w-8 h-8 text-white" />,
                director: 'Prof. Nelly MUNDACA HUARANCCA',
                subdirectores: [
                  'Lic. Rosa LIVIA GARAMENDI (Formación General)',
                  'Prof. Sixto Alejandro ENCISO PALOMINO (Primaria)',
                  'Prof. Alfredo PEREZ CARBAJAL (Administración)'
                ],
                imagen: '/SAN RAMON/educacionsecundaria.jpg'
              }
            ].map((nivel, index) => (
              <div 
                key={index}
                className="bg-white/90 backdrop-blur-md rounded-2xl p-6 text-center border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full"
              >
                <div className="mb-6 overflow-hidden rounded-lg">
                  <img 
                    src={nivel.imagen} 
                    alt={nivel.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div className="flex-grow">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${nivel.color} flex items-center justify-center mb-4`}>
                    {nivel.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{nivel.title}</h3>
                  <p className="text-gray-600 mb-4">{nivel.description}</p>
                  
                  {nivel.coordinadora && (
                    <div className="text-left text-sm text-gray-700 mb-3">
                      <p className="font-semibold">Coordinadora:</p>
                      <p>{nivel.coordinadora}</p>
                      {nivel.docentes && nivel.docentes.length > 0 && (
                        <div className="mt-2">
                          <p className="font-semibold">Docentes:</p>
                          <ul className="list-disc pl-5">
                            {nivel.docentes.map((docente, i) => (
                              <li key={i}>{docente}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {nivel.auxiliares && (
                        <p className="mt-1">{nivel.auxiliares} auxiliares</p>
                      )}
                    </div>
                  )}
                  
                  {nivel.director && (
                    <div className="text-left text-sm text-gray-700">
                      <p className="font-semibold">Director:</p>
                      <p>{nivel.director}</p>
                      {nivel.subdirectores && nivel.subdirectores.length > 0 && (
                        <div className="mt-2">
                          <p className="font-semibold">Subdirectores:</p>
                          <ul className="list-disc pl-5">
                            {nivel.subdirectores.map((sub, i) => (
                              <li key={i}>{sub}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
                
                <div className="mt-6">
                  <Link 
                    to={`/niveles#${nivel.title.toLowerCase().replace(' ', '-')}`} 
                    className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors duration-200"
                  >
                    Ver más detalles
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
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
