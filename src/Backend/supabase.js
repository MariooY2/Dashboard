import { createClient } from '@supabase/supabase-js'

const obj=import.meta.env
const supabaseUrl = 'https://xmjkcphldqqnggvngfbz.supabase.co'
const supabaseKey = obj.VITE_SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;