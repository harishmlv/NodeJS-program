// Extracting Properties from Objects

const people = [
    { name: "Ajay", age: 30 },
    { name: "Vijay", age: 25 },
    { name: "Sanjay", age: 35 }
  ];
  
  const names = people.map(person => person.name); // age in place  of age will print age. 
  
  console.log(names); 
  
  // Output: ["Ajay", "Vijay", "Sanjay"]
  