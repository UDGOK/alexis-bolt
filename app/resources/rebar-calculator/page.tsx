'use client'

import { useState } from 'react'
import { PrintableResult } from '@/components/printable-result'
import { createRoot } from 'react-dom/client'

const rebarSizes = [
  { size: '#3', diameter: 0.375, weight: 0.376 },
  { size: '#4', diameter: 0.5, weight: 0.668 },
  { size: '#5', diameter: 0.625, weight: 1.043 },
  { size: '#6', diameter: 0.75, weight: 1.502 },
  { size: '#7', diameter: 0.875, weight: 2.044 },
  { size: '#8', diameter: 1, weight: 2.67 },
  { size: '#9', diameter: 1.128, weight: 3.4 },
  { size: '#10', diameter: 1.27, weight: 4.303 },
  { size: '#11', diameter: 1.41, weight: 5.313 },
  { size: '#14', diameter: 1.693, weight: 7.65 },
  { size: '#18', diameter: 2.257, weight: 13.6 },
]

export default function RebarCalculatorPage() {
  const [rebarSize, setRebarSize] = useState('#3')
  const [length, setLength] = useState('')
  const [quantity, setQuantity] = useState('')
  const [result, setResult] = useState<{
    totalLength: number;
    totalWeight: number;
    pieceWeight: number;
  } | null>(null)

  const calculateRebar = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const selectedRebar = rebarSizes.find(r => r.size === rebarSize)
    if (!selectedRebar) return

    const lengthNum = parseFloat(length)
    const quantityNum = parseInt(quantity)

    const totalLength = lengthNum * quantityNum
    const pieceWeight = selectedRebar.weight * lengthNum
    const totalWeight = pieceWeight * quantityNum

    setResult({
      totalLength,
      totalWeight,
      pieceWeight,
    })
  }

  const handlePrint = () => {
    if (result) {
      const printWindow = window.open('', '_blank')
      if (printWindow) {
        printWindow.document.write('<html><head><title>Rebar Calculator Result</title>')
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
              title="Rebar Calculator Result"
              results={[
                { label: 'Rebar Size', value: rebarSize },
                { label: 'Length per Piece', value: `${length} feet` },
                { label: 'Quantity', value: quantity },
                { label: 'Total Length', value: `${result.totalLength.toFixed(2)} feet` },
                { label: 'Weight per Piece', value: `${result.pieceWeight.toFixed(2)} lbs` },
                { label: 'Total Weight', value: `${result.totalWeight.toFixed(2)} lbs` },
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
            <div>
              <label htmlFor="rebarSize" className="block text-lg font-semibold text-orange-300 mb-2">
                Rebar Size
              </label>
              <select
                id="rebarSize"
                value={rebarSize}
                onChange={(e) => setRebarSize(e.target.value)}
                className="w-full px-4 py-3 rounded-md bg-gray-700 border-2 border-orange-500 text-white text-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                {rebarSizes.map((rebar) => (
                  <option key={rebar.size} value={rebar.size}>
                    {rebar.size} (Diameter: {rebar.diameter}", Weight: {rebar.weight} lbs/ft)
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="length" className="block text-lg font-semibold text-orange-300 mb-2">
                Length per Piece (feet)
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
              <label htmlFor="quantity" className="block text-lg font-semibold text-orange-300 mb-2">
                Quantity
              </label>
              <input
                type="number"
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-md bg-gray-700 border-2 border-orange-500 text-white text-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
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
                <p className="text-lg"><strong>Total Length:</strong> {result.totalLength.toFixed(2)} feet</p>
                <p className="text-lg"><strong>Weight per Piece:</strong> {result.pieceWeight.toFixed(2)} lbs</p>
                <p className="text-lg"><strong>Total Weight:</strong> {result.totalWeight.toFixed(2)} lbs</p>
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