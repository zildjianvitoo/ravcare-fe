import React from "react";

export default function useFormatedDate(data, config) {
  const defaultOptions = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };

  const options = config ? config : defaultOptions;
  return new Date(data).toLocaleDateString("id-ID", options);
}
