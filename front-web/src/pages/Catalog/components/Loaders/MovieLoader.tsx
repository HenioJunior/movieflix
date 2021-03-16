import React from "react"
import ContentLoader from "react-content-loader"
import { generateList } from "core/utils/list";

const MovieCardLoader = () => {
  const loaderItems = generateList(4);

  return (
    <>
      {loaderItems.map(item => (
        <ContentLoader
          speed={1}
          width={250}
          height={380}
          viewBox="0 0 250 380"
          backgroundColor="#d6d2d2"
          foregroundColor="#6C6C6C"

        >
          <rect x="0" y="0" rx="10" ry="10" width="240" height="380" />
        </ContentLoader>
      ))}
    </>
  )
}

export default MovieCardLoader;