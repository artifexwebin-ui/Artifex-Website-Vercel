import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
const faqs = [
  {
    question: "How long does a dental website take?",
    answer: "Most custom dental websites are designed, developed, and launched within 2-4 weeks. We work efficiently to get your new site live without cutting corners on quality."
  },
  {
    question: "Will this help me get more patients?",
    answer: "Yes. We design with a 'conversion-first' approach. By highlighting your expertise, patient reviews, and making it easy to book appointments, your site will turn more visitors into booked patients."
  },
  {
    question: "Can you redesign my existing website?",
    answer: "Absolutely. We can audit your current site, identify what's not working, and rebuild it with a modern design and better structure while preserving your existing domain authority."
  },
  {
    question: "Do you provide support after launch?",
    answer: "Yes, we believe in long-term partnerships. We offer ongoing support packages to handle updates, security, and minor changes so you can focus on treating patients."
  },
  {
    question: "How much does a dental website usually cost?",
    answer: "Every practice is unique, but our packages typically start at $1,500. This includes custom design, mobile optimization, and local SEO setup. Contact us for a precise quote tailored to your needs."
  }
];
const FAQ = () => {
  return <section className="py-10 bg-surface-dark"><div className="container mx-auto px-6"><motion.div
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
