import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { apiGet } from "../misc/config";
const Show = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    let isMounted = true;
    apiGet(`/show/${id}?embed[]=seasons&embed[]=cast`)
      .then((results) => {
        setTimeout(() => {
          if (isMounted) {
            setShow(results);
            setisLoading(false);
          }
        }, 200);
      })
      .catch((err) => {
        if (isMounted) {
          setError(err.message);
          setisLoading(false);
        }
      });
    return () => {
      isMounted = false;
    };
  }, [id]);
  // console.log("show", show);
  if (isLoading) {
    return <div>Data is being loaded</div>;
  }
  if (error) {
    return <div>Error occured: {error}</div>;
  }

  return <div>This is show page.</div>;
};

export default Show;
