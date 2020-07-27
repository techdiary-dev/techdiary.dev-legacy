import React from "react";
import LoadingOverlay from "react-loading-overlay";
import "twin.macro";
import DashboardLayout from "components/Layout/DashboardLayout";
import HeadTag from "components/HeadTag";
import { useMutation, useQuery } from "@apollo/client";
import { TOGGLE_LIKE, MY_LIKES } from "quries/INTERACTION";
import Link from "next/link";
import { SyncLoader } from "react-spinners";
import { BsHeartFill } from "react-icons/bs";
import swal from "sweetalert";

const Article = ({ title, url, author, _id }) => {
  const [removeLike, { loading }] = useMutation(TOGGLE_LIKE, {
    refetchQueries: [{ query: MY_LIKES }],
  });

  const handleRemoveLike = async () => {
    swal({
      title: "এই ডায়েরিটি আপনার লাইক মুছে ফেলতে চান?",
      icon: "warning",
      buttons: ["না", "হ্যাঁ চাই"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        removeLike({
          variables: { articleId: _id, isLiked: false },
        }).then(() => {
          swal("লাইক মুছে ফেলা হয়েছে", {
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
          <button tw="focus:outline-none" onClick={handleRemoveLike}>
            <BsHeartFill tw="text-red-500" />
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
            <span>রবিবার, ৭ জুন ২০২০, রাত ৮:২৭ সময়</span>
          </div>
        </div>
      </article>
    </LoadingOverlay>
  );
};

const liked = () => {
  const { data, loading } = useQuery(MY_LIKES, {
    fetchPolicy: "network-only",
  });

  return (
    <>
      <HeadTag title="আমার পছন্দকৃত ডায়েরি সমূহ" />
      <DashboardLayout>
        <h1 tw="text-2xl text-gray-700 mb-2">আমার পছন্দকৃত ডায়েরি সমূহ</h1>

        {!loading && !data?.myLikes.length && (
          <div tw="w-full bg-red-200 shadow p-4">
            <h1 tw="text-xl text-red-500">
              আপনি এখনো কোন ডায়েরি তে লাইক দেননি
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
            data?.myLikes?.map(({ article, _id }) => (
              <Article {...article} key={_id} />
            ))}
        </div>
      </DashboardLayout>
    </>
  );
};

export default liked;
