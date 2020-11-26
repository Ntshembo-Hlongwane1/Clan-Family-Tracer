// RESPONSE LOGIC WHEN REQUESTING FAMILY LOOKUP

// const clan = [
//   { id: 1, name: "Junior" },
//   { id: 2, name: "Max" },
//   { id: 3, name: "brad" },
// ];

// const people = [
//   { id: 3, name: "brad" },
//   { id: 1, name: "Junior" },
//   { id: 2, name: "Max" },
// ];

// let finalData = [];

// for (let i = 0; i < clan.length; i++) {
//   let person = people.find((person) => person.id === clan[i]["id"]);
//   finalData.push(person);
// }

// console.log(finalData);

const clan = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  { id: 11 },
  { id: 22 },
  { id: 6 },
  { id: 5 },
  { id: 10 },
  { id: 9 },
];

const people = [
  {
    id: 3,
    name: "brad",
    children: [
      { id: 11, name: "Joyce" },
      { id: 22, name: "Mike" },
    ],
  },
  {
    id: 1,
    name: "Junior",
    children: [
      { id: 10, name: "Joyce" },
      { id: 9, name: "Mike" },
    ],
  },
  { id: 9, name: "Mike" },
  {
    id: 2,
    name: "Max",
    children: [
      { id: 5, name: "Brad" },
      { id: 6, name: "Mike" },
    ],
  },
  { id: 10, name: "Joyce" },
  { id: 5, name: "Brad" },
  { id: 22, name: "Mike" },
  { id: 6, name: "Mike" },
  { id: 11, name: "Joyce" },
];
