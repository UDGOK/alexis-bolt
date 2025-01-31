'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

interface DownloadItem {
  title: string;
  description: string;
  imageUrl: string;
  downloadUrl: string;
}

const downloadItems: DownloadItem[] = [
  {
    title: 'Rebar Specification Guide',
    description: 'Comprehensive guide for rebar grades, sizes, and applications in concrete construction.',
    imageUrl: '/images/rebar-closeup.jpg',
    downloadUrl: '/downloads/rebar-specification-guide.pdf',
  },
  {
    title: 'Concrete Formwork Manual',
    description: 'Detailed instructions and best practices for concrete formwork design and installation.',
    imageUrl: '/images/concrete-formwork-construction.jpg',
    downloadUrl: '/downloads/concrete-formwork-manual.pdf',
  },
  {
    title: 'Rebar Estimating Sheet',
    description: 'Excel spreadsheet for calculating rebar quantities for various concrete structures.',
    imageUrl: '/images/rebar-installation.jpg',
    downloadUrl: '/downloads/rebar-estimating-sheet.xlsx',
  },
  {
    title: 'Concrete Mix Design Calculator',
    description: 'Interactive tool for determining optimal concrete mix proportions based on project requirements.',
    imageUrl: '/images/concrete-pouring.jpg',
    downloadUrl: '/downloads/concrete-mix-calculator.xlsx',
  },
];

const DownloadCard: React.FC<DownloadItem> = ({ title, description, imageUrl, downloadUrl }) => (
  <motion.div
    className="bg-white rounded-lg shadow-md overflow-hidden"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <Image src={imageUrl} alt={title} width={400} height={200} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a
        href={downloadUrl}
        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        download
      >
        <Download className="w-5 h-5 mr-2" />
        Download
      </a>
    </div>
  </motion.div>
);

const DownloadsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Technical Downloads
      </motion.h1>
      <p className="text-center text-gray-600 mb-12">
        Access our collection of technical documents, guides, and tools for concrete and rebar applications.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {downloadItems.map((item, index) => (
          <DownloadCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default DownloadsPage;