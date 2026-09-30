type InstagramBrandIconProps = {
  className?: string;
  size?: number;
};

export default function InstagramBrandIcon({
  className,
  size = 24,
}: InstagramBrandIconProps) {
  const gradientId = `instagram-gradient-${size}`;

  return (
    <svg
      aria-hidden="true"
      className={className}
      height={size}
      viewBox="0 0 24 24"
      width={size}
    >
      <defs>
        <radialGradient id={gradientId} cx="30%" cy="107%" r="150%">
          <stop offset="0%" stopColor="#ffd600" />
          <stop offset="28%" stopColor="#ff7a00" />
          <stop offset="52%" stopColor="#ff0169" />
          <stop offset="78%" stopColor="#d300c5" />
          <stop offset="100%" stopColor="#7638fa" />
        </radialGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill={`url(#${gradientId})`} />
      <rect
        x="5.25"
        y="5.25"
        width="13.5"
        height="13.5"
        rx="4.25"
        fill="none"
        stroke="white"
        strokeWidth="1.8"
      />
      <circle
        cx="12"
        cy="12"
        r="3.25"
        fill="none"
        stroke="white"
        strokeWidth="1.8"
      />
      <circle cx="16.75" cy="7.4" r="1.05" fill="white" />
    </svg>
  );
}
