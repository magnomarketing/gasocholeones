import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Shield, Users, Phone } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 to-orange-500 text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-red-600">🦁</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-balance">Gas Ocho Leones</h1>
              </div>
              <p className="text-xl text-balance leading-relaxed">
                Tu proveedor de confianza en Tabasco. Gas LP estacionario con la transparencia y seguridad que tu
                familia merece.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                  Solicita tu Instalación
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-red-600 bg-transparent"
                >
                  Conoce Nuestros Precios
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/familia-tabasque-a-llenando-tanque-de-gas-en-estac.png"
                alt="Familia tabasqueña llenando tanque de gas en estación"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-balance">¿Por qué elegir Gas Estacionario?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-balance">
              Como vecino de Tabasco, te explico las ventajas reales del gas estacionario para tu hogar
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle className="text-xl">Transparencia Total</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Ves exactamente cuánto gas consumes con nuestro medidor digital. Sin sorpresas en tu factura.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Seguridad Garantizada</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Instalaciones certificadas y mantenimiento regular. Tu familia está protegida las 24 horas.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle className="text-xl">Programa de Lealtad</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Acumula puntos con cada recarga y obtén descuentos especiales. Premiamos tu confianza.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-balance">Nuestros Servicios</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-balance">
              Soluciones completas de gas LP para hogares y negocios en todo Tabasco
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                </div>
                <CardTitle className="text-lg">Gas Residencial</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">Instalación completa para tu hogar</p>
                <Link href="/servicios">
                  <Button size="sm" className="bg-red-600 hover:bg-red-700">
                    Ver Más
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6 text-orange-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.001 3.001 0 01-.621-1.72c0-.966.456-1.816 1.171-2.36"
                    />
                  </svg>
                </div>
                <CardTitle className="text-lg">Para Negocios</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">Soluciones comerciales especializadas</p>
                <Link href="/servicios">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent"
                  >
                    Ver Más
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                    />
                  </svg>
                </div>
                <CardTitle className="text-lg">Recarga Cilindros</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">Servicio tradicional confiable</p>
                <Link href="/servicios">
                  <Button size="sm" className="bg-red-600 hover:bg-red-700">
                    Ver Más
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-lg">Emergencias 24/7</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">Atención inmediata disponible</p>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent"
                >
                  <Phone className="w-4 h-4 mr-1" />
                  Llamar
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/servicios">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                Ver Todos los Servicios
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-balance">¿Listo para hacer el cambio?</h2>
          <p className="text-lg text-gray-600 mb-8 text-balance">
            Únete a miles de familias tabasqueñas que ya disfrutan de la tranquilidad del gas estacionario
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              <Phone className="w-4 h-4 mr-2" />
              Solicitar Cotización Gratuita
            </Button>
            <Link href="/ubicaciones">
              <Button
                size="lg"
                variant="outline"
                className="border-red-600 text-red-600 hover:bg-red-50 bg-transparent"
              >
                Encontrar Sucursal Cercana
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
