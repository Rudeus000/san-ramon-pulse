import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen, Video, FileText, Globe } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Recursos = () => {
  const notarUrl =
    "https://drive.google.com/uc?export=download&id=10tbf7y5rMdVlyQocD7DmEYeeH35bl6Np";

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
    <div className="relative min-h-screen">
      {/* Fondo de la página */}
      <div 
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(/colegio2.jpg)`,
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

          {/* App NOTAR */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-sm mx-auto mb-20"
          >
            <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader>
                <div className="bg-primary/10 p-4 rounded-lg w-fit mb-4 mx-auto">
                  <img
                    src="/notar.png"
                    alt="Logo de la app NOTAR"
                    className="h-12 w-auto object-contain"
                  />
                </div>
                <CardTitle className="text-lg text-center">Aplicación NOTAR</CardTitle>
                <CardDescription className="text-sm text-center">
                  Descarga la aplicación móvil del colegio.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full" variant="default">
                      Ver código QR
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Código QR - App NOTAR</DialogTitle>
                      <DialogDescription>
                        Escanea este código con la cámara de tu celular para ir al enlace de descarga en Google Drive.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="flex justify-center py-4">
                      <img
                        src="/notarqr.png"
                        alt="Código QR para descargar la app NOTAR"
                        className="max-h-64 w-auto rounded-lg border shadow-md bg-white"
                      />
                    </div>
                    <div className="space-y-3">
                      <p className="text-sm text-muted-foreground">
                        Al abrir el enlace, Google Drive puede avisar que{" "}
                        <span className="font-semibold">no puede analizar el archivo</span> porque es un instalador
                        (<span className="font-mono">app-release.apk</span>).
                        Solo haz clic en <span className="font-semibold">"Descargar de todos modos"</span> para continuar.
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Nota: La app se descarga como archivo <span className="font-mono">app-release.apk</span>. 
                        Después de descargarla, ábrela desde tu celular y, si el sistema lo solicita, habilita la 
                        instalación de apps desde este origen para completar el proceso.
                      </p>
                    </div>
                  </DialogContent>
                </Dialog>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full" variant="outline">
                      Descargar directo
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Descargar App NOTAR</DialogTitle>
                      <DialogDescription>
                        Serás redirigido a Google Drive para descargar la aplicación.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-3">
                      <p className="text-sm text-muted-foreground">
                        Google Drive puede mostrar un aviso indicando que{" "}
                        <span className="font-semibold">no puede analizar el archivo</span> porque es un instalador
                        (<span className="font-mono">app-release.apk - 53MB</span>).
                        Esto es normal. Solo haz clic en <span className="font-semibold">"Descargar de todos modos"</span> para continuar.
                      </p>
                      <Button asChild className="w-full" variant="default">
                        <a href={notarUrl} target="_blank" rel="noopener noreferrer">
                          Ir a Google Drive
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                      <p className="text-xs text-muted-foreground">
                        Después de descargar, abre el archivo desde tu celular y habilita la instalación desde este origen si el sistema lo solicita.
                      </p>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </motion.div>

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
