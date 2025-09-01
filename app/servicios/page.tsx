import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Phone, Clock, Shield, Users } from "lucide-react"

export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-orange-500 text-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">Nuestros Servicios</h1>
            <p className="text-xl text-balance leading-relaxed max-w-3xl mx-auto">
              Soluciones completas de gas LP para hogares y negocios en todo Tabasco. Más de 15 años de experiencia nos
              respaldan.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-red-50 border-red-200">
              <CardHeader>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-red-600"
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
                <CardTitle className="text-2xl text-red-700">Gas Estacionario Residencial</CardTitle>
                <CardDescription className="text-lg">Para tu hogar y familia</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  Instalación completa de tanque estacionario con medidor digital, conexiones certificadas y
                  mantenimiento incluido. La solución más segura y económica para tu hogar.
                </p>

                <div className="space-y-4">
                  <h4 className="font-semibold text-red-700">Incluye:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-red-600 mt-0.5" />
                      <div>
                        <span className="font-medium">Instalación gratuita</span>
                        <p className="text-sm text-gray-600">
                          Técnicos certificados realizan toda la instalación sin costo
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-red-600 mt-0.5" />
                      <div>
                        <span className="font-medium">Medidor digital incluido</span>
                        <p className="text-sm text-gray-600">Monitorea tu consumo en tiempo real</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-red-600 mt-0.5" />
                      <div>
                        <span className="font-medium">Mantenimiento anual gratis</span>
                        <p className="text-sm text-gray-600">Revisión completa del sistema cada año</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-red-600 mt-0.5" />
                      <div>
                        <span className="font-medium">Garantía de 2 años</span>
                        <p className="text-sm text-gray-600">En instalación y equipos</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <h5 className="font-semibold text-red-700 mb-2">Capacidades disponibles:</h5>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <span>• 120 litros</span>
                    <span>• 180 litros</span>
                    <span>• 300 litros</span>
                    <span>• 500 litros</span>
                  </div>
                </div>

                <Button className="w-full bg-red-600 hover:bg-red-700">
                  <Phone className="w-4 h-4 mr-2" />
                  Solicitar Cotización Residencial
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-orange-50 border-orange-200">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
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
                <CardTitle className="text-2xl text-orange-700">Soluciones para Negocios</CardTitle>
                <CardDescription className="text-lg">Restaurantes, tortillerías y más</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  Sistemas de gas LP diseñados para las necesidades específicas de tu negocio, con suministro
                  garantizado y precios preferenciales para empresarios tabasqueños.
                </p>

                <div className="space-y-4">
                  <h4 className="font-semibold text-orange-700">Beneficios comerciales:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5" />
                      <div>
                        <span className="font-medium">Suministro garantizado</span>
                        <p className="text-sm text-gray-600">Nunca te quedarás sin gas en horas pico</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5" />
                      <div>
                        <span className="font-medium">Precios preferenciales</span>
                        <p className="text-sm text-gray-600">Descuentos por volumen y contratos anuales</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5" />
                      <div>
                        <span className="font-medium">Servicio técnico 24/7</span>
                        <p className="text-sm text-gray-600">Atención prioritaria para negocios</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5" />
                      <div>
                        <span className="font-medium">Facturación empresarial</span>
                        <p className="text-sm text-gray-600">Facturas deducibles de impuestos</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-orange-200">
                  <h5 className="font-semibold text-orange-700 mb-2">Sectores que atendemos:</h5>
                  <div className="grid grid-cols-1 gap-1 text-sm">
                    <span>• Restaurantes y cocinas económicas</span>
                    <span>• Tortillerías y panaderías</span>
                    <span>• Hoteles y hospedajes</span>
                    <span>• Lavanderías industriales</span>
                    <span>• Talleres y fábricas</span>
                  </div>
                </div>

                <Button className="w-full bg-orange-600 hover:bg-orange-700">
                  <Users className="w-4 h-4 mr-2" />
                  Contactar Asesor Comercial
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-red-50 border-red-200">
              <CardHeader>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-red-600"
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
                <CardTitle className="text-2xl text-red-700">Recarga de Cilindros</CardTitle>
                <CardDescription className="text-lg">Servicio tradicional confiable</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  Recarga de cilindros de gas LP con peso garantizado y entrega a domicilio en toda la zona
                  metropolitana de Villahermosa y municipios cercanos.
                </p>

                <div className="space-y-4">
                  <h4 className="font-semibold text-red-700">Nuestro compromiso:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-red-600 mt-0.5" />
                      <div>
                        <span className="font-medium">Peso garantizado</span>
                        <p className="text-sm text-gray-600">Báscula certificada en cada entrega</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-red-600 mt-0.5" />
                      <div>
                        <span className="font-medium">Entrega a domicilio</span>
                        <p className="text-sm text-gray-600">Sin costo adicional en zona metropolitana</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-red-600 mt-0.5" />
                      <div>
                        <span className="font-medium">Horarios flexibles</span>
                        <p className="text-sm text-gray-600">Lunes a sábado de 7:00 AM a 7:00 PM</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-red-600 mt-0.5" />
                      <div>
                        <span className="font-medium">Cilindros en buen estado</span>
                        <p className="text-sm text-gray-600">Revisión de seguridad en cada entrega</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <h5 className="font-semibold text-red-700 mb-2">Capacidades disponibles:</h5>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <span>• 10 kg</span>
                    <span>• 20 kg</span>
                    <span>• 30 kg</span>
                    <span>• 45 kg</span>
                  </div>
                </div>

                <Button className="w-full bg-red-600 hover:bg-red-700">
                  <Clock className="w-4 h-4 mr-2" />
                  Programar Entrega
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-orange-50 border-orange-200">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
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
                      d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                    />
                  </svg>
                </div>
                <CardTitle className="text-2xl text-orange-700">Servicio de Emergencia</CardTitle>
                <CardDescription className="text-lg">Disponible 24/7</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  Atención inmediata para emergencias relacionadas con gas LP. Técnicos certificados disponibles las 24
                  horas del día, los 365 días del año.
                </p>

                <div className="space-y-4">
                  <h4 className="font-semibold text-orange-700">Cobertura de emergencia:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5" />
                      <div>
                        <span className="font-medium">Respuesta inmediata</span>
                        <p className="text-sm text-gray-600">Tiempo promedio de llegada: 30 minutos</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5" />
                      <div>
                        <span className="font-medium">Técnicos certificados</span>
                        <p className="text-sm text-gray-600">Personal capacitado en seguridad de gas LP</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5" />
                      <div>
                        <span className="font-medium">Sin costo adicional</span>
                        <p className="text-sm text-gray-600">Para clientes del programa Leones de Oro</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5" />
                      <div>
                        <span className="font-medium">Cobertura total</span>
                        <p className="text-sm text-gray-600">Toda la zona metropolitana y municipios</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-red-100 p-4 rounded-lg border border-red-300">
                  <h5 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                      />
                    </svg>
                    Línea de Emergencia:
                  </h5>
                  <p className="text-2xl font-bold text-red-700">(993) 800-LEON</p>
                  <p className="text-sm text-gray-600">Disponible 24 horas, 7 días a la semana</p>
                </div>

                <Button className="w-full bg-orange-600 hover:bg-orange-700">
                  <Phone className="w-4 h-4 mr-2" />
                  Línea de Emergencia
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-balance">Servicios Adicionales</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-balance">
              Complementamos nuestros servicios principales con soluciones especializadas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle className="text-xl">Inspección de Seguridad</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Revisión completa de tu instalación de gas para garantizar el cumplimiento de normas de seguridad.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-4">
                  <li>• Revisión de conexiones</li>
                  <li>• Pruebas de hermeticidad</li>
                  <li>• Certificado oficial</li>
                </ul>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-red-600 text-red-600 hover:bg-red-50 bg-transparent"
                >
                  Agendar Inspección
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
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
                      d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                    />
                  </svg>
                </div>
                <CardTitle className="text-xl">Mantenimiento Preventivo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Programa de mantenimiento regular para extender la vida útil de tu instalación de gas.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-4">
                  <li>• Limpieza de componentes</li>
                  <li>• Calibración de medidores</li>
                  <li>• Reporte detallado</li>
                </ul>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent"
                >
                  Contratar Mantenimiento
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                    />
                  </svg>
                </div>
                <CardTitle className="text-xl">Capacitación en Seguridad</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Cursos y talleres para el uso seguro del gas LP dirigidos a familias y personal de negocios.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-4">
                  <li>• Detección de fugas</li>
                  <li>• Procedimientos de emergencia</li>
                  <li>• Certificado de participación</li>
                </ul>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-red-600 text-red-600 hover:bg-red-50 bg-transparent"
                >
                  Inscribirse al Curso
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-balance">
            ¿Necesitas una cotización personalizada?
          </h2>
          <p className="text-lg text-gray-600 mb-8 text-balance">
            Nuestros asesores especializados te ayudarán a encontrar la mejor solución para tu hogar o negocio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              <Phone className="w-4 h-4 mr-2" />
              Llamar Ahora: (993) 800-LEON
            </Button>
            <Button size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 bg-transparent">
              Solicitar Visita Técnica
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
