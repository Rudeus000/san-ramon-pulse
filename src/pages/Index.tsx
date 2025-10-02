import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, FileText, ArrowRight, BookOpen, School, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
// Rutas de imágenes
const portadaImage = "/Portada.jpg";
const imagenInicial = "/eduacionprimaria.jpg";
const imagenPrimaria = "/primaria.jpg";
const imagenSecundaria = "/educacionsecundaria2jpg.jpg";

const Index = () => {
  return (
    <div>
      {/* Hero Section - Imagen de Portada */}
      <section className="relative h-[70vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${portadaImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
        <div className="container mx-auto h-full flex items-center justify-end">
          <motion.div 
            className="z-10 text-white max-w-md mr-8 md:mr-16 text-right"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              Bienvenidos a San Ramón
            </h1>
            <p className="text-base md:text-lg mb-6">
              Formando líderes con excelencia académica y valores cristianos desde 1847
            </p>
            <div className="flex justify-end">
              <Link to="/niveles">
                <Button size="sm" className="text-sm bg-primary hover:bg-primary/90">
                  Nuestros Niveles
                  <ArrowRight className="ml-2 h-4 w-4" />
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
                title: 'Inicial',
                description: 'Educación inicial para niños de 3 a 5 años',
                color: 'from-blue-500 to-blue-600',
                icon: <BookOpen className="w-8 h-8 text-white" />,
                responsable: 'Ana María Huamán Palomino',
                imagen: imagenInicial,
                tipo: 'Coordinadora'
              },
              {
                title: 'Primaria',
                description: 'Educación Básica Regular de 1° a 6° grado',
                color: 'from-green-500 to-green-600',
                icon: <School className="w-8 h-8 text-white" />,
                responsable: 'Prof. Sixto Alejandro ENCISO PALOMINO',
                imagen: imagenPrimaria,
                tipo: 'Director'
              },
              {
                title: 'Secundaria',
                description: 'Educación Secundaria de 1° a 5° año',
                color: 'from-red-500 to-red-600',
                icon: <GraduationCap className="w-8 h-8 text-white" />,
                responsable: 'Prof. Nelly MUNDACA HUARANCCA',
                imagen: imagenSecundaria,
                tipo: 'Directora'
              }
            ].map((nivel, index) => (
                <div 
                  key={index}
                  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full border border-gray-100 hover:border-primary/20"
                >
                <div className="relative overflow-hidden h-36">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent z-10" />
                  <img 
                    src={nivel.imagen} 
                    alt={nivel.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className={`absolute -bottom-5 right-3 w-12 h-12 rounded-full ${nivel.color} flex items-center justify-center shadow-md border-2 border-white`}>
                    {React.cloneElement(nivel.icon, { className: 'w-5 h-5 text-white' })}
                  </div>
                </div>
                <div className="flex-grow flex flex-col p-4 pt-6">
                  <h3 className="text-xl font-bold text-gray-800 leading-tight text-center mb-3">Nivel {nivel.title}</h3>
                  <p className="text-sm text-gray-600 text-center mb-4 leading-snug">{nivel.description}</p>
                  
                  <div className="space-y-3 mt-auto">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 mt-0.5">
                          <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-gray-500">{nivel.tipo}</p>
                          <p className="text-sm text-gray-800">{nivel.responsable}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-3 border-t border-gray-100 text-center">
                    <Link 
                      to={`/niveles#${nivel.title.toLowerCase().replace(' ', '-')}`}
                      className="w-full flex items-center justify-between px-3 py-2 text-xs font-medium text-primary hover:text-white bg-white hover:bg-primary rounded-md border border-primary hover:border-transparent transition-all duration-200 group"
                    >
                      <span>Más información</span>
                      <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
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
