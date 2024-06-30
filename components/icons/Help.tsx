import * as React from "react"
import Svg, { SvgProps, Defs, ClipPath, Path, G } from "react-native-svg"
const HelpIconSvg = (props: SvgProps) => (
  <Svg
    width={18.35}
    height={26.653}
    {...props}
  >
    <Defs>
      <ClipPath id="a">
        <Path fill="none" d="M-2-2h18.35v26.653H-2z" data-name="Rectangle 81" />
      </ClipPath>
    </Defs>
    <G data-name="Groupe 203">
      <G clipPath="url(#a)" data-name="Groupe 202" transform="translate(2 2)">
        <Path
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          d="M3.924 15.33v-4.759a1.217 1.217 0 0 1 1.234-1.209h.013a4.253 4.253 0 0 0 3.005-1.087 3.166 3.166 0 0 0 .831-2.142 2.539 2.539 0 0 0-.672-1.855 2.226 2.226 0 0 0-1.662-.639 2.26 2.26 0 0 0-1.63.575 2.612 2.612 0 0 0-.7 1.91.171.171 0 0 1-.167.168H.36a.173.173 0 0 1-.173-.175 6.689 6.689 0 0 1 1.6-4.14A6.625 6.625 0 0 1 6.834.187a6.318 6.318 0 0 1 4.667 1.63 5.89 5.89 0 0 1 1.662 4.412 5.49 5.49 0 0 1-1.63 4.124 6.331 6.331 0 0 1-3.5 1.769.169.169 0 0 0-.146.165v3.043a.17.17 0 0 1-.17.17H4.094a.17.17 0 0 1-.17-.17Zm2.421 2.188a2.438 2.438 0 0 1 2.019 2.017 2.553 2.553 0 0 1-2.9 2.9 2.439 2.439 0 0 1-2.018-2.017 2.553 2.553 0 0 1 2.899-2.9Z"
          data-name="Trac\xE9 164"
        />
      </G>
    </G>
  </Svg>
)
export default HelpIconSvg
