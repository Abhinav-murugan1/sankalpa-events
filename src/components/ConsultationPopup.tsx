import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { X, MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
interface ConsultationPopupProps {
  show: boolean;
}

const ConsultationPopup = ({ show }: ConsultationPopupProps) => {
  const { toast } = useToast();

  const [isOpen, setIsOpen] = useState(false);
  const [hasClosed, setHasClosed] = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => {
  if (show && !hasClosed) {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }
}, [show, hasClosed]);

  const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  const form = e.currentTarget;

  const data = new FormData(form);

  const name = data.get("name") as string;
  const phone = data.get("phone") as string;
  const email = data.get("email") as string;

  if (!name.trim() || !phone.trim() || !email.trim()) {
    toast({
      title: "Please fill in all required fields.",
      variant: "destructive",
    });

    return;
  }

  setSending(true);

  const templateParams = {
    name,
    email,
    phone,
    eventType: "Free Consultation",
    eventDate: "Not Provided",
    venue: "Not Provided",
    budget: "Not Provided",
    message: "User requested a free consultation.",
  };

  try {
    await emailjs.send(
      "service_zebe7mk",
      "template_uiyecpu",
      templateParams,
      "Kdmq11Z41cz4KD-xp"
    );

    toast({
      title: "Consultation Request Sent!",
      description: "We will get back to you soon.",
    });

    form.reset();
    setIsOpen(false);
    setHasClosed(true);
  } catch (error) {
    console.error(error);

    toast({
      title: "Failed to send request",
      description: "Please try again later.",
      variant: "destructive",
    });
  } finally {
    setSending(false);
  }
};

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[9998] bg-black/30" />
      )}

      {/* Popup */}
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="relative w-full max-w-xl bg-white px-8 py-10 md:px-12 md:py-12 shadow-2xl"
          >
            {/* Close */}
            <button
              onClick={() => {
                setIsOpen(false);
                setHasClosed(true);
            }}
              className="absolute right-6 top-6 text-black/40 hover:text-black transition-colors duration-200"
            >
              <X size={18} strokeWidth={1.5} />
            </button>

            {/* Heading */}
            <div className="mb-10 text-center">
              <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-secondary font-body">
                Sankalpa Events
              </p>

              <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground">
                Free <span> Consultation</span>
              </h2>

              <p className="mt-4 text-sm text-muted-foreground font-body">
                Tell us about your event and we’ll get in touch.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="mb-3 block text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-body">
                  Name
                </label>

                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Your full name"
                  className="w-full border-b border-border bg-transparent pb-3 text-sm font-body text-foreground placeholder:text-muted-foreground/40 focus:border-secondary focus:outline-none transition-colors duration-200"
                />
              </div>

              <div>
                <label className="mb-3 block text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-body">
                  Phone Number
                </label>

                <input
                  name="phone"
                  type="tel"
                  required
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full border-b border-border bg-transparent pb-3 text-sm font-body text-foreground placeholder:text-muted-foreground/40 focus:border-secondary focus:outline-none transition-colors duration-200"
                />
              </div>

              <div>
                <label className="mb-3 block text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-body">
                  Email Address
                </label>

                <input
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="w-full border-b border-border bg-transparent pb-3 text-sm font-body text-foreground placeholder:text-muted-foreground/40 focus:border-secondary focus:outline-none transition-colors duration-200"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center gap-3 bg-primary px-10 py-4 text-[11px] uppercase tracking-[0.25em] text-primary-foreground font-body transition-colors duration-300 hover:bg-teal-dark disabled:opacity-50"
                >
                  {sending ? "Sending..." : "Get Consultation"}

                  <Send size={14} strokeWidth={1.5} />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      {/* Floating Bubble */}
      {!isOpen && show && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.45,
            ease: "easeOut",
        }}
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-[9997] flex items-center gap-2 bg-primary px-5 py-3 text-white shadow-lg transition-colors duration-200 hover:bg-teal-dark"
        >
          <MessageCircle size={18} strokeWidth={1.8} />

          <span className="text-[11px] uppercase tracking-[0.15em] font-body">
            Free Consultation
          </span>
        </motion.button>
      )}
    </>
  );
};

export default ConsultationPopup;
