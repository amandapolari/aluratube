import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://wplsdwolmqhqplteeopv.supabase.co";
const PUBLIC_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndwbHNkd29sbXFocXBsdGVlb3B2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM0NDc1NzEsImV4cCI6MTk4OTAyMzU3MX0.pOuXqDwqigKzI7iSmVjwkBD0bU2G-FcdtQekOMgyMaw";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
  return {
    getAllVideos() {
      return supabase.from("video").select("*");
    },
  };
}
