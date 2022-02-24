import React from "react";
import { useQuery, gql } from "@apollo/client";
import { ModuleDetail, QueryResult } from "../components";

const GET_MODULE = gql`
  query getModuleandParentTrack($trackId: ID!, $moduleId: ID!) {
    track(id: $trackId) {
      id
      title
      thumbnail
      length
      modulesCount
      description
      numberOfViews
      modules {
        title
        trackId
        authorId
        id
        length
      }
      author {
        id
        name
        photo
      }
    }
    module(id: $moduleId) {
      id
      title
      trackId
      authorId
      content
      topic
      videoUrl
    }
  }
`;

const Module = ({ trackId, moduleId }) => {
  const { data, loading, error } = useQuery(GET_MODULE, {
    variables: {
      trackId,
      moduleId,
    },
  });
  return (
    <QueryResult data={data} loading={loading} error={error}>
      <ModuleDetail track={data?.track} module={data?.module} />
    </QueryResult>
  );
};

export default Module;
