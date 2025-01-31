const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    "Get tracks array for homepage grid"
    tracksForHome: [Track!]!
    track(id: ID!): Track
    "Fetch a specific Module using module id"
    module(id: ID!): Module!
  }

  type Mutation {
    incrementTrackViews(id: ID!): IncrementTrackViewResponse!
  }

  type IncrementTrackViewResponse {
    "Similar to HTTP status code, represents the status of the mutation"
    code: Int!
    "Indicates whether the mutation was successful"
    success: Boolean!
    "Human-readable message for the UI"
    message: String!
    "Newly updated track after a successful mutation"
    track: Track
  }

  "A track is group of modules that teaches about a specific topic"
  type Track {
    id: ID!
    "The tracks title"
    title: String!
    "The tracks main author"
    author: Author!
    "The track's main illustration to display in track card or track page detail"
    thumbnail: String
    "The track's approximate length to complete, in minutes"
    length: Int
    "The number of modules this track contains"
    modulesCount: Int
    "The track's complete description, can be in Markdown format"
    description: String
    "The number of times a track has been viewed"
    numberOfViews: Int
    "The track's complete array of Modules"
    modules: [Module!]!
  }

  type Module {
    id: ID!
    "The Module's title"
    title: String!
    "Track id"
    trackId: ID
    "Author id"
    authorId: ID
    "Module content"
    content: String
    "Module Topic"
    topic: String
    "Module video"
    videoUrl: String
    "The Module's length in minutes"
    length: Int
  }

  "Author of a complete Track"
  type Author {
    id: ID!
    "Author's first and last name"
    name: String
    "Author's profile picture url"
    photo: String
  }
`;

module.exports = typeDefs;
