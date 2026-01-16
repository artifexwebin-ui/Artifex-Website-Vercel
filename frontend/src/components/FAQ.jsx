import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
const faqs = [
  {
    question: "How much does a dental website cost in India?",
    answer: "We offer tailored packages for Indian dentists, ranging from basic profiles to advanced SEO-ready sites. Since every practice is unique, please contact us for a quote that fits your specific needs."
  },
  {
    question: "Do you help with Google Maps and Local SEO?",
    answer: "Absolutely. For Indian clinics, appearing on 'dentist near me' searches is crucial. We optimize your Google Business Profile to ensure local patients find you easily."
  },
  {
    question: "Can patients book appointments via WhatsApp?",
    answer: "Yes! We integrate a direct WhatsApp booking feature, which is the most popular way for patients in India to connect with doctors."
  },
  {
    question: "Will the website work on mobile phones?",
    answer: "Yes. Over 80% of patients use mobile phones to search for doctors. Our designs are 100% mobile-responsive and load fast on all networks."
  },
  {
    question: "Do you provide support after the site is live?",
    answer: "Yes, we offer ongoing AMC (Annual Maintenance) support to handle updates, security, and changes so you can focus on your patients."
  }
];
const FAQ = () => {
  return <section id="faq" className="py-10 bg-surface-dark"><div className="container mx-auto px-6"><motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6 }}
    className="text-center mb-6"
  ><h2 className="text-3xl md:text-4xl font-medium text-surface-dark-foreground">
      Frequently Asked <span className="font-serif italic">Questions</span></h2></motion.div><motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-3xl mx-auto"
      ><Accordion type="single" collapsible className="space-y-4">{faqs.map((faq, index) => <AccordionItem
        key={index}
        value={`item-${index}`}
        className="border-b border-surface-dark-muted/30"
      ><AccordionTrigger className="text-surface-dark-foreground hover:no-underline text-left py-6">{faq.question}</AccordionTrigger><AccordionContent className="text-surface-dark-muted pb-6">{faq.answer}</AccordionContent></AccordionItem>)}</Accordion></motion.div></div></section>;
};

export default FAQ;
