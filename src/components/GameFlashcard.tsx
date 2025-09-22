import { GameChoice } from "@/data/gameQuestions";

interface GameFlashcardProps {
  choice: GameChoice;
  onContinue: () => void;
  isVisible: boolean;
}

const GameFlashcard = ({ choice, onContinue, isVisible }: GameFlashcardProps) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="glass-card max-w-lg w-full p-6 animate-in slide-in-from-bottom duration-300">
        <h3 className="text-xl font-bold text-white mb-4">Your Decision Impact</h3>
        
        <div className="mb-4">
          <h4 className="font-semibold text-white/90 mb-2">You chose:</h4>
          <p className="text-white/80 italic">"{choice.text}"</p>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold text-white/90 mb-2">Impact Summary:</h4>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="flex justify-between">
              <span className="text-white/70">Economy:</span>
              <span className={choice.impact.economy >= 0 ? "text-green-300" : "text-red-300"}>
                {choice.impact.economy >= 0 ? `+${choice.impact.economy}` : choice.impact.economy}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/70">People:</span>
              <span className={choice.impact.people >= 0 ? "text-green-300" : "text-red-300"}>
                {choice.impact.people >= 0 ? `+${choice.impact.people}` : choice.impact.people}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/70">Health:</span>
              <span className={choice.impact.health >= 0 ? "text-green-300" : "text-red-300"}>
                {choice.impact.health >= 0 ? `+${choice.impact.health}` : choice.impact.health}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/70">Ecology:</span>
              <span className={choice.impact.ecology >= 0 ? "text-green-300" : "text-red-300"}>
                {choice.impact.ecology >= 0 ? `+${choice.impact.ecology}` : choice.impact.ecology}
              </span>
            </div>
          </div>
        </div>

        <div className="mb-6 p-4 bg-white/10 rounded-lg border border-white/20">
          <h4 className="font-semibold text-white/90 mb-2">💡 Educational Note:</h4>
          <p className="text-white/80 text-sm leading-relaxed">{choice.note}</p>
        </div>

        <button
          onClick={onContinue}
          className="glass-button w-full py-3 font-semibold text-white"
        >
          Continue as President
        </button>
      </div>
    </div>
  );
};

export default GameFlashcard;