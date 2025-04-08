
interface SeriesCardProps {
  title: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
}

const SeriesCard = ({ title, description, difficulty }: SeriesCardProps) => {
  const getDifficultyColor = () => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800";
      case "Advanced":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="bg-krimidansk-medium-grey/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-krimidansk-accent-grey/30 hover-scale">
      <div className="p-6">
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${getDifficultyColor()}`}>
          {difficulty}
        </span>
        <h3 className="text-xl font-bold text-krimidansk-light-text mb-2">{title}</h3>
        <p className="text-krimidansk-concrete">{description}</p>
      </div>
    </div>
  );
};

export default SeriesCard;
