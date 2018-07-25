export const printErrorGraphql = response => {
  if (
    response.networkError &&
    response.networkError.message &&
    !response.networkError.result
  ) {
    alert(response.networkError.message);
  } else if (
    response.networkError &&
    response.networkError.result &&
    response.networkError.result.errors
  ) {
    alert(response.networkError.result.errors[0].message);
  } else if (response.graphQLErrors) {
    alert(response.graphQLErrors[0].message);
  } else {
    alert(JSON.stringify(response));
  }
};
