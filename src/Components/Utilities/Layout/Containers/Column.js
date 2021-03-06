import React from 'react'

export default function Column({ children, size, className, offset, ...props}) {
  let clsNm = ``
  if(typeof size === "object") {
    for (const [key, value] of Object.entries(size)) {
      if (key === 'xs') {
        clsNm += `col-${value} `
        continue
      }
      clsNm += `col-${key}-${value} `
    }
  } else {
    clsNm = size ? `col-${size} ` : `col-12`
  }

  if (offset) {
    if(typeof offset === "object") {
      for (const [key, value] of Object.entries(offset)) {
      if (key === 'xs') {
        clsNm += `offset-${value} `
        continue
      }
        clsNm += `offset-${key}-${value} `
      }
    } else {
      clsNm += offset ? `offset-${offset}` : ``
    }
  }
  clsNm = `${clsNm} ${className}`
  return (
    <div {...props} className={clsNm}>
      {children}
    </div>
  )
}