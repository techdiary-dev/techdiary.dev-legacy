import React from "react";
import "twin.macro";
import {
  AiOutlineSave,
  AiOutlineEyeInvisible,
  AiOutlineEye,
} from "react-icons/ai";

const EditorRibbon = ({ handleSave, handleReset, togglePreview, preview }) => {
  return (
    <div tw="bg-gray-200 h-10 flex">
      <button
        tw="flex items-center bg-primary focus:outline-none transition duration-300 px-3 text-base"
        onClick={handleSave}
      >
        <AiOutlineSave tw="mr-2" />
        সংরক্ষণ
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
  );
};

export default EditorRibbon;
