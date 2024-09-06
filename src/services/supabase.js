import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://jdyjwauhxbpwbsyzgtku.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpkeWp3YXVoeGJwd2JzeXpndGt1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUxNzYwMzUsImV4cCI6MjA0MDc1MjAzNX0.DQ4vJC2OlXcFxS1pjZRNBJvgOE8Lmp9JB2XrgLeEFA4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
