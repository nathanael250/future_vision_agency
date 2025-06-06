"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowUp,
  Mail,
  Phone,
  MapPin,
  Send,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Heart,
} from "lucide-react"

const Footer = () => {
  const [showButton, setShowButton] = useState(false)
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubscribed(true)
    setEmail("")
    setTimeout(() => setSubscribed(false), 3000)
  }

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about-section" },
    { name: "Competitions", href: "#competitions-section" },
    { name: "Team", href: "#team-section" },
    { name: "Support Us", href: "#support-section" },
    { name: "Contact", href: "#contact-section" },
  ]

  const socialLinks = [
    { name: "Instagram", icon: <Instagram className="w-5 h-5" />, href: "#instagram" },
    { name: "Facebook", icon: <Facebook className="w-5 h-5" />, href: "#facebook" },
    { name: "Twitter", icon: <Twitter className="w-5 h-5" />, href: "#twitter" },
    { name: "LinkedIn", icon: <Linkedin className="w-5 h-5" />, href: "#linkedin" },
    { name: "YouTube", icon: <Youtube className="w-5 h-5" />, href: "#youtube" },
  ]

  return (
    <>
      <footer className="relative bg-gradient-to-br from-[#0d46d7] via-[#1e5bff] to-[#0d46d7] text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#EE7A3F]/10 rounded-full blur-3xl translate-x-40 translate-y-40"></div>

        <div className="relative z-10">
          {/* Main Footer Content */}
          <div className="container mx-auto px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {/* Brand Section */}
              <motion.div
                className="lg:col-span-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="mb-6">
                  <h3 className="text-3xl font-bold mb-4">FVA</h3>
                  <p className="text-blue-100 leading-relaxed">
                    Empowering the next generation of African athletes through inline speed skating. Building champions,
                    fostering community, and inspiring excellence.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-blue-100">
                  <Heart className="w-4 h-4 text-[#EE7A3F]" />
                  <span className="text-sm">Made with passion in Africa</span>
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-bold mb-6">Quick Links</h4>
                <ul className="space-y-3">
                  {quickLinks.map((link, idx) => (
                    <li key={idx}>
                      <motion.a
                        href={link.href}
                        className="text-blue-100 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                        whileHover={{ x: 5 }}
                      >
                        <span className="w-1 h-1 bg-[#EE7A3F] rounded-full group-hover:w-2 transition-all duration-300"></span>
                        {link.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-bold mb-6">Contact Info</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-white/10 rounded-lg">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-blue-100 text-sm">Email</p>
                      <a
                        href="mailto:info@futurevisionagency.com"
                        className="text-white hover:text-[#EE7A3F] transition-colors"
                      >
                        info@futurevisionagency.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-white/10 rounded-lg">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-blue-100 text-sm">Phone</p>
                      <a href="tel:+250788123456" className="text-white hover:text-[#EE7A3F] transition-colors">
                        +250 788 123 456
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-white/10 rounded-lg">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-blue-100 text-sm">Location</p>
                      <p className="text-white">Kigali Heights, KG 7 Ave, Kigali, Rwanda</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Newsletter */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-bold mb-6">Stay Updated</h4>
                <p className="text-blue-100 mb-6">
                  Subscribe to our newsletter for the latest updates on competitions, events, and athlete achievements.
                </p>
                <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-[#EE7A3F] focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  <motion.button
                    type="submit"
                    className="w-full bg-[#EE7A3F] hover:bg-[#ff8c42] text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {subscribed ? "Subscribed!" : "Subscribe"}
                    <Send className="w-4 h-4" />
                  </motion.button>
                </form>
                {subscribed && (
                  <motion.p
                    className="text-green-300 text-sm mt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    Thank you for subscribing!
                  </motion.p>
                )}
              </motion.div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/10">
            <div className="container mx-auto px-6 py-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                {/* Copyright */}
                <div className="text-center md:text-left">
                  <p className="text-blue-100">
                    &copy; {new Date().getFullYear()} Future Vision Agency. All rights reserved.
                  </p>
                  <p className="text-blue-200 text-sm mt-1">
                    Empowering athletes, building champions, inspiring excellence.
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-4">
                  <span className="text-blue-100 text-sm mr-2">Follow us:</span>
                  {socialLinks.map((social, idx) => (
                    <motion.a
                      key={idx}
                      href={social.href}
                      className="p-2 bg-white/10 hover:bg-[#EE7A3F] rounded-lg text-white transition-all duration-300 group"
                      whileHover={{ y: -3, scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showButton && (
          <motion.button
            className="fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-[#0d46d7] to-[#1e5bff] hover:from-[#EE7A3F] hover:to-[#ff8c42] text-white rounded-full shadow-2xl transition-all duration-300 group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            initial={{ opacity: 0, scale: 0, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 100 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="w-6 h-6 group-hover:animate-bounce" />
            <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}

export default Footer
