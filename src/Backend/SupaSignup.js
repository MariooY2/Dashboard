import supabase from "./supabase";
import { useDispatch } from "react-redux";

async function Sign({ fullname,email, password }) {
  console.log(email);
  console.log(password);
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        FullName: fullname,
        avatar: "",
      },
    },
  });

  console.log(data);
  if (error) {
   
    throw new Error(error.message);
  }
  console.log(data);
  return data;
}

export default Sign;
