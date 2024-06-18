import supabase from "./supabase";

async function logoutUser() {
    try {
        let { error } = await supabase.auth.signOut();
        if (error) {
            throw error;
        }
        console.log('User signed out successfully');
        return { success: true };
    } catch (error) {
        console.error('Error signing out:', error.message);
        return { success: false, error: error.message };
    }
}
export default logoutUser;