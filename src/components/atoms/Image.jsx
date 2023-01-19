import React from "react";

export const Image = ({ src, alt, ...props }) => {
  return (
    <img {...props} src={require(`../../../public/${src}.jpg`)} alt={alt} />
  );
};
