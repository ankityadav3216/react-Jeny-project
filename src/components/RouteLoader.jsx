import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PageLoader from "./PageLoader/PageLoader";

const RouteTransition = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <PageLoader />}
      {children}
    </>
  );
};

const RouteLoader = ({ children }) => {
  const location = useLocation();

  return <RouteTransition key={location.pathname}>{children}</RouteTransition>;
};

export default RouteLoader;
