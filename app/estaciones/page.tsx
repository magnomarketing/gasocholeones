import { MapPin, Phone, Clock, Banknote, CreditCard } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const stations = [
  {
    name: "Estación Samarkanda",
    address: "Calle Principal Samarkanda S/N, Ranchería Samarkanda, Centro, Tabasco",
    phone: "(993) 123-4567",
    hours: "24/7",
    payment: "Efectivo",
  },
  {
    name: "Estación Bosques de Saloya",
    address: "Carretera Bosques de Saloya km 5 S/N, Ranchería Emiliano Zapata, Centro, Tabasco",
    phone: "(993) 123-4568",
    hours: "24/7",
    payment: "Tarjeta de crédito",
  },
  {
    name: "Estación Buenavista",
    address: "Fraccionamiento Estrellas de Buenavista, Ranchería Buenavista 2da Sección, Centro, Tabasco",
    phone: "(993) 123-4569",
    hours: "24/7",
    payment: "Efectivo",
  },
  {
    name: "Estación Lagunas",
    address: "Carretera Villahermosa–Frontera km 5+534.5, Fraccionamiento Lagunas, Centro, Tabasco",
    phone: "(993) 123-4570",
    hours: "24/7",
    payment: "Tarjeta de crédito",
  },
  {
    name: "Estación Medellín y Pigua",
    address: "Sección Las Palmas S/N, Ranchería Medellín y Pigua 3ra Sección, Centro, Tabasco",
    phone: "(993) 123-4571",
    hours: "24/7",
    payment: "Efectivo",
  },
  {
    name: "Estación Samarkanda Centro",
    address: "Calle Principal Samarkanda S/N, Ranchería Samarkanda, Centro, Tabasco",
    phone: "(993) 123-4572",
    hours: "24/7",
    payment: "Tarjeta de crédito",
  },
  {
    name: "Estación Pino Suárez",
    address:
      "Carretera a Samarkanda esquina con Periférico Carlos Pellicer Cámara S/N, Colonia José María Pino Suárez, Villahermosa, Centro, Tabasco",
    phone: "(993) 123-4573",
    hours: "24/7",
    payment: "Efectivo",
  },
  {
    name: "Estación Casa Blanca",
    address:
      "Colonia Casa Blanca 2da Sección, esquina con Periférico Carlos Pellicer Cámara y Río Mezcalapa, Centro, Tabasco",
    phone: "(993) 123-4574",
    hours: "24/7",
    payment: "Tarjeta de crédito",
  },
]

export default function EstacionesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-orange-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestras Estaciones</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Encuentra la estación Gas Ocho Leones más cercana a ti en Tabasco
          </p>
        </div>
      </section>

      {/* Stations Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stations.map((station, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-shadow duration-300 border-2 border-gray-100 hover:border-red-200"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="bg-red-100 p-3 rounded-full">
                      <MapPin className="w-6 h-6 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{station.name}</h3>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                      <p className="text-sm text-gray-600">{station.address}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-gray-400" />
                      <a href={`tel:${station.phone}`} className="text-sm text-red-600 hover:text-red-700 font-medium">
                        {station.phone}
                      </a>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <p className="text-sm text-gray-600">{station.hours}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        {station.payment === "Efectivo" ? (
                          <Banknote className="w-4 h-4 text-green-600" />
                        ) : (
                          <CreditCard className="w-4 h-4 text-blue-600" />
                        )}
                        <p className="text-sm text-gray-600">{station.payment}</p>
                      </div>
                    </div>
                  </div>

                  <button className="mt-4 w-full bg-gradient-to-r from-red-600 to-orange-500 text-white py-2 px-4 rounded-lg hover:from-red-700 hover:to-orange-600 transition-all duration-200 font-medium">
                    Cómo llegar
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ubicación de Nuestras Estaciones</h2>
            <p className="text-gray-600">Todas nuestras estaciones en un solo mapa</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-gray-100">
            <div className="aspect-video w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30344.123456789!2d-92.9376!3d17.9892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85edd7f8f8f8f8f8%3A0x8f8f8f8f8f8f8f8!2sVillahermosa%2C%20Tabasco!5e0!3m2!1ses!2smx!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">¿No encuentras una estación cerca de ti?</p>
            <a
              href="/contacto"
              className="inline-block bg-gradient-to-r from-red-600 to-orange-500 text-white py-3 px-8 rounded-lg hover:from-red-700 hover:to-orange-600 transition-all duration-200 font-medium"
            >
              Contáctanos
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
