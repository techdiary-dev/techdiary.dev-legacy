import { useEffect } from "react";

const codeMirrorPersist = ({
  name,
  value,
  setValue,
  storage = window.localStorage,
}) => {
  useEffect(() => {
    const str = storage.getItem(name);
    if (str) setValue(str);
  }, []);

  useEffect(() => {
    storage.setItem(name, value);
  });

  return {
    clear: () => storage.removeItem(name),
    reset: (value) => storage.setItem(name, value),
  };
};

export default codeMirrorPersist;
