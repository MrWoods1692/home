import React from "react";

const LINUXDO_IMG = "https://cloudflarecnimg.scdn.io/i/6a8513b461647_1787106228.png";

const LinuxDoIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 24,
  className = "",
}) => (
  <img
    src={LINUXDO_IMG}
    alt="LinuxDo"
    width={size}
    height={size}
    className={className}
    style={{ objectFit: "contain" }}
  />
);

export default LinuxDoIcon;
