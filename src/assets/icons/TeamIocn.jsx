import * as React from "react"

const TeamIcon = (props) => (
  <svg
    width={'100%'}
    height={127}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#a)">
      <rect x={4} width={55} height={119} rx={5} fill="#fff" />
    </g>
    <defs>
      <filter
        id="a"
        x={0}
        y={0}
        width={63}
        height={127}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_216_735" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_216_735"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)

export default TeamIcon
