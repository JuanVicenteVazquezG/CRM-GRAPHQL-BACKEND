const { ApolloServer, gql } = require('apollo-server');

// Seed Proof
const Courses = [
    {
        title: 'JavaScript Moderno Guía Definitiva Construye +10 Proyectos',
        technology: 'JavaScript ES6',
    },
    {
        title: 'React – La Guía Completa: Hooks Context Redux MERN +15 Apps',
        technology: 'React',
    },
    {
        title: 'Node.js – Bootcamp Desarrollo Web inc. MVC y REST API’s',
        technology: 'Node.js'
    },
    {
        title: 'ReactJS Avanzado – FullStack React GraphQL y Apollo',
        technology: 'React'
    }
];




// Resolvers
const resolvers = {
    Query: {
        obtainCourses: () => Courses,
        obtainTechnologies: () => Courses,
    }
}

//Server
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

//Boot Server
server.listen()
    .then(({ url }) => {
        console.log(`Server ready on url ${url}`);
    })
    .catch((error) => {
        console.log(error)
    });
