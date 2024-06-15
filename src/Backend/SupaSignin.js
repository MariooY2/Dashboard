import supabase from "./supabase";
import { useDispatch } from "react-redux";
import { savedata,cleardata } from "../store/account";
export default async function Sign({ email, password }) {
  //const dispatch=useDispatch();
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error){ 
   // dispatch(cleardata())
    throw new Error(error.message);
  }
  //dispatch(savedata(data))
  console.log(data);
  return data;
}
