
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
    <div className="bg-gradient-card rounded-xl shadow-md overflow-hidden">
      <div className="p-6">
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${getDifficultyColor()}`}>
          {difficulty}
        </span>
        <h3 className="text-xl font-bold text-krimidansk-navy mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default SeriesCard;
