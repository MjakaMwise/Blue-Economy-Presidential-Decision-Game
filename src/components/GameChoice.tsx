import { GameChoice as GameChoiceType } from "@/data/gameQuestions";

interface GameChoiceProps {
  choice: GameChoiceType;
  onClick: () => void;
  disabled?: boolean;
}

const GameChoice = ({ choice, onClick, disabled }: GameChoiceProps) => {
  const getImpactColor = (value: number) => {
    if (value > 0) return "text-green-300";
    if (value < 0) return "text-red-300";
    return "text-gray-300";
  };

  const getImpactText = (value: number) => {
    if (value === 0) return "No change";
    return value > 0 ? `+${value}` : `${value}`;
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="glass-button w-full text-left p-4 disabled:opacity-50 disabled:cursor-not-allowed group"
    >
      <div className="text-white font-semibold mb-2 group-hover:text-white/90">
        {choice.text}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
        <div className="flex items-center gap-1">
          <span className="text-white/70">Economy:</span>
          <span className={getImpactColor(choice.impact.economy)}>
            {getImpactText(choice.impact.economy)}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-white/70">People:</span>
          <span className={getImpactColor(choice.impact.people)}>
            {getImpactText(choice.impact.people)}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-white/70">Health:</span>
          <span className={getImpactColor(choice.impact.health)}>
            {getImpactText(choice.impact.health)}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-white/70">Ecology:</span>
          <span className={getImpactColor(choice.impact.ecology)}>
            {getImpactText(choice.impact.ecology)}
          </span>
        </div>
      </div>
    </button>
  );
};

export default GameChoice;