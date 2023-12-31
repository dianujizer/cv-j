import React from 'react';

export const GS = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 20 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="currentColor"
        d="M12,2 L2,8 l10,6 l10,-6 L12,2 z M12,14 l6,0 0,-6 -6,3 -6,-3 0,6 6,0 z"
      />
    </svg>
  );
};