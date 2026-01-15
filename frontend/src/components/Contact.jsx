import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, ArrowRight } from "lucide-react";
import SuccessModal from "./SuccessModal";
const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    projectType: "",
    otherProjectType: ""
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Run fetch & a minimum timer in parallel for smooth UX
      const [response] = await Promise.all([
        fetch('http://localhost:5001/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        }),
        new Promise(resolve => setTimeout(resolve, 1500)) // Minimum 1.5s "processing" feel
      ]);

      const data = await response.json();

      if (data.success) {
        setShowSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "", projectType: "", otherProjectType: "" });
      } else {
        throw new Error(data.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      toast({
        title: "Transmission Failed",
        description: error.message || "We couldn't reach the server. Please try contacting us via WhatsApp or Email directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <section id="contact" className="py-10 md:py-12 bg-surface-dark relative overflow-hidden">{
    /* Background decorations */
  }<div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-surface-dark-foreground/5 to-transparent pointer-events-none" /><div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" /><div className="container mx-auto px-6 relative z-10"><div className="grid lg:grid-cols-2 gap-8 items-start">{
    /* Left Column: Info */
  }<motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  ><span className="text-sm uppercase tracking-widest text-primary mb-4 block font-medium">
        Contact Us
      </span><h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-surface-dark-foreground mb-6 leading-tight">
        Ready to Get More <br /><span className="text-surface-dark-muted font-serif italic">Patients Online?</span></h2><p className="text-lg text-surface-dark-muted mb-10 max-w-lg leading-relaxed">
        Have a project in mind or just want to explore what's possible?
        We're here to turn your vision into a digital reality.
      </p><div className="space-y-8"><div className="flex items-start gap-4"><div className="w-12 h-12 rounded-full bg-surface-dark-foreground/10 flex items-center justify-center shrink-0"><Mail className="w-5 h-5 text-surface-dark-foreground" /></div><div><h4 className="text-lg font-medium text-surface-dark-foreground mb-1">Email Us</h4><a href="mailto:artifexweb@gmail.com" className="text-surface-dark-muted hover:text-surface-dark-foreground transition-colors">
        artifexweb@gmail.com
      </a></div></div><div className="flex items-start gap-4"><div className="w-12 h-12 rounded-full bg-surface-dark-foreground/10 flex items-center justify-center shrink-0"><MapPin className="w-5 h-5 text-surface-dark-foreground" /></div><div><h4 className="text-lg font-medium text-surface-dark-foreground mb-1">Office</h4><p className="text-surface-dark-muted">
        Remote First <br />
        Available Worldwide
      </p></div></div></div><div className="mt-12 p-6 bg-surface-dark-foreground/5 rounded-2xl border border-surface-dark-foreground/10 inline-flex items-center gap-4"><div className="relative"><div className="w-3 h-3 bg-emerald-500 rounded-full" /><div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-75" /></div><p className="text-sm text-surface-dark-foreground font-medium">
        Currently accepting new projects <br /><span className="text-surface-dark-muted font-normal">Response time: Usually within 2 hours</span></p></div></motion.div>{
      /* Right Column: Form */
    }<motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-surface-dark/50 backdrop-blur-sm border border-surface-dark-foreground/10 p-8 md:p-10 rounded-3xl shadow-2xl relative"
    ><form onSubmit={handleSubmit} className="space-y-6"><div className="grid md:grid-cols-2 gap-6"><div className="space-y-2"><label htmlFor="name" className="text-sm font-medium text-surface-dark-foreground">
      Name
    </label><Input
        id="name"
        name="name"
        placeholder="Enter your name"
        value={formData.name}
        onChange={handleChange}
        className="h-12 bg-surface-dark-foreground/5 border-surface-dark-foreground/10 focus:border-surface-dark-foreground/30 transition-all font-light"
      /></div><div className="space-y-2"><label htmlFor="email" className="text-sm font-medium text-surface-dark-foreground">
        Email
      </label><Input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          className="h-12 bg-surface-dark-foreground/5 border-surface-dark-foreground/10 focus:border-surface-dark-foreground/30 transition-all font-light"
        /></div></div><div className="space-y-2"><label htmlFor="subject" className="text-sm font-medium text-surface-dark-foreground">
          Subject <span className="text-surface-dark-muted font-normal">(Optional)</span></label><Input
            id="subject"
            name="subject"
            placeholder="Enter your subject"
            value={formData.subject}
            onChange={handleChange}
            className="h-12 bg-surface-dark-foreground/5 border-surface-dark-foreground/10 focus:border-surface-dark-foreground/30 transition-all font-light"
          /></div>

        <div className="space-y-2">
          <label htmlFor="projectType" className="text-sm font-medium text-surface-dark-foreground">
            Project Type
          </label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="w-full h-12 px-3 rounded-md bg-surface-dark-foreground/5 border border-surface-dark-foreground/10 focus:border-surface-dark-foreground/30 transition-all font-light text-surface-dark-foreground [&>option]:bg-surface-dark [&>option]:text-surface-dark-foreground"
            style={{ colorScheme: "dark" }}
          >
            <option value="" className="bg-surface-dark text-surface-dark-foreground">Select a project type</option>
            <option value="Website Design" className="bg-surface-dark text-surface-dark-foreground">Website Design</option>
            <option value="Web Development" className="bg-surface-dark text-surface-dark-foreground">Web Development</option>
            <option value="E-Commerce" className="bg-surface-dark text-surface-dark-foreground">E-Commerce</option>
            <option value="Branding" className="bg-surface-dark text-surface-dark-foreground">Branding</option>
            <option value="Other" className="bg-surface-dark text-surface-dark-foreground">Other</option>
          </select>
          {formData.projectType === "Other" && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="pt-2"
            >
              <Input
                name="otherProjectType"
                placeholder="Please specify..."
                value={formData.otherProjectType}
                onChange={handleChange}
                className="h-12 bg-surface-dark-foreground/5 border-surface-dark-foreground/10 focus:border-surface-dark-foreground/30 transition-all font-light"
              />
            </motion.div>
          )}
        </div><div className="space-y-2"><label htmlFor="message" className="text-sm font-medium text-surface-dark-foreground">
          Message
        </label><Textarea
            id="message"
            name="message"
            placeholder="Enter your message...."
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="resize-none bg-surface-dark-foreground/5 border-surface-dark-foreground/10 focus:border-surface-dark-foreground/30 transition-all font-light pt-4"
          /></div><Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-14 text-base font-medium rounded-xl bg-surface-dark-foreground text-surface-dark hover:bg-surface-dark-foreground/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >{isSubmitting ? "Sending Request..." : <span className="flex items-center gap-2">
            Request Free Website Audit <ArrowRight className="w-4 h-4" /></span>}</Button>

        <p className="text-center text-xs text-surface-dark-muted mt-4">
          We respect your privacy. No spam.
        </p>

        <div className="flex justify-center mt-6">
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-sm text-surface-dark-muted hover:text-emerald-500 transition-colors flex items-center gap-2">
            <span>Chat on WhatsApp</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </form></motion.div></div></div>
    <SuccessModal isOpen={showSuccess} onClose={() => setShowSuccess(false)} />
  </section>;
};

export default Contact;
