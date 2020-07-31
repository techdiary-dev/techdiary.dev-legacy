import React from "react";

const Errors = ({ errors, setErrors }) => {
  return (
    Array.isArray(errors) &&
    errors.length > 0 && (
      <div tw="absolute top-0 left-0 bg-red-500 z-30 w-full p-3 text-white leading-relaxed">
        {errors?.map((err, index) => (
          <p>{err}</p>
        ))}
        <button
          tw="absolute top-0 right-0 mr-4 text-3xl focus:outline-none"
          onClick={() => setErrors([])}
        >
          &times;
        </button>
      </div>
    )
  );
};

export default Errors;
