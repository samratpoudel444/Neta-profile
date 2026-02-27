export const Logo = () => {
  return (
    <>
      <style>{`
        @keyframes colorShift {
          0%, 100% { background-color: #60a5fa; }
          50% { background-color: #2563eb; }
        }
        @keyframes textColorShift {
          0%, 100% { color: #60a5fa; }
          50% { color: #2563eb; }
        }
        .logo-icon { animation: colorShift 3s ease-in-out infinite; }
        .logo-text { animation: textColorShift 3s ease-in-out infinite; }
      `}</style>

      <div className="inline-flex items-center gap-2">
        <div className="logo-icon w-8 h-8 rounded-lg flex items-center justify-center shrink-0">
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <path
              d="M3 17V3L17 17V3"
              stroke="white"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <a className="logo-text text-base font-bold tracking-tight">
          Neta Profile
        </a>
      </div>
    </>
  );
};
