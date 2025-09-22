import { useState } from "react";
import { Crown, Waves, Anchor } from "lucide-react";
import Game from "@/components/Game";
import heroImage from "@/assets/kenya-coast-hero.jpg";
import CursorItem from "./Cursor";

const Home = () => {
  const [gameStarted, setGameStarted] = useState(false);

  if (gameStarted) {
    return <Game />;
  }

  return (
    <div 
      className="min-h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
        <CursorItem/>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
      
      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto p-6">
        <div className="glass-card p-12 text-center">
          {/* Presidential Header */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <Crown className="w-12 h-12 text-yellow-300" />
            <Waves className="w-10 h-10 text-blue-300" />
            <Anchor className="w-10 h-10 text-blue-400" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Being President for a Day:<br />
            <span className="text-blue-300">Kenya's Blue Economy</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 max-w-2xl">
            Welcome, President! Today, the fate of Kenya's oceans, economy, and people rests in your hands. 
            From the bustling ports of Mombasa to the pristine coral reefs of Kisite-Mpunguti, every decision 
            you make will impact the country's economy, the well-being of its citizens, and the health of its marine ecosystems.
          </p>

          <div className="mb-8 p-6 bg-white/10 rounded-xl border border-white/20">
            <p className="text-white/90 leading-relaxed">
              You'll face real-world challenges in fisheries, coastal protection, renewable energy, and marine conservation. 
              Choose wisely: short-term gains may come at the cost of sustainability, while thoughtful policies can secure 
              a thriving Blue Economy for generations.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">Can you balance:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">💰</span>
                </div>
                <span className="text-white/80 font-medium">Economy</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">👥</span>
                </div>
                <span className="text-white/80 font-medium">People</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">❤️</span>
                </div>
                <span className="text-white/80 font-medium">Health</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🌱</span>
                </div>
                <span className="text-white/80 font-medium">Ecology</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => setGameStarted(true)}
            className="glass-button text-xl px-12 py-4 font-bold text-white hover:scale-105 transition-all duration-300"
          >
            Start Your Presidential Day
          </button>

          <p className="text-white/70 text-sm mt-4">
            Make decisions, see the consequences, and learn how Kenya's Blue Economy works in the real world.
          </p>
        </div>
      </div>
      <CursorItem/>
    </div>
  );
};

export default Home;
