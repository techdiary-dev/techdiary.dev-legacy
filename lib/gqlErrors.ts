export const gqlErrors = (err) => {
  return JSON.stringify(err?.error, undefined, 4);
};
