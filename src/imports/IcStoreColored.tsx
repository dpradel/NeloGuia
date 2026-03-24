import svgPaths from "./svg-yedvwofdtj";

export default function IcStoreColored() {
  return (
    <div className="relative size-full" data-name="ic-store-colored">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <path d={svgPaths.p2cb50100} fill="url(#paint0_radial_2_3398)" id="Secondary" />
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="translate(9.99995 19.9993) rotate(-90) scale(20 25.8454)" gradientUnits="userSpaceOnUse" id="paint0_radial_2_3398" r="1">
            <stop stopColor="#125CE0" />
            <stop offset="1" stopColor="#00CB8D" />
          </radialGradient>
        </defs>
      </svg>
      <div className="absolute inset-[16.67%_8.33%_0_8.75%]" data-name="Primary">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5833 16.6667">
          <path d={svgPaths.p19254400} fill="var(--fill-0, white)" id="Primary" />
        </svg>
      </div>
    </div>
  );
}