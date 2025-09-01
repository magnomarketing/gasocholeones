import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Quote, Phone, Users } from "lucide-react"

export default function TestimoniosPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-orange-500 text-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">Lo que dicen nuestros vecinos</h1>
            <p className="text-xl text-balance leading-relaxed max-w-3xl mx-auto">
              Testimonios reales de familias y negocios tabasqueños que confían en Gas Ocho Leones. Más de 15 años
              construyendo relaciones de confianza en nuestra comunidad.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-balance">Historias de Confianza</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-balance">
              Conoce las experiencias de nuestros clientes y descubre por qué somos la opción preferida en Tabasco
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Doña María - Villahermosa */}
            <Card className="relative">
              <div className="absolute -top-4 left-6">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-white" />
                </div>
              </div>
              <CardContent className="pt-8">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="/smiling-middle-aged-mexican-woman-with-traditional.png"
                    alt="Doña María González"
                    className="w-16 h-16 rounded-full object-cover border-2 border-red-200"
                  />
                  <div>
                    <h4 className="font-semibold text-lg">Doña María González</h4>
                    <p className="text-sm text-gray-600">Villahermosa Centro</p>
                    <p className="text-xs text-gray-500">Cliente desde 2019</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "Desde que instalé el gas estacionario, ya no me preocupo por quedarme sin gas. El medidor me dice
                  exactamente cuánto tengo y el precio es justo. Mis hijos ya no tienen que cargar cilindros pesados."
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">Servicio: Gas Residencial</span>
                </div>
              </CardContent>
            </Card>

            {/* Don Carlos - Restaurante */}
            <Card className="relative">
              <div className="absolute -top-4 left-6">
                <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-white" />
                </div>
              </div>
              <CardContent className="pt-8">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="/mexican-man-in-chef-apron-smiling.png"
                    alt="Don Carlos Pérez"
                    className="w-16 h-16 rounded-full object-cover border-2 border-orange-200"
                  />
                  <div>
                    <h4 className="font-semibold text-lg">Don Carlos Pérez</h4>
                    <p className="text-sm text-gray-600">Restaurante "El Tabasqueño"</p>
                    <p className="text-xs text-gray-500">Cliente desde 2018</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "Para mi restaurante era fundamental tener suministro garantizado. Con Gas Ocho Leones nunca he tenido
                  problemas y el servicio técnico es excelente. Los precios comerciales me ayudan mucho."
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">Servicio: Comercial</span>
                </div>
              </CardContent>
            </Card>

            {/* Familia Hernández */}
            <Card className="relative">
              <div className="absolute -top-4 left-6">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-white" />
                </div>
              </div>
              <CardContent className="pt-8">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="/young-mexican-couple-smiling-together.png"
                    alt="Familia Hernández"
                    className="w-16 h-16 rounded-full object-cover border-2 border-red-200"
                  />
                  <div>
                    <h4 className="font-semibold text-lg">Familia Hernández</h4>
                    <p className="text-sm text-gray-600">Fraccionamiento Las Flores</p>
                    <p className="text-xs text-gray-500">Cliente desde 2020</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "Los puntos de lealtad nos han ayudado mucho. Ya hemos canjeado varios descuentos y el programa de
                  referidos nos dio un mes gratis. Es como tener un vecino que siempre te cuida."
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">Programa: Leones de Oro</span>
                </div>
              </CardContent>
            </Card>

            {/* Don Roberto - Comalcalco */}
            <Card className="relative">
              <div className="absolute -top-4 left-6">
                <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-white" />
                </div>
              </div>
              <CardContent className="pt-8">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="/elderly-mexican-man-with-mustache-smiling.png"
                    alt="Don Roberto Jiménez"
                    className="w-16 h-16 rounded-full object-cover border-2 border-orange-200"
                  />
                  <div>
                    <h4 className="font-semibold text-lg">Don Roberto Jiménez</h4>
                    <p className="text-sm text-gray-600">Comalcalco</p>
                    <p className="text-xs text-gray-500">Cliente desde 2017</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "A mis 68 años ya no quiero estar cargando cilindros. El gas estacionario me dio la tranquilidad que
                  buscaba para mi esposa y para mí. La instalación fue rápida y sin problemas."
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">Servicio: Gas Residencial</span>
                </div>
              </CardContent>
            </Card>

            {/* Doña Carmen - Tortillería */}
            <Card className="relative">
              <div className="absolute -top-4 left-6">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-white" />
                </div>
              </div>
              <CardContent className="pt-8">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="/mexican-woman-restaurant-owner-smiling.png"
                    alt="Doña Carmen López"
                    className="w-16 h-16 rounded-full object-cover border-2 border-red-200"
                  />
                  <div>
                    <h4 className="font-semibold text-lg">Doña Carmen López</h4>
                    <p className="text-sm text-gray-600">Tortillería "La Esperanza"</p>
                    <p className="text-xs text-gray-500">Cliente desde 2019</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "El servicio de emergencia me salvó cuando tuve un problema un domingo. Llegaron en 30 minutos y
                  solucionaron todo sin costo extra. Eso es lo que valoro de Gas Ocho Leones."
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">Servicio: Emergencia 24/7</span>
                </div>
              </CardContent>
            </Card>

            {/* Familia Morales - Cárdenas */}
            <Card className="relative">
              <div className="absolute -top-4 left-6">
                <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-white" />
                </div>
              </div>
              <CardContent className="pt-8">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="/mexican-family-of-four-smiling-together.png"
                    alt="Familia Morales"
                    className="w-16 h-16 rounded-full object-cover border-2 border-orange-200"
                  />
                  <div>
                    <h4 className="font-semibold text-lg">Familia Morales</h4>
                    <p className="text-sm text-gray-600">Cárdenas</p>
                    <p className="text-xs text-gray-500">Cliente desde 2021</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "Con cuatro hijos, el consumo de gas era alto. Ahora con el medidor digital podemos controlar mejor el
                  gasto y enseñar a los niños sobre el ahorro. Es una inversión que vale la pena."
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">Servicio: Gas Residencial</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-balance">Números que nos respaldan</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-balance">
              Más de una década sirviendo a la comunidad tabasqueña con excelencia y confianza
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center bg-red-50 border-red-200">
              <CardContent className="py-8">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-red-600" />
                </div>
                <div className="text-3xl font-bold text-red-600 mb-2">5,000+</div>
                <div className="text-gray-700 font-medium">Familias Atendidas</div>
                <div className="text-sm text-gray-600 mt-1">En toda la región</div>
              </CardContent>
            </Card>

            <Card className="text-center bg-orange-50 border-orange-200">
              <CardContent className="py-8">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-orange-600"
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
                <div className="text-3xl font-bold text-orange-600 mb-2">800+</div>
                <div className="text-gray-700 font-medium">Negocios Atendidos</div>
                <div className="text-sm text-gray-600 mt-1">Restaurantes y comercios</div>
              </CardContent>
            </Card>

            <Card className="text-center bg-red-50 border-red-200">
              <CardContent className="py-8">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-red-600" />
                </div>
                <div className="text-3xl font-bold text-red-600 mb-2">4.9/5</div>
                <div className="text-gray-700 font-medium">Calificación Promedio</div>
                <div className="text-sm text-gray-600 mt-1">Basado en 2,500+ reseñas</div>
              </CardContent>
            </Card>

            <Card className="text-center bg-orange-50 border-orange-200">
              <CardContent className="py-8">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-orange-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
                <div className="text-gray-700 font-medium">Años de Experiencia</div>
                <div className="text-sm text-gray-600 mt-1">Sirviendo a Tabasco</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-balance">Testimonios en Video</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-balance">
              Escucha directamente de nuestros clientes sus experiencias con Gas Ocho Leones
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="aspect-video bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-700 transition-colors">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <img
                  src="/smiling-middle-aged-mexican-woman-with-traditional.png"
                  alt="Video testimonial"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <CardContent className="p-4">
                <h4 className="font-semibold mb-2">Doña Rosa - Villahermosa</h4>
                <p className="text-sm text-gray-600">"Mi experiencia con el gas estacionario"</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-orange-700 transition-colors">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <img
                  src="/mexican-man-in-chef-apron-smiling.png"
                  alt="Video testimonial"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <CardContent className="p-4">
                <h4 className="font-semibold mb-2">Chef Miguel - Comalcalco</h4>
                <p className="text-sm text-gray-600">"Cómo Gas Ocho Leones transformó mi restaurante"</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-700 transition-colors">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <img
                  src="/young-mexican-couple-smiling-together.png"
                  alt="Video testimonial"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <CardContent className="p-4">
                <h4 className="font-semibold mb-2">Familia Jiménez - Cárdenas</h4>
                <p className="text-sm text-gray-600">"Por qué elegimos el gas estacionario"</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-balance">
            ¿Quieres ser nuestro próximo testimonio?
          </h2>
          <p className="text-lg text-gray-600 mb-8 text-balance">
            Únete a miles de familias tabasqueñas que ya disfrutan de la tranquilidad y confianza de Gas Ocho Leones
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              <Phone className="w-4 h-4 mr-2" />
              Solicitar Cotización Gratuita
            </Button>
            <Button size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 bg-transparent">
              Conocer Más Testimonios
            </Button>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Más de 5,000 familias ya confían en nosotros • Calificación promedio: 4.9/5 estrellas
          </p>
        </div>
      </section>
    </div>
  )
}
