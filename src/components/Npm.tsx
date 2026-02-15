import type { FC } from "react";

export const Npm: FC<{ fill?: string; size?: string }> = ({
  fill = "currentColor",
  size = "24",
}) => (
  <svg height={size} role="presentation" viewBox="0 0 24 24" width={size}>
    <g fill={fill} fillRule="evenodd">
      <path d="M22,0 C23.1045695,0 24,0.8954305 24,2 L24,22 C24,23.1045695 23.1045695,24 22,24 L2,24 C0.8954305,24 0,23.1045695 0,22 L0,2 C0,0.8954305 0.8954305,2.22044605e-16 2,0 L22,0 Z M5.12963643,5.32354021 L5.11200881,19.1700331 L12.0396621,19.1700331 L12.0484759,8.79618068 L15.5034888,8.79618068 L15.494675,19.1788469 L18.9585017,19.1788469 L18.9673155,5.34116783 L5.12963643,5.32354021 Z" />
    </g>
  </svg>
);
