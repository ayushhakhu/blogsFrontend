import React from "react";

export const Image = (props) => {
  const { src, alt } = props;
  return (
    <img {...props} src={require(`../../../public/${src}.jpg`)} alt={alt} />
  );
};
