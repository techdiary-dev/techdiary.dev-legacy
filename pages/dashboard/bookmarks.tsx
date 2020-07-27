import React from "react";
import DashboardLayout from "components/Layout/DashboardLayout";
import HeadTag from "components/HeadTag";
import LoadingOverlay from "react-loading-overlay";
import { SyncLoader } from "react-spinners";
import "twin.macro";
import { useQuery, useMutation } from "@apollo/client";
import { MY_BOOKMARKS, TOGGLE_BOOKMARK } from "quries/INTERACTION";
import Link from "next/link";

const Article = ({ title, url, author, _id }) => {
  const [removeBookmark, { loading }] = useMutation(TOGGLE_BOOKMARK, {
    refetchQueries: [{ query: MY_BOOKMARKS }],
  });

  const handleRemoveBookmark = async () => {
    await removeBookmark({
      variables: { articleId: _id, isBookmarked: false },
    });
  };

  return (
    <LoadingOverlay active={loading} spinner>
      <article tw="mb-5 bg-gray-100 hover:bg-gray-200 transition duration-300 p-2 rounded shadow">
        <Link as={url} href="/[username]/[articleSlug]" passHref>
          <a>
            <span tw="text-lg">{title}</span>
          </a>
        </Link>
        <div tw="text-gray-600">
          <span tw="mr-2">
            <Link href="/[username]" as={`/${author.username}`}>
              <a>{author.username}</a>
            </Link>
          </span>
          <span>রবিবার, ৭ জুন ২০২০, রাত ৮:২৭ সময়</span>

          <button onClick={handleRemoveBookmark} tw="text-red-500 ml-4">
            মুছে ফেলুন
          </button>
        </div>
      </article>
    </LoadingOverlay>
  );
};

const BookMarks = () => {
  const { data, loading } = useQuery(MY_BOOKMARKS, {
    fetchPolicy: "network-only",
  });
  return (
    <>
      <HeadTag title="আমার বুকমার্ক করা ডায়েরি সমূহ" />
      <DashboardLayout>
        <h1 tw="text-2xl text-gray-700 mb-4">আমার বুকমার্ক করা ডায়েরি সমূহ</h1>

        {!loading && !data?.myBookmarks.length && (
          <div tw="w-full bg-red-200 shadow p-4">
            <h1 tw="text-xl text-red-500">
              আপনি এখনো কোন ডায়েরি বুকমার্ক করেননি
            </h1>
          </div>
        )}

        <div tw="my-8">
          {loading && (
            <div tw="w-full h-8 flex items-center justify-center">
              <SyncLoader color="#24B3AE" />
            </div>
          )}

          {!loading &&
            data?.myBookmarks?.map(({ article, _id }) => (
              <Article {...article} key={_id} />
            ))}
        </div>
      </DashboardLayout>
    </>
  );
};

export default BookMarks;
