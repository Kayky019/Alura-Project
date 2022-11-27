import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://fotrjdlvtyrkvrbjsizt.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZvdHJqZGx2dHlya3ZyYmpzaXp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyMTg1NjMsImV4cCI6MTk4Mzc5NDU2M30.AmOE7gIF4DruXmK8eHrnyJwRlOzXs36FNqWXE1mjrLY";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                    .select("*");
                    }
        }
    }