'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="bg-white shadow-md rounded-lg overflow-hidden"
      initial={false}
      animate={{ backgroundColor: isOpen ? "#f0f9ff" : "#ffffff" }}
      transition={{ duration: 0.3 }}
    >
      <button
        className="w-full text-left p-6 focus:outline-none flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xl font-semibold">{question}</span>
        <motion.div
          initial={false}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="p-6 pt-0 text-gray-600">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQPage = () => {
  const faqs = [
    {
      question: "Why does concrete crack?",
      answer: "Concrete cracks for various reasons, including shrinkage during curing, temperature changes, heavy loads, and soil movement. While some cracking is normal, proper mix design, reinforcement, and curing techniques can minimize it."
    },
    {
      question: "How long does asphalt typically last?",
      answer: "With proper maintenance, a well-installed asphalt surface can last 20-30 years. Regular seal coating, crack filling, and prompt repairs can significantly extend its lifespan."
    },
    {
      question: "What's the difference between concrete and asphalt?",
      answer: "Concrete is made from cement, water, and aggregates, while asphalt is a mixture of bitumen and aggregates. Concrete is generally more durable and long-lasting, while asphalt is more flexible and easier to repair."
    },
    {
      question: "Why does asphalt get soft in hot weather?",
      answer: "Asphalt contains bitumen, which softens when heated. This characteristic allows asphalt to be more flexible and resist cracking in cold weather, but it can lead to softening and rutting in extreme heat."
    },
    {
      question: "How soon can I drive on new concrete or asphalt?",
      answer: "For concrete, it's best to wait at least 7 days before driving on it, though it continues to cure for up to 28 days. Asphalt can typically be driven on within 24-48 hours after installation, but it may take up to 30 days to fully cure."
    },
    {
      question: "Can concrete be colored?",
      answer: "Yes! Concrete can be colored through various methods, including integral color mixed into the concrete, color hardeners applied to the surface, or stains and dyes applied after curing. This allows for a wide range of aesthetic options."
    },
    {
      question: "Is asphalt environmentally friendly?",
      answer: "Asphalt is one of the most recycled materials in the construction industry. Old asphalt can be milled, remixed, and reused in new pavements, making it a relatively sustainable option when properly managed."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Frequently Asked Questions
      </motion.h1>
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </motion.div>
    </div>
  );
};

export default FAQPage;