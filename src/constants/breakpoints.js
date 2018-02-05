import { css } from 'styled-components'

const breakpoints = {
  mobile: 320,
  tablet: 768,
  desktop: 1024,
  desktopHd: 1440
}

// Source: https://github.com/styled-components/styled-components/blob/master/docs/tips-and-tricks.md#media-templates
// iterate through the breakpoints and create a media template
export const media = Object.keys(breakpoints).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = breakpoints[label] / 16
  accumulator[label] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)}
    }
  `
  return accumulator
}, {})