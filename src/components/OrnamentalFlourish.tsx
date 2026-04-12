const OrnamentalFlourish = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <svg
        width="60"
        height="12"
        viewBox="0 0 60 12"
        fill="none"
        className="text-primary/20"
      >
        <path
          d="M0 6C10 6 10 1 20 1C30 1 30 11 40 11C50 11 50 6 60 6"
          stroke="currentColor"
          strokeWidth="0.8"
          fill="none"
        />
      </svg>
      <svg
        width="8"
        height="8"
        viewBox="0 0 8 8"
        className="text-primary/25"
      >
        <path
          d="M4 0L5.5 2.5L8 4L5.5 5.5L4 8L2.5 5.5L0 4L2.5 2.5L4 0Z"
          fill="currentColor"
        />
      </svg>
      <svg
        width="60"
        height="12"
        viewBox="0 0 60 12"
        fill="none"
        className="text-primary/20 scale-x-[-1]"
      >
        <path
          d="M0 6C10 6 10 1 20 1C30 1 30 11 40 11C50 11 50 6 60 6"
          stroke="currentColor"
          strokeWidth="0.8"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default OrnamentalFlourish;
