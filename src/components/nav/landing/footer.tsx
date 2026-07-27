import React from "react"
import { Phone } from "lucide-react"
import Link from "next/link"

interface FooterProps {
  address?: string
  phone_1?: string
  phone_2?: string
}

export function Footer({
  address,
  phone_1,
  phone_2,
}: FooterProps = {}): JSX.Element {
  const clinicAddress =
    address || "Dahlia Wellness Centre, Clarence House, 8 School Lane, Westlands, Nairobi, Kenya"
  const phone1 = phone_1 || "+254 726 017 063"
  const phone2 = phone_2 || "+254 117 889 911"

  return (
    <footer className="bg-[#111827] text-white pt-16 pb-8 border-t border-[#1f2937]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">

          <div className="flex flex-col gap-4">
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">Brian Oduor</h3>
              <p className="text-emerald-400 font-medium">Physiotherapy</p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Restoring Movement. Rebuilding Strength. Enhancing Life.
            </p>
            <p className="text-gray-500 text-xs">
              Physiotherapy | Rehabilitation | Hydrotherapy | Movement & Wellness
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-gray-300">
              <p className="leading-relaxed">
                <span className="block text-white mb-1">Clinic Location:</span>
                {clinicAddress}
              </p>
              <div className="flex flex-col gap-1 mt-2">
                <a href={`tel:${phone1.replace(/\D/g, "")}`} className="hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <Phone size={14} /> {phone1}
                </a>
                <a href={`tel:${phone2.replace(/\D/g, "")}`} className="hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <Phone size={14} /> {phone2}
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Quick Links</h4>
            <ul className="flex flex-col gap-2 text-sm text-gray-300">
              <li><Link href="/about" className="hover:text-emerald-400 transition-colors">About Me</Link></li>
              <li><Link href="/services" className="hover:text-emerald-400 transition-colors">Services</Link></li>
              <li><Link href="/resources" className="hover:text-emerald-400 transition-colors">Resources & Insights</Link></li>
              <li><Link href="/contact" className="hover:text-emerald-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Specialties</h4>
            <ul className="flex flex-col gap-2 text-sm text-gray-300">
              <li><Link href="/hydrotherapy" className="hover:text-emerald-400 transition-colors">Hydrotherapy</Link></li>
              <li><Link href="/home-physiotherapy" className="hover:text-emerald-400 transition-colors">Home Physiotherapy</Link></li>
              <li><Link href="/corporate-wellness" className="hover:text-emerald-400 transition-colors">Corporate Wellness</Link></li>
              <li><Link href="/services" className="hover:text-emerald-400 transition-colors">Musculoskeletal Rehab</Link></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-[#1f2937] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Brian Oduor Physiotherapy. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="https://wa.me/254726017063" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
