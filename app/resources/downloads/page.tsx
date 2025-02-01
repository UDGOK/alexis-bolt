'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import CalculatorIcon from '@/components/CalculatorIcon';
import Link from 'next/link';

interface DownloadItem {
  title: string;
  description: string;
  icon: 'rebar' | 'concrete' | 'estimating' | 'materials';
  downloadUrl: string;
}

const downloadItems: DownloadItem[] = [
  {
    title: 'Rebar Specification Guide',
    description: 'Comprehensive guide for rebar grades, sizes, and applications in concrete construction by CMC.',
    icon: 'rebar',
    downloadUrl: '/api/download-pdf',
  },
  {
    title: 'Concrete Formwork Manual',
    description: 'Detailed instructions and best practices for concrete formwork design and installation (ACI 347).',
    icon: 'concrete',
    downloadUrl: '/api/download-concrete-manual',
  },
  {
    title: 'Rebar Estimating Sheet',
    description: 'Excel spreadsheet for calculating rebar quantities for various concrete structures.',
    icon: 'estimating',
    downloadUrl: '/api/download-rebar-sheet',
  },
  {
    title: 'Concrete Mix Design Calculator',
    description: 'Interactive tool for determining optimal concrete mix proportions based on project requirements.',
    icon: 'materials',
    downloadUrl: '/resources/concrete-mix-calculator',
  },
];

const DownloadCard: React.FC<DownloadItem> = ({ title, description, icon, downloadUrl }) => {
  const isLink = downloadUrl.startsWith('/resources/');
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-4 flex flex-col items-center">
        <CalculatorIcon name={icon} className="w-24 h-24 mb-4 text-primary" large />
        <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
        <p className="text-gray-600 mb-4 text-center">{description}</p>
        {isLink ? (
          <Link
            href={downloadUrl}
            className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
          >
            <ArrowRight className="w-5 h-5 mr-2" />
            Open Calculator
          </Link>
        ) : (
          <a
            href={downloadUrl}
            className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
            download
          >
            <Download className="w-5 h-5 mr-2" />
            Download
          </a>
        )}
      </div>
    </motion.div>
  );
};

const DownloadsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1
        className="text-5xl font-bold mb-8 text-center text-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Technical Downloads
      </motion.h1>
      <p className="text-center text-gray-600 mb-12 text-xl max-w-3xl mx-auto">
        Access our collection of technical documents, guides, and tools for concrete and rebar applications.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        {downloadItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <DownloadCard {...item} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DownloadsPage;