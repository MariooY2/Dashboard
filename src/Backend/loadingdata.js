import supabase from "./supabase"

async function readrows() {
    let { data: guests, error } = await supabase.from("guests").select("*");
    if (error) {
      console.error("Error fetching guests:", error);
    } else {
      console.log("Guests:", guests);
    }
  }


readrows()

  export default readrows;