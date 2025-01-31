'use client'

import { useState } from 'react'
import { PrintableResult } from '@/components/printable-result'
import { createRoot } from 'react-dom/client'

export default function RebarCalculatorPage() {
  const [slabLength, setSlabLength] = useState('')
  const [slabWidth, setSlabWidth] = useState('')
  const [gridSpacing, setGridSpacing] = useState('')
  const [edgeClearance, setEdgeClearance] = useState('')
  const [result, setResult] = useState<{
    materialEstimate: number;
    equalSpacing: { horizontal: number; vertical: number };
    gridSize: { horizontal: number; vertical: number };
  } | null>(null)

  const calculateRebar = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const length = parseFloat(slabLength)
    const width = parseFloat(slabWidth)
    const spacing = parseFloat(gridSpacing)
    const clearance = parseFloat(edgeClearance)

    // Calculate grid size
    const horizontalBars = Math.ceil((width - 2 * clearance) / spacing) + 1
    const verticalBars = Math.ceil((length - 2 * clearance) / spacing) + 1

    // Calculate equal spacing
    const horizontalSpacing = (width - 2 * clearance) / (horizontalBars - 1)
    const verticalSpacing = (length - 2 * clearance) / (verticalBars - 1)

    // Calculate material estimate (total length of rebar needed)
    const horizontalLength = horizontalBars * length
    const verticalLength = verticalBars * width
    const totalLength = horizontalLength + verticalLength

    setResult({
      materialEstimate: parseFloat(totalLength.toFixed(2)),
      equalSpacing: {
        horizontal: parseFloat(horizontalSpacing.toFixed(2)),
        vertical: parseFloat(verticalSpacing.toFixed(2)),
      },
      gridSize: {
        horizontal: horizontalBars,
        vertical: verticalBars,
      },
    })
  }

  const handlePrint = () => {
    if (result) {
      const printWindow = window.open('', '_blank')
      if (printWindow) {
        printWindow.document.write('<html><head><title>Rebar Calculator Result</title>')
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
              title="Rebar Calculator Result"
              results={[
                { label: 'Material Estimate', value: `${result.materialEstimate} feet of rebar` },
                { label: 'Equal Spacing (Horizontal)', value: `${result.equalSpacing.horizontal} inches` },
                { label: 'Equal Spacing (Vertical)', value: `${result.equalSpacing.vertical} inches` },
                { label: 'Grid Size', value: `${result.gridSize.horizontal} x ${result.gridSize.vertical} (Horizontal x Vertical)` },
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
        <h1 className="text-6xl font-bold mb-12 text-center text-orange-500">Rebar Calculator</h1>
        <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
          <form onSubmit={calculateRebar} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="slabLength" className="block text-lg font-semibold text-orange-300 mb-2">
                  Slab Length (feet)
                </label>
                <input
                  type="number"
                  id="slabLength"
                  value={slabLength}
                  onChange={(e) => setSlabLength(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-md bg-gray-700 border-2 border-orange-500 text-white text-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label htmlFor="slabWidth" className="block text-lg font-semibold text-orange-300 mb-2">
                  Slab Width (feet)
                </label>
                <input
                  type="number"
                  id="slabWidth"
                  value={slabWidth}
                  onChange={(e) => setSlabWidth(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-md bg-gray-700 border-2 border-orange-500 text-white text-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label htmlFor="gridSpacing" className="block text-lg font-semibold text-orange-300 mb-2">
                  Grid Spacing (inches)
                </label>
                <input
                  type="number"
                  id="gridSpacing"
                  value={gridSpacing}
                  onChange={(e) => setGridSpacing(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-md bg-gray-700 border-2 border-orange-500 text-white text-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label htmlFor="edgeClearance" className="block text-lg font-semibold text-orange-300 mb-2">
                  Edge Clearance (inches)
                </label>
                <input
                  type="number"
                  id="edgeClearance"
                  value={edgeClearance}
                  onChange={(e) => setEdgeClearance(e.target.value)}
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
              <h2 className="text-2xl font-bold text-orange-300 mb-4">Results:</h2>
              <p className="text-xl mb-2">
                <span className="font-semibold">Material Estimate:</span> {result.materialEstimate} feet of rebar
              </p>
              <p className="text-xl mb-2">
                <span className="font-semibold">Equal Spacing:</span>
                Horizontal: {result.equalSpacing.horizontal} inches,
                Vertical: {result.equalSpacing.vertical} inches
              </p>
              <p className="text-xl mb-4">
                <span className="font-semibold">Grid Size:</span>
                {result.gridSize.horizontal} x {result.gridSize.vertical} (Horizontal x Vertical)
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