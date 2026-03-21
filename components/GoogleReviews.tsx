"use client";

import { useEffect, useState } from "react";

interface Review {
  author: string;
  rating: number;
  text: string;
  time: number;
  profilePhoto?: string;
}

interface ReviewsData {
  rating: number;
  totalReviews: number;
  reviews: Review[];
}

function StarRating({ rating, size = "sm" }: { rating: number; size?: "sm" | "lg" }) {
  const starClass = size === "lg" ? "text-3xl" : "text-base";
  return (
    <span className={`${starClass} text-[#CC0000] leading-none`} aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i}>{i <= Math.round(rating) ? "★" : "☆"}</span>
      ))}
    </span>
  );
}

function ReviewSkeleton() {
  return (
    <div className="bg-[#0a0a0a] border border-[#222] p-6 animate-pulse">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-[#222]" />
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-[#222] rounded w-32" />
          <div className="h-3 bg-[#222] rounded w-20" />
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-3 bg-[#222] rounded w-full" />
        <div className="h-3 bg-[#222] rounded w-5/6" />
        <div className="h-3 bg-[#222] rounded w-4/6" />
      </div>
    </div>
  );
}

function Fallback() {
  return (
    <div className="text-center py-8">
      <a
        href="https://www.google.com/search?q=David+Zabinski+Fitness+Houston+reviews"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-[#CC0000] hover:underline text-lg font-semibold"
      >
        ⭐ See Our Google Reviews
      </a>
    </div>
  );
}

function formatDate(timestamp: number): string {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

function truncate(text: string, maxLen: number): { truncated: string; isCut: boolean } {
  if (text.length <= maxLen) return { truncated: text, isCut: false };
  return { truncated: text.slice(0, maxLen).trimEnd() + "…", isCut: true };
}

export default function GoogleReviews() {
  const [data, setData] = useState<ReviewsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const CACHE_KEY = "dzf_reviews_cache";
    const CACHE_TTL = 24 * 60 * 60 * 1000; // 24 hours

    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      try {
        const { data: cachedData, timestamp } = JSON.parse(cached);
        if (Date.now() - timestamp < CACHE_TTL) {
          setData(cachedData);
          setLoading(false);
          return;
        }
      } catch {
        // stale/invalid cache — refetch
      }
    }

    fetch("/api/reviews")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((json: ReviewsData) => {
        setData(json);
        localStorage.setItem(
          CACHE_KEY,
          JSON.stringify({ data: json, timestamp: Date.now() })
        );
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (error) return <Fallback />;

  return (
    <div className="w-full">
      {/* Overall rating header */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-10">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          {loading ? (
            <div className="animate-pulse flex items-center gap-4">
              <div className="h-16 w-16 bg-[#222] rounded" />
              <div className="space-y-2">
                <div className="h-8 bg-[#222] rounded w-24" />
                <div className="h-4 bg-[#222] rounded w-32" />
              </div>
            </div>
          ) : data ? (
            <>
              <div className="text-7xl font-black text-white leading-none">
                {data.rating.toFixed(1)}
              </div>
              <div className="flex flex-col gap-1">
                <StarRating rating={data.rating} size="lg" />
                <p className="text-[#a0a0a0] text-sm tracking-wide">
                  Based on{" "}
                  <span className="text-white font-semibold">
                    {data.totalReviews.toLocaleString()}
                  </span>{" "}
                  Google reviews
                </p>
              </div>
            </>
          ) : null}
        </div>

        <a
          href="https://www.google.com/search?q=David+Zabinski+Fitness+Houston+reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline whitespace-nowrap"
        >
          Read All Reviews on Google →
        </a>
      </div>

      {/* Review cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {loading
          ? Array.from({ length: 3 }).map((_, i) => <ReviewSkeleton key={i} />)
          : data?.reviews.slice(0, 5).map((review, i) => {
              const { truncated, isCut } = truncate(review.text, 200);
              return (
                <div
                  key={i}
                  className="bg-[#0a0a0a] border border-[#222] p-6 flex flex-col gap-3 hover:border-[#CC0000]/40 transition-colors duration-300"
                >
                  {/* Reviewer info */}
                  <div className="flex items-center gap-3">
                    {review.profilePhoto ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={review.profilePhoto}
                        alt={review.author}
                        className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-[#CC0000]/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-[#CC0000] font-bold text-sm">
                          {review.author.charAt(0).toUpperCase()}
                        </span>
                      </div>
                    )}
                    <div className="min-w-0">
                      <p className="text-white font-semibold text-sm truncate">
                        {review.author}
                      </p>
                      <p className="text-[#555] text-xs">{formatDate(review.time)}</p>
                    </div>
                  </div>

                  {/* Star rating */}
                  <StarRating rating={review.rating} size="sm" />

                  {/* Review text */}
                  <p className="text-[#a0a0a0] text-sm leading-relaxed flex-1">
                    {review.text ? (
                      <>
                        {truncated}
                        {isCut && (
                          <>
                            {" "}
                            <a
                              href="https://www.google.com/search?q=David+Zabinski+Fitness+Houston+reviews"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#CC0000] hover:underline text-xs font-semibold"
                            >
                              read more
                            </a>
                          </>
                        )}
                      </>
                    ) : (
                      <span className="italic text-[#555]">No text provided.</span>
                    )}
                  </p>

                  {/* Google badge */}
                  <div className="flex items-center gap-1 mt-auto pt-2 border-t border-[#1a1a1a]">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    <span className="text-[#444] text-xs">Google Review</span>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
}
