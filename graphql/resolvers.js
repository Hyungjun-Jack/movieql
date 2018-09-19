const Hyungjun = {
  name: "Hyungjun Kim",
  age: 44,
  gender: "male"
};

const resolvers = {
  Query: {
    person: () => Hyungjun
  }
};

export default resolvers;
