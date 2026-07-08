// supabase-config.js — Supabase connection settings
// Settings → API → Project API keys
const SB_URL = 'https://wnaxoeyrevkxomdpipwt.supabase.co';
const SB_KEY = 'sb_publishable_ldIVyeCFyglVQFIMUcIYDg_stvogyyT';

// Initialize Supabase Client if supabase library is loaded and keys are configured
if (typeof supabase !== 'undefined' && SB_URL && SB_KEY) {
  window.sb = supabase.createClient(SB_URL, SB_KEY);
}

