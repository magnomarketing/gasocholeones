"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { href: "/", label: "Inicio" },
    { href: "/servicios", label: "Servicios" },
    { href: "/testimonios", label: "Testimonios" },
    { href: "/seguridad", label: "Seguridad" },
    { href: "/lealtad", label: "Programa Leones" },
    { href: "/ubicaciones", label: "Ubicaciones" },
    { href: "/contacto", label: "Contacto" },
  ]

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">🦁</span>
            </div>
            <div className="flex flex-col">
              <span className="text-red-600 font-bold text-lg leading-tight">Gas Ocho</span>
              <span className="text-orange-500 font-semibold text-sm leading-tight">Leones</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-red-600 font-medium transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              <Phone className="w-4 h-4 mr-2" />
              Emergencias
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-red-600 focus:outline-none focus:text-red-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-red-600 font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                  <Phone className="w-4 h-4 mr-2" />
                  Emergencias
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
