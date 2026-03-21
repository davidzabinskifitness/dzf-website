import { NextResponse } from "next/server";

export const revalidate = 86400; // 24 hours

interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  profile_photo_url?: string;
}

interface GooglePlaceResult {
  name: string;
  rating: number;
  user_ratings_total: number;
  reviews?: GoogleReview[];
}

interface GooglePlacesResponse {
  result: GooglePlaceResult;
  status: string;
}

export async function GET() {
  const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
  const PLACE_ID = process.env.GOOGLE_PLACE_ID;

  // Graceful fallback if env vars aren't set yet
  if (!API_KEY || !PLACE_ID || API_KEY === "YOUR_API_KEY_HERE" || PLACE_ID === "YOUR_PLACE_ID_HERE") {
    return NextResponse.json(
      {
        error: "Google Places API not configured",
        rating: 5.0,
        totalReviews: 0,
        reviews: [],
      },
      { status: 200 } // 200 so the frontend shows fallback gracefully
    );
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,rating,user_ratings_total,reviews&key=${API_KEY}&reviews_sort=newest`;

    const res = await fetch(url, {
      next: { revalidate: 86400 }, // cache for 24 hours
    });

    if (!res.ok) {
      throw new Error(`Google API responded with ${res.status}`);
    }

    const data: GooglePlacesResponse = await res.json();

    if (data.status !== "OK") {
      throw new Error(`Google Places status: ${data.status}`);
    }

    const result = data.result;

    const reviews = (result.reviews ?? []).slice(0, 5).map((r) => ({
      author: r.author_name,
      rating: r.rating,
      text: r.text,
      time: r.time,
      profilePhoto: r.profile_photo_url ?? null,
    }));

    return NextResponse.json(
      {
        rating: result.rating,
        totalReviews: result.user_ratings_total,
        reviews,
      },
      {
        headers: {
          "Cache-Control": "s-maxage=86400, stale-while-revalidate=3600",
        },
      }
    );
  } catch (err) {
    console.error("[/api/reviews] Error fetching Google reviews:", err);
    return NextResponse.json(
      {
        error: "Failed to fetch reviews",
        rating: 5.0,
        totalReviews: 0,
        reviews: [],
      },
      { status: 200 } // return 200 so frontend degrades gracefully
    );
  }
}
