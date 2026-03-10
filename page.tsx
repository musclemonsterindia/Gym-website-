"use client"

import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dumbbell, Heart, Zap, UserCheck, Phone, MapPin, MessageCircle, Menu, X } from "lucide-react"

const facilities = [
  {
    icon: Dumbbell,
    title: "Weight Training",
    description: "State-of-the-art weight equipment for all fitness levels",
  },
  {
    icon: Heart,
    title: "Cardio Zone",
    description: "Modern cardio machines to boost your endurance",
  },
  {
    icon: Zap,
    title: "Strength Training",
    description: "Specialized equipment for building raw power",
  },
  {
    icon: UserCheck,
    title: "Personal Training",
    description: "Expert trainers to guide your fitness journey",
  },
]

const galleryImages = [
  { src: "/gym-1.jpg", alt: "Weight Training Area" },
  { src: "/gym-2.jpg", alt: "Cardio Zone" },
  { src: "/gym-3.jpg", alt: "Personal Training Session" },
]

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeImage, setActiveImage] = useState<number | null>(null)

  const handleUPIPayment = () => {
    const upiId = "9625356627-2@ybl"
    const amount = "500"
    const name = "Muscle Monster Gym"
    const note = "Monthly Membership"
    const upiLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(name)}&am=${amount}&tn=${encodeURIComponent(note)}`
    window.location.href = upiLink
  }

  const handleWhatsApp = () => {
    const phone = "919625356627"
    const message = "Hi, I'm interested in joining Muscle Monster Gym!"
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank")
  }

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setMobileMenuOpen(false)
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.jpg"
                alt="Muscle Monster Gym Logo"
                width={48}
                height={48}
                className="rounded-lg"
              />
              <span className="font-bold text-lg text-foreground hidden sm:block">
                Muscle Monster Gym
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {["home", "about", "facilities", "membership", "gallery", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-muted-foreground hover:text-primary transition-colors capitalize"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-card border-t border-border">
            <div className="px-4 py-4 flex flex-col gap-4">
              {["home", "about", "facilities", "membership", "gallery", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-muted-foreground hover:text-primary transition-colors capitalize text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
        <div className="absolute inset-0">
          <Image
            src="/hero-bg.jpg"
            alt="Gym Background"
            fill
            className="object-cover brightness-[0.3]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight text-balance">
            Build Your Body With{" "}
            <span className="text-primary">Muscle Monster Gym</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transform your physique with our world-class facilities and expert trainers
          </p>
          <Button
            size="lg"
            onClick={() => scrollToSection("membership")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/25"
          >
            Join Now
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-xl group-hover:bg-primary/30 transition-all duration-500" />
              <Image
                src="/gym-1.jpg"
                alt="About Muscle Monster Gym"
                width={600}
                height={400}
                className="relative rounded-2xl w-full h-auto transform group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                About <span className="text-primary">Us</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Welcome to <strong className="text-foreground">Muscle Monster Gym</strong> — your ultimate destination for fitness excellence. 
                We are a modern unisex gym equipped with professional-grade equipment designed to help you achieve your fitness goals.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Whether you&apos;re a beginner starting your fitness journey or an experienced athlete looking to push your limits, 
                our state-of-the-art facility and expert trainers are here to support you every step of the way.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-card border border-border rounded-lg px-6 py-4 transform hover:scale-105 hover:border-primary transition-all duration-300">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-muted-foreground">Happy Members</div>
                </div>
                <div className="bg-card border border-border rounded-lg px-6 py-4 transform hover:scale-105 hover:border-primary transition-all duration-300">
                  <div className="text-3xl font-bold text-primary">10+</div>
                  <div className="text-muted-foreground">Expert Trainers</div>
                </div>
                <div className="bg-card border border-border rounded-lg px-6 py-4 transform hover:scale-105 hover:border-primary transition-all duration-300">
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-muted-foreground">Gym Access</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="py-20 px-4 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our <span className="text-primary">Facilities</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              World-class equipment and amenities to power your transformation
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <Card
                key={index}
                className="bg-card border-border group hover:border-primary transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10"
                style={{ perspective: "1000px" }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <facility.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-card-foreground">{facility.title}</h3>
                  <p className="text-muted-foreground">{facility.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section id="membership" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Membership <span className="text-primary">Plan</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            Start your fitness journey today with our affordable membership
          </p>

          <Card className="bg-card border-border relative overflow-hidden group hover:border-primary transition-all duration-500 transform hover:scale-[1.02]">
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-semibold">
              BEST VALUE
            </div>
            <CardContent className="p-8 sm:p-12">
              <div className="mb-8">
                <span className="text-5xl sm:text-6xl font-bold text-foreground">₹500</span>
                <span className="text-muted-foreground text-xl">/month</span>
              </div>

              <ul className="text-left max-w-md mx-auto mb-10 space-y-4">
                {[
                  "Full access to all gym equipment",
                  "Weight training & cardio zone",
                  "Locker room facilities",
                  "Expert trainer guidance",
                  "Flexible workout timings",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                onClick={handleUPIPayment}
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-12 py-6 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/25"
              >
                Pay with UPI
              </Button>
              <p className="text-muted-foreground text-sm mt-4">
                UPI ID: 9625356627-2@ybl
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our <span className="text-primary">Gallery</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Take a tour of our premium fitness facility
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-2xl"
                style={{ perspective: "1000px" }}
                onClick={() => setActiveImage(activeImage === index ? null : index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover transform group-hover:scale-110 group-hover:rotate-1 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-foreground font-semibold">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Contact <span className="text-primary">Us</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Get in touch with us for any queries or visit our gym
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card className="bg-card border-border group hover:border-primary transition-all duration-300">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-card-foreground mb-1">Phone</h3>
                    <a href="tel:9625356627" className="text-muted-foreground hover:text-primary transition-colors">
                      9625356627
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border group hover:border-primary transition-all duration-300">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-card-foreground mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      House no. 258, D-Block, 15 futa Road,<br />
                      Rajeev Nagar, Begumpur, Delhi-86
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Button
                onClick={handleWhatsApp}
                size="lg"
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white text-lg py-6 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <MessageCircle className="w-6 h-6 mr-2" />
                Chat on WhatsApp
              </Button>
            </div>

            {/* Google Map */}
            <div className="relative rounded-2xl overflow-hidden h-[400px] lg:h-auto border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.8823553767685!2d77.1016234!3d28.6855068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03c2e61c71b1%3A0x3c2c5f9a6c0d3a1f!2sBegumpur%2C%20Delhi%2C%20110086!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Muscle Monster Gym Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Image
              src="/logo.jpg"
              alt="Muscle Monster Gym Logo"
              width={48}
              height={48}
              className="rounded-lg"
            />
            <span className="font-bold text-xl text-foreground">Muscle Monster Gym</span>
          </div>
          <p className="text-muted-foreground mb-6">
            Build Your Body. Transform Your Life.
          </p>
          <div className="flex justify-center gap-6 mb-8">
            {["home", "about", "facilities", "membership", "gallery", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-muted-foreground hover:text-primary transition-colors capitalize text-sm"
              >
                {item}
              </button>
            ))}
          </div>
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Muscle Monster Gym. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Fixed WhatsApp Button */}
      <button
        onClick={handleWhatsApp}
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </button>
    </main>
  )
}
