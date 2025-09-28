import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Shield, Users, Phone } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 to-orange-500 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/gas-station-background.jpg"
            alt="Gas station background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/80 to-orange-500/80"></div>
        </div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  
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
                src="/familia-tabasque-a-llenando-tanque-de-gas-en-estac.jpg"
                alt="Familia tabasqueña llenando tanque de gas en estación"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Modern Contact Banner Section */}
      <section className="relative bg-white text-gray-900 py-16 overflow-hidden border-t border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block">
              <h2 className="text-6xl md:text-8xl font-bold tracking-tight mb-4">
                
                <span className="text-transparent bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text">
                  {" "}
                  Gas LP en Tabasco
                </span>
              </h2>
              
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-4 tracking-normal mt-2">Conecta con nosotros para tu próximo pedido</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Phone Contact - Modern Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-white border border-gray-200 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-300 shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-2 text-gray-900">Teléfono</h3>
                <p className="text-gray-500 text-center text-sm mb-4">Llamada directa</p>
                <p className="text-xl font-mono text-center text-gray-900">(993) 358-4139</p>
              </div>
            </div>

            {/* WhatsApp Contact - Modern Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-white border border-gray-200 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300 shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-center mb-2 text-gray-900">WhatsApp</h3>
                <p className="text-gray-500 text-center text-sm mb-4">Mensaje instantáneo</p>
                <p className="text-xl font-mono text-center text-gray-900">(993) 115-7864</p>
              </div>
            </div>

            {/* Message Contact - Modern Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-white border border-gray-200 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 4.975 0 11.111c0 3.497 1.745 6.616 4.472 8.652V24l4.086-2.242c1.09.301 2.246.464 3.442.464 6.626 0 12-4.974 12-11.111C24 4.975 18.626 0 12 0zm1.193 14.963l-3.056-3.259-5.963 3.259L10.733 8.2l3.13 3.259L19.794 8.2l-6.601 6.763z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-center mb-2 text-gray-900">Mensaje</h3>
                <p className="text-gray-500 text-center text-sm mb-4">Redes sociales</p>
                <p className="text-xl font-mono text-center text-gray-900">@gasochoLeones</p>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-gray-600 text-lg mb-6">Consulta las estacinoes abiertas las 24 horas                              </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white border-0"
            >
              Ver Estaciones de Gas LP en Tabasco      
            </Button>
          </div>
        </div>

        {/* Background geometric elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl"></div>
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
            {/* Recarga Cilindros moved to first position */}
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
                <p className="text-sm text-gray-600 mb-4">Pide la recolección de tu cilindro por whtasapp        </p>
                <Link href="/servicios">
                  <Button size="sm" className="bg-red-600 hover:bg-red-700">
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
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                </div>
                <CardTitle className="text-lg">Gas Residencial</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">Solicta tu servicio de Gas estacionario     </p>
                <Link href="/servicios">
                  <Button size="sm" className="bg-red-600 hover:bg-red-700">
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
                      d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.001 3.001 0 01-.621-1.72c0-.966.456-1.816 1.171-2.36"
                    />
                  </svg>
                </div>
                <CardTitle className="text-lg">Para Negocios</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">Contactanos para una alianza con precio especual        </p>
                <Link href="/servicios">
                  <Button size="sm" className="bg-red-600 hover:bg-red-700">
                    Ver Más
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle className="text-lg">Emergencias 24/7</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">Te contactamos a Protección Civil Tabasco                  </p>
                <Button size="sm" className="bg-red-600 hover:bg-red-700">
                  <Phone className="w-4 h-4 mr-1" />
                  Llamar
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/servicios">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                Contáctanos por Whatsapp   
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
              Solicita Servicio a domicilio    
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
