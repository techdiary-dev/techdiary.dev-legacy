import React from "react";
import DashboardLayout from "components/Layout/DashboardLayout";
import HeadTag from "components/HeadTag";
import LoadingOverlay from "react-loading-overlay";
import { SyncLoader } from "react-spinners";
import { BsBookmarkFill } from "react-icons/bs";
import moment from "moment";
import "twin.macro";
import { useQuery, useMutation } from "@apollo/client";
import { MY_BOOKMARKS, TOGGLE_BOOKMARK } from "quries/INTERACTION";
import Link from "next/link";
import swal from "sweetalert";

const Article = ({ title, url, author, _id }) => {
  const [removeBookmark, { loading }] = useMutation(TOGGLE_BOOKMARK, {
    refetchQueries: [{ query: MY_BOOKMARKS }],
  });

  const handleRemoveBookmark = async () => {
    swal({
      title: "বুকমার্ক সরিয়ে ফেলতে চান?",
      icon: "warning",
      buttons: ["না", "হ্যাঁ চাই"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        removeBookmark({
          variables: { articleId: _id, isBookmarked: false },
        }).then(() => {
          swal("বুকমার্ক সরিয়ে ফেলা হয়েছে", {
            icon: "success",
          });
        });
      }
    });
  };

  return (
    <LoadingOverlay active={loading} spinner>
      <article tw="flex items-center mb-5 bg-gray-100 hover:bg-gray-200 transition duration-300 p-2 rounded shadow">
        <div tw="mr-4">
          <button tw="focus:outline-none" onClick={handleRemoveBookmark}>
            <BsBookmarkFill tw="text-red-500" />
          </button>
        </div>
        <div>
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
          </div>
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
            data?.myBookmarks?.map(({ article, _id, createdAt }) => (
              <Article createdAt={createdAt} {...article} key={_id} />
            ))}
        </div>
      </DashboardLayout>
    </>
  );
};

export default BookMarks;
