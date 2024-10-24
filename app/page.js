import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, GraduationCap, Briefcase, Award, Languages } from "lucide-react"

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 flex items-center justify-center">
      <Card className="w-[210mm] h-[297mm] mx-auto bg-white shadow-xl overflow-hidden">
        <CardContent className="p-6 h-full flex flex-col">
          <div className="flex flex-1 gap-6">
            <aside className="w-1/3 space-y-6">
              <div className="flex flex-col items-center space-y-4">
                <Avatar className="w-32 h-32 border-4 border-blue-100 shadow-lg">
                  <AvatarImage src="https://hasan-afzal.vercel.app/static/images/profile.png" alt="Ali Afzal" />
                  <AvatarFallback>AA</AvatarFallback>
                </Avatar>
              </div>
              <section>
                <h2 className="text-lg font-semibold text-blue-900 mb-2">About Me</h2>
                <p className="text-xs text-gray-600 leading-relaxed">
                  A dedicated and compassionate MBBS graduate with comprehensive training across multiple medical specialties. Equipped with strong clinical skills, a solid academic foundation, and a commitment to providing exceptional patient care. Seeking a position in a reputable healthcare institution to apply and further enhance my medical expertise.
                </p>
              </section>
              <Separator className="bg-blue-200" />
              <section>
                <h2 className="text-lg font-semibold text-blue-900 mb-2 flex items-center gap-2">
                  <Languages className="w-4 h-4 text-blue-700" />
                  Languages
                </h2>
                <p className="text-xs text-gray-600">English (Fluent), Urdu (Native), Mandarin (Basic)</p>
              </section>
              <Separator className="bg-blue-200" />
              <section>
                <h2 className="text-lg font-semibold text-blue-900 mb-2 flex items-center gap-2">
                  <Award className="w-4 h-4 text-blue-700" />
                  Skills
                </h2>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">Patient Care</Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">Diagnosis</Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">Treatment Planning</Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">Medical Ethics</Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">Clinical Research</Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">Emergency Medicine</Badge>
                </div>
              </section>
            </aside>
            <main className="w-2/3 space-y-6">
              <header className="flex justify-between items-start mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-blue-900">Ali Afzal</h1>
                  <p className="text-lg text-blue-700">MBBS | Aspiring Medical Professional</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600 flex items-center justify-end gap-2">
                    <Phone className="w-4 h-4" />
                    +92 302 6255627
                  </p>
                  <p className="text-sm text-gray-600 flex items-center justify-end gap-2">
                    <Mail className="w-4 h-4" />
                    hafzal795@gmail.com
                  </p>
                </div>
              </header>
              <section>
                <h2 className="text-xl font-bold mb-4 text-blue-900 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-blue-700" />
                  Work Experience
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-base font-semibold text-blue-800">House Job (1 Year)</h3>
                    <p className="text-xs text-gray-600">District Headquarters Hospital, Gujranwala, Pakistan (2023 – 2024)</p>
                    <ul className="mt-2 space-y-2">
                      <li>
                        <h4 className="text-sm font-medium text-blue-700">Gastroenterology</h4>
                        <ul className="list-disc list-inside text-xs text-gray-600 ml-2">
                          <li>Managed patients with GI disorders such as hepatitis and peptic ulcers.</li>
                          <li>Performed endoscopic procedures under supervision.</li>
                        </ul>
                      </li>
                      <li>
                        <h4 className="text-sm font-medium text-blue-700">Medicine</h4>
                        <ul className="list-disc list-inside text-xs text-gray-600 ml-2">
                          <li>Treated a wide range of medical conditions, including diabetes and hypertension.</li>
                          <li>Collaborated with multidisciplinary teams for patient care.</li>
                        </ul>
                      </li>
                      <li>
                        <h4 className="text-sm font-medium text-blue-700">Surgery</h4>
                        <ul className="list-disc list-inside text-xs text-gray-600 ml-2">
                          <li>Assisted in general and emergency surgeries.</li>
                          <li>Managed surgical wards and conducted rounds.</li>
                        </ul>
                      </li>
                      <li>
                        <h4 className="text-sm font-medium text-blue-700">Orthopedics</h4>
                        <ul className="list-disc list-inside text-xs text-gray-600 ml-2">
                          <li>Assisted in fracture reductions and orthopedic surgeries.</li>
                          <li>Provided rehabilitation guidance to patients.</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-blue-800">Internship (1 Year)</h3>
                    <p className="text-xs text-gray-600">Yichun Medical College Hospital, China (2022 – 2023)</p>
                    <ul className="mt-2 space-y-2">
                      <li>
                        <h4 className="text-sm font-medium text-blue-700">Medicine and Allied Departments</h4>
                        <ul className="list-disc list-inside text-xs text-gray-600 ml-2">
                          <li>Assisted in diagnosing and managing patients with acute and chronic illnesses.</li>
                          <li>Monitored patient progress and adjusted treatment plans accordingly.</li>
                        </ul>
                      </li>
                      <li>
                        <h4 className="text-sm font-medium text-blue-700">Surgery and Allied Departments</h4>
                        <ul className="list-disc list-inside text-xs text-gray-600 ml-2">
                          <li>Participated in over 100 surgical procedures.</li>
                          <li>Managed pre-operative and post-operative patient care.</li>
                        </ul>
                      </li>
                      <li>
                        <h4 className="text-sm font-medium text-blue-700">Pediatrics</h4>
                        <ul className="list-disc list-inside text-xs text-gray-600 ml-2">
                          <li>Conducted pediatric assessments and vaccinations.</li>
                          <li>Educated families on child health and development.</li>
                        </ul>
                      </li>
                      <li>
                        <h4 className="text-sm font-medium text-blue-700">Obstetrics and Gynecology</h4>
                        <ul className="list-disc list-inside text-xs text-gray-600 ml-2">
                          <li>Assisted in deliveries and gynecological surgeries.</li>
                          <li>Provided prenatal and postnatal care.</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
              <Separator className="bg-blue-200" />
              <section>
                <h2 className="text-xl font-bold mb-4 text-blue-900 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-blue-700" />
                  Education
                </h2>
                <div className="space-y-2">
                  <div>
                    <h3 className="text-base font-semibold text-blue-800">Bachelor of Medicine and Bachelor of Surgery (MBBS)</h3>
                    <p className="text-xs text-gray-600">Yichun University, China (2017 – 2024)</p>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-blue-800">FSc. Pre-Medical</h3>
                    <p className="text-xs text-gray-600">Punjab College, Gujranwala, Pakistan (2015 – 2017)</p>
                  </div>
                </div>
              </section>
              <Separator className="bg-blue-200" />
              <section>
                <h2 className="text-xl font-bold mb-4 text-blue-900 flex items-center gap-2">
                  <Award className="w-5 h-5 text-blue-700" />
                  Certifications and Licenses
                </h2>
                <ul className="list-disc list-inside text-xs text-gray-600">
                  <li>Registered Medical Practitioner, Pakistan Medical Commission (PMC), 2024</li>
                </ul>
              </section>
            </main>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}