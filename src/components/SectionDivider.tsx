// Curved Wave Divider
export function WaveDivider() {
  return (
    <div className="relative w-full h-48 overflow-hidden">
      <svg 
        className="absolute inset-0 w-full h-full" 
        viewBox="0 0 1440 320" 
        preserveAspectRatio="none"
      >
        <path 
          fill="none" 
          stroke="url(#gradient)" 
          strokeWidth="2"
          d="M0,160 Q360,100 720,160 T1440,160" 
          opacity="0.3"
        />
        <path 
          fill="none" 
          stroke="url(#gradient2)" 
          strokeWidth="2"
          d="M0,180 Q360,240 720,180 T1440,180" 
          opacity="0.3"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--secondary))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--secondary))" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center gap-12">
        <div className="w-4 h-4 rounded-full bg-primary/60 animate-pulse" />
        <div className="w-6 h-6 rounded-full border-2 border-primary/40" />
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 animate-pulse" style={{ animationDelay: '0.3s' }} />
        <div className="w-6 h-6 rounded-full border-2 border-secondary/40" />
        <div className="w-4 h-4 rounded-full bg-secondary/60 animate-pulse" style={{ animationDelay: '0.6s' }} />
      </div>
    </div>
  );
}

// Dots Pattern Divider
export function DotsDivider() {
  return (
    <div className="relative w-full h-48 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="grid grid-cols-12 gap-4">
          {[...Array(12)].map((_, i) => (
            <div 
              key={i} 
              className="w-2 h-2 rounded-full bg-primary/40 animate-pulse"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
      </div>
    </div>
  );
}

// Diamond Pattern Divider
export function DiamondDivider() {
  return (
    <div className="relative w-full h-48 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center gap-8">
        <div className="w-3 h-3 rotate-45 border-2 border-primary/40 animate-pulse" />
        <div className="w-5 h-5 rotate-45 bg-primary/20" style={{ animationDelay: '0.2s' }} />
        <div className="w-8 h-8 rotate-45 border-2 border-secondary/40 animate-pulse" />
        <div className="w-12 h-12 rotate-45 bg-gradient-to-br from-primary/10 to-secondary/10 animate-pulse" style={{ animationDelay: '0.4s' }} />
        <div className="w-8 h-8 rotate-45 border-2 border-secondary/40 animate-pulse" />
        <div className="w-5 h-5 rotate-45 bg-primary/20" style={{ animationDelay: '0.2s' }} />
        <div className="w-3 h-3 rotate-45 border-2 border-primary/40 animate-pulse" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-96 h-96 bg-primary/5 rotate-45 blur-3xl" />
      </div>
    </div>
  );
}

// Circular Ripple Divider
export function RippleDivider() {
  return (
    <div className="relative w-full h-48 overflow-hidden">
      {/* Animated lightning/energy lines */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg className="w-full h-full" viewBox="0 0 1440 192" preserveAspectRatio="none">
          <path
            d="M0,96 L200,96 L240,60 L280,96 L360,96 L400,130 L440,96 L720,96 L760,70 L800,96 L1000,96 L1040,120 L1080,96 L1440,96"
            stroke="url(#energyGrad)"
            strokeWidth="2"
            fill="none"
            opacity="0.6"
          />
          <path
            d="M0,96 L150,96 L190,110 L230,96 L400,96 L450,80 L500,96 L720,96 L770,105 L820,96 L1100,96 L1150,85 L1200,96 L1440,96"
            stroke="url(#energyGrad2)"
            strokeWidth="2"
            fill="none"
            opacity="0.4"
          />
          <defs>
            <linearGradient id="energyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
              <stop offset="25%" stopColor="hsl(var(--primary))" stopOpacity="1" />
              <stop offset="75%" stopColor="hsl(var(--secondary))" stopOpacity="1" />
              <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="energyGrad2" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--secondary))" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(var(--secondary))" stopOpacity="1" />
              <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Glowing particles */}
      <div className="absolute inset-0 flex items-center justify-around px-12">
        <div className="w-3 h-3 rounded-full bg-primary glow-cyan animate-pulse" />
        <div className="w-2 h-2 rounded-full bg-secondary glow-purple animate-pulse" style={{ animationDelay: '0.3s' }} />
        <div className="w-4 h-4 rounded-full bg-primary/80 glow-cyan animate-pulse" style={{ animationDelay: '0.6s' }} />
        <div className="w-2 h-2 rounded-full bg-secondary/80 glow-purple animate-pulse" style={{ animationDelay: '0.9s' }} />
        <div className="w-3 h-3 rounded-full bg-primary glow-cyan animate-pulse" style={{ animationDelay: '1.2s' }} />
      </div>

      {/* Energy burst effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      </div>
    </div>
  );
}

export default WaveDivider;
