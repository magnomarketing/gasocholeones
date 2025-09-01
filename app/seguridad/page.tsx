import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Shield, Phone, AlertTriangle, Eye, Wind, Home, Wrench } from "lucide-react"

export default function SeguridadPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-orange-500 text-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Shield className="w-12 h-12" />
              <h1 className="text-4xl lg:text-5xl font-bold text-balance">Seguridad Primero</h1>
            </div>
            <p className="text-xl text-balance leading-relaxed max-w-3xl mx-auto">
              Tu seguridad y la de tu familia es nuestra prioridad. Aprende las mejores prácticas para el uso seguro del
              gas LP y mantén tu hogar protegido las 24 horas del día.
            </p>
          </div>
        </div>
      </section>

      {/* Safety Tips Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-balance">Consejos Esenciales de Seguridad</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-balance">
              Conoce las prácticas fundamentales para el uso seguro del gas LP en tu hogar o negocio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center bg-red-50 border-red-200">
              <CardHeader>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle className="text-lg">Detección de Fugas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Usa agua jabonosa en conexiones y válvulas. Si ves burbujas, cierra la válvula principal y llámanos
                  inmediatamente.
                </p>
                <div className="bg-white p-3 rounded border border-red-200">
                  <p className="text-xs text-red-700 font-semibold">NUNCA uses llamas o chispas para detectar fugas</p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center bg-orange-50 border-orange-200">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wind className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-lg">Ventilación Adecuada</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Mantén siempre ventiladas las áreas donde uses gas. Nunca uses estufas para calentar espacios
                  cerrados.
                </p>
                <div className="bg-white p-3 rounded border border-orange-200">
                  <p className="text-xs text-orange-700 font-semibold">Abre ventanas al cocinar por períodos largos</p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center bg-red-50 border-red-200">
              <CardHeader>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle className="text-lg">Almacenamiento Seguro</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Los tanques deben estar en áreas ventiladas, alejados de fuentes de calor y protegidos del sol
                  directo.
                </p>
                <div className="bg-white p-3 rounded border border-red-200">
                  <p className="text-xs text-red-700 font-semibold">Mínimo 3 metros de distancia de ventanas</p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center bg-orange-50 border-orange-200">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-lg">Procedimientos de Emergencia</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  En caso de fuga, cierra la válvula, ventila el área, no uses electricidad y llama a emergencias.
                </p>
                <div className="bg-white p-3 rounded border border-orange-200">
                  <p className="text-xs text-orange-700 font-semibold">Línea de emergencia: (993) 800-LEON</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Safety Checklist */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-balance">Lista de Verificación de Seguridad</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-balance">
              Sigue estas rutinas para mantener tu instalación de gas en óptimas condiciones de seguridad
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-red-50 border-red-200">
              <CardHeader>
                <CardTitle className="text-2xl text-red-700 flex items-center gap-3">
                  <Wrench className="w-6 h-6" />
                  Revisión Mensual
                </CardTitle>
                <CardDescription>Tareas que debes realizar cada mes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5" />
                    <div>
                      <span className="font-medium">Inspeccionar conexiones con agua jabonosa</span>
                      <p className="text-sm text-gray-600">
                        Aplica solución jabonosa en todas las conexiones y válvulas
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5" />
                    <div>
                      <span className="font-medium">Verificar que las válvulas cierren completamente</span>
                      <p className="text-sm text-gray-600">Asegúrate de que no haya paso de gas al cerrar</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5" />
                    <div>
                      <span className="font-medium">Limpiar quemadores y mantener ventilación</span>
                      <p className="text-sm text-gray-600">Remueve grasa y residuos de los quemadores</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5" />
                    <div>
                      <span className="font-medium">Revisar mangueras por grietas o desgaste</span>
                      <p className="text-sm text-gray-600">Cambia mangueras cada 5 años o si hay daños</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5" />
                    <div>
                      <span className="font-medium">Verificar el área del tanque</span>
                      <p className="text-sm text-gray-600">Mantén libre de maleza y objetos inflamables</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-orange-50 border-orange-200">
              <CardHeader>
                <CardTitle className="text-2xl text-orange-700 flex items-center gap-3">
                  <Shield className="w-6 h-6" />
                  Revisión Diaria
                </CardTitle>
                <CardDescription>Hábitos de seguridad para todos los días</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5" />
                    <div>
                      <span className="font-medium">Cerrar válvulas después de usar</span>
                      <p className="text-sm text-gray-600">Siempre cierra la válvula del aparato al terminar</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5" />
                    <div>
                      <span className="font-medium">Mantener áreas ventiladas durante el uso</span>
                      <p className="text-sm text-gray-600">Abre ventanas al cocinar por períodos largos</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5" />
                    <div>
                      <span className="font-medium">No dejar encendidos sin supervisión</span>
                      <p className="text-sm text-gray-600">Nunca dejes aparatos encendidos sin vigilancia</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5" />
                    <div>
                      <span className="font-medium">Verificar que las llamas sean azules</span>
                      <p className="text-sm text-gray-600">Llamas amarillas indican combustión incompleta</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5" />
                    <div>
                      <span className="font-medium">Revisar olores inusuales</span>
                      <p className="text-sm text-gray-600">El gas LP tiene olor característico por seguridad</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Procedures */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-balance">Procedimientos de Emergencia</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-balance">
              Saber qué hacer en caso de emergencia puede salvar vidas. Memoriza estos pasos importantes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-red-100 border-red-300">
              <CardHeader>
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <CardTitle className="text-xl text-red-700 text-center">Si Detectas Fuga de Gas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <p className="font-semibold text-red-700">Pasos inmediatos:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Cierra la válvula principal del tanque</li>
                    <li>• Ventila el área abriendo puertas y ventanas</li>
                    <li>• NO enciendas luces ni aparatos eléctricos</li>
                    <li>• NO uses teléfonos celulares en el área</li>
                    <li>• Evacúa el área inmediatamente</li>
                  </ul>
                </div>
                <div className="bg-white p-3 rounded border border-red-300">
                  <p className="text-xs text-red-700 font-semibold text-center">
                    Llama desde un lugar seguro: (993) 800-LEON
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-orange-100 border-orange-300">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <CardTitle className="text-xl text-orange-700 text-center">En Caso de Incendio</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <p className="font-semibold text-orange-700">Acciones prioritarias:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Cierra la válvula del gas si es seguro hacerlo</li>
                    <li>• Llama a los bomberos: 911</li>
                    <li>• Evacúa inmediatamente el área</li>
                    <li>• NO uses agua en fuegos de gas</li>
                    <li>• Usa extinguidor tipo ABC si tienes uno</li>
                  </ul>
                </div>
                <div className="bg-white p-3 rounded border border-orange-300">
                  <p className="text-xs text-orange-700 font-semibold text-center">
                    Mantén siempre un extinguidor cerca del área de gas
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-red-100 border-red-300">
              <CardHeader>
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <CardTitle className="text-xl text-red-700 text-center">Después de la Emergencia</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <p className="font-semibold text-red-700">Antes de volver a usar:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Espera a que llegue nuestro técnico</li>
                    <li>• NO intentes reparar por tu cuenta</li>
                    <li>• Solicita inspección completa del sistema</li>
                    <li>• Verifica que no haya daños estructurales</li>
                    <li>• Obtén certificado de seguridad</li>
                  </ul>
                </div>
                <div className="bg-white p-3 rounded border border-red-300">
                  <p className="text-xs text-red-700 font-semibold text-center">
                    Servicio de emergencia 24/7 sin costo adicional
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Safety Training */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-balance">Capacitación en Seguridad</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-balance">
              Ofrecemos cursos gratuitos de seguridad para nuestros clientes y la comunidad tabasqueña
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-red-700">Curso para Familias</CardTitle>
                <CardDescription>Seguridad doméstica con gas LP</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold">Temas incluidos:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-red-600" />
                      <span>Uso seguro de aparatos domésticos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-red-600" />
                      <span>Detección temprana de problemas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-red-600" />
                      <span>Procedimientos de emergencia familiares</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-red-600" />
                      <span>Mantenimiento básico preventivo</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-red-50 p-4 rounded border border-red-200">
                  <p className="text-sm">
                    <strong>Duración:</strong> 2 horas
                    <br />
                    <strong>Modalidad:</strong> Presencial en nuestras sucursales
                    <br />
                    <strong>Costo:</strong> Gratuito para clientes
                  </p>
                </div>
                <Button className="w-full bg-red-600 hover:bg-red-700">Inscribirse al Curso Familiar</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-orange-700">Curso para Negocios</CardTitle>
                <CardDescription>Seguridad comercial e industrial</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold">Temas incluidos:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-600" />
                      <span>Normativas comerciales de seguridad</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-600" />
                      <span>Capacitación de personal</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-600" />
                      <span>Planes de evacuación</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-600" />
                      <span>Certificación empresarial</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-4 rounded border border-orange-200">
                  <p className="text-sm">
                    <strong>Duración:</strong> 4 horas
                    <br />
                    <strong>Modalidad:</strong> En tu negocio o nuestras instalaciones
                    <br />
                    <strong>Costo:</strong> Incluido en contratos comerciales
                  </p>
                </div>
                <Button className="w-full bg-orange-600 hover:bg-orange-700">Agendar Capacitación Empresarial</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-500 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="mb-8">
            <AlertTriangle className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4 text-balance">¿Tienes una Emergencia de Gas?</h2>
            <p className="text-xl text-balance leading-relaxed">
              Nuestro equipo de emergencia está disponible las 24 horas del día, los 365 días del año
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <Phone className="w-8 h-8 mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Línea de Emergencia</h3>
              <p className="text-2xl font-bold">(993) 800-LEON</p>
            </div>
            <div className="text-center">
              <svg
                className="w-8 h-8 mx-auto mb-2"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-semibold mb-1">Tiempo de Respuesta</h3>
              <p className="text-2xl font-bold">30 min</p>
            </div>
            <div className="text-center">
              <Shield className="w-8 h-8 mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Cobertura</h3>
              <p className="text-2xl font-bold">24/7</p>
            </div>
          </div>

          <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
            <Phone className="w-4 h-4 mr-2" />
            Llamar Línea de Emergencia
          </Button>
          <p className="text-sm mt-4 opacity-90">Servicio gratuito para clientes del programa Leones de Oro</p>
        </div>
      </section>
    </div>
  )
}
