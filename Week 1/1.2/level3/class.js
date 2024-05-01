class Animals {
    constructor(name, legCount, speaks) {
      this.name = name;
      this.legCount = legCount;
      this.speaks = speaks;
    }
    speak() {
      console.log("hi there " + this. speaks);
    }
  }
  
  let dog = new Animals("dog", 4, "woof");
  let cat = new Animals("cat", 4, "meow");
  cat.speak();