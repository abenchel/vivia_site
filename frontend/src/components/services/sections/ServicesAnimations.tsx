export default function ServicesAnimations() {
  return (
    <style jsx>{`
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
      }

      @keyframes float-delayed {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-30px); }
      }

      @keyframes shimmer {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }

      @keyframes gradient {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
      }

      @keyframes fade-in-up {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .animate-float {
        animation: float 6s ease-in-out infinite;
      }

      .animate-float-delayed {
        animation: float-delayed 8s ease-in-out infinite;
      }

      .animate-shimmer {
        animation: shimmer 3s ease-in-out infinite;
      }

      .animate-gradient {
        background-size: 200% 200%;
        animation: gradient 3s ease infinite;
      }

      .animate-fade-in-up {
        animation: fade-in-up 0.8s ease-out forwards;
      }
    `}</style>
  );
}
