"use client";

import SmoothScroll from "./SmoothScroll";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SmoothScroll>{children}</SmoothScroll>;
}