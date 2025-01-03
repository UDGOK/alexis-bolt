import { MotionWrapper } from '../../components/motion-wrapper';
// ... other imports

export default function About() {
  // ... other code

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">About Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {values.map((value, index) => (
          <MotionWrapper
            key={value.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative p-6 rounded-2xl bg-white/5"
          >
            <h3 className="text-2xl font-light tracking-tight mb-4">
              {value.title}
            </h3>
            <p className="text-gray-400">{value.description}</p>
          </MotionWrapper>
        ))}
      </div>
    </div>
  );
}

