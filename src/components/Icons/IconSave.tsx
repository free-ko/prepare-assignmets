import React from 'react';

const IconSave = ({ isSaved }: { isSaved: boolean }) => {
  return isSaved ? (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_3004_28)">
        <path
          d="M16.5 4C14.76 4 13.09 4.81 12 6.09C10.91 4.81 9.24 4 7.5 4C4.42 4 2 6.42 2 9.5C2 13.28 5.4 16.36 10.55 21.04L11.3271 21.742C11.7089 22.087 12.2901 22.0859 12.6706 21.7395L13.45 21.03C18.6 16.36 22 13.28 22 9.5C22 6.42 19.58 4 16.5 4Z"
          fill="#F94987"
        />
      </g>
      <defs>
        <clipPath id="clip0_3004_28">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ) : (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_3004_40)">
        <path
          d="M16.5 4C14.76 4 13.09 4.81 12 6.09C10.91 4.81 9.24 4 7.5 4C4.42 4 2 6.42 2 9.5C2 13.28 5.4 16.36 10.55 21.04L11.3271 21.742C11.7089 22.087 12.2901 22.0859 12.6706 21.7395L13.45 21.03C18.6 16.36 22 13.28 22 9.5C22 6.42 19.58 4 16.5 4Z"
          fill="#6B6B72"
        />
      </g>
      <defs>
        <clipPath id="clip0_3004_40">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconSave;
