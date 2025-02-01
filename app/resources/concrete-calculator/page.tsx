'use client'

import { useState } from 'react'
import { PrintableResult } from '@/components/printable-result'
import { createRoot } from 'react-dom/client'

export default function ConcreteCalculatorPage() {
  const [shape, setShape] = useState('rectangular')
  const [length, setLength] = useState('')
  const [width, setWidth] = useState('')
  const [depth, setDepth] = useState('')
  const [diameter, setDiameter] = useState('')
  const [height, setHeight] = useState('')
  const [steps, setSteps] = useState('')
  const [stepHeight, setStepHeight] = useState('')
  const [stepWidth, setStepWidth] = useState('')
  const [unit, setUnit] = useState('imperial')
  const [strength, setStrength] = useState('3000')
  const [wasteFactor, setWasteFactor] = useState('10')
  const [result, setResult] = useState<{
    volume: number;
    bags: number;
    cement: number;
    sand: number;
    gravel: number;
  } | null>(null)

  const calculateConcrete = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let volume = 0
    const waste = 1 + parseInt(wasteFactor) / 100

    const convert = (value: string) => {
      const num = parseFloat(value)
      return unit === 'metric' ? num / 0.3048 : num
    }

    switch (shape) {
      case 'rectangular':
        volume = (convert(length) * convert(width) * convert(depth) / 12) / 27
        break
      case 'circular':
        volume = (Math.PI * Math.pow(convert(diameter) / 2, 2) * convert(depth) / 12) / 27
        break
      case 'l-shaped':
        volume = ((convert(length) * convert(width) + (convert(length) - convert(width)) * convert(width)) * convert(depth) / 12) / 27
        break
      case 'triangular':
        volume = (0.5 * convert(length) * convert(width) * convert(depth) / 12) / 27
        break
      case 'stairs':
        const stepVolume = (convert(length) * convert(stepWidth) * convert(stepHeight) / 12) / 27
        volume = stepVolume * parseInt(steps)
        break
    }

    volume *= waste

    const strengthFactor = parseInt(strength) / 3000
    const bags = Math.ceil(volume * 90 * strengthFactor)
    const cement = volume * 5.8 * strengthFactor
    const sand = volume * 17.4 * strengthFactor
    const gravel = volume * 23.2 * strengthFactor

    setResult({ volume, bags, cement, sand, gravel })
  }

  const handlePrint = () => {
    if (result) {
      const printWindow = window.open('', '_blank')
      if (printWindow) {
        printWindow.document.write('<html><head><title>Concrete Calculator Result</title>')
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
              title="Concrete Calculator Result"
              results={[
                { label: 'Shape', value: shape.charAt(0).toUpperCase() + shape.slice(1) },
                { label: 'Unit System', value: unit === 'imperial' ? 'US (feet, inches)' : 'Metric (meters, cm)' },
                { label: 'Concrete Strength', value: `${strength} PSI` },
                { label: 'Waste Factor', value: `${wasteFactor}%` },
                { label: 'Volume', value: `${result.volume.toFixed(2)} cubic yards` },
                { label: 'Bags of Concrete', value: `${result.bags} (60lb bags)` },
                { label: 'Cement', value: `${result.cement.toFixed(2)} cubic yards` },
                { label: 'Sand', value: `${result.sand.toFixed(2)} cubic yards` },
                { label: 'Gravel', value: `${result.gravel.toFixed(2)} cubic yards` },
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
        <h1 className="text-6xl font-bold mb-12 text-center text-orange-500">Concrete Calculator</h1>
        <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
          <form onSubmit={calculateConcrete} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label htmlFor="shape" className="block text-lg font-semibold text-orange-300 mb-2">
                  Shape
                </label>
                <select
                  id="shape"
                  value={shape}
                  onChange={(e) => setShape(e.target.value)}
                  className="w-full px-4 py-3 rounded-md bg-gray-700 border-2 border-orange-500 text-white text-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="rectangular">Rectangular</option>
                  <option value="circular">Circular</option>
                  <option value="l-shaped">L-Shaped</option>
                  <option value="triangular">Triangular</option>
                  <option value="stairs">Stairs</option>
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
                  <option value="metric">Metric (meters)</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {shape !== 'circular' && shape !== 'stairs' && (
                <>
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
                </>
              )}
              {shape === 'circular' && (
                <div>
                  <label htmlFor="diameter" className="block text-lg font-semibold text-orange-300 mb-2">
                    Diameter ({unit === 'imperial' ? 'feet' : 'meters'})
                  </label>
                  <input
                    type="number"
                    id="diameter"
                    value={diameter}
                    onChange={(e) => setDiameter(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-md bg-gray-700 border-2 border-orange-500 text-white text-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              )}
              {shape === 'stairs' && (
                <>
                  <div>
                    <label htmlFor="steps" className="block text-lg font-semibold text-orange-300 mb-2">
                      Number of Steps
                    </label>
                    <input
                      type="number"
                      id="steps"
                      value={steps}
                      onChange={(e) => setSteps(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-md bg-gray-700 border-2 border-orange-500 text-white text-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="stepHeight" className="block text-lg font-semibold text-orange-300 mb-2">
                      Step Height ({unit === 'imperial' ? 'inches' : 'cm'})
                    </label>
                    <input
                      type="number"
                      id="stepHeight"
                      value={stepHeight}
                      onChange={(e) => setStepHeight(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-md bg-gray-700 border-2 border-orange-500 text-white text-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="stepWidth" className="block text-lg font-semibold text-orange-300 mb-2">
                      Step Width ({unit === 'imperial' ? 'inches' : 'cm'})
                    </label>
                    <input
                      type="number"
                      id="stepWidth"
                      value={stepWidth}
                      onChange={(e) => setStepWidth(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-md bg-gray-700 border-2 border-orange-500 text-white text-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </>
              )}
              {shape !== 'stairs' && (
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
              )}
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label htmlFor="strength" className="block text-lg font-semibold text-orange-300 mb-2">
                  Concrete Strength (PSI)
                </label>
                <select
                  id="strength"
                  value={strength}
                  onChange={(e) => setStrength(e.target.value)}
                  className="w-full px-4 py-3 rounded-md bg-gray-700 border-2 border-orange-500 text-white text-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="2500">2500 PSI</option>
                  <option value="3000">3000 PSI</option>
                  <option value="3500">3500 PSI</option>
                  <option value="4000">4000 PSI</option>
                  <option value="4500">4500 PSI</option>
                </select>
              </div>
              <div>
                <label htmlFor="wasteFactor" className="block text-lg font-semibold text-orange-300 mb-2">
                  Waste Factor (%)
                </label>
                <input
                  type="number"
                  id="wasteFactor"
                  value={wasteFactor}
                  onChange={(e) => setWasteFactor(e.target.value)}
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
                <p className="text-lg"><strong>Volume:</strong> {result.volume.toFixed(2)} cubic yards</p>
                <p className="text-lg"><strong>Bags of Concrete:</strong> {result.bags} (60lb bags)</p>
                <p className="text-lg"><strong>Cement:</strong> {result.cement.toFixed(2)} cubic yards</p>
                <p className="text-lg"><strong>Sand:</strong> {result.sand.toFixed(2)} cubic yards</p>
                <p className="text-lg"><strong>Gravel:</strong> {result.gravel.toFixed(2)} cubic yards</p>
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