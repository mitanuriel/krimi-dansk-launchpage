
import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-krimidansk-navy/40 backdrop-blur-sm rounded-xl border border-krimidansk-navy/50 shadow-lg p-6 hover-scale">
      <div className="text-krimidansk-red text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-krimidansk-light-text/80">{description}</p>
    </div>
  );
};

export default FeatureCard;
