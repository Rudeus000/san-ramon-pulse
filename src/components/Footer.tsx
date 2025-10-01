import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Información de contacto */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-secondary">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                <p className="text-sm">
                  Jr. Libertad 250<br />
                  Ayacucho, Perú
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                <p className="text-sm">(066) 312-456</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-secondary flex-shrink-0" />
                <p className="text-sm">info@sanramon.edu.pe</p>
              </div>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-secondary">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/nosotros" className="text-sm hover:text-secondary transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/documentos" className="text-sm hover:text-secondary transition-colors">
                  Documentos
                </Link>
              </li>
              <li>
                <Link to="/niveles" className="text-sm hover:text-secondary transition-colors">
                  Niveles
                </Link>
              </li>
              <li>
                <Link to="/eventos" className="text-sm hover:text-secondary transition-colors">
                  Eventos
                </Link>
              </li>
            </ul>
          </div>

          {/* Horario */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-secondary">Horario</h3>
            <div className="space-y-2 text-sm">
              <p>Lunes - Viernes</p>
              <p className="text-secondary font-semibold">8:00 AM - 3:00 PM</p>
              <p className="mt-4">Oficinas Administrativas</p>
              <p className="text-secondary font-semibold">8:00 AM - 4:00 PM</p>
            </div>
          </div>

          {/* Redes sociales y mapa */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-secondary">Síguenos</h3>
            <div className="flex gap-4 mb-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-foreground/10 p-2 rounded-full hover:bg-secondary hover:text-primary transition-all duration-300"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-foreground/10 p-2 rounded-full hover:bg-secondary hover:text-primary transition-all duration-300"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-foreground/10 p-2 rounded-full hover:bg-secondary hover:text-primary transition-all duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <div className="w-full h-32 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.5!2d-74.22!3d-13.16!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA5JzM2LjAiUyA3NMKwMTMnMTIuMCJX!5e0!3m2!1ses!2spe!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Colegio Emblemático San Ramón. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
