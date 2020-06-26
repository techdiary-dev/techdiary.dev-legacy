import React from "react";
import { validateCreateArticleInput } from "lib/Validator";
import MainLayout from "components/Layout/MainLayout";

const Test = () => {
  validateCreateArticleInput({
    title: "টাইটেল দিতেই হবে. টাইটেল এ কমপক্ষে ১০ টি অক্ষর থাকতে হবে",
    tags: "nodejs",
    body:
      "ডায়েরিতে এ কমপক্ষে ১০০ টি অক্ষর থাকতে হবেডায়েরিতে এ কমপক্ষে ১০০ টি অক্ষর থাকতে হবেডায়েরিতে এ কমপক্ষে ১০০ টি অক্ষর থাকতে হবেডায়েরিতে এ কমপক্ষে ১০০ টি অক্ষর থাকতে হবে",
  })
    .then(() => console.log("no error"))
    .catch((err) => console.log(err));

  return (
    <MainLayout>
      <h1>test</h1>
    </MainLayout>
  );
};

export default Test;
