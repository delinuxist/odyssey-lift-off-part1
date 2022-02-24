import React from "react";
import { useQuery, gql } from "@apollo/client";
import { QueryResult } from "../components";
import TrackDetail from "../components/track-detail";

export const GET_TRACK = gql`
  query getTrack($trackId: ID!) {
    track(id: $trackId) {
      id
      title
      description
      length
      thumbnail
      modulesCount
      modules {
        id
        title
        length
      }
      author {
        id
        name
        photo
      }
      numberOfViews
    }
  }
`;

const Track = ({ trackId }) => {
  const { data, loading, error } = useQuery(GET_TRACK, {
    variables: {
      trackId,
    },
  });
  return (
    <QueryResult data={data} loading={loading} error={error}>
      <TrackDetail track={data?.track} />
    </QueryResult>
  );
};

export default Track;
