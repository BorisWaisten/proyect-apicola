function SvgArgentinianFlag() {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      className="icon language-icon"
    >
      {/* Franja superior azul */}
      <path
        fill="#6DAEDB"
        d="M496.077,166.957C459.906,69.473,366.071,0,256,0S52.094,69.473,15.923,166.957H496.077z"
      />
      {/* Franja del medio blanca */}
      <path
        fill="#FFFFFF"
        d="M0,256c0,31.314,5.633,61.31,15.923,89.043h480.154C506.367,317.31,512,287.314,512,256
      s-5.633-61.31-15.923-89.043H15.923C5.633,194.69,0,224.686,0,256z"
      />
      {/* Franja inferior azul */}
      <path
        fill="#6DAEDB"
        d="M15.923,345.043C52.094,442.527,145.929,512,256,512s203.906-69.473,240.077-166.957H15.923z"
      />
      {/* Sol en el centro */}
      <circle cx="256" cy="256" r="40" fill="#FFCC4D" />
    </svg>
  );
}

export { SvgArgentinianFlag };
