import { motion, AnimatePresence } from "framer-motion";
import {
  useEffect,
  useState,
  useCallback,
  memo,
} from "react";
import {
  X,
  MessageCircle,
  Send,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

interface ConsultationPopupProps {
  show: boolean;
}

const ConsultationPopup = memo(
  ({ show }: ConsultationPopupProps) => {
    const { toast } = useToast();

    const [isOpen, setIsOpen] =
      useState(false);

    const [hasClosed, setHasClosed] =
      useState(false);

    const [sending, setSending] =
      useState(false);

    // Auto open after 3 sec
    useEffect(() => {
      if (!show || hasClosed) return;

      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 3000);

      return () => clearTimeout(timer);
    }, [show, hasClosed]);

    // CTA trigger
    useEffect(() => {
      const handler = () => {
        setIsOpen(true);
      };

      window.addEventListener(
        "open-consultation",
        handler
      );

      return () => {
        window.removeEventListener(
          "open-consultation",
          handler
        );
      };
    }, []);

    const handleClose = useCallback(() => {
      setIsOpen(false);
      setHasClosed(true);
    }, []);

    const handleSubmit = async (
      e: React.FormEvent<HTMLFormElement>
    ) => {
      e.preventDefault();

      const form = e.currentTarget;

      const data = new FormData(form);

      const name = (
        data.get("name") as string
      )?.trim();

      const phone = (
        data.get("phone") as string
      )?.trim();

      const email = (
        data.get("email") as string
      )?.trim();

      if (!name || !phone || !email) {
        toast({
          title:
            "Please fill in all required fields.",
          variant: "destructive",
        });

        return;
      }

      setSending(true);

      try {
        await emailjs.send(
          "service_zebe7mk",
          "template_uiyecpu",
          {
            name,
            phone,
            email,
            eventType:
              "Free Consultation",
            eventDate:
              "Not Provided",
            venue: "Not Provided",
            budget: "Not Provided",
            message:
              "User requested a free consultation.",
          },
          "Kdmq11Z41cz4KD-xp"
        );

        toast({
          title:
            "Consultation Request Sent!",
          description:
            "We will get back to you soon.",
        });

        form.reset();
        handleClose();
      } catch (error) {
        console.error(error);

        toast({
          title:
            "Failed to send request",
          description:
            "Please try again later.",
          variant: "destructive",
        });
      } finally {
        setSending(false);
      }
    };

    return (
      <>
        {/* Popup */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.2,
                }}
                className="fixed inset-0 z-[9998] bg-black/40"
                onClick={handleClose}
              />

              {/* Modal */}
              <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.96,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.96,
                    y: 10,
                  }}
                  transition={{
                    duration: 0.22,
                    ease: "easeOut",
                  }}
                  className="relative w-full max-w-lg bg-white p-8 shadow-2xl will-change-transform"
                >
                  {/* Close */}
                  <button
                    onClick={handleClose}
                    className="absolute right-5 top-5 text-black/40 transition-colors hover:text-black"
                  >
                    <X
                      size={18}
                      strokeWidth={1.7}
                    />
                  </button>

                  {/* Header */}
                  <div className="mb-8 text-center">
                    <p className="mb-3 font-body text-[10px] uppercase tracking-[0.35em] text-secondary">
                      Sankalpa Events
                    </p>

                    <h2 className="font-heading text-3xl font-light text-foreground">
                      Free Consultation
                    </h2>

                    <p className="mt-3 font-body text-sm text-muted-foreground">
                      Tell us about your
                      event and we'll get in
                      touch.
                    </p>
                  </div>

                  {/* Form */}
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="Your Full Name"
                      className="w-full border-b border-border bg-transparent pb-3 text-sm outline-none transition-colors focus:border-secondary"
                    />

                    <input
                      name="phone"
                      type="tel"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full border-b border-border bg-transparent pb-3 text-sm outline-none transition-colors focus:border-secondary"
                    />

                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="w-full border-b border-border bg-transparent pb-3 text-sm outline-none transition-colors focus:border-secondary"
                    />

                    <button
                      type="submit"
                      disabled={sending}
                      className="flex items-center gap-2 bg-primary px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-primary-foreground transition-all hover:bg-teal-dark disabled:opacity-50"
                    >
                      {sending
                        ? "Sending..."
                        : "Get Consultation"}

                      <Send size={14} />
                    </button>
                  </form>
                </motion.div>
              </div>
            </>
          )}
        </AnimatePresence>

        {/* Floating Button */}
        {!isOpen && show && (
          <motion.button
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            whileTap={{ scale: 0.96 }}
            onClick={() =>
              setIsOpen(true)
            }
            className="fixed bottom-6 right-6 z-[9997] flex items-center gap-2 bg-primary px-5 py-3 text-white shadow-lg transition-colors hover:bg-teal-dark"
          >
            <MessageCircle
              size={18}
              strokeWidth={1.8}
            />

            <span className="text-[11px] uppercase tracking-[0.15em]">
              Free Consultation
            </span>
          </motion.button>
        )}
      </>
    );
  }
);

ConsultationPopup.displayName =
  "ConsultationPopup";

export default ConsultationPopup;
