import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Clock, MapPin, Navigation, Mail, MessageCircle } from "lucide-react"

export default function UbicacionesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-orange-500 text-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <MapPin className="w-12 h-12" />
              <h1 className="text-4xl lg:text-5xl font-bold text-balance">Nuestras Ubicaciones</h1>
            </div>
            <p className="text-xl text-balance leading-relaxed max-w-3xl mx-auto">
              Estamos presentes en las principales ciudades de Tabasco para brindarte el mejor servicio cerca de tu
              hogar. Encuentra la sucursal más cercana y visítanos.
            </p>
          </div>
        </div>
      </section>

      {/* Coverage Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-balance">Cobertura en Todo Tabasco</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-balance">
              Con 6 sucursales estratégicamente ubicadas, cubrimos toda la región tabasqueña
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center bg-red-50 border-red-200">
              <CardContent className="py-8">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-red-600" />
                </div>
                <div className="text-3xl font-bold text-red-600 mb-2">6</div>
                <div className="text-gray-700 font-medium">Sucursales</div>
                <div className="text-sm text-gray-600 mt-1">En ciudades principales</div>
              </CardContent>
            </Card>

            <Card className="text-center bg-orange-50 border-orange-200">
              <CardContent className="py-8">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Navigation className="w-8 h-8 text-orange-600" />
                </div>
                <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
                <div className="text-gray-700 font-medium">Cobertura</div>
                <div className="text-sm text-gray-600 mt-1">Del territorio tabasqueño</div>
              </CardContent>
            </Card>

            <Card className="text-center bg-red-50 border-red-200">
              <CardContent className="py-8">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-red-600" />
                </div>
                <div className="text-3xl font-bold text-red-600 mb-2">30</div>
                <div className="text-gray-700 font-medium">Minutos</div>
                <div className="text-sm text-gray-600 mt-1">Tiempo máximo de llegada</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-balance">Encuentra tu Sucursal</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-balance">
              Cada sucursal cuenta con personal capacitado y todos los servicios disponibles
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Villahermosa Centro - Sucursal Principal */}
            <Card className="hover:shadow-lg transition-shadow border-2 border-red-200">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-red-700">Villahermosa Centro</CardTitle>
                    <div className="flex items-center gap-1">
                      <span className="bg-red-600 text-white px-2 py-1 text-xs font-semibold rounded">PRINCIPAL</span>
                    </div>
                  </div>
                </div>
                <CardDescription>Sucursal matriz con todos los servicios</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gray-500 mt-1" />
                  <div className="text-sm">
                    <p className="font-medium">Av. Ruiz Cortines #1234</p>
                    <p className="text-gray-600">Col. Casa Blanca, CP 86040</p>
                    <p className="text-gray-600">Villahermosa, Tabasco</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-500" />
                  <span className="text-sm font-medium">(993) 123-4567</span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-gray-500 mt-1" />
                  <div className="text-sm">
                    <p>Lun-Vie: 7:00 AM - 7:00 PM</p>
                    <p>Sábado: 7:00 AM - 6:00 PM</p>
                    <p>Domingo: 8:00 AM - 2:00 PM</p>
                  </div>
                </div>
                <div className="bg-red-50 p-3 rounded border border-red-200">
                  <p className="text-xs text-red-700 font-semibold mb-1">Servicios disponibles:</p>
                  <p className="text-xs text-gray-600">
                    Instalaciones, mantenimiento, emergencias 24/7, capacitación, oficinas administrativas
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1 bg-red-600 hover:bg-red-700">
                    <Navigation className="w-4 h-4 mr-1" />
                    Ver en Mapa
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-red-600 text-red-600 hover:bg-red-50 bg-transparent"
                  >
                    <Phone className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Comalcalco */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-xl text-orange-700">Comalcalco</CardTitle>
                </div>
                <CardDescription>Zona Chontalpa</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gray-500 mt-1" />
                  <div className="text-sm">
                    <p className="font-medium">Carretera Comalcalco-Paraíso Km 2</p>
                    <p className="text-gray-600">Col. Centro, CP 86300</p>
                    <p className="text-gray-600">Comalcalco, Tabasco</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-500" />
                  <span className="text-sm font-medium">(933) 234-5678</span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-gray-500 mt-1" />
                  <div className="text-sm">
                    <p>Lun-Vie: 7:30 AM - 6:30 PM</p>
                    <p>Sábado: 7:30 AM - 5:30 PM</p>
                    <p>Domingo: Cerrado</p>
                  </div>
                </div>
                <div className="bg-orange-50 p-3 rounded border border-orange-200">
                  <p className="text-xs text-orange-700 font-semibold mb-1">Especialidades:</p>
                  <p className="text-xs text-gray-600">Sector agrícola, tortillerías, servicios comerciales rurales</p>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent"
                  >
                    <Navigation className="w-4 h-4 mr-1" />
                    Ver en Mapa
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent"
                  >
                    <Phone className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Cárdenas */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-red-600" />
                  </div>
                  <CardTitle className="text-xl text-red-700">Cárdenas</CardTitle>
                </div>
                <CardDescription>Zona Costera</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gray-500 mt-1" />
                  <div className="text-sm">
                    <p className="font-medium">Av. Adolfo López Mateos #567</p>
                    <p className="text-gray-600">Col. Centro, CP 86500</p>
                    <p className="text-gray-600">Cárdenas, Tabasco</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-500" />
                  <span className="text-sm font-medium">(937) 345-6789</span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-gray-500 mt-1" />
                  <div className="text-sm">
                    <p>Lun-Vie: 7:00 AM - 6:00 PM</p>
                    <p>Sábado: 7:00 AM - 5:00 PM</p>
                    <p>Domingo: Cerrado</p>
                  </div>
                </div>
                <div className="bg-red-50 p-3 rounded border border-red-200">
                  <p className="text-xs text-red-700 font-semibold mb-1">Especialidades:</p>
                  <p className="text-xs text-gray-600">Sector pesquero, hoteles, restaurantes costeros</p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1 bg-red-600 hover:bg-red-700">
                    <Navigation className="w-4 h-4 mr-1" />
                    Ver en Mapa
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-red-600 text-red-600 hover:bg-red-50 bg-transparent"
                  >
                    <Phone className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Cunduacán */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-xl text-orange-700">Cunduacán</CardTitle>
                </div>
                <CardDescription>Zona Centro</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gray-500 mt-1" />
                  <div className="text-sm">
                    <p className="font-medium">Calle Juárez #890</p>
                    <p className="text-gray-600">Col. Centro, CP 86690</p>
                    <p className="text-gray-600">Cunduacán, Tabasco</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-500" />
                  <span className="text-sm font-medium">(914) 456-7890</span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-gray-500 mt-1" />
                  <div className="text-sm">
                    <p>Lun-Vie: 8:00 AM - 6:00 PM</p>
                    <p>Sábado: 8:00 AM - 4:00 PM</p>
                    <p>Domingo: Cerrado</p>
                  </div>
                </div>
                <div className="bg-orange-50 p-3 rounded border border-orange-200">
                  <p className="text-xs text-orange-700 font-semibold mb-1">Especialidades:</p>
                  <p className="text-xs text-gray-600">Comunidades rurales, sector ganadero, pequeños comercios</p>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent"
                  >
                    <Navigation className="w-4 h-4 mr-1" />
                    Ver en Mapa
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent"
                  >
                    <Phone className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Macuspana */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-red-600" />
                  </div>
                  <CardTitle className="text-xl text-red-700">Macuspana</CardTitle>
                </div>
                <CardDescription>Zona Sierra</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gray-500 mt-1" />
                  <div className="text-sm">
                    <p className="font-medium">Av. 27 de Febrero #345</p>
                    <p className="text-gray-600">Col. Centro, CP 86700</p>
                    <p className="text-gray-600">Macuspana, Tabasco</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-500" />
                  <span className="text-sm font-medium">(936) 567-8901</span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-gray-500 mt-1" />
                  <div className="text-sm">
                    <p>Lun-Vie: 7:30 AM - 6:30 PM</p>
                    <p>Sábado: 7:30 AM - 5:00 PM</p>
                    <p>Domingo: Cerrado</p>
                  </div>
                </div>
                <div className="bg-red-50 p-3 rounded border border-red-200">
                  <p className="text-xs text-red-700 font-semibold mb-1">Especialidades:</p>
                  <p className="text-xs text-gray-600">Sector petrolero, industria, servicios especializados</p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1 bg-red-600 hover:bg-red-700">
                    <Navigation className="w-4 h-4 mr-1" />
                    Ver en Mapa
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-red-600 text-red-600 hover:bg-red-50 bg-transparent"
                  >
                    <Phone className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Paraíso */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-xl text-orange-700">Paraíso</CardTitle>
                </div>
                <CardDescription>Zona Costera</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gray-500 mt-1" />
                  <div className="text-sm">
                    <p className="font-medium">Carretera Paraíso-Comalcalco Km 5</p>
                    <p className="text-gray-600">Col. Centro, CP 86600</p>
                    <p className="text-gray-600">Paraíso, Tabasco</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-500" />
                  <span className="text-sm font-medium">(933) 678-9012</span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-gray-500 mt-1" />
                  <div className="text-sm">
                    <p>Lun-Vie: 7:00 AM - 6:00 PM</p>
                    <p>Sábado: 7:00 AM - 4:00 PM</p>
                    <p>Domingo: Cerrado</p>
                  </div>
                </div>
                <div className="bg-orange-50 p-3 rounded border border-orange-200">
                  <p className="text-xs text-orange-700 font-semibold mb-1">Especialidades:</p>
                  <p className="text-xs text-gray-600">Turismo, sector hotelero, comunidades costeras</p>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent"
                  >
                    <Navigation className="w-4 h-4 mr-1" />
                    Ver en Mapa
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent"
                  >
                    <Phone className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
            <CardContent className="py-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">¿No encuentras una sucursal cerca?</h3>
                <p className="text-gray-700 max-w-2xl mx-auto">
                  Estamos expandiendo nuestra cobertura en todo Tabasco. Contáctanos para conocer nuestros planes de
                  expansión en tu zona o solicitar servicio a domicilio.
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-8 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-red-600" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Línea de Atención</h4>
                  <p className="text-gray-700 font-medium text-xl">(993) 800-LEON</p>
                  <p className="text-sm text-gray-600">24 horas, 7 días</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-orange-600" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Correo Electrónico</h4>
                  <p className="text-gray-700 font-medium">info@gasocholeones.com</p>
                  <p className="text-sm text-gray-600">Respuesta en 24 hrs</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-red-600" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">WhatsApp</h4>
                  <p className="text-gray-700 font-medium">(993) 123-4567</p>
                  <p className="text-sm text-gray-600">Chat en vivo</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Navigation className="w-8 h-8 text-orange-600" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Servicio a Domicilio</h4>
                  <p className="text-gray-700 font-medium">Toda la región</p>
                  <p className="text-sm text-gray-600">Instalación y mantenimiento</p>
                </div>
              </div>

              <div className="text-center">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700">
                    <Phone className="w-4 h-4 mr-2" />
                    Solicitar Visita Técnica
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-red-600 text-red-600 hover:bg-red-50 bg-transparent"
                  >
                    Ver Cobertura Completa
                  </Button>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Servicio de instalación disponible en toda la zona metropolitana y municipios cercanos
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-balance">Áreas de Servicio</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-balance">
              Además de nuestras sucursales principales, brindamos servicio en estas comunidades
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-red-700">Zona Metropolitana</CardTitle>
                <CardDescription>Villahermosa y alrededores</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-1">
                  <li>• Centro (Zona Luz)</li>
                  <li>• Tabasco 2000</li>
                  <li>• Casa Blanca</li>
                  <li>• Atasta de Serra</li>
                  <li>• Tamulté de las Sabanas</li>
                  <li>• Ranchería Sur</li>
                  <li>• La Manga</li>
                  <li>• Gaviotas Norte y Sur</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-orange-700">Región Chontalpa</CardTitle>
                <CardDescription>Comalcalco y municipios cercanos</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-1">
                  <li>• Comalcalco Centro</li>
                  <li>• Paraíso</li>
                  <li>• Cunduacán</li>
                  <li>• Jalpa de Méndez</li>
                  <li>• Nacajuca</li>
                  <li>• Cárdenas</li>
                  <li>• Huimanguillo</li>
                  <li>• Comunidades ejidales</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-red-700">Región Sierra</CardTitle>
                <CardDescription>Macuspana y zona petrolera</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-1">
                  <li>• Macuspana Centro</li>
                  <li>• Teapa</li>
                  <li>• Jalapa</li>
                  <li>• Tacotalpa</li>
                  <li>• Centros de trabajo PEMEX</li>
                  <li>• Comunidades serranas</li>
                  <li>• Zona industrial</li>
                  <li>• Campos petroleros</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
