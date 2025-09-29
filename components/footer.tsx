import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Image
              src="/images/gas-ocho-leones-logo.png"
              alt="Gas Ocho Leones"
              width={180}
              height={60}
              className="brightness-0 invert"
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              Empresa líder en distribución de gas LP estacionario en Tabasco. Servicio confiable, seguro y transparente
              para hogares y negocios.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-orange-400">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/estaciones" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                  Estaciones
                </Link>
              </li>
              <li>
                <Link href="/testimonios" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                  Testimonios
                </Link>
              </li>
              <li>
                <Link href="/seguridad" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                  Seguridad
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-orange-400">Nuestros Servicios</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Recarga de Cilindros</li>
              <li>Gas Residencial</li>
              <li>Gas para Negocios</li>
              <li>Servicio de Emergencias 24/7</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-orange-400">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <Phone className="w-4 h-4 mt-0.5 text-orange-400 flex-shrink-0" />
                <div>
                  <a href="tel:9933456789" className="text-gray-300 hover:text-orange-400 transition-colors">
                    (993) 345-6789
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Mail className="w-4 h-4 mt-0.5 text-orange-400 flex-shrink-0" />
                <div>
                  <a
                    href="mailto:contacto@gasocholeones.com"
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    contacto@gasocholeones.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-orange-400 flex-shrink-0" />
                <span className="text-gray-300">Villahermosa, Tabasco, México</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-700 hover:bg-orange-500 flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-700 hover:bg-orange-500 flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Gas Ocho Leones. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <Link href="/privacidad" className="hover:text-orange-400 transition-colors">
                Política de Privacidad
              </Link>
              <Link href="/terminos" className="hover:text-orange-400 transition-colors">
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
