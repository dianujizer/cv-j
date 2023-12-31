import React from 'react';

export const GS = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 20 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="currentColor"
        d="M2,3v18c0,0.55,0.45,1,1,1h14c0.55,0,1-0.45,1-1V3c0-0.55-0.45-1-1-1H3C2.45,2,2,2.45,2,3z M16,19H4V5h12V19z M6,7v2h8V7H6z M6,11v2h8v-2H6z"
      />
    </svg>
  );
};