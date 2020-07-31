import React, { useState, useRef } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import swal from "sweetalert";
import "twin.macro";
import { ClipLoader } from "react-spinners";
import { BsImageFill } from "react-icons/bs";
import { FiCopy } from "react-icons/fi";
import { TiArrowBack } from "react-icons/ti";
import { useRouter } from "next/router";
import { AiOutlineDashboard } from "react-icons/ai";

const EditorTopRibbon = () => {
  let router = useRouter();
  let [fileUrl, setFileUrl] = useState("");
  const [uploadLoading, setUploadLoading] = useState(false);
  const urlInputRef = useRef<HTMLInputElement>(null);

  const onChangeFile = async (e) => {
    event.stopPropagation();
    event.preventDefault();
    setUploadLoading(true);

    const files = e.target.files;
    const fd = new FormData();

    if (!files[0].type.startsWith("image/")) {
      setUploadLoading(false);
      return swal("ছবি ছাড়া অন্য কোন ফাইল আপলোড করতে পারবেন না।", "", "error");
    }

    fd.append("file", files[0]);

    fd.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_PRESET);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/techdiary-dev/image/upload",
      {
        method: "POST",
        body: fd,
      }
    );
    const file = await res.json();
    setFileUrl(`![Alt Text](${file.secure_url})`);
    urlInputRef.current.select();
    setUploadLoading(false);
  };
  const handlebackbutton = () => {
    router.push("/dashboard");
  };

  const selecttext = (e) => e.target.select();
  return (
    <div tw="bg-gray-200 h-10 flex justify-between items-stretch">
      <input
        type="file"
        id="fileUploader"
        style={{ display: "none" }}
        onChange={onChangeFile}
      />

      <div tw="flex items-stretch">
        <button
          tw="flex items-center bg-gray-300 px-2 focus:outline-none  hover:bg-gray-400 transition duration-300"
          onClick={(e) => document.getElementById("fileUploader").click()}
        >
          {uploadLoading ? <ClipLoader /> : <BsImageFill />}
          <span tw="ml-2 hidden md:inline-block">ছবি আপলোড</span>
        </button>

        {fileUrl && (
          <>
            <input
              type="text"
              tw="px-2 focus:outline-none bg-gray-100 select-text"
              value={fileUrl}
              ref={urlInputRef}
              onClick={selecttext}
              readOnly
            />
            <CopyToClipboard
              text={fileUrl}
              onCopy={() => urlInputRef.current.select()}
            >
              <button tw="ml-2 focus:outline-none">
                <FiCopy />
              </button>
            </CopyToClipboard>
          </>
        )}
      </div>
      <button
        tw="flex items-center bg-gray-300 px-2 focus:outline-none  hover:bg-gray-400 transition duration-300"
        onClick={handlebackbutton}
      >
        <AiOutlineDashboard tw="h-6 w-6 text-gray-700" />
        <span tw="ml-2 hidden md:inline-block">ড্যাসবোর্ড</span>
      </button>
    </div>
  );
};

export default EditorTopRibbon;
