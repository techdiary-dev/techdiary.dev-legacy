import swal from "sweetalert";

export const CatchServerErrors = (e) => {
  const error = e?.graphQLErrors[0];

  if (error?.extensions?.code === "BAD_USER_INPUT") {
    return error?.extensions?.error;
  } else {
    if (error?.message) swal(error?.message, "", "error");
    return [];
  }
};
