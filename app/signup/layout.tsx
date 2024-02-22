'use client';

import React from 'react';

import { SignUpContextProvider } from '@/components/signup/context';

export default function SignUpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SignUpContextProvider>{children}</SignUpContextProvider>
    </>
  );
}
