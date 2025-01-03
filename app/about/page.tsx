import { MotionWrapper } from "@/components/motion-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Define the type for our values
type ValueItem = {
  title: string;
  description: string;
};

// Define the values array as a constant
const VALUES: ValueItem[] = [
  {
    title: "Innovation",
    description: "We constantly strive to push boundaries and create cutting-edge solutions.",
  },
  {
    title: "Collaboration",
    description: "We believe in the power of teamwork and fostering strong partnerships.",
  },
  {
    title: "Integrity",
    description: "We uphold the highest standards of honesty and ethical behavior in all we do.",
  },
  {
    title: "Excellence",
    description: "We are committed to delivering top-quality results in every aspect of our work.",
  },
  {
    title: "Customer-Centric",
    description: "Our customers' success and satisfaction are at the heart of everything we do.",
  },
  {
    title: "Sustainability",
    description: "We are dedicated to making a positive impact on our environment and communities.",
  },
];

export default function AboutPage() {
  console.log(VALUES); // Debugging step
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">About Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {VALUES.map((value, index) => (
          <MotionWrapper
            key={value.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{value.description}</p>
              </CardContent>
            </Card>
          </MotionWrapper>
        ))}
      </div>
    </div>
  );
}
