interface GameParameterBarProps {
  label: string;
  value: number;
  max: number;
  color: string;
  icon: React.ReactNode;
}

const GameParameterBar = ({ label, value, max, color, icon }: GameParameterBarProps) => {
  const percentage = Math.max(0, Math.min(100, (value / max) * 100));
  
  return (
    <div className="glass-card p-4 w-full">
      <div className="flex items-center gap-3 mb-2">
        <div className="text-white/80">
          {icon}
        </div>
        <span className="font-semibold text-white/90">{label}</span>
      </div>
      <div className="parameter-bar">
        <div 
          className={`parameter-fill ${color}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="text-sm text-white/70 mt-1">
        {value}/{max}
      </div>
    </div>
  );
};

export default GameParameterBar;