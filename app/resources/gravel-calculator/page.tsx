'use client'

import { useState } from 'react'
import { PrintableResult } from '@/components/printable-result'
import { createRoot } from 'react-dom/client'

export default function GravelCalculatorPage() {
  const [length, setLength] = useState('')
  const [width, setWidth] = useState('')
  const [depth, setDepth] = useState('')
  const [unit, setUnit] = useState('feet')
  const [result, setResult] = useState<{
    cubicYards: number;
    tons: number;
  } | null>(null)

  const calculateGravel = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    let l = parseFloat(length)
    let w = parseFloat(width)
    let d = parseFloat(depth)

    if (unit === 'inches') {
      l /= 12
      w /= 12
      d /= 12
    }

    const cubicYards = (l * w * d) / 27
    const tons = cubicYards * 1.4 // Assuming 1 cubic yard of gravel weighs approximately 1.4 tons

    setResult({
      cubicYards: parseFloat(cubicYards.toFixed(2)),
      tons: parseFloat(tons.toFixed(2)),
    })
  }

  const handlePrint = () => {
    if (result) {
      const printWindow = window.open('', '_blank')
      if (printWindow) {
        printWindow.document.write('<html><head><title>Gravel Calculator Result</title>')
        printWindow.document.write('<style>body { font-family: Arial, sans-serif; }</style>')
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
                { label: 'Volume', value: `${result.cubicYards} cubic yards` },
                { label: 'Weight', value: `${result.tons} tons` },
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="length" className="block text-lg font-semibold text-orange-300 mb-2">
                  Length
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
                  Width
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
                  Depth
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
                  <option value="feet">Feet</option>
                  <option value="inches">Inches</option>
                </select>
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
              <h2 className="text-2xl font-bold text-orange-300 mb-4">Results:</h2>
              <p className="text-xl mb-2">
                <span className="font-semibold">Volume:</span> {result.cubicYards} cubic yards
              </p>
              <p className="text-xl mb-4">
                <span className="font-semibold">Weight:</span> {result.tons} tons
              </p>
              <button
                onClick={handlePrint}
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md text-lg font-bold hover:bg-blue-600 transition-colors duration-300"
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