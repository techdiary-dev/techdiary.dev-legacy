import React from "react";
import { Card } from "components/Card";
import "twin.macro";
import Button from "components/Button";

const CommentBox = () => {
  return (
    <div>
      <textarea
        tw="w-full border p-2 focus:outline-none"
        placeholder="আপনার মন্তব্য লিখুন"
        rows={4}
      ></textarea>
      <div>
        <Button color="dark" size="small" tw="px-3 float-right">
          মন্তব্য করুন
        </Button>
      </div>
    </div>
  );
};

const Replay = () => {
  return (
    <div tw="mb-4">
      <h2 tw="text-base">
        <a href="#" tw="text-black">
          @Rayhan
        </a>
        , <span tw="text-gray-600">৩ ঘণ্টা আগে</span>
      </h2>

      <p tw="text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
        quisquam eos quo necessitatibus dolores quasi perferendis id eius est,
        dolorem enim, rerum quia illo. Quasi aliquam vel debitis officia eius.
      </p>
    </div>
  );
};

const Comment = () => {
  return (
    <div tw="mb-5 border p-2 rounded last:border-b-0">
      <h2 tw="text-base">
        <a href="#" tw="text-black">
          @Rayhan
        </a>
        , <span tw="text-gray-600">৩ ঘণ্টা আগে</span>
      </h2>

      <p tw="text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
        quisquam eos quo necessitatibus dolores quasi perferendis id eius est,
        dolorem enim, rerum quia illo. Quasi aliquam vel debitis officia eius.
      </p>

      <div>
        <Button tw="text-sm p-0 text-green-500 font-bold" color="link">
          উত্তর দিন
        </Button>
      </div>

      <div tw="ml-12">
        <Replay />
        <Replay />
        <Replay />
      </div>
    </div>
  );
};

const Comments = () => {
  return (
    <div id="comments">
      <Card tw="mb-3">
        <CommentBox />
      </Card>

      <Card>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </Card>
    </div>
  );
};

export default Comments;
