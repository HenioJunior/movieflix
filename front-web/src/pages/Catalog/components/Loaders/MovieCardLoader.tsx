import React from "react"

import { generateList } from "core/utils/list";
import ContentLoader from "react-content-loader";

const MovieCardLoader = () => {
  const loaderItems = generateList(3);
  return (
    <>
      {loaderItems.map(item => (
        <ContentLoader
        key={item}
        speed={1}
        width={270}
        height={550}
        viewBox="0 0 250 335"
        backgroundColor="#d6d2d2"
        foregroundColor="#6C6C6C"
      >
        <rect x="0" y="0" rx="10" ry="10" width="250" height="335" />
      </ContentLoader>
      ))}
      
    </>
  )
}

export default MovieCardLoader