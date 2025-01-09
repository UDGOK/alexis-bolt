"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DatePicker } from "@/components/ui/date-picker";
import { format } from "date-fns";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [date, setDate] = useState<Date>();
  const [service, setService] = useState("");

  const services = [
    "Concrete",
    "Asphalt", 
    "Building Erection",
    "Resurfacing"
  ];

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          service,
          dateNeeded: date ? format(date, "yyyy-MM-dd") : null
        }),
      });

      if (response.ok) {
        alert("Message sent successfully!");
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to send message");
    }
  }

  return (
    <div className="bg-black pt-32 min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Contact Form Section */}
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
            <h2 className="text-4xl font-light tracking-tight mb-8">
              Let's Build Together
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input 
                  name="name" 
                  placeholder="Your Name" 
                  required 
                  className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors"
                />
                <Input 
                  name="email" 
                  type="email" 
                  placeholder="Your Email" 
                  required
                  className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors"
                />
              </div>
              
              <Select onValueChange={setService} value={service}>
                <SelectTrigger className="bg-white/5 border-white/10 text-white/70 hover:bg-white/10">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent className="bg-black/90 border-white/10 backdrop-blur-sm">
                  {services.map(service => (
                    <SelectItem 
                      key={service} 
                      value={service}
                      className="text-white/70 hover:bg-white/10 focus:bg-white/10"
                    >
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <DatePicker className="[&_.popover-content]:bg-black/90 [&_.popover-content]:border-white/10 [&_.popover-content]:backdrop-blur-sm [&_.calendar]:bg-black/90 [&_.calendar]:text-white/70" />

              <Textarea 
                name="message" 
                placeholder="Your Message" 
                rows={5} 
                required
                className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors"
              />
              
              <Button 
                type="submit" 
                className="w-full bg-white/10 hover:bg-white/20 text-white/90 hover:text-white transition-all"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Company Info Section */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-light mb-6">Our Office</h3>
              <div className="space-y-4 text-white/70">
                <p>123 Construction Lane</p>
                <p>Tulsa, OK 74103</p>
                <p>Phone: (918) 555-1234</p>
                <p>Email: info@alexisconstruction.com</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-light mb-6">Business Hours</h3>
              <div className="space-y-4 text-white/70">
                <p>Monday - Friday: 8am - 6pm</p>
                <p>Saturday: 9am - 4pm</p>
                <p>Sunday: Closed</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
