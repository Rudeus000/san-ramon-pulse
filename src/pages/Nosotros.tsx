import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Heart, Users, Award } from "lucide-react";
// Imágenes desde la carpeta pública SAN RAMON (servidas desde la raíz)
const historiaImage = "/desfilez.jpg";
const portadaNosotros = "/Concursos3jpg.jpg";

const Nosotros = () => {
  const timeline = [
    { year: "1767", event: "Fundación del primer seminario dirigido por los padres Jesuitas" },
    { year: "1784", event: "Funciona como 'REAL CONVICTORIO DE SAN CARLOS'" },
    { year: "1821", event: "Pasa a ser 'COLEGIO DE CIENCIAS' de Ayacucho" },
    { year: "1848", event: "Por mandato oficial del Gran Mariscal Ramón Castilla se crea el COLEGIO 'SAN RAMÓN NONATO'" },
    { year: "1964", event: "Recreado por el Congreso de la República mediante la Ley Nº15441 como Colegio de Varones 'San Ramón'" },
    { year: "1965", event: "Promulgación de la Ley por el Presidente Arq. Fernando Belaunde Terry" },
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
    <div className="relative min-h-screen">
      {/* Fondo de la página */}
      <div 
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${historiaImage})`,
          opacity: 0.12,
          filter: 'blur(2px)'
        }}
      />
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-background via-background/96 to-background" />
      {/* Header */}
      <section 
        className="relative py-32 text-primary-foreground overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${portadaNosotros})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 75%',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#1e1e1e',
          backgroundAttachment: 'fixed',
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Sobre <span className="text-secondary">Nosotros</span>
              </h1>
              <p className="text-xl text-primary-foreground/90">
                177 años de excelencia educativa en Ayacucho
              </p>
            </div>
          </motion.div>
        </div>
      </section>

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

          {/* Imagen Histórica */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <img
              src={historiaImage}
              alt="Desfile del Colegio San Ramón"
              className="w-full max-w-4xl mx-auto rounded-lg shadow-xl h-[400px] object-cover"
            />
          </motion.div>

          {/* Timeline Horizontal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Nuestra <span className="text-primary">Historia</span>
              </h2>
              <div className="w-32 h-1.5 bg-primary mx-auto mb-4"></div>
              <p className="text-muted-foreground text-xl md:text-2xl font-medium">177 años de tradición educativa</p>
            </motion.div>

            <div className="max-w-7xl mx-auto px-4 md:px-8">
              {/* Versión Desktop - Timeline con Chevrones Mejorado */}
              <div className="hidden lg:block relative py-24">
                {/* Línea horizontal central con chevrones */}
                <div className="relative flex items-center justify-between h-16">
                  {/* Línea de conexión */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary/30 via-primary/60 to-primary/30 transform -translate-y-1/2 z-0"
                  />
                  
                  {/* Chevrones y tarjetas */}
                  <div className="relative w-full flex items-center justify-between">
                    {timeline.map((item, index) => {
                      const colors = [
                        'from-blue-500 to-blue-600',
                        'from-purple-500 to-purple-600',
                        'from-green-500 to-green-600',
                        'from-red-500 to-red-600',
                        'from-orange-500 to-orange-600',
                        'from-pink-500 to-pink-600',
                      ];
                      const colorClass = colors[index % colors.length];
                      
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: index % 2 === 0 ? -60 : 60 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ 
                            duration: 0.8, 
                            delay: index * 0.15,
                            type: "spring",
                            stiffness: 100
                          }}
                          viewport={{ once: true }}
                          className="relative flex-1 flex flex-col items-center"
                        >
                          {/* Tarjeta del evento - alterna arriba/abajo */}
                          <motion.div
                            whileHover={{ 
                              scale: 1.08,
                              y: index % 2 === 0 ? -8 : 8,
                              transition: { duration: 0.3 }
                            }}
                            className={`bg-white p-6 rounded-xl shadow-2xl border-2 border-primary/30 hover:border-primary transition-all duration-300 hover:shadow-3xl w-full max-w-[200px] relative z-10 ${
                              index % 2 === 0 ? 'mb-8' : 'mt-8'
                            }`}
                          >
                            {/* Línea conectora desde la tarjeta al chevron */}
                            <div className={`absolute left-1/2 transform -translate-x-1/2 w-0.5 ${
                              index % 2 === 0 ? 'top-full h-8 bg-gradient-to-b from-primary/40 to-transparent' : 'bottom-full h-8 bg-gradient-to-t from-primary/40 to-transparent'
                            }`} />
                            
                            <motion.div
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              transition={{ delay: index * 0.15 + 0.4 }}
                              viewport={{ once: true }}
                              className="text-center"
                            >
                              <div className={`text-3xl md:text-4xl font-black bg-gradient-to-r ${colorClass} bg-clip-text text-transparent mb-4`}>
                                {item.year}
                              </div>
                              <div className="text-sm md:text-base text-gray-800 leading-relaxed font-semibold min-h-[90px] flex items-center justify-center">
                                {item.event}
                              </div>
                            </motion.div>
                          </motion.div>

                          {/* Chevron en la línea central */}
                          <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            transition={{ 
                              duration: 0.6, 
                              delay: index * 0.15 + 0.3,
                              type: "spring",
                              stiffness: 200
                            }}
                            viewport={{ once: true }}
                            className="relative z-20"
                          >
                            <div className={`w-16 h-16 bg-gradient-to-br ${colorClass} rounded-lg shadow-xl relative transform rotate-45 flex items-center justify-center`}>
                              <motion.div
                                className="absolute inset-0 rounded-lg bg-white/20"
                                animate={{
                                  scale: [1, 1.2, 1],
                                  opacity: [0.5, 0, 0.5],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: index * 0.2,
                                }}
                              />
                              <div className="w-6 h-6 bg-white rounded-sm transform -rotate-45 shadow-lg"></div>
                            </div>
                          </motion.div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Versión Tablet - Timeline con menos columnas */}
              <div className="hidden md:block lg:hidden relative py-20">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1.2 }}
                  viewport={{ once: true }}
                  className="absolute top-1/2 left-0 right-0 h-2 bg-primary/40 transform -translate-y-1/2 z-0"
                />
                <div className="grid grid-cols-3 gap-8 relative">
                  {timeline.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="relative flex flex-col items-center"
                    >
                      <div className={`bg-white p-7 rounded-2xl shadow-xl border-2 border-primary/20 hover:border-primary/60 transition-all w-full ${index % 2 === 0 ? 'mb-6' : 'mt-6'}`}>
                        <div className="text-3xl md:text-4xl font-black text-primary mb-4 text-center">{item.year}</div>
                        <div className="text-base md:text-lg text-gray-800 text-center leading-relaxed font-semibold min-h-[100px] flex items-center justify-center">{item.event}</div>
                      </div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary border-4 border-white shadow-2xl z-20 flex items-center justify-center">
                        <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Versión Mobile - Timeline Vertical Mejorado */}
              <div className="md:hidden space-y-10">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-primary/20 hover:border-primary/60 transition-all hover:shadow-2xl">
                      <div className="flex items-start gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center border-4 border-primary/20">
                            <div className="text-3xl font-black text-primary">{item.year}</div>
                          </div>
                        </div>
                        <div className="flex-1 pt-2">
                          <div className="text-lg md:text-xl text-gray-800 leading-relaxed font-semibold">
                            {item.event}
                          </div>
                        </div>
                      </div>
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
