import supabase from "./supabase";

export default async function Sign({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw new Error(error.message);

  console.log(data);
  return data,error;
}
