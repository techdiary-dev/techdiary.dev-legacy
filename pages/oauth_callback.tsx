import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { LOGIN, ME } from "quries/AUTH";
import { useMutation } from "@apollo/client";
import BarLoader from "components/Loader/BarLoader";
import MainLayout from "components/Layout/MainLayout";
import { CatchServerErrors } from "lib/CatchServerErrors";

const OAuthRedirect = () => {
  let router = useRouter();
  let [login] = useMutation(LOGIN, {
    refetchQueries: [{ query: ME }],
  });
  useEffect(() => {
    login({ variables: { code: router.query?.code } })
      .then(() => {
        router.back();
      })
      .catch((e) => {
        CatchServerErrors(e);
      });
  }, [router.query?.code]);

  return (
    <MainLayout>
      <BarLoader />
    </MainLayout>
  );
};

export default OAuthRedirect;
