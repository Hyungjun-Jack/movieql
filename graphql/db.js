export const people = [
  {
    id: 0,
    name: "Hyungjun Kim",
    age: 44,
    gender: "male"
  },
  {
    id: 1,
    name: "Hyungjun Kim",
    age: 44,
    gender: "male"
  },
  {
    id: 2,
    name: "Hyungjun Kim",
    age: 44,
    gender: "male"
  },
  {
    id: 3,
    name: "Hyungjun Kim",
    age: 44,
    gender: "male"
  },
  {
    id: 4,
    name: "Hyungjun Kim",
    age: 44,
    gender: "male"
  },
  {
    id: 5,
    name: "Hyungjun Kim",
    age: 44,
    gender: "male"
  },
  {
    id: 6,
    name: "Hyungjun Kim",
    age: 44,
    gender: "male"
  }
];

export const getById = id => {
    const filteredPerson = people.filter(person => person.id ===id);
    return filteredPerson[0];
}