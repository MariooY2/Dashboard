import { useState } from "react";
import {
  UploadImage,
  ReadImage,
  AddImage,
  updateProfileImage,
} from "../Backend/UploadImage";
import { useSelector, useDispatch } from "react-redux";
import { setimage } from "../store/account";
function DashboardProfile() {
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const uid = useSelector((state) => state.account.data.user.id);
  const email = useSelector((state) => state.account.data.user.email);
  const dispatch = useDispatch();
  const name = file.name ? file.name : " ";
  const link = `https://xmjkcphldqqnggvngfbz.supabase.co/storage/v1/object/public/test/${uid}/${name}`;
  const [isimage, setisimage] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    setPreview(URL.createObjectURL(selectedFile));
  };

   const fetchImage = async () => {
    const imageData = await ReadImage(email);

    if (imageData === false) {
      setisimage(false);
      console.log("No picture");
    } else {
      dispatch(setimage(imageData));
      setisimage(true);
    }
  };
  fetchImage();

  const handleUpload = async (e) => {
    e.preventDefault();

    if (file) {
      await UploadImage(file, uid);
      dispatch(setimage(link));
      if (!isimage) {
        AddImage(uid, link, email);
      } else {
        updateProfileImage(email, link);
      }
    } else {
      console.log("No file selected");
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-2xl font-bold mb-4">Upload Profile Image</h2>
      <form onSubmit={handleUpload} className="flex flex-col items-center">
        <label htmlFor="file-input" className="cursor-pointer">
          <div className="w-32 h-32 rounded-full overflow-hidden border border-gray-300">
            {preview ? (
              <img
                src={link}
                alt="Profile Preview"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                <span className="text-gray-500">Click to select</span>
              </div>
            )}
          </div>
        </label>
        <input
          id="file-input"
          type="file"
          onChange={handleFileChange}
          className="hidden"
        />
        <div className="">
          <button
            type="submit"
            className="mt-4 bg-sky-600 text-white py-2 px-4 rounded transition-colors duration-300 hover:bg-sky-500"
          >
            Upload
          </button>
        </div>
      </form>
    </div>
  );
}

export default DashboardProfile;
