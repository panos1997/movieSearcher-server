const { gql } = require("apollo-server");

const typeDefs = gql`
    type Query {
        searchMovie(query: String!): [Movie]
        movieDetail(id: ID!): Movie
        personDetail(query: ID!): Person
    }
    type Movie {
        id: ID!,
        original_title: String,
        release_date: String,
        poster_path: String,
        overview: String,
        vote_average: Float,
        vote_count: Int,
        runtime : Int,
        genres: [Genre],
        cast: [Person],
        production_companies: [Company]
    }
    type Genre {
        name: String
    }
    type Person {
        id: ID!
        name: String!
    }
    type Company {
        name: String
    }
`;

module.exports = { typeDefs };