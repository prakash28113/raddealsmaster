// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://ugdctzmulkfmiwfmnwon.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVnZGN0em11bGtmbWl3Zm1ud29uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkxMTIwNjEsImV4cCI6MjA2NDY4ODA2MX0.jn9UuakWG3Yu9S-NfY8SSy1Z2W4cSb4bTNhVIEgo8dI";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);