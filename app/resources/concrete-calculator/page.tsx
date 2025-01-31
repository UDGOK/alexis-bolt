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
  const [result, setResult] = useState<{ volume: number; bags: number } | null>(null)

  const calculateConcrete = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let volume = 0

    switch (shape) {
      case 'rectangular':
        volume = (parseFloat(length) * parseFloat(width) * parseFloat(depth)) / 27
        break
      case 'circular':
        volume = (Math.PI * Math.pow(parseFloat(diameter) / 2, 2) * parseFloat(depth)) / 27
        break
      case 'l-shaped':
        // Simplified L-shape calculation (assumes equal width for both sections)
        volume = ((parseFloat(length) * parseFloat(width) + (parseFloat(length) - parseFloat(width)) * parseFloat(width)) * parseFloat(depth)) / 27
        break
    }

    const bags = Math.ceil(volume * 90 / 0.6) // Assuming 60lb bags, 90 bags per cubic yard
    setResult({ volume, bags })
  }

  const handlePrint = () => {
    if (result) {
      const printWindow = window.open('', '_blank')
      if (printWindow) {
        printWindow.document.write('<html><head><title>Concrete Calculator Result</title>')
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
              title="Concrete Calculator Result"
              results={[
                { label: 'Shape', value: shape },
                { label: 'Volume', value: `${result.volume.toFixed(2)} cubic yards` },
                { label: 'Bags of Concrete', value: `${result.bags} (60lb bags)` },
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
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {shape !== 'circular' && (
                <>
                  <div>
                    <label htmlFor="length" className="block text-lg font-semibold text-orange-300 mb-2">
                      Length (feet)
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
                      Width (feet)
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
                    Diameter (feet)
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
              <div>
                <label htmlFor="depth" className="block text-lg font-semibold text-orange-300 mb-2">
                  Depth (inches)
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
              <p className="text-2xl font-bold text-center text-orange-300">
                You need {result.volume.toFixed(2)} cubic yards of concrete (approximately {result.bags} 60lb bags).
              </p>
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