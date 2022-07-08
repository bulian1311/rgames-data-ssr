import * as React from "react";
import { SVGProps } from "react";

export const ThIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1200 1200"
    xmlSpace="preserve"
    {...props}
  >
    <path d="M0 0v300h300V0H0zm450 0v300h300V0H450zm450 0v300h300V0H900zM0 450v300h300V450H0zm450 0v300h300V450H450zm450 0v300h300V450H900zM0 900v300h300V900H0zm450 0v300h300V900H450zm450 0v300h300V900H900z" />
  </svg>
);
