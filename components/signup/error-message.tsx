import React from 'react';

export function ErrorMessage({ errMessage }: { errMessage?: string }) {
  return (
    <span
      className={`${
        errMessage ? 'hidden' : ''
      } text-sm text-red-500 transition-opacity duration-150 fade-in-100 fade-out-0 lg:text-base`}
    >
      {errMessage}
    </span>
  );
}
