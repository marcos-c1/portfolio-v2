"use client";
import { CertList } from "@/components/cert";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense>
      <CertList />
    </Suspense>
  );
}
