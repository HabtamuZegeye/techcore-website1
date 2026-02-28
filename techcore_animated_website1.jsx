"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Cloud, Network, Code, Globe } from "lucide-react";

export default function TechCoreWebsite() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#0A1F44] text-white font-sans scroll-smooth">

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#06142D]/80 backdrop-blur-md z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-[#1E90FF]">TechCore</h1>
          <div className="hidden md:flex gap-8 text-gray-300">
            <button onClick={() => scrollToSection("home")} className="hover:text-white transition">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="hover:text-white transition">
              About
            </button>
            <button onClick={() => scrollToSection("services")} className="hover:text-white transition">
              Services
            </button>
            <button onClick={() => scrollToSection("contact")} className="hover:text-white transition">
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden pt-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="z-10"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Securing the Future. <br /> Powering Digital Transformation.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Enterprise-grade cybersecurity, cloud, and IT infrastructure solutions for businesses worldwide.
          </p>

          <div className="flex gap-4 justify-center">
            <button className="bg-[#1E90FF] hover:bg-blue-600 rounded-2xl px-6 py-3 text-lg transition">
              Request Consultation
            </button>
            <button className="border border-white rounded-2xl px-6 py-3 text-lg hover:bg-white hover:text-[#0A1F44] transition">
              Explore Services
            </button>
          </div>
        </motion.div>

        <motion.div
          className="absolute w-96 h-96 bg-[#1E90FF] rounded-full blur-3xl opacity-30"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-[#0F2A5F] text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-6"
        >
          About TechCore Digital Solutions PLC
        </motion.h2>

        <p className="max-w-3xl mx-auto text-gray-300 text-lg">
          TechCore Digital Solutions PLC delivers secure, scalable, and high-performance IT solutions globally.
          We specialize in cybersecurity, Microsoft 365, cloud services, and enterprise network infrastructure.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-[#0A1F44]">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <Shield size={40} />, title: "Cybersecurity" },
            { icon: <Cloud size={40} />, title: "Cloud & Microsoft 365" },
            { icon: <Network size={40} />, title: "Network Infrastructure" },
            { icon: <Code size={40} />, title: "Software Development" },
          ].map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="bg-[#112D6B] rounded-2xl shadow-xl text-center p-6">
                <div className="mb-4 text-[#1E90FF] flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-20 px-6 bg-[#0F2A5F] text-center">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
          <Globe size={60} className="mx-auto text-[#1E90FF] mb-6" />
          <h2 className="text-3xl font-bold mb-4">Global Reach</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Serving enterprises, governments, NGOs, and financial institutions across international markets
            with world-class digital solutions.
          </p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-[#0A1F44] text-center">
        <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
        <p className="text-gray-300 mb-8">
          Partner with TechCore to secure and transform your digital future.
        </p>
        <button className="bg-[#1E90FF] hover:bg-blue-600 rounded-2xl px-8 py-4 text-lg transition">
          Contact Us
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-[#06142D] text-gray-400 py-6 text-center">
        © {new Date().getFullYear()} TechCore Digital Solutions PLC. All Rights Reserved.
      </footer>
    </div>
  );
}