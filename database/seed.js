/* eslint-env node */
import { createClient } from '@supabase/supabase-js'
import { faker } from '@faker-js/faker'

// Create a single supabase client for interacting with your database
export const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.SERVICE_ROLE_KEY)

console.log(supabase)
