'use client'

import { useState, useEffect } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Mail, Phone, GraduationCap, Briefcase, Award, Languages, Menu, X } from "lucide-react"

export default function Component() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center">
              <Avatar className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-green-500">
                <AvatarImage src="profile.jpeg" alt="Ali Afzal" />
                <AvatarFallback>AA</AvatarFallback>
              </Avatar>
              <div className="ml-3">
                <h1 className="text-lg sm:text-xl font-bold text-green-900">Dr. Ali Afzal</h1>
                <p className="text-sm text-green-700">MBBS | General Physician | RMP </p>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-green-900 hover:bg-green-200 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="md:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-green-900">
                    <span className="sr-only">Open menu</span>
                    {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <nav className="flex flex-col gap-4">
                    {navItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-green-900 hover:bg-green-200 px-3 py-2 rounded-md text-lg font-medium"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <Card className="bg-white shadow-xl overflow-hidden">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-6">
              <aside className="w-full lg:w-1/4 space-y-8 order-last lg:order-first">
                <section id="about">
                  <h2 className="text-lg font-semibold text-green-900 mb-2">About Me</h2>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    A dedicated and compassionate MBBS graduate with comprehensive training across multiple medical specialties. Equipped with strong clinical skills, a solid academic foundation, and a commitment to providing exceptional patient care. Seeking a position in a reputable healthcare institution to apply and further enhance my medical expertise.
                  </p>
                </section>
                <Separator className="bg-green-200" />
                <section>
                  <h2 className="text-lg font-semibold text-green-900 mb-2 flex items-center gap-2">
                    <Languages className="w-4 h-4 text-green-700" />
                    Languages
                  </h2>
                  <p className="text-sm text-gray-600">English (Fluent), Urdu (Native), Mandarin (Basic)</p>
                </section>
                <Separator className="bg-green-200" />
                <section id="skills">
                  <h2 className="text-lg font-semibold text-green-900 mb-2 flex items-center gap-2">
                    <Award className="w-4 h-4 text-green-700" />
                    Skills
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-green-100 text-green-800">CPR and First Aid</Badge>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">Basic life Support</Badge>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">Medical procedures</Badge>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">Clinical Diagnosis and Patient Management</Badge>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">DM and Hypertension Management</Badge>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">Patient Care and Communication</Badge>
                  </div>
                </section>
              </aside>
              <div className="w-full lg:w-3/4 space-y-8 order-first lg:order-last">
                <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                  <div className="mb-4 sm:mb-0">
                    <h1 className="text-3xl font-bold text-green-900">Dr. Ali Afzal</h1>
                    <p className="text-lg text-green-700">MBBS | General Physician | RMP </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-green-700 flex items-center justify-end gap-2">
                      <Phone className="w-4 h-4" />
                      +92 327 8746227
                    </p>
                    <p className="text-sm text-green-700 flex items-center justify-end gap-2">
                      <Mail className="w-4 h-4" />
                      aliswork273@gmail.com
                    </p>
                  </div>
                </header>
                <section id="experience">
                  <h2 className="text-xl font-bold mb-4 text-green-900 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-green-700" />
                    Work Experience
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-base font-semibold text-green-900">House Job (1 Year)</h3>
                      <p className="text-xs text-gray-600">District Headquarters Hospital, Gujranwala, Pakistan (2023 – 2024)</p>
                      <ul className="mt-2 space-y-2">
                        <li>
                          <h4 className="text-sm font-medium text-green-700">Gastroenterology</h4>
                          <ul className="list-disc list-inside text-xs text-gray-600 ml-2">
                            <li>Managed patients with GI disorders such as hepatitis and peptic ulcers.</li>
                            <li>Managed UGIB, LGIB, Hepatic Enceph and Ascitis</li>
                          </ul>
                        </li>
                        <li>
                          <h4 className="text-sm font-medium text-green-700">Medicine</h4>
                          <ul className="list-disc list-inside text-xs text-gray-600 ml-2">
                            <li>Treated a wide range of medical conditions, including diabetes and hypertension.</li>
                            <li>Managed Medical Emergencies like CVA, POISONING, SHOCK, RESPIRATORY DISTRESS and DKA etc.</li>
                            <li>Collaborated with multidisciplinary teams for patient care.</li>
                          </ul>
                        </li>
                        <li>
                          <h4 className="text-sm font-medium text-green-700">Surgery</h4>
                          <ul className="list-disc list-inside text-xs text-gray-600 ml-2">
                            <li>Assisted in general and emergency surgeries.</li>
                            <li>Managed Surgical Emergency cases and Performed Simple procedures.</li>
                            <li>Managed surgical wards and conducted rounds.</li>
                          </ul>
                        </li>
                        <li>
                          <h4 className="text-sm font-medium text-green-700">Orthopedics</h4>
                          <ul className="list-disc list-inside text-xs text-gray-600 ml-2">
                            <li>Assisted in fracture reductions and orthopedic surgeries.</li>
                            <li>Provided rehabilitation guidance to patients.</li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-green-900">Internship (1 Year)</h3>
                      <p className="text-xs text-gray-600">Yichun Medical College Hospital, China (2022 – 2023)</p>
                      <ul className="mt-2 space-y-2">
                        <li>
                          <h4 className="text-sm font-medium text-green-700">Medicine and Allied Departments</h4>
                          <ul className="list-disc list-inside text-xs text-gray-600 ml-2">
                            <li>Assisted in diagnosing and managing patients with acute and chronic illnesses.</li>
                            <li>Monitored patient progress and adjusted treatment plans accordingly.</li>
                          </ul>
                        </li>
                        <li>
                          <h4 className="text-sm font-medium text-green-700">Surgery and Allied Departments</h4>
                          <ul className="list-disc list-inside text-xs text-gray-600 ml-2">
                            <li>Observed in surgical procedures.</li>
                            <li>Managed pre-operative and post-operative patient care.</li>
                          </ul>
                        </li>
                        <li>
                          <h4 className="text-sm font-medium text-green-700">Pediatrics</h4>
                          <ul className="list-disc list-inside text-xs text-gray-600 ml-2">
                            <li>Conducted pediatric assessments and vaccinations.</li>
                            <li>Educated families on child health and development.</li>
                          </ul>
                        </li>
                        <li>
                          <h4 className="text-sm font-medium text-green-700">Obstetrics and Gynecology</h4>
                          <ul className="list-disc list-inside text-xs text-gray-600 ml-2">
                            <li>Assisted in deliveries and gynecological surgeries.</li>
                            <li>Provided prenatal and postnatal care.</li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
                <Separator className="bg-green-200" />
                <section id="education">
                  <h2 className="text-xl font-bold mb-4 text-green-900 flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-green-700" />
                    Education
                  </h2>
                  <div className="space-y-2">
                    <div>
                      <h3 className="text-base font-semibold text-green-800">Bachelor of Medicine and Bachelor of Surgery (MBBS)</h3>
                      <p className="text-xs text-gray-600">Yichun University, China (2017 – 2023)</p>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-green-800">FSc. Pre-Medical</h3>
                      <p className="text-xs text-gray-600">Punjab College, Gujranwala, Pakistan </p>
                    </div>
                  </div>
                </section>
                <Separator className="bg-green-200" />
                <section>
                  <h2 className="text-xl font-bold mb-4 text-green-900 flex items-center gap-2">
                    <Award className="w-5 h-5 text-green-700" />
                    Certifications and Licenses
                  </h2>
                  <ul className="list-disc list-inside text-xs text-gray-600">
                    <li>Registered Medical Practitioner, Pakistan Medical Commission (PMC), 2024</li>
                  </ul>
                </section>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
