import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://bfwwbksiwxqiavxnivab.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmd3dia3Npd3hxaWF2eG5pdmFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA0NzYyNDUsImV4cCI6MjA1NjA1MjI0NX0.Fuld9erhYD4DtYKAY8P1_dUb1aSleHiQ66bGHb8ilmQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
