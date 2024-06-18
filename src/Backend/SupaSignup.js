import supabase from "./supabase";

async function Sign({ fullname, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        FullName: fullname,
        
      },
    },
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export default Sign;
