import React from 'react';

export const GS = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 20 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="currentColor"
        d="M2,12l10-7l10,7l-10,7L2,12z M12,5v13"
      />
    </svg>
  );
};