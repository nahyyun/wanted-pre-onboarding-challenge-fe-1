import React, { useState } from "react";

const useToggle = (defaultValue: boolean): [boolean, () => void] => {
  const [isShow, setIsShow] = useState(defaultValue);

  const toggle = () => setIsShow((isShow) => !isShow);
  return [isShow, toggle];
};

export default useToggle;
