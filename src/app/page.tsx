"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Calendar,
  Star,
  ExternalLink,
  Download,
  ChevronDown,
  Quote,
  GraduationCap,
} from "lucide-react"

export default function ProfilePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      const sections = ["hero", "about", "portfolio", "testimonials", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="font-serif font-bold text-xl text-emerald-600">Valentin Blanchet</div>
            <div className="hidden md:flex items-center gap-8">
              {["À propos", "Portfolio", "Témoignages", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-emerald-600 ${activeSection === item.toLowerCase() ? "text-emerald-600" : "text-slate-600"
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <Button
              size="sm"
              className="bg-emerald-600 hover:bg-emerald-700 text-white"
              onClick={() => scrollToSection("contact")}
            >
              Me contacter
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="hero" className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-8 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
              <div className="space-y-4">
                <Badge variant="outline" className="text-emerald-600 border-emerald-200">
                  Disponible pour de nouvelles opportunités
                </Badge>
                <h1 className="font-serif text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  Bienvenue sur mon portfolio
                </h1>
                <p className="text-xl text-slate-600 font-sans leading-relaxed">
                  Je m’appelle Valentin Blanchet, développeur FullStack en dernière année de Master à l’école Sup de Vinci Rennes. Grâce à 3 ans d’alternance, j’ai pu allier études et expérience professionnelle pour approfondir mes compétences en développement web et applicatif. Découvrez mes projets et mon parcours.                </p>
              </div>

              <div className="flex items-center gap-4 text-slate-600">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Rennes, France</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" />
                  <span className="text-sm">3 ans d'alternance</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Button
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white group"
                  onClick={() => scrollToSection("portfolio")}
                >
                  Voir mes projets
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-emerald-200 text-emerald-600 hover:bg-emerald-50 bg-transparent"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Télécharger mon CV
                </Button>
              </div>

              <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm" className="p-2 hover:bg-emerald-50">
                  <Github className="w-5 h-5 text-slate-600 hover:text-emerald-600" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2 hover:bg-emerald-50">
                  <Linkedin className="w-5 h-5 text-slate-600 hover:text-emerald-600" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2 hover:bg-emerald-50">
                  <Mail className="w-5 h-5 text-slate-600 hover:text-emerald-600" />
                </Button>
              </div>
            </div>

            <div className={`relative ${isVisible ? "animate-slide-in-right animate-delay-200" : "opacity-0"}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl transform rotate-3"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-xl">
                  <Avatar className="w-48 h-48 mx-auto mb-6">
                    <AvatarImage src="/photo-valentin.jpg" />
                    <AvatarFallback className="text-4xl font-serif">VB</AvatarFallback>
                  </Avatar>
                  <div className="text-center space-y-2">
                    <h3 className="font-serif text-2xl font-bold text-slate-900">Valentin Blanchet</h3>
                    <p className="text-emerald-600 font-medium">Développeur FullStack</p>
                    <div className="flex justify-center gap-1 mt-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm text-slate-500">Étudiant en Master à Sup de Vinci Rennes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-16">
            <button
              onClick={() => scrollToSection("about")}
              className="animate-bounce text-slate-400 hover:text-emerald-600 transition-colors"
            >
              <ChevronDown className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* À propos */}
      <section id="about" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-slate-900 mb-4">À propos de moi</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Passionné par le développement FullStack, je conçois et développe des applications modernes, performantes
              et centrées sur l’utilisateur.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-200 transition-colors">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-4">Créativité</h3>
                <p className="text-slate-600 leading-relaxed">
                  J’aime concevoir des interfaces modernes, esthétiques et accessibles qui offrent une expérience fluide
                  aux utilisateurs.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-200 transition-colors">
                  <span className="text-2xl">💻</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-4">Développement</h3>
                <p className="text-slate-600 leading-relaxed">
                  Conception d’applications robustes et évolutives avec les technologies modernes (React, Next.js,
                  TypeScript, C#, Power Platform).
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-200 transition-colors">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-4">Innovation</h3>
                <p className="text-slate-600 leading-relaxed">
                  Toujours à l’affût des nouvelles technologies pour livrer des solutions performantes, créatives et
                  adaptées aux besoins.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-6">Mon parcours</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Mastère Développement full stack – Sup de Vinci Rennes</h4>
                    <p className="text-slate-600 text-sm">2024 - Aujourd’hui</p>
                    <p className="text-slate-600 mt-2">
                      Reconnu par l'état Niveau 7 - Expert en systèmes d’information
                      Code RNCP : RNCP40147
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-900">License CDA - Eni Ecole</h4>
                    <p className="text-slate-600 text-sm">2022 - 2024</p>
                    <p className="text-slate-600 mt-2">
                      Reconnu par l’État Niveau 6 - Concepteur développeur d'applications
                      Code RNCP : RNCP37873
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="font-serif text-2xl font-bold text-slate-900">Compétences</h3>
              <div className="space-y-4">
                {[
                  { skill: "Dynamics 365 / Power Platform", level: 90 },
                  { skill: "C# / .NET", level: 85 },
                  { skill: "Javascript", level: 85 },
                  { skill: "Html / PHP / CSS", level: 70 },
                  { skill: "Liquid", level: 65 },
                ].map((item) => (
                  <div key={item.skill}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-slate-900">{item.skill}</span>
                      <span className="text-slate-600">{item.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div
                        className="bg-emerald-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      {/*<section id="portfolio" className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-slate-900 mb-4">Portfolio</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Découvrez quelques projets que j’ai réalisés, illustrant mes compétences en développement web et
              applicatif.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Projet E-commerce",
                category: "Développement Web",
                image: "/modern-ecommerce-interface.png",
                description: "Plateforme e-commerce fullstack avec paiement Stripe.",
              },
              {
                title: "Application bancaire mobile",
                category: "UI/UX Design",
                image: "/mobile-banking-app.png",
                description: "Application bancaire intuitive et sécurisée.",
              },
              {
                title: "Dashboard SaaS",
                category: "Développement Web",
                image: "/modern-dashboard.png",
                description: "Tableau de bord analytique avec visualisations en temps réel.",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <Button
                      size="sm"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-slate-900 hover:bg-slate-100"
                    >
                      Voir le projet
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-3 text-emerald-600 bg-emerald-50">
                    {project.category}
                  </Badge>
                  <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>*/}

      {/* Témoignages */}
      {/*<section id="testimonials" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-slate-900 mb-4">Témoignages</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Voici ce que disent mes collègues et partenaires à propos de mes contributions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Dupont",
                role: "CEO, StartupTech",
                avatar: "/professional-woman-headshot.png",
                content:
                  "Valentin a apporté une vraie valeur ajoutée à notre projet grâce à ses compétences techniques et sa vision innovante.",
              },
              {
                name: "Jean Martin",
                role: "Chef de projet, InnovateCorp",
                avatar: "/professional-man-headshot.png",
                content:
                  "Travail sérieux et efficace. Valentin sait trouver des solutions créatives et pragmatiques aux problèmes.",
              },
              {
                name: "Claire Leroy",
                role: "Directrice Marketing, GrowthCo",
                avatar: "/professional-woman-headshot.png",
                content:
                  "Un développeur passionné et impliqué qui dépasse toujours nos attentes en matière de qualité et de délais.",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="relative p-6 hover:shadow-lg transition-shadow duration-300">
                <Quote className="absolute top-4 right-4 w-8 h-8 text-emerald-200" />
                <CardContent className="p-0">
                  <p className="text-slate-600 leading-relaxed mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                      <p className="text-sm text-slate-600">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>*/}

      {/* Contact */}
      <section id="contact" className="py-16 px-6 bg-gradient-to-br from-emerald-50 to-emerald-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-bold text-slate-900 mb-4">Contact</h2>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            Vous avez une idée ou un projet ? Parlons-en et voyons comment je peux vous accompagner.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <Mail className="w-8 h-8 text-emerald-600 mx-auto mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">Email</h3>
              <p className="text-slate-600">Blanchet.valentin22@gmail.com</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <Linkedin className="w-8 h-8 text-emerald-600 mx-auto mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">LinkedIn</h3>
              <a className="text-slate-600" href="https://www.linkedin.com/in/valentin-blanchet-b72918236/">@valentinblanchet</a>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <Github className="w-8 h-8 text-emerald-600 mx-auto mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">GitHub</h3>
              <a className="text-slate-600" href="https://github.com/vblanchet22">@vblanchet22</a>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
              <Mail className="w-4 h-4 mr-2" />
              Envoyer un message
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-emerald-200 text-emerald-600 hover:bg-emerald-50 bg-transparent"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Planifier un appel
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">© 2025 Valentin Blanchet. Réalisé avec passion et créativité.</p>
        </div>
      </footer>
    </div>
  )
}
