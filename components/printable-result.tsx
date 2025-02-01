import Image from 'next/image'
import { QRCodeSVG } from 'qrcode.react'

interface PrintableResultProps {
  title: string;
  results: { label: string; value: string }[];
}

export function PrintableResult({ title, results }: PrintableResultProps) {
  const websiteUrl = 'https://www.alexisconcreteandasphalttulsa.com/'

  return (
    <div className="p-8 bg-white text-black font-sans border-2 border-gray-300 rounded-lg">
      <div className="flex justify-between items-center mb-8 border-b-2 border-orange-500 pb-4">
        <Image
          src="/images/alexis-logo-new.png"
          alt="Alexis Logo"
          width={200}
          height={80}
          className="object-contain"
        />
        <h1 className="text-4xl font-bold text-orange-500">{title}</h1>
      </div>
      <div className="mb-8">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-orange-100">
              <th className="border border-gray-300 p-2 text-left">Description</th>
              <th className="border border-gray-300 p-2 text-left">Value</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="border border-gray-300 p-2 font-semibold text-gray-700">{result.label}</td>
                <td className="border border-gray-300 p-2 text-orange-600">{result.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-8">
        <div className="text-left">
          <p className="text-sm text-gray-500 mb-2">
            This calculation is provided as an estimate. Actual materials required may vary.
          </p>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Alexis Concrete and Asphalt Inc. All rights reserved.
          </p>
        </div>
        <div className="text-right">
          <QRCodeSVG value={websiteUrl} size={100} />
          <p className="text-xs text-gray-500 mt-2">Scan for our website</p>
        </div>
      </div>
    </div>
  )
}