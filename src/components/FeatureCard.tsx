
import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover-scale">
      <div className="text-krimidansk-navy text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-krimidansk-navy mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
