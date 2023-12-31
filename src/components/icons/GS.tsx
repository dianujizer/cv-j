import React from 'react';

export const GS = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 20 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="currentColor"
        d="M3,2v20c0,0,0,0,0,0h14c0,0,0,0,0,0V2c0,0,0,0,0,0H3C3,2,3,2,3,2z M5,4h10v16H5V4z M7,6v12h6V6H7z"
      />
    </svg>
  );
};