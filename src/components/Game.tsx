import { useState } from "react";
import { gameQuestions, GameChoice } from "@/data/gameQuestions";
import GameParameterBar from "./GameParameterBar";
import GameChoiceComponent from "./GameChoice";
import GameFlashcard from "./GameFlashcard";
import { DollarSign, Users, Heart, Leaf, Crown, Calendar } from "lucide-react";
import CursorItem from "./Cursor";

interface GameParameters {
  economy: number;
  people: number;
  health: number;
  ecology: number;
}

const Game = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [parameters, setParameters] = useState<GameParameters>({
    economy: 1,
    people: 1,
    health: 1,
    ecology: 1
  });
  const [selectedChoice, setSelectedChoice] = useState<GameChoice | null>(null);
  const [showFlashcard, setShowFlashcard] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);

  const maxParameterValue = 10;
  const isGameOver = Object.values(parameters).some(value => value <= 0);

  const handleChoiceSelect = (choice: GameChoice) => {
    setSelectedChoice(choice);
    setShowFlashcard(true);

    // Apply the impact
    setParameters(prev => ({
      economy: Math.max(0, Math.min(maxParameterValue, prev.economy + choice.impact.economy)),
      people: Math.max(0, Math.min(maxParameterValue, prev.people + choice.impact.people)),
      health: Math.max(0, Math.min(maxParameterValue, prev.health + choice.impact.health)),
      ecology: Math.max(0, Math.min(maxParameterValue, prev.ecology + choice.impact.ecology))
    }));
  };

  const handleContinue = () => {
    setShowFlashcard(false);
    setSelectedChoice(null);

    if (currentQuestion + 1 >= gameQuestions.length) {
      setGameComplete(true);
    } else {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const getGameResult = () => {
    const total = Object.values(parameters).reduce((sum, value) => sum + value, 0);
    const average = total / 4;

    if (average >= 8) return { title: "Excellent Leadership!", message: "You've masterfully balanced Kenya's Blue Economy priorities.", grade: "A+" };
    if (average >= 6) return { title: "Good Governance", message: "You've made solid decisions for Kenya's future.", grade: "B+" };
    if (average >= 4) return { title: "Mixed Results", message: "Some tough decisions led to mixed outcomes.", grade: "C+" };
    return { title: "Challenging Day", message: "Leadership involves difficult trade-offs.", grade: "D+" };
  };

  if (gameComplete || isGameOver) {
    const result = getGameResult();
    
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="glass-card max-w-2xl w-full p-8 text-center">
          <Crown className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
          <h1 className="text-3xl font-bold text-white mb-4">
            {isGameOver ? "Presidential Crisis!" : result.title}
          </h1>
          
          {isGameOver ? (
            <p className="text-xl text-white/80 mb-6">
              One of your key parameters reached critically low levels. In real governance, this could lead to economic collapse, social unrest, health crises, or environmental disasters.
            </p>
          ) : (
            <p className="text-xl text-white/80 mb-6">{result.message}</p>
          )}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <GameParameterBar
              label="Economy"
              value={parameters.economy}
              max={maxParameterValue}
              color="bg-gradient-to-r from-green-400 to-green-600"
              icon={<DollarSign className="w-5 h-5" />}
            />
            <GameParameterBar
              label="People"
              value={parameters.people}
              max={maxParameterValue}
              color="bg-gradient-to-r from-blue-400 to-blue-600"
              icon={<Users className="w-5 h-5" />}
            />
            <GameParameterBar
              label="Health"
              value={parameters.health}
              max={maxParameterValue}
              color="bg-gradient-to-r from-red-400 to-red-600"
              icon={<Heart className="w-5 h-5" />}
            />
            <GameParameterBar
              label="Ecology"
              value={parameters.ecology}
              max={maxParameterValue}
              color="bg-gradient-to-r from-emerald-400 to-emerald-600"
              icon={<Leaf className="w-5 h-5" />}
            />
          </div>

          {!isGameOver && (
            <div className="mb-6">
              <div className="text-4xl font-bold text-yellow-300 mb-2">{result.grade}</div>
              <p className="text-white/70">Your Presidential Performance Grade</p>
            </div>
          )}

          <button
            onClick={() => window.location.reload()}
            className="glass-button px-8 py-3 font-semibold text-white"
          >
            Try Another Presidential Day
          </button>
        </div>
      </div>
    );
  }

  const question = gameQuestions[currentQuestion];

  return (
    <div className="min-h-screen p-4">
      <CursorItem/>
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-6">
        <div className="glass-card p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Crown className="w-8 h-8 text-yellow-300" />
              <h1 className="text-2xl font-bold text-white">President of Kenya</h1>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Calendar className="w-5 h-5" />
              <span>Decision {currentQuestion + 1} of {gameQuestions.length}</span>
            </div>
          </div>
          
          {/* Parameters */}
          
      {/* Main Question */}
      <div className="max-w-4xl mx-auto">
        <div className="glass-card p-8 mb-6">
          <h2 className="text-2xl font-bold text-white mb-4">{question.title}</h2>
          <p className="text-lg text-white/90 leading-relaxed">{question.scenario}</p>
        </div>

        {/* Choices */}
        <div className="space-y-4">
          {question.choices.map((choice, index) => (
            <GameChoiceComponent
              key={index}
              choice={choice}
              onClick={() => handleChoiceSelect(choice)}
              disabled={showFlashcard}
            />
          ))}
        </div>
      </div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <GameParameterBar
              label="Economy"
              value={parameters.economy}
              max={maxParameterValue}
              color="bg-gradient-to-r from-green-400 to-green-600"
              icon={<DollarSign className="w-5 h-5" />}
            />
            <GameParameterBar
              label="People"
              value={parameters.people}
              max={maxParameterValue}
              color="bg-gradient-to-r from-blue-400 to-blue-600"
              icon={<Users className="w-5 h-5" />}
            />
            <GameParameterBar
              label="Health"
              value={parameters.health}
              max={maxParameterValue}
              color="bg-gradient-to-r from-red-400 to-red-600"
              icon={<Heart className="w-5 h-5" />}
            />
            <GameParameterBar
              label="Ecology"
              value={parameters.ecology}
              max={maxParameterValue}
              color="bg-gradient-to-r from-emerald-400 to-emerald-600"
              icon={<Leaf className="w-5 h-5" />}
            />
          </div>
        </div>
      </div>

      {/* Flashcard */}
      <GameFlashcard
        choice={selectedChoice!}
        onContinue={handleContinue}
        isVisible={showFlashcard}
      />
    </div>
  );
};

export default Game;