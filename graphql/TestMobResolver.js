const users = [
  { id: "1", name: "John Doe", email: "john@example.com" },
  { id: "2", name: "Jane Smith", email: "jane@example.com" }
];

const posts = [
  { id: "1", title: "GraphQL Basics", content: "Introduction to GraphQL", author: users[0] },
  { id: "2", title: "Advanced GraphQL", content: "Deep dive into GraphQL features", author: users[1] }
];

const resolvers = {
  Query: {
    getUsers: () => users,
    getPosts: () => posts
  },
  Mutation: {
    addUser: (_, { user }) => {
      const newUser = { id: String(users.length + 1), ...user };
      users.push(newUser);
      return newUser;
    },
    addPost: (_, { post }) => {
      const author = users.find(u => u.id === post.authorId);
      if (!author) throw new Error("Author not found");
      const newPost = { id: String(posts.length + 1), ...post, author };
      posts.push(newPost);
      return newPost;
    }
  }
};

export default resolvers;