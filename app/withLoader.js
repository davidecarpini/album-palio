import get from "lodash/get";
import React from "react";
import { Spinner } from "native-base";
const withLoader = (
  Component,
  {
    loadingPath = "data.loading",
    viewerPath = "data.viewer",
    Loader = () => <Spinner color="blue" />
  } = {}
) => {
  const WithLoader = props => {
    const loading = get(props, loadingPath);
    const hasViewer = !!get(props, viewerPath);
    if (loading && !hasViewer) return <Loader />;
    return <Component {...props} />;
  };

  WithLoader.displayName = `${Component.displayName ||
    Component.name}WithLoader`;

  return WithLoader;
};

export default withLoader;
