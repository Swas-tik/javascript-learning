// Class is the Blueprint or Design or Template

class Student {
  // Data Member

  // Constructor

  constructor(fullName, city, age, isMarried) {
    this.fullName = fullName;

    this.city = city;

    this.age = age;

    this.isMarried = isMarried;
  }

  // Member Function or methods
}

const stdElon = new Student("Elon Musk", "LA", 22, true);

console.log(stdElon);

const stdStew = new Student("Stew Job", "Pune", 56, false);

console.log(stdStew);
