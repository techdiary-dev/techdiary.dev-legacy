import React, { useState, useRef } from "react";
import "twin.macro";
import swal from "sweetalert";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { BsImageFill } from "react-icons/bs";
import { FiCopy } from "react-icons/fi";
import { ClipLoader } from "react-spinners";
import { CopyToClipboard } from "react-copy-to-clipboard";

const EditorBottomRibbon = ({
  handleSave,
  handleReset,
  togglePreview,
  preview,
  loading,
}) => {
  return (
    <div tw="bg-gray-200 h-10 flex justify-between items-stretch">
      <div tw="flex">
        <button
          tw="flex items-center bg-dark text-white focus:outline-none transition duration-300 px-3 text-base"
          onClick={handleSave}
          disabled={loading}
        >
          {loading ? "অপেক্ষা..." : "সংরক্ষণ"}
        </button>

        <button
          tw="hover:bg-gray-400 focus:outline-none transition duration-300 px-3 text-base"
          onClick={() => togglePreview(!preview)}
        >
          {preview ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </button>

        <button
          tw="px-3 text-xs focus:outline-none text-gray-600"
          onClick={handleReset}
        >
          (Clear changes)
        </button>
      </div>
    </div>
  );
};

export default EditorBottomRibbon;
