import supabase from "./supabase";

async function ReadImage(email) {
  try {
    const { data: Profile, error } = await supabase.from("Profile").select("*").eq('email', email);
    if (error) {
        throw error;
      }
  
      if (Profile.length > 0) {
        // Image link(s) found
        console.log("Profile with Image:", Profile[0].image);
        return Profile[0].image
      } else {
        // No image link found
        console.log("No Image found for this user.");
        return false
      }
    } catch (error) {
      console.error("Error Reading Image:", error.message);
      return false
    }
  }

  async function updateProfileImage(email, imageUrl) {
    try {
      const { data, error } = await supabase
        .from('Profile')
        .update({ image: imageUrl })
        .eq('email', email)
        .select("*");
  
      if (error) {
        throw error;
      }
  
      console.log("Profile updated:", data);
      return data;
    } catch (error) {
      console.error("Error updating profile image:", error.message);
      return null;
    }
  }


async function AddImage(uid, image,email) {
  try {
    const { data, error } = await supabase
      .from("Profile")
      .insert([{ image: image, uid: uid, email:email }])
      .select();
      if (error) {
        throw error;
      }
      console.log(data)
  } catch (error) {
    console.error("Error", error.message);
  }
}

async function UploadImage(file, uid) {
  try {
    const { data, error } = await supabase.storage
      .from("test")
      .upload(`${uid}/${file.name}`, file);

    if (error) {
      throw error;
    }

    console.log("Upload successful:", data);
  } catch (error) {
    console.error("Error uploading file:", error.message);
  }
}

export { UploadImage, ReadImage,AddImage,updateProfileImage };
