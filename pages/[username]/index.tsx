import React from "react";
import MainLayout from "components/Layout/MainLayout";
import { useRouter } from "next/router";
import UserProfile from "components/UserProfile";
import { GetServerSideProps } from "next";
import Error from "../_error";
import { initializeApollo } from "lib/apolloClient";
import { USER_PROFILE } from "quries/AUTH";

const ProfilePage = ({ notFound }) => {
  let router = useRouter();
  if (notFound) return <Error statusCode={404} />;

  return (
    <MainLayout>
      <UserProfile username={router.query.username} />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const apolloClient = initializeApollo(null, ctx);
  let notFound = false;

  try {
    await apolloClient.query({
      query: USER_PROFILE,
      variables: { username: ctx.params.username },
    });
  } catch {
    notFound = true;
  }

  return {
    props: {
      notFound,
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};

export default ProfilePage;
