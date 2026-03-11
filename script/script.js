const setItemToLS = () => {
  const person = {
    name: "Tabassum",
    age: 22,
    status: "Married",
  };
  const personJSON = JSON.stringify(person);
  localStorage.setItem("Person", personJSON)
};

const getItemFromLS = () => {
    const item = localStorage.getItem("Person");
    const itemString = JSON.parse(item);
    console.log(itemString.age);
}