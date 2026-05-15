import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Phone, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ArabesqueCorner from "./ArabesqueCorner";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const phone = data.get("phone") as string;
    const eventType = data.get("eventType") as string;  
    const eventDate = data.get("eventDate") as string;
    const venue = data.get("venue") as string;
    const budget = data.get("budget") as string;
    const message = data.get("message") as string;

    if (!name.trim() || !email.trim() || !message.trim()) {
      toast({ title: "Please fill in all required fields.", variant: "destructive" });
      return;
    }

   setSending(true);

const templateParams = {
  name,
  email,
  phone,
  eventType,
  eventDate,
  venue,
  budget,
  message,
};

try {
  await emailjs.send(
  "service_zebe7mk",
  "template_s19kzbr",
  templateParams,
  "Kdmq11Z41cz4KD-xp"
);

  toast({
    title: "Message sent successfully!",
    description: "We will get back to you soon.",
  });

  form.reset();
} catch (error) {
  console.error(error);
  toast({
    title: "Failed to send message",
    description: "Please try again later.",
    variant: "destructive",
  });
} finally {
  setSending(false);
}
};

  const inputClass = "w-full bg-transparent border-b border-border pb-3 font-body font-normal text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-secondary transition-colors duration-300";
  const labelClass = "text-xs tracking-[0.2em] uppercase text-muted-foreground font-body font-bold block mb-3";

  return (
    <section id="contact" className="relative py-32 px-6 lg:px-12">
      <ArabesqueCorner />
      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-secondary mb-4 font-body font-medium">Get In Touch</p>
          <h2 className="font-heading text-4xl md:text-5xl font-medium text-foreground mb-4">
            Contact <span className="font-normal">Us</span>
          </h2>
          <p className="text-muted-foreground font-body font-normal">We would love to be a part of your special moments.</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }} className="space-y-8">
            {[
              { icon: Phone, label: "Phone", value: "+91 9900073564" },
              { icon: Mail, label: "Email", value: "hello@sankalpaevents.com" },
              { icon: MapPin, label: "Location", value: "Karnataka, India" },
              { icon: Clock, label: "Working Hours", value: "Mon – Sat | 9:00 AM – 7:00 PM" },
            ].map((item) => (
              <div key={item.label} className="flex gap-4 items-start">
                <item.icon className="w-5 h-5 text-secondary mt-1 shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-body font-bold mb-1">{item.label}</p>
                  <p className="text-foreground font-body font-normal">{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.3 }} className="lg:col-span-2 space-y-8">
            <div className="grid sm:grid-cols-2 gap-8">
              <div><label className={labelClass}>Name *</label><input name="name" type="text" required className={inputClass} placeholder="Your full name" /></div>
              <div><label className={labelClass}>Phone Number</label><input name="phone" type="tel" className={inputClass} placeholder="+91 XXXXX XXXXX" /></div>
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
              <div><label className={labelClass}>Email *</label><input name="email" type="email" required className={inputClass} placeholder="your@email.com" /></div>
              <div>
                <label className={labelClass}>Event Type</label>
                <select name="eventType" className={inputClass}>
                  <option value="">Select event type</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Engagement">Engagement & Reception</option>
                  <option value="Corporate">Corporate Event</option>
                  <option value="Concert">Concert & Live Show</option>
                  <option value="Workshop">Workshop & Seminar</option>
                  <option value="Conference">Conference & Exhibition</option>
                  <option value="Private">Private Celebration</option>
                  <option value="Cultural">Traditional & Cultural Event</option>
                  <option value="Housewarming">House Warming</option>
                  <option value="FlowerDecor">Flower Decor</option>
                  <option value="Catering">Catering</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
              <div><label className={labelClass}>Event Date</label><input name="eventDate" type="date" className={inputClass} /></div>
              <div><label className={labelClass}>Venue / Location</label><input name="venue" type="text" className={inputClass} placeholder="Preferred venue or city" /></div>
            </div>
            <div><label className={labelClass}>Budget</label><input name="budget" type="text" className={inputClass} placeholder="Approximate budget range" /></div>
            <div><label className={labelClass}>Message *</label><textarea name="message" rows={4} required className={`${inputClass} resize-none`} placeholder="Tell us about your event vision..." /></div>
            <div className="pt-4">
              <button type="submit" disabled={sending} className="inline-flex items-center gap-3 px-12 py-4 bg-primary text-primary-foreground text-sm tracking-[0.2em] uppercase font-body font-medium hover:bg-teal-dark transition-colors duration-500 disabled:opacity-50">
                {sending ? "Sending..." : "Send Inquiry"}<Send size={16} />
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
