// src/app/error.tsx
"use client";

import { useEffect } from "react";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  // Optional: log error to an analytics/Sentry endpoint
  useEffect(() => {
    console.error(error); // remove or replace with your own logger
  }, [error]);

  return (
    <main className="mx-auto lg:max-w-7xl text-center px-6 py-10 lg:px-8 lg:py-12">
      <h1 className="text-xl lg:text-3xl font-bold mb-5">
        Something went wrong
      </h1>

      <p className="text-stone-800 dark:text-stone-400">
        {error?.message ?? "Unknown error"}
      </p>

      <button
        type="button"
        onClick={() => reset()}
        className="mt-5 px-4 py-2 rounded-md bg-stone-800 text-stone-100
                   hover:bg-stone-700
                   dark:bg-stone-100 dark:text-stone-800 dark:hover:bg-stone-200
                   transition-colors"
      >
        Try Again
      </button>
    </main>
  );
}
