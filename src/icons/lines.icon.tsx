import * as React from 'react';
import { SVGProps } from 'react';

export const LinesIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1200 1200"
    xmlSpace="preserve"
    {...props}
  >
    <path d="M0 0v240h1200V0H0zm0 480v240h1200V480H0zm0 480v240h1200V960H0z" />
  </svg>
);
