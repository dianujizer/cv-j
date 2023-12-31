import React from 'react';

export const GS = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 20 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="currentColor"
        d="M5.5,2H14c0.8,0,1.5,0.7,1.5,1.5V20c0,0.8-0.7,1.5-1.5,1.5H5.5C4.7,21.5,4,20.8,4,20V3.5C4,2.7,4.7,2,5.5,2z M13,4h-1V3h1V4z M7,8h6v1H7V8z M7,11h6v1H7v-1z M7,14h4v1H7v-1z"
      />
    </svg>
  );
};