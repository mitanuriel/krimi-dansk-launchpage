// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://mtpxiisycmrnnxbddhss.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10cHhpaXN5Y21ybm54YmRkaHNzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQxMDU4ODYsImV4cCI6MjA1OTY4MTg4Nn0.yOu-JEsY2b_Hj-WjX4xRTjr1HIvWBg404b1g_JE7geU";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);