import React from "react";
import MainLayout from "components/Layout/MainLayout";
import { useRouter } from "next/router";
import UserProfile from "components/UserProfile";
import { GetServerSideProps } from "next";
import { initializeApollo } from "lib/apolloClient";
import { USER_PROFILE } from "quries/AUTH";

const ProfilePage = () => {
  let router = useRouter();
  return (
    <MainLayout>
      <UserProfile username={router.query.username} />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const apolloClient = initializeApollo(null, ctx);

  await apolloClient.query({
    query: USER_PROFILE,
    variables: { username: ctx.params.username },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};

export default ProfilePage;
