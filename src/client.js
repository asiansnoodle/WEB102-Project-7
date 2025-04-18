import { createClient } from "@supabase/supabase-js";

const SBURL = import.meta.env.VITE_SBURL;
const SBKEY = import.meta.env.VITE_SBKEY;

export const supabase = createClient(SBURL, SBKEY);

