import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Gift, Star, Users, Clock, Phone, Crown, Award, Zap } from "lucide-react"

export default function LealtadPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-orange-500 text-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <span className="text-4xl">🦁</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-balance">Programa Leones de Oro</h1>
            </div>
            <p className="text-xl text-balance leading-relaxed max-w-3xl mx-auto">
              Premiamos tu lealtad con beneficios exclusivos. Mientras más consumes, más ahorras. Únete a más de 3,000
              familias tabasqueñas que ya disfrutan de nuestro programa de recompensas.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-balance">¿Cómo Funciona?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-balance">
              Es muy sencillo acumular puntos y disfrutar de los beneficios del programa Leones de Oro
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-red-600 font-bold text-2xl">1</span>
                </div>
                <CardTitle className="text-lg">Regístrate Gratis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Inscríbete sin costo en cualquiera de nuestras sucursales o por teléfono. Solo necesitas tu
                  identificación.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-600 font-bold text-2xl">2</span>
                </div>
                <CardTitle className="text-lg">Acumula Puntos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Gana puntos con cada recarga de gas LP. Entre más consumes, más puntos acumulas y subes de nivel.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-red-600 font-bold text-2xl">3</span>
                </div>
                <CardTitle className="text-lg">Sube de Nivel</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Avanza de Bronce a Plata y luego a Oro. Cada nivel te da más beneficios y descuentos exclusivos.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-600 font-bold text-2xl">4</span>
                </div>
                <CardTitle className="text-lg">Disfruta Beneficios</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Canjea tus puntos por descuentos, servicios gratuitos y premios especiales para tu hogar.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-balance">Niveles de Membresía</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-balance">
              Cada nivel te ofrece beneficios únicos y exclusivos. Avanza y desbloquea más recompensas
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* León de Bronce */}
            <Card className="relative overflow-hidden border-2 border-orange-200">
              <div className="absolute top-0 right-0 bg-orange-500 text-white px-4 py-2 text-sm font-semibold rounded-bl-lg">
                BRONCE
              </div>
              <CardHeader className="text-center pb-4">
                <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-12 h-12 text-orange-600" />
                </div>
                <CardTitle className="text-2xl text-orange-700">León de Bronce</CardTitle>
                <CardDescription className="text-lg">0 - 500 puntos acumulados</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Gift className="w-5 h-5 text-orange-600" />
                    <span className="text-sm font-medium">1 punto por cada $10 pesos</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-600" />
                    <span className="text-sm">Descuento del 3% en recargas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-orange-600" />
                    <span className="text-sm">Servicio técnico prioritario</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-orange-600" />
                    <span className="text-sm">Invita amigos: 50 puntos</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-orange-600" />
                    <span className="text-sm">Línea de atención preferencial</span>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-orange-200">
                  <h5 className="font-semibold text-orange-700 mb-2">Beneficios adicionales:</h5>
                  <ul className="text-xs space-y-1">
                    <li>• Recordatorios de mantenimiento</li>
                    <li>• Promociones exclusivas por SMS</li>
                    <li>• Descuentos en servicios adicionales</li>
                  </ul>
                </div>

                <div className="pt-4 border-t">
                  <p className="text-xs text-gray-600 text-center">Nivel inicial para nuevos clientes</p>
                </div>
              </CardContent>
            </Card>

            {/* León de Plata */}
            <Card className="relative overflow-hidden border-2 border-gray-300 transform scale-105 shadow-xl">
              <div className="absolute top-0 right-0 bg-gray-500 text-white px-4 py-2 text-sm font-semibold rounded-bl-lg">
                PLATA
              </div>
              <div className="absolute top-0 left-0 bg-red-600 text-white px-3 py-1 text-xs font-semibold rounded-br-lg">
                MÁS POPULAR
              </div>
              <CardHeader className="text-center pb-4">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Crown className="w-12 h-12 text-gray-600" />
                </div>
                <CardTitle className="text-2xl text-gray-700">León de Plata</CardTitle>
                <CardDescription className="text-lg">501 - 1,500 puntos acumulados</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Gift className="w-5 h-5 text-gray-600" />
                    <span className="text-sm font-medium">1.5 puntos por cada $10 pesos</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-gray-600" />
                    <span className="text-sm">Descuento del 5% en recargas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-gray-600" />
                    <span className="text-sm">Mantenimiento gratuito anual</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-gray-600" />
                    <span className="text-sm">Invita amigos: 100 puntos</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-gray-600" />
                    <span className="text-sm">Promociones exclusivas mensuales</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-gray-600" />
                    <span className="text-sm">Servicio de emergencia prioritario</span>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h5 className="font-semibold text-gray-700 mb-2">Beneficios exclusivos:</h5>
                  <ul className="text-xs space-y-1">
                    <li>• Revisión técnica semestral gratuita</li>
                    <li>• Descuentos en electrodomésticos</li>
                    <li>• Acceso a eventos especiales</li>
                    <li>• Asesoría personalizada de ahorro</li>
                  </ul>
                </div>

                <div className="pt-4 border-t">
                  <p className="text-xs text-gray-600 text-center">Nivel ideal para familias regulares</p>
                </div>
              </CardContent>
            </Card>

            {/* León de Oro */}
            <Card className="relative overflow-hidden border-2 border-yellow-300">
              <div className="absolute top-0 right-0 bg-yellow-500 text-white px-4 py-2 text-sm font-semibold rounded-bl-lg">
                ORO
              </div>
              <div className="absolute top-0 left-0 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-3 py-1 text-xs font-semibold rounded-br-lg">
                VIP
              </div>
              <CardHeader className="text-center pb-4">
                <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-12 h-12 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <CardTitle className="text-2xl text-yellow-700">León de Oro</CardTitle>
                <CardDescription className="text-lg">1,501+ puntos acumulados</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Gift className="w-5 h-5 text-yellow-600" />
                    <span className="text-sm font-medium">2 puntos por cada $10 pesos</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow-600" />
                    <span className="text-sm">Descuento del 8% en recargas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-yellow-600" />
                    <span className="text-sm">Servicio técnico 24/7 VIP</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-yellow-600" />
                    <span className="text-sm">Invita amigos: 200 puntos</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-yellow-600" />
                    <span className="text-sm">Asesor personal dedicado</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Crown className="w-5 h-5 text-yellow-600" />
                    <span className="text-sm">Regalos especiales de temporada</span>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-yellow-200">
                  <h5 className="font-semibold text-yellow-700 mb-2">Beneficios VIP:</h5>
                  <ul className="text-xs space-y-1">
                    <li>• Mantenimiento trimestral gratuito</li>
                    <li>• Descuentos hasta 15% en servicios</li>
                    <li>• Invitaciones a eventos exclusivos</li>
                    <li>• Línea directa con gerencia</li>
                    <li>• Regalos de cumpleaños</li>
                  </ul>
                </div>

                <div className="pt-4 border-t">
                  <p className="text-xs text-gray-600 text-center">Máximo nivel para grandes consumidores</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Points Redemption */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-balance">Canje de Puntos</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-balance">
              Convierte tus puntos en beneficios reales para tu hogar y familia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center bg-red-50 border-red-200">
              <CardContent className="py-8">
                <div className="text-3xl font-bold text-red-600 mb-2">100</div>
                <div className="text-sm text-gray-600 mb-2">puntos</div>
                <div className="text-lg font-semibold mb-4">$50 de descuento</div>
                <p className="text-xs text-gray-600">En tu próxima recarga de gas</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-orange-50 border-orange-200">
              <CardContent className="py-8">
                <div className="text-3xl font-bold text-orange-600 mb-2">250</div>
                <div className="text-sm text-gray-600 mb-2">puntos</div>
                <div className="text-lg font-semibold mb-4">Revisión técnica</div>
                <p className="text-xs text-gray-600">Inspección completa gratuita</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-red-50 border-red-200">
              <CardContent className="py-8">
                <div className="text-3xl font-bold text-red-600 mb-2">500</div>
                <div className="text-sm text-gray-600 mb-2">puntos</div>
                <div className="text-lg font-semibold mb-4">1 mes de gas gratis</div>
                <p className="text-xs text-gray-600">Equivalente a consumo promedio</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-orange-50 border-orange-200">
              <CardContent className="py-8">
                <div className="text-3xl font-bold text-orange-600 mb-2">1000</div>
                <div className="text-sm text-gray-600 mb-2">puntos</div>
                <div className="text-lg font-semibold mb-4">Electrodoméstico</div>
                <p className="text-xs text-gray-600">Estufa, calentador o parrilla</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-red-700">Catálogo de Premios Completo</CardTitle>
              <CardDescription>Descubre todas las opciones de canje disponibles</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-red-700 mb-3">Descuentos y Servicios</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span>$25 de descuento</span>
                      <span className="font-medium">50 pts</span>
                    </li>
                    <li className="flex justify-between">
                      <span>$100 de descuento</span>
                      <span className="font-medium">180 pts</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Mantenimiento básico</span>
                      <span className="font-medium">200 pts</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Limpieza de quemadores</span>
                      <span className="font-medium">150 pts</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-700 mb-3">Electrodomésticos</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span>Parrilla portátil</span>
                      <span className="font-medium">800 pts</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Calentador instantáneo</span>
                      <span className="font-medium">1200 pts</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Estufa 4 quemadores</span>
                      <span className="font-medium">1500 pts</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Horno empotrable</span>
                      <span className="font-medium">2000 pts</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-700 mb-3">Experiencias</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span>Curso de cocina</span>
                      <span className="font-medium">300 pts</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Cena familiar</span>
                      <span className="font-medium">600 pts</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Fin de semana en hotel</span>
                      <span className="font-medium">1800 pts</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Viaje a Palenque</span>
                      <span className="font-medium">2500 pts</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Special Promotions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-balance">Promociones Especiales</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-balance">
              Aprovecha estas oportunidades limitadas para ganar puntos extra y obtener beneficios únicos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-red-100 border-red-300">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Gift className="w-6 h-6 text-red-600" />
                  <span className="bg-red-600 text-white px-2 py-1 text-xs font-semibold rounded">NUEVO</span>
                </div>
                <CardTitle className="text-xl text-red-700">Bono de Bienvenida</CardTitle>
                <CardDescription>Para nuevos miembros</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-red-600">200</div>
                  <div className="text-sm text-gray-600">puntos de regalo</div>
                </div>
                <p className="text-sm text-gray-700 mb-4">
                  Regístrate en el programa Leones de Oro y recibe 200 puntos de bienvenida para empezar a disfrutar
                  beneficios inmediatamente.
                </p>
                <p className="text-xs text-gray-600">Válido hasta el 31 de diciembre</p>
              </CardContent>
            </Card>

            <Card className="bg-orange-100 border-orange-300">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-6 h-6 text-orange-600" />
                  <span className="bg-orange-600 text-white px-2 py-1 text-xs font-semibold rounded">POPULAR</span>
                </div>
                <CardTitle className="text-xl text-orange-700">Refiere y Gana</CardTitle>
                <CardDescription>Programa de referidos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-orange-600">500</div>
                  <div className="text-sm text-gray-600">puntos por referido</div>
                </div>
                <p className="text-sm text-gray-700 mb-4">
                  Por cada amigo o familiar que se una al programa, tanto tú como tu referido reciben 500 puntos extra.
                  Sin límite de referidos.
                </p>
                <p className="text-xs text-gray-600">Tu referido debe completar su primera recarga</p>
              </CardContent>
            </Card>

            <Card className="bg-yellow-100 border-yellow-300">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-6 h-6 text-yellow-600" />
                  <span className="bg-yellow-600 text-white px-2 py-1 text-xs font-semibold rounded">LIMITADO</span>
                </div>
                <CardTitle className="text-xl text-yellow-700">Puntos Dobles</CardTitle>
                <CardDescription>Promoción mensual</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-yellow-600">2X</div>
                  <div className="text-sm text-gray-600">puntos en recargas</div>
                </div>
                <p className="text-sm text-gray-700 mb-4">
                  Durante los primeros 15 días de cada mes, todas las recargas otorgan el doble de puntos. Perfecto para
                  subir de nivel rápidamente.
                </p>
                <p className="text-xs text-gray-600">Próxima promoción: 1-15 de enero</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-500 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="mb-8">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">🦁</span>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-balance">¿Listo para ser un León de Oro?</h2>
            <p className="text-xl text-balance leading-relaxed">
              Únete hoy mismo y comienza a disfrutar de todos los beneficios exclusivos para miembros
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <Gift className="w-8 h-8 mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Inscripción Gratuita</h3>
              <p className="text-sm opacity-90">Sin costo de membresía ni anualidades</p>
            </div>
            <div className="text-center">
              <Zap className="w-8 h-8 mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Beneficios Inmediatos</h3>
              <p className="text-sm opacity-90">Empieza a ahorrar desde tu primera recarga</p>
            </div>
            <div className="text-center">
              <Crown className="w-8 h-8 mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Recompensas Exclusivas</h3>
              <p className="text-sm opacity-90">Acceso a promociones solo para miembros</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
              <Phone className="w-4 h-4 mr-2" />
              Inscribirme por Teléfono
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-red-600 bg-transparent"
            >
              Visitar Sucursal Más Cercana
            </Button>
          </div>
          <p className="text-sm mt-4 opacity-90">
            Más de 3,000 familias ya son parte del programa • Beneficios desde el primer día
          </p>
        </div>
      </section>
    </div>
  )
}
