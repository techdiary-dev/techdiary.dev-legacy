import swal from "sweetalert";

export function handleFileUpload(file: File) {
  if (!file.type.startsWith("image/")) {
    return swal("ছবি ছাড়া অন্য কোন ফাইল আপলোড করতে পারবেন না।", "", "error");
  }

  return new Promise<string>(async (resolve) => {
    const fd = new FormData();
    fd.append("file", file);
    fd.append("upload_preset", "techdiary-article-assets");

    const res = await (
      await fetch(
        "https://api.cloudinary.com/v1_1/techdiary-dev/image/upload",
        {
          method: "POST",
          body: fd,
        }
      )
    ).json();

    console.log(res.secure_url);
    resolve(res.secure_url);
  });
}
