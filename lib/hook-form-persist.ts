import { useEffect } from "react";

const useFormPersist = ({
  name,
  watch,
  setValue,
  storage = window.localStorage,
  ignore = [],
}) => {
  const values = watch();

  useEffect(() => {
    const str = storage.getItem(name);
    if (str) {
      const values = JSON.parse(str);
      Object.keys(values).forEach((key) => {
        if (!ignore.includes(key)) {
          setValue(key, values[key]);
        }
      });
    }
  }, []);

  useEffect(() => {
    const storeValues = {};
    Object.keys(values).forEach((key) => {
      if (values[key]?.length) {
        storeValues[key] = values[key];
      }
    });
    console.log("setItem", values);
    if (Object.keys(storeValues).length) {
      storage.setItem(name, JSON.stringify(storeValues));
    }
  }, [values]);

  return {
    clear: () => storage.removeItem(name),
  };
};

export default useFormPersist;
