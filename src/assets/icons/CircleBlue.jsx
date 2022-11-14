import * as React from "react"

const CircleBlue = () => (
  <svg width={712} height={566} fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#a)">
      <ellipse cx={350.5} cy={263} rx={330.5} ry={268} fill="url(#b)" />
    </g>
    <defs>
      <radialGradient
        id="b"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0 268 -330.5 0 350.5 263)"
      >
        <stop stopColor="#36B5B0" stopOpacity={0.51} />
        <stop offset={1} stopColor="#D9D9D9" stopOpacity={0} />
      </radialGradient>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h712v566H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default CircleBlue
