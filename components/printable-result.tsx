import Image from 'next/image'

interface PrintableResultProps {
  title: string;
  results: { label: string; value: string }[];
}

export function PrintableResult({ title, results }: PrintableResultProps) {
  return (
    <div className="p-8 bg-white text-black">
      <div className="flex justify-between items-center mb-8">
        <Image
          src="/images/alexis-logo-new.png"
          alt="Alexis Logo"
          width={200}
          height={80}
          className="object-contain"
        />
        <h1 className="text-3xl font-bold">{title}</h1>
      </div>
      <div className="border-t border-b border-gray-300 py-4 mb-8">
        {results.map((result, index) => (
          <div key={index} className="flex justify-between py-2">
            <span className="font-semibold">{result.label}:</span>
            <span>{result.value}</span>
          </div>
        ))}
      </div>
      <p className="text-sm text-gray-500 text-center">
        © {new Date().getFullYear()} Alexis Concrete and Asphalt Inc. All rights reserved.
      </p>
    </div>
  )
}