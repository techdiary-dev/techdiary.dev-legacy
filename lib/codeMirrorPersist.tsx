import { useEffect } from "react";
import { makeProperties } from "components/MarkdownEditor";

const codeMirrorPersist = ({
  name,
  value,
  setValue,
  storage = window.localStorage,
}) => {
  useEffect(() => {
    const str = storage.getItem(name);
    if (str) setValue(str);
    if (name === "createPost" && !storage.getItem("createPost")) {
      setValue(makeProperties({}));
    }
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
