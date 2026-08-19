import React from "react";

const BILIBILI_IMG = "https://cloudflarecnimg.scdn.io/i/6a85139305b4d_1787106195.png";

const BilibiliIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 24,
  className = "",
}) => (
  <img
    src={BILIBILI_IMG}
    alt="Bilibili"
    width={size}
    height={size}
    className={className}
    style={{ objectFit: "contain" }}
  />
);

export default BilibiliIcon;
