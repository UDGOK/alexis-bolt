"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DatePicker } from "@/components/ui/date-picker";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 text-gray-800 font-sans">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/images/alexis-logo-new.png"
              alt="Alexis Concrete & Asphalt Logo"
              width={300}
              height={150}
              className="mb-8"
            />
            <h1 className="text-5xl md:text-7xl font-bold text-primary mb-4">
              Contact Us
            </h1>
            <p className="text-3xl font-semibold mb-4">
              Call us: <span className="text-primary">918.861.6776</span>
            </p>
            <p className="text-xl text-gray-600 mb-8">
              We're here to answer any questions you may have about our services.
            </p>
            <div className="flex justify-center mb-8">
              <div className="rounded-lg overflow-hidden shadow-lg w-3/4">
                <video autoPlay loop muted playsInline className="w-full">
                  <source src="/videos/jumping-jack.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <form className="bg-white rounded-lg shadow-lg p-8">
              <div className="space-y-6">
                <Input placeholder="First Name" className="border-gray-300 focus:border-primary text-lg" />
                <Input placeholder="Last Name" className="border-gray-300 focus:border-primary text-lg" />
                <Input placeholder="Email" type="email" className="border-gray-300 focus:border-primary text-lg" />
                <Input placeholder="Phone" type="tel" className="border-gray-300 focus:border-primary text-lg" />
                <Select>
                  <SelectTrigger className="border-gray-300 focus:border-primary text-lg">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="concrete">Concrete</SelectItem>
                    <SelectItem value="asphalt">Asphalt</SelectItem>
                    <SelectItem value="resurfacing">Resurfacing</SelectItem>
                  </SelectContent>
                </Select>
                <DatePicker className="border-gray-300 focus:border-primary text-lg" />
                <Textarea placeholder="Message" className="min-h-[200px] border-gray-300 focus:border-primary text-lg" />
                <Button type="submit" className="w-full text-lg font-semibold py-3">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
