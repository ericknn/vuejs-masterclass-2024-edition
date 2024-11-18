import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  'https://qkizfdjfqalfixlwhcha.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFraXpmZGpmcWFsZml4bHdoY2hhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE2MDU3ODksImV4cCI6MjA0NzE4MTc4OX0.5TwglP88WaY8SB-jLWrzEvggkFbVec7c5OWzwZBK1Ho',
)
