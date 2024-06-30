import * as React from "react"
import Svg, { SvgProps, Defs, ClipPath, Path, G, Image } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    width={272.335}
    height={172.655}
    {...props}
  >
    <Defs>
      <ClipPath id="a">
        <Path
          fill="none"
          d="m49.298.005-.607 1.233L-.002 172.655h50.529L102.326.005Z"
          data-name="Trac\xE9 183"
        />
      </ClipPath>
      <ClipPath id="b">
        <Path
          fill="none"
          d="M0 0h103.355v173.614H0z"
          data-name="Rectangle 95"
        />
      </ClipPath>
      <ClipPath id="c">
        <Path
          fill="none"
          d="M0 0h103.356v173.614H0z"
          data-name="Rectangle 94"
        />
      </ClipPath>
      <ClipPath id="d">
        <Path
          fill="none"
          d="M0 .005v46.86h45.629v125.79h49.33V46.865h45.632V.005Z"
          data-name="Trac\xE9 184"
        />
      </ClipPath>
      <ClipPath id="e">
        <Path
          fill="none"
          d="M0 0h141.678v173.614H0z"
          data-name="Rectangle 98"
        />
      </ClipPath>
      <ClipPath id="f">
        <Path
          fill="none"
          d="m0 .005 51.795 172.65h45.648l-15.306-54.263L53.03.005Z"
          data-name="Trac\xE9 185"
        />
      </ClipPath>
      <ClipPath id="g">
        <Path
          fill="none"
          d="M0 0h98.129v173.613H0z"
          data-name="Rectangle 101"
        />
      </ClipPath>
    </Defs>
    <G data-name="Groupe 248">
      <G data-name="Groupe 233">
        <G
          clipPath="url(#a)"
          data-name="Groupe 232"
          transform="translate(170.009)"
        >
          <G
            data-name="Groupe 231"
            style={{
              isolation: "isolate",
            }}
          >
            <G data-name="Groupe 230">
              <G
                clipPath="url(#b)"
                data-name="Groupe 229"
                transform="translate(-.452 -.388)"
              >
                <G data-name="Groupe 228">
                  <G clipPath="url(#c)" data-name="Groupe 227">
                    <Image
                      xlinkHref="data:image/png;base64,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"
                      width={103.356}
                      height={173.614}
                      data-name="Rectangle 93"
                    />
                  </G>
                </G>
              </G>
            </G>
          </G>
        </G>
      </G>
      <G data-name="Groupe 240">
        <G clipPath="url(#d)" data-name="Groupe 239">
          <G
            data-name="Groupe 238"
            style={{
              isolation: "isolate",
            }}
          >
            <G data-name="Groupe 237">
              <G
                clipPath="url(#e)"
                data-name="Groupe 236"
                transform="translate(-.572 -.388)"
              >
                <G data-name="Groupe 235">
                  <G clipPath="url(#e)" data-name="Groupe 234">
                    <Image
                      xlinkHref="data:image/png;base64,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"
                      width={141.678}
                      height={173.614}
                      data-name="Rectangle 96"
                    />
                  </G>
                </G>
              </G>
            </G>
          </G>
        </G>
      </G>
      <G data-name="Groupe 247">
        <G
          clipPath="url(#f)"
          data-name="Groupe 246"
          transform="translate(108.316)"
        >
          <G
            data-name="Groupe 245"
            style={{
              isolation: "isolate",
            }}
          >
            <G data-name="Groupe 244">
              <G
                clipPath="url(#g)"
                data-name="Groupe 243"
                transform="translate(-.308 -.388)"
              >
                <G data-name="Groupe 242">
                  <G clipPath="url(#g)" data-name="Groupe 241">
                    <Image
                      xlinkHref="data:image/png;base64,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"
                      width={98.129}
                      height={173.613}
                      data-name="Rectangle 99"
                    />
                  </G>
                </G>
              </G>
            </G>
          </G>
        </G>
      </G>
    </G>
  </Svg>
)
export default SvgComponent