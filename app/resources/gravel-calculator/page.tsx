'use client'

import { useState } from 'react'
import { PrintableResult } from '@/components/printable-result'
import { createRoot } from 'react-dom/client'

const gravelTypes = [
  { name: 'Pea Gravel', density: 1.5 },
  { name: 'Crushed Stone', density: 1.6 },
  { name: 'River Rock', density: 1.7 },
  { name: 'Limestone', density: 1.4 },
  { name: 'Granite', density: 1.5 },
]

export default function GravelCalculatorPage() {
  const [length, setLength] = useState('')
  const [width, setWidth] = useState('')
  const [depth, setDepth] = useState('')
  const [gravelType, setGravelType] = useState('Pea Gravel')
  const [unit, setUnit] = useState('imperial')
  const [result, setResult] = useState<{
    volume: number;
    weightTons: number;
    truckLoads: {
      small: number;
      medium: number;
      large: number;
    };
  } | null>(null)

  const calculateGravel = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let volume = 0
    let weightTons = 0

    const convert = (value: string) => {
      const num = parseFloat(value)
      return unit === 'metric' ? num : num * 0.3048 // Convert feet to meters
    }

    const lengthM = convert(length)
    const widthM = convert(width)
    const depthM = convert(depth) / (unit === 'imperial' ? 12 : 100) // Convert inches/cm to meters

    volume = lengthM * widthM * depthM
    const selectedGravel = gravelTypes.find(g => g.name === gravelType)
    weightTons = volume * (selectedGravel?.density || 1.5) // Metric tons

    if (unit === 'imperial') {
      volume = volume * 35.3147 // Convert m3 to ft3
    }

    const truckLoads = {
      small: weightTons / 13, // 13-ton truck (10-wheeler)
      medium: weightTons / 20, // 20-ton truck
      large: weightTons / 25, // 25-ton truck (large flatbed)
    }

    setResult({ volume, weightTons, truckLoads })
  }

  const handlePrint = () => {
    if (result) {
      const printWindow = window.open('', '_blank')
      if (printWindow) {
        printWindow.document.write('<html><head><title>Gravel Calculator Result</title>')
        printWindow.document.write(`
          <style>
            body { font-family: Arial, sans-serif; }
            @media print {
              body { -webkit-print-color-adjust: exact; }
              table { border-collapse: collapse; width: 100%; }
              th, td { border: 1px solid #ddd; padding: 8px; }
              tr:nth-child(even) { background-color: #f2f2f2; }
            }
          </style>
        `)
        printWindow.document.write('</head><body>')
        printWindow.document.write('<div id="print-container"></div>')
        printWindow.document.write('</body></html>')
        printWindow.document.close()

        const printContainer = printWindow.document.getElementById('print-container')
        if (printContainer && printWindow.document.body) {
          const root = createRoot(printContainer)
          root.render(
            <PrintableResult
              title="Gravel Calculator Result"
              results={[
                { label: 'Gravel Type', value: gravelType },
                { label: 'Unit System', value: unit === 'imperial' ? 'US (feet, inches)' : 'Metric (meters, cm)' },
                { label: 'Volume', value: `${result.volume.toFixed(2)} ${unit === 'imperial' ? 'ft3' : 'm3'}` },
                { label: 'Weight', value: `${result.weightTons.toFixed(2)} tons` },
                { label: '13-ton Truck Loads', value: `${Math.ceil(result.truckLoads.small)}` },
                { label: '20-ton Truck Loads', value: `${Math.ceil(result.truckLoads.medium)}` },
                { label: '25-ton Truck Loads', value: `${Math.ceil(result.truckLoads.large)}` },
              ]}
            />
          )
          setTimeout(() => {
            printWindow.print()
            printWindow.close()
          }, 250)
        }
      }
    }
  }

  return (
    <main className="bg-gradient-to-br from-gray-900 to-black text-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-6xl font-bold mb-12 text-center text-orange-500">Gravel Calculator</h1>
        <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
          <form onSubmit={calculateGravel} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label htmlFor="gravelType" className="block text-lg font-semibold text-orange-300 mb-2">
                  Gravel Type
                </label>
                <select
                  id="gravelType"
                  value={gravelType}
                  onChange={(e) => setGravelType(e.target.value)}
                  className="w-full px-4 py-3 rounded-md bg-gray-700 border-2 border-orange-500 text-white text-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  {gravelTypes.map((gravel) => (
                    <option key={gravel.name} value={gravel.name}>
                      {gravel.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="unit" className="block text-lg font-semibold text-orange-300 mb-2">
                  Unit
                </label>
                <select
                  id="unit"
                  value={unit}
                  onChange={(e) => setUnit(e.target.value)}
                  className="w-full px-4 py-3 rounded-md bg-gray-700 border-2 border-orange-500 text-white text-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="imperial">US (feet, inches)</option>
                  <option value="metric">Metric (meters, cm)</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div>
                <label htmlFor="length" className="block text-lg font-semibold text-orange-300 mb-2">
                  Length ({unit === 'imperial' ? 'feet' : 'meters'})
                </label>
                <input
                  type="number"
                  id="length"
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-md bg-gray-700 border-2 border-orange-500 text-white text-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label htmlFor="width" className="block text-lg font-semibold text-orange-300 mb-2">
                  Width ({unit === 'imperial' ? 'feet' : 'meters'})
                </label>
                <input
                  type="number"
                  id="width"
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-md bg-gray-700 border-2 border-orange-500 text-white text-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label htmlFor="depth" className="block text-lg font-semibold text-orange-300 mb-2">
                  Depth ({unit === 'imperial' ? 'inches' : 'cm'})
                </label>
                <input
                  type="number"
                  id="depth"
                  value={depth}
                  onChange={(e) => setDepth(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-md bg-gray-700 border-2 border-orange-500 text-white text-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 px-6 rounded-md text-xl font-bold hover:bg-orange-600 transition-colors duration-300 transform hover:scale-105"
            >
              Calculate
            </button>
          </form>
          {result && (
            <div className="mt-8 p-6 bg-gray-700 rounded-lg border-2 border-orange-500">
              <h2 className="text-2xl font-bold text-center text-orange-300 mb-4">Results</h2>
              <div className="space-y-2">
                <p className="text-lg"><strong>Volume:</strong> {result.volume.toFixed(2)} {unit === 'imperial' ? 'ft3' : 'm3'}</p>
                <p className="text-lg"><strong>Weight:</strong> {result.weightTons.toFixed(2)} tons</p>
                <p className="text-lg"><strong>13-ton Truck Loads:</strong> {Math.ceil(result.truckLoads.small)}</p>
                <p className="text-lg"><strong>20-ton Truck Loads:</strong> {Math.ceil(result.truckLoads.medium)}</p>
                <p className="text-lg"><strong>25-ton Truck Loads:</strong> {Math.ceil(result.truckLoads.large)}</p>
              </div>
              <button
                onClick={handlePrint}
                className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-md text-lg font-bold hover:bg-blue-600 transition-colors duration-300"
              >
                Print Result
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}