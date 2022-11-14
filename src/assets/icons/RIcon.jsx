import * as React from "react"

const RIcon = (props) => (
  <svg
    width={120}
    height={100}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path  d="M0 0h120v100H0z" />
      <ellipse
        cx={60}
        cy={50}
        rx={55}
        ry={50}
        fill="#4BBD9B"
        fillOpacity={0.5}
      />
      <circle cx={50} cy={50} r={50} fill="#4BBD9B" />
      <path
        d="M47.022 72.288c-.264 0-.588-.024-.972-.072l-1.188-.072.18-4.644c.384 0 .756.012 1.116.036.36.024.624.036.792.036.888 0 1.584-.348 2.088-1.044.528-.696.792-1.704.792-3.024V44.892h5.508v18.612c0 1.704-.348 3.216-1.044 4.536-.696 1.344-1.668 2.388-2.916 3.132-1.248.744-2.7 1.116-4.356 1.116Z"
        fill="#fff"
      />
    </g>
 
  </svg>
)

export default RIcon
