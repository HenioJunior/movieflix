import React from "react";
import ContentLoader from "react-content-loader";
import { generateList } from "core/utils/list";
import './styles.scss';

const MovieCardLoader = () => {
  const loaderItems = generateList(3);

  return (
    <div className="movie-card-loader">
      {loaderItems.map(item => (
        <ContentLoader
          speed={1}
          width={250}
          height={550}
          viewBox="0 0 250 550"
          backgroundColor="#d6d2d2"
          foregroundColor="#6C6C6C"

        >
          <rect x="0" y="0" rx="10" ry="10" width="240" height="550" />
        </ContentLoader>
      ))}
    </div>
  )
}

export default MovieCardLoader;