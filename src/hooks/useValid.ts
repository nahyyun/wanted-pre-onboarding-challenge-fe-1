import React, { useState, useEffect } from "react";

const useValid = (
  value: string,
  validateValue: (value: string) => boolean,
  errorMessage: string
) => {
  const [error, setError] = useState("");
  useEffect(() => {
    if (!value) return;

    if (!validateValue(value)) {
      return setError(errorMessage);
    }
    setError("");
  }, [value]);

  return [error];
};

export default useValid;
