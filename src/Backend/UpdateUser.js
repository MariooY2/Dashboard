import supabase from "./supabase";

async function updateUser( password, fullname) {
  try {
    const { data, error } = await supabase.auth.updateUser({
     
      password: password,
      data: { FullName: fullname },
    });

    if (error) {
      throw error;
    }

    console.log("User updated successfully:", data);
    return { success: true, data };
  } catch (error) {
    console.error("Error updating user:", error.message);
    return { success: false, error: error.message };
  }
}
export default updateUser;
