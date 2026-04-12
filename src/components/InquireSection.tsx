import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const InquireSection = () => {
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
    const eventType = data.get("eventType") as string;
    const message = data.get("message") as string;

    if (!name.trim() || !email.trim() || !message.trim()) {
      toast({ title: "Please fill in all required fields.", variant: "destructive" });
      return;
    }

    setSending(true);

    // mailto fallback — opens the user's email client with pre-filled fields
    const subject = encodeURIComponent(`Event Inquiry from ${name} — ${eventType || "General"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nEvent Type: ${eventType}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:hello@eclatevents.com?subject=${subject}&body=${body}`;

    setSending(false);
    toast({ title: "Your email client has been opened!", description: "Please send the pre-filled message." });
    form.reset();
  };

  return (
    <section id="inquire" className="py-32 px-6 lg:px-12">
      <div ref={ref} className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-secondary mb-4 font-body">Get In Touch</p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground">
            Let&apos;s Create <span className="italic">Together</span>
          </h2>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-body block mb-3">
                Name *
              </label>
              <input
                name="name"
                type="text"
                required
                className="w-full bg-transparent border-b border-border pb-3 font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-secondary transition-colors duration-300"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-body block mb-3">
                Email *
              </label>
              <input
                name="email"
                type="email"
                required
                className="w-full bg-transparent border-b border-border pb-3 font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-secondary transition-colors duration-300"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-body block mb-3">
              Event Type
            </label>
            <select
              name="eventType"
              className="w-full bg-transparent border-b border-border pb-3 font-body text-foreground focus:outline-none focus:border-secondary transition-colors duration-300"
            >
              <option value="">Select an event type</option>
              <option value="Wedding">Wedding</option>
              <option value="Corporate">Corporate Event</option>
              <option value="Private Party">Private Party</option>
              <option value="Destination">Destination Event</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-body block mb-3">
              Message *
            </label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full bg-transparent border-b border-border pb-3 font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-secondary transition-colors duration-300 resize-none"
              placeholder="Tell us about your event vision..."
            />
          </div>

          <div className="text-center pt-4">
            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center gap-3 px-12 py-4 bg-primary text-primary-foreground text-sm tracking-[0.2em] uppercase font-body hover:bg-teal-dark transition-colors duration-500 disabled:opacity-50"
            >
              {sending ? "Sending..." : "Send Inquiry"}
              <Send size={16} />
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default InquireSection;
