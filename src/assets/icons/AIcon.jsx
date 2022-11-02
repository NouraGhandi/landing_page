import * as React from "react"

const AIcon = (props) => (
  <svg
    width={120}
    height={100}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path fill="#fff" d="M0 0h120v100H0z" />
      <ellipse
        cx={60}
        cy={50}
        rx={55}
        ry={50}
        fill="#F7956E"
        fillOpacity={0.5}
      />
      <circle cx={50} cy={50} r={50} fill="#F7956E" />
      <path
        d="M48.762 63V37.692h5.472V63h-5.472Zm.396-28.404c-.48-.576-.852-1.128-1.116-1.656a3.958 3.958 0 0 1-.36-1.656c0-.888.228-1.668.684-2.34a4.684 4.684 0 0 1 1.8-1.62 5.007 5.007 0 0 1 2.448-.612c.504 0 1.008.072 1.512.216.504.12.924.3 1.26.54L54.09 29.88a2.35 2.35 0 0 0-.684-.252 2.979 2.979 0 0 0-.648-.072c-.576 0-1.02.156-1.332.468-.312.312-.468.708-.468 1.188 0 .288.06.564.18.828s.3.528.54.792l-2.52 1.764Zm-2.304.36v-2.808h9.288v2.808h-9.288Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h120v100H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default AIcon
