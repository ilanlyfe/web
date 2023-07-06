import useSWR from "swr";
import type { Guest, Events } from "@/interfaces";

export default function useEvents(user: Guest | undefined) {
  // We do a request to /api/events only if the user is logged in
  const { data: events } = useSWR<Events>(
    user?.isLoggedIn ? `/api/events` : null,
  );

  return { events };
}
