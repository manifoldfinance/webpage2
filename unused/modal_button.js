<a
  className="absolute group"
  to="#0"
  onClick={(e) => {
    e.preventDefault();
    setVideoModalOpen(true);
  }}
  aria-controls="modal"
>
  <svg
    className="w-16 h-16 sm:w-20 sm:h-20 hover:opacity-75 transition duration-150 ease-in-out"
    viewBox="0 0 88 88"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient x1="78.169%" y1="9.507%" x2="24.434%" y2="90.469%" id="a">
        <stop stopColor="#EBF1F5" stopOpacity=".8" offset="0%" />
        <stop stopColor="#EBF1F5" offset="100%" />
      </linearGradient>
    </defs>
    <circle fill="url(#a)" cx="44" cy="44" r="44" />
    <path
      className="fill-current text-purple-600"
      d="M52 44a.999.999 0 00-.427-.82l-10-7A1 1 0 0040 37V51a.999.999 0 001.573.82l10-7A.995.995 0 0052 44V44c0 .001 0 .001 0 0z"
    />
  </svg>
</a>;
