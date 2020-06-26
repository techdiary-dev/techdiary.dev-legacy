import swal from "sweetalert";
import React, { useState } from "react";
import NProgress from "nprogress";
import { FiUpload } from "react-icons/fi";

import { StyledFileUploader } from "./styles";

const FileUploader = () => {
  let [loading, setLoading] = useState(false);
  let [fileUrl, setFileUrl] = useState("");

  if (loading) {
    NProgress.start();
  } else {
    NProgress.done();
  }

  const onChangeFile = async (e) => {
    event.stopPropagation();
    event.preventDefault();

    setLoading(true);

    const files = e.target.files;
    const fd = new FormData();

    if (!files[0].type.startsWith("image/")) {
      setLoading(false);
      return swal("ছবি ছাড়া অন্য কোন ফাইল আপলোড করতে পারবেন না।", "", "error");
    }

    fd.append("file", files[0]);

    fd.append("upload_preset", "techdiary-article-assets");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/techdiary-dev/image/upload",
      {
        method: "POST",
        body: fd,
      }
    );
    const file = await res.json();
    setFileUrl(file.secure_url);
    setLoading(false);
  };

  const selectText = (e) => {
    e.target.select();
  };

  return (
    <>
      <input
        type="file"
        id="fileUploader"
        style={{ display: "none" }}
        onChange={onChangeFile}
      />
      <StyledFileUploader>
        <fieldset disabled={loading}>
          <input
            type="url"
            className="url"
            placeholder="ছবি আপলোড করার যন্ত্র"
            onClick={selectText}
            value={fileUrl}
            readOnly
          />
          <FiUpload
            onClick={(e) => document.getElementById("fileUploader").click()}
          />
        </fieldset>
      </StyledFileUploader>
    </>
  );
};

export default FileUploader;
