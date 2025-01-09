"use client";

import { Button } from "components/ui/button";
import { Input } from "components/ui/input";
import { Textarea } from "components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "components/ui/select";
import { Calendar } from "components/ui/calendar";
import { DatePicker } from "components/ui/date-picker";
import { Popover, PopoverContent, PopoverTrigger } from "components/ui/popover";

export default function ContactPage() {
  return (
    <div className="min-h-[90vh] flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto w-full">
        <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8">
          Contact Us
        </h1>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <Input placeholder="First Name" />
            <Input placeholder="Last Name" />
            <Input placeholder="Email" type="email" />
            <Input placeholder="Phone" type="tel" />
          </div>
          <div className="space-y-6">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="concrete">Concrete</SelectItem>
                <SelectItem value="asphalt">Asphalt</SelectItem>
                <SelectItem value="resurfacing">Resurfacing</SelectItem>
              </SelectContent>
            </Select>
            <DatePicker />
            <Textarea placeholder="Message" className="min-h-[200px]" />
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
