'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers } from 'lucide-react';

interface MaterialType {
  name: string;
  description: string;
  specs: string[];
}

interface TabProps {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const Tab: React.FC<TabProps> = ({ icon, label, isActive, onClick }) => (
  <button
    className={`flex items-center px-4 py-2 rounded-t-lg ${
      isActive ? 'bg-white text-primary' : 'bg-gray-200 text-gray-600'
    }`}
    onClick={onClick}
  >
    {icon}
    <span className="ml-2">{label}</span>
  </button>
);

const MaterialCard: React.FC<MaterialType> = ({ name, description, specs }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="bg-white shadow-md rounded-lg p-6 mb-6"
  >
    <h3 className="text-xl font-semibold mb-2">{name}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <ul className="list-disc pl-5">
      {specs.map((spec, i) => (
        <li key={i} className="text-gray-700">{spec}</li>
      ))}
    </ul>
  </motion.div>
);

const TechnicalPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'concrete' | 'asphalt'>('concrete');
  const concreteTypes = [
    {
      name: "Portland Cement Concrete (PCC)",
      description: "Our standard high-strength concrete mix, suitable for most applications.",
      specs: [
        "Compressive Strength: 4,000 - 5,000 psi (28-day strength)",
        "Slump: 4 - 6 inches",
        "Air Content: 5 - 7%",
        "Water-Cement Ratio: 0.45 - 0.50"
      ]
    },
    {
      name: "High-Performance Concrete (HPC)",
      description: "Engineered for superior durability and strength in demanding environments.",
      specs: [
        "Compressive Strength: 6,000 - 10,000 psi (28-day strength)",
        "Slump: 6 - 8 inches (with superplasticizers)",
        "Air Content: 4 - 6%",
        "Water-Cement Ratio: < 0.40"
      ]
    },
    {
      name: "Fiber-Reinforced Concrete",
      description: "Enhanced with fibers for improved tensile strength and crack resistance.",
      specs: [
        "Fiber Type: Polypropylene or Steel",
        "Fiber Content: 0.1 - 1% by volume",
        "Compressive Strength: 4,500 - 6,000 psi (28-day strength)",
        "Flexural Strength: 650 - 800 psi"
      ]
    }
  ];

  const asphaltTypes = [
    {
      name: "Hot Mix Asphalt (HMA)",
      description: "Our standard asphalt mix for most paving applications.",
      specs: [
        "Binder Content: 4.5 - 6% by weight of mix",
        "Air Voids: 3 - 5%",
        "Voids in Mineral Aggregate (VMA): 13 - 16%",
        "Density: 94 - 97% of theoretical maximum density"
      ]
    },
    {
      name: "Stone Matrix Asphalt (SMA)",
      description: "High-performance mix for heavy traffic areas, offering improved durability and rut resistance.",
      specs: [
        "Binder Content: 6 - 7.5% by weight of mix",
        "Air Voids: 3 - 4%",
        "VMA: > 17%",
        "Fiber Content: 0.3 - 0.4% cellulose or mineral fiber"
      ]
    },
    {
      name: "Warm Mix Asphalt (WMA)",
      description: "Environmentally friendly mix produced and placed at lower temperatures.",
      specs: [
        "Production Temperature: 30-75°F lower than traditional HMA",
        "Binder Content: Similar to HMA",
        "Air Voids: 3 - 5%",
        "Compaction Temperature: 185 - 230°F"
      ]
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
        Technical Specifications
      </motion.h1>

      <div className="flex justify-center mb-6">
        <Tab
          icon={<Layers className="w-5 h-5" />}
          label="Concrete"
          isActive={activeTab === 'concrete'}
          onClick={() => setActiveTab('concrete')}
        />
        <Tab
          icon={<Layers className="w-5 h-5" />}
          label="Asphalt"
          isActive={activeTab === 'asphalt'}
          onClick={() => setActiveTab('asphalt')}
        />
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'concrete' && (
          <motion.section
            key="concrete"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-3xl font-semibold mb-6">Concrete Types</h2>
            {concreteTypes.map((type, index) => (
              <MaterialCard key={index} {...type} />
            ))}
          </motion.section>
        )}

        {activeTab === 'asphalt' && (
          <motion.section
            key="asphalt"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-3xl font-semibold mb-6">Asphalt Types</h2>
            {asphaltTypes.map((type, index) => (
              <MaterialCard key={index} {...type} />
            ))}
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TechnicalPage;