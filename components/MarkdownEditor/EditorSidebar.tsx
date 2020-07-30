import React from "react";
import { InfoCard } from "components/InfoCard";
import "twin.macro";

const EditorSidebar = () => {
  return (
    <>
      <button></button>

      <InfoCard>
        <p>
          ইডিটর এর লিখা <b>সেভ</b> করার আগ পর্যন্ত ব্রাউজারে সংরক্ষিত অবস্থায়
          থাকবে, কোন কারনে এই ট্যাবটি কেটে গেলে বা পেজ রিলোড হয়ে গেলে ভয় পাওয়ার
          কোন কারন নেই 😊 🎉
        </p>
      </InfoCard>
      <InfoCard title="নির্দেশনা ">
        <p>
          এই এডিটরে{" "}
          <a
            target="_blank"
            className="external-link"
            href="https://guides.github.com/features/mastering-markdown/"
          >
            মার্কডাউনের
          </a>{" "}
          সাথে{" "}
          <code>
            <a
              target="_blank"
              className="external-link"
              href="https://jekyllrb.com/docs/front-matter/"
            >
              Jekyll Frontmatter{" "}
            </a>
          </code>
          ব্যবহার করা হয়েছে যেখানে নিম্নোক্ত প্রোপার্টি ব্যবহার করতে হবে:
        </p>

        <ul className="list-unstyled">
          <li>
            <span tw="text-red-500">title</span>: ডায়েরির টাইটেল
          </li>
          <li>
            <span tw="text-red-500">tags:</span> ডায়েরির ট্যাগসমূহ (একাধিক ট্যাগ
            কমা(,) দিয়ে আলাদা করে দিতে হবে)
          </li>
          <li>
            <span tw="text-red-500">isPublished:</span> ডায়েরি কি প্রকাশিত করবেন
            (true or false)
          </li>
          <li>
            <span tw="text-red-500">thumbnail:</span> ডায়েরির কভার ছবি
            (স্ট্যান্ডার্ড সাইজ ১২০০x৬৩০ পিক্সেল)
          </li>
          <li>
            <span tw="text-red-500">seriesName:</span> সিরিজ আর্টিকেলের নাম
          </li>
        </ul>
      </InfoCard>
    </>
  );
};

export default EditorSidebar;
