import axios from "axios";

export const upload = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "iksan");

  try {
    const res = await axios.post('https://api.cloudinary/v1_1/dpnwnxwne/image/upload', data);

    const { url } = res.data;
    return url;
  } catch (err) {
    console.log(err);
  }
};
