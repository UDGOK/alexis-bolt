'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ConcreteMixCalculator: React.FC = () => {
  const [compressiveStrength, setCompressiveStrength] = useState<number>(30);
  const [slump, setSlump] = useState<number>(75);
  const [aggregateSize, setAggregateSize] = useState<number>(20);
  const [cementType, setCementType] = useState<string>('Type I');
  const [exposureClass, setExposureClass] = useState<string>('F0');
  const [airEntrainment, setAirEntrainment] = useState<string>('No');
  const [aggregateType, setAggregateType] = useState<string>('Crushed');
  const [fineModulus, setFineModulus] = useState<number>(2.7);
  const [specificGravityCement, setSpecificGravityCement] = useState<number>(3.15);
  const [specificGravityCA, setSpecificGravityCA] = useState<number>(2.7);
  const [specificGravityFA, setSpecificGravityFA] = useState<number>(2.6);
  const [absorptionCA, setAbsorptionCA] = useState<number>(0.5);
  const [absorptionFA, setAbsorptionFA] = useState<number>(0.7);
  const [moistureCA, setMoistureCA] = useState<number>(0);
  const [moistureFA, setMoistureFA] = useState<number>(0);
  const [result, setResult] = useState<string | null>(null);

  const calculateMix = () => {
    // This calculation is based on the ACI method, but simplified for demonstration purposes
    const waterCementRatio = 0.5 - (compressiveStrength - 30) * 0.005;
    const cementContent = 350 + (compressiveStrength - 30) * 5;
    const waterContent = cementContent * waterCementRatio;

    let airContent = 0;
    if (airEntrainment === 'Yes') {
      airContent = 6 - (aggregateSize - 10) * 0.1;
    }

    const volumeOfCement = cementContent / (specificGravityCement * 1000);
    const volumeOfWater = waterContent / 1000;
    const volumeOfAir = airContent / 100;

    const volumeOfAggregates = 1 - volumeOfCement - volumeOfWater - volumeOfAir;

    const coarseAggregateContent = volumeOfAggregates * 0.6 * specificGravityCA * 1000;
    const fineAggregateContent = volumeOfAggregates * 0.4 * specificGravityFA * 1000;

    const adjustedWaterContent = waterContent +
      (coarseAggregateContent * (absorptionCA - moistureCA) / 100) +
      (fineAggregateContent * (absorptionFA - moistureFA) / 100);

    setResult(`
      Cement: ${cementContent.toFixed(2)} kg/m3
      Water: ${adjustedWaterContent.toFixed(2)} kg/m3
      Coarse Aggregate: ${coarseAggregateContent.toFixed(2)} kg/m3
      Fine Aggregate: ${fineAggregateContent.toFixed(2)} kg/m3
      Air Content: ${airContent.toFixed(2)}%
      Water-Cement Ratio: ${waterCementRatio.toFixed(2)}
    `);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1
        className="text-5xl font-bold mb-8 text-center text-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Concrete Mix Design Calculator
      </motion.h1>
      <p className="text-center text-gray-600 mb-12 text-xl max-w-3xl mx-auto">
        Calculate your concrete mix design based on the ACI method. Enter the required parameters below.
      </p>
      <motion.div
        className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="compressiveStrength">
              Compressive Strength (MPa)
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="compressiveStrength"
              type="number"
              value={compressiveStrength}
              onChange={(e) => setCompressiveStrength(Number(e.target.value))}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="slump">
              Slump (mm)
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="slump"
              type="number"
              value={slump}
              onChange={(e) => setSlump(Number(e.target.value))}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="aggregateSize">
              Maximum Aggregate Size (mm)
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="aggregateSize"
              type="number"
              value={aggregateSize}
              onChange={(e) => setAggregateSize(Number(e.target.value))}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cementType">
              Cement Type
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="cementType"
              value={cementType}
              onChange={(e) => setCementType(e.target.value)}
            >
              <option value="Type I">Type I</option>
              <option value="Type II">Type II</option>
              <option value="Type III">Type III</option>
              <option value="Type IV">Type IV</option>
              <option value="Type V">Type V</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="exposureClass">
              Exposure Class
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="exposureClass"
              value={exposureClass}
              onChange={(e) => setExposureClass(e.target.value)}
            >
              <option value="F0">F0</option>
              <option value="F1">F1</option>
              <option value="F2">F2</option>
              <option value="F3">F3</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="airEntrainment">
              Air Entrainment
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="airEntrainment"
              value={airEntrainment}
              onChange={(e) => setAirEntrainment(e.target.value)}
            >
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="aggregateType">
              Aggregate Type
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="aggregateType"
              value={aggregateType}
              onChange={(e) => setAggregateType(e.target.value)}
            >
              <option value="Crushed">Crushed</option>
              <option value="Uncrushed">Uncrushed</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fineModulus">
              Fine Modulus
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fineModulus"
              type="number"
              step="0.1"
              value={fineModulus}
              onChange={(e) => setFineModulus(Number(e.target.value))}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="specificGravityCement">
              Specific Gravity of Cement
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="specificGravityCement"
              type="number"
              step="0.01"
              value={specificGravityCement}
              onChange={(e) => setSpecificGravityCement(Number(e.target.value))}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="specificGravityCA">
              Specific Gravity of Coarse Aggregate
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="specificGravityCA"
              type="number"
              step="0.01"
              value={specificGravityCA}
              onChange={(e) => setSpecificGravityCA(Number(e.target.value))}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="specificGravityFA">
              Specific Gravity of Fine Aggregate
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="specificGravityFA"
              type="number"
              step="0.01"
              value={specificGravityFA}
              onChange={(e) => setSpecificGravityFA(Number(e.target.value))}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="absorptionCA">
              Absorption of Coarse Aggregate (%)
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="absorptionCA"
              type="number"
              step="0.1"
              value={absorptionCA}
              onChange={(e) => setAbsorptionCA(Number(e.target.value))}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="absorptionFA">
              Absorption of Fine Aggregate (%)
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="absorptionFA"
              type="number"
              step="0.1"
              value={absorptionFA}
              onChange={(e) => setAbsorptionFA(Number(e.target.value))}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="moistureCA">
              Moisture Content of Coarse Aggregate (%)
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="moistureCA"
              type="number"
              step="0.1"
              value={moistureCA}
              onChange={(e) => setMoistureCA(Number(e.target.value))}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="moistureFA">
              Moisture Content of Fine Aggregate (%)
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="moistureFA"
              type="number"
              step="0.1"
              value={moistureFA}
              onChange={(e) => setMoistureFA(Number(e.target.value))}
            />
          </div>
        </div>
        <div className="flex items-center justify-center mt-6">
          <motion.button
            className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={calculateMix}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Calculate Mix
          </motion.button>
        </div>
        {result && (
          <motion.div
            className="mt-6 p-4 bg-gray-100 rounded"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-xl font-bold mb-2">Result:</h2>
            <pre className="whitespace-pre-wrap">{result}</pre>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default ConcreteMixCalculator;