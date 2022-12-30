import React from "react";

export const useSession = (key, defaultValue = null) => {
  const item = sessionStorage.getItem(key);
  const initialValue = item ? JSON.parse(item) : defaultValue;
  const [value, setValue] = React.useState(initialValue);

  const updateValue = (newValue) => {
    setValue(newValue);
    sessionStorage.setItem(key, JSON.stringify(newValue));
  }

  return [value, updateValue];
}