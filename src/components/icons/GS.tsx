import React from 'react';

export const ScholarIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="currentColor"
        d="M12,2L1,7l11,5l11-5L12,2z M12,13L1,8v6l11,5l11-5V8L12,13z"
      />
    </svg>
  );
};