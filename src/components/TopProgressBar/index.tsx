import { useEffect } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

function TopProgressBar(): JSX.Element {
  useEffect(() => {
    NProgress.configure({ showSpinner: false });
    NProgress.start();

    return () => {
      NProgress.done();
    };
  });

  return <div />;
}

export default TopProgressBar;
