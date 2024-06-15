import supabase from "./supabase";
import { useDispatch } from "react-redux";
import { savedata,cleardata } from "../store/account";

async function Sign({ fullname,email, password }) {
  //const dispatch=useDispatch();
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


  if (error) {
    //dispatch(cleardata())
    throw new Error(error.message);
  }
  //dispatch(savedata(data))
  return data;
}

export default Sign;
