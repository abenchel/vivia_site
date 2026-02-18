type BackgroundEffectsProps = {
  mousePosition: { x: number; y: number };
};

export default function BackgroundEffects({ mousePosition }: BackgroundEffectsProps) {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <div
        className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-cyan-500/5 animate-pulse"
        style={{ animationDuration: "8s" }}
      />
      <div
        className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-violet-500/20 to-purple-500/20 blur-3xl transition-all duration-1000 ease-out"
        style={{ left: mousePosition.x - 192, top: mousePosition.y - 192 }}
      />
    </div>
  );
}
