import React from "react";
import { gql, useQuery } from "@apollo/client";
import TrackCard from "../containers/track-card";
import { QueryResult } from "../components";

const TRACKS = gql`
  query getTracks {
    tracksForHome {
      id
      title
      author {
        id
        name
        photo
      }
      thumbnail
      length
      modulesCount
    }
  }
`;

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { data, loading, error } = useQuery(TRACKS);

  return (
    <QueryResult error={error} loading={loading} data={data}>
      {data?.tracksForHome?.map((track) => (
        <TrackCard key={track.id} track={track} />
      ))}
    </QueryResult>
  );
};

export default Tracks;
