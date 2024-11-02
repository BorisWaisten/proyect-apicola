import './nav.css'
function SvgEnglishLanguage() {
  return (
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
         viewBox="0 0 512 512" xmlSpace="preserve" className=" rounded-full">
      {/* Definimos un círculo para el clip path */}
      <defs>
        <clipPath id="circleClip">
          <circle cx="256" cy="256" r="256" />
        </clipPath>
      </defs>

      {/* Fondo circular blanco */}
      <circle style={{ fill: "#FFFFFF" }} cx="256" cy="256" r="256" />

      {/* Contenido recortado dentro del círculo */}
      <g clipPath="url(#circleClip)">
        {/* Franjas rojas y blancas */}
        <rect y="110" width="512" height="42" style={{ fill: "#D80027" }} />
        <rect y="192" width="512" height="42" style={{ fill: "#D80027" }} />
        <rect y="274" width="512" height="42" style={{ fill: "#D80027" }} />
        <rect y="356" width="512" height="42" style={{ fill: "#D80027" }} />
        <rect y="438" width="512" height="42" style={{ fill: "#D80027" }} />
        <rect y="10" width="512" height="42" style={{ fill: "#D80027" }} />


        {/* Cuadro azul con estrellas */}
        <rect x="0" y="0" width="217" height="217" style={{ fill: "#3C3B6E" }} />
        <g fill="#FFFFFF">
          {[...Array(9)].map((_, row) =>
            [...Array(row % 2 === 0 ? 6 : 5)].map((_, col) => (
              <circle
                key={`${row}-${col}`}
                cx={20 + col * 36 + (row % 2 === 0 ? 0 : 18)}
                cy={20 + row * 30}
                r="10"
              />
            ))
          )}
        </g>
      </g>
    </svg>
  );
}

export { SvgEnglishLanguage }
