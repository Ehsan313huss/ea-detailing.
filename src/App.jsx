import { motion } from "framer-motion";
import { Car, Phone, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-black text-white p-4 flex justify-between items-center">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="text-xl font-bold"
        >
          EA Detailing
        </motion.div>
        <nav className="space-x-4">
          <Button variant="ghost" className="text-white">Home</Button>
          <Button variant="ghost" className="text-white">Services</Button>
          <Button variant="ghost" className="text-white">Contact</Button>
        </nav>
      </header>

      {/* Hero */}
      <section className="bg-black text-white text-center py-20">
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Premium Car Detailing
        </motion.h1>
        <p className="mb-6 text-lg">Bringing the shine back to your ride.</p>
        <Button className="bg-white text-black px-6 py-3 rounded-full">
          Book Now
        </Button>
      </section>

      {/* Services */}
      <section className="py-16 px-6 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <Card className="shadow-lg">
          <CardContent className="p-6 text-center">
            <Car className="mx-auto mb-4 h-12 w-12 text-black" />
            <h3 className="text-xl font-semibold mb-2">Exterior Wash</h3>
            <p>Deep clean to make your car shine like new.</p>
          </CardContent>
        </Card>
        <Card className="shadow-lg">
          <CardContent className="p-6 text-center">
            <Car className="mx-auto mb-4 h-12 w-12 text-black" />
            <h3 className="text-xl font-semibold mb-2">Interior Detail</h3>
            <p>Thorough interior cleaning for a fresh feel.</p>
          </CardContent>
        </Card>
        <Card className="shadow-lg">
          <CardContent className="p-6 text-center">
            <Car className="mx-auto mb-4 h-12 w-12 text-black" />
            <h3 className="text-xl font-semibold mb-2">Full Package</h3>
            <p>Complete detailing inside and out.</p>
          </CardContent>
        </Card>
      </section>

      {/* Contact */}
      <section className="bg-black text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
        <div className="flex justify-center space-x-6">
          <a href="tel:+123456789" className="flex items-center space-x-2">
            <Phone /> <span>Call Us</span>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            className="flex items-center space-x-2"
          >
            <Instagram /> <span>Instagram</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center p-4">
        © {new Date().getFullYear()} EA Detailing. All rights reserved.
      </footer>
    </div>
  );
}
