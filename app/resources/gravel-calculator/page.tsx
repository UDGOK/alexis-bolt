'use client'

import { useState } from 'react'

const materials = [
  { name: 'Gravel', density: 1.5 },
  { name: 'Sand', density: 1.4 },
  { name: 'Mulch', density: 0.7 },
  { name: 'Topsoil', density: 1.3 },
  { name: 'Limestone', density: 1.4 },
  { name: 'Granite', density: 1.6 },
]

export default function GravelCalculatorPage() {
  const [length, setLength] = useState('')
  const [width, setWidth] = useState('')
  const [depth, setDepth] = useState('')
  const [price, setPrice] = useState('')
  const [material, setMaterial] = useState(materials[0])
  const [result, setResult] = useState<{
    volumeCubicYards: number;
    weightTons: number;
    cost: number;
    trucks: number;
  } | null>(null)

  const calculateGravel = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const lengthFt = parseFloat(length)
    const widthFt = parseFloat(width)
    const depthIn = parseFloat(depth)

    const volumeCubicYards = Number(((lengthFt * widthFt * depthIn) / 324).toFixed(2)) // 1 cubic yard = 27 cubic feet, 1 foot = 12 inches
    const weightTons = Number((volumeCubicYards * material.density).toFixed(2))
    const cost = Number((volumeCubicYards * parseFloat(price)).toFixed(2))
    const trucks = Math.ceil(volumeCubicYards / 14) // Each truck holds 14 cubic yards

    setResult({
      volumeCubicYards,
      weightTons,
      cost,
      trucks,
    })
  }

  return (
    <main className="bg-gradient-to-br from-gray-900 to-black text-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-6xl font-bold mb-12 text-center text-orange-500">Material Calculator</h1>
        <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
          <form onSubmit={calculateGravel} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label htmlFor="material" className="block text-lg font-semibold text-orange-300 mb-2">
                  Material
                </label>
                <select
                  id="material"
                  value={material.name}
                  onChange={(e) => setMaterial(materials.find(m => m.name === e.target.value) || materials[0])}
                  className="w-full px-4 py-3 rounded-md bg-gray-700 border-2 border-orange-500 text-white text-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  {materials.map((m) => (
                    <option key={m.name} value={m.name}>{m.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="price" className="block text-lg font-semibold text-orange-300 mb-2">
                  Price per Cubic Yard ($)
                </label>
                <input
                  type="number"
                  id="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-md bg-gray-700 border-2 border-orange-500 text-white text-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6">
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
              <h2 className="text-2xl font-bold text-center text-orange-300 mb-4">Results</h2>
              <div className="space-y-2">
                <p className="text-lg"><strong>Volume:</strong> {result.volumeCubicYards} cubic yards</p>
                <p className="text-lg"><strong>Weight:</strong> {result.weightTons} tons</p>
                <p className="text-lg"><strong>Cost:</strong> ${result.cost}</p>
                <p className="text-lg"><strong>Trucks Needed:</strong> {result.trucks} (14 cubic yards per truck)</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}