function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  
  let myCar = new Car("Toyota", "Camry", 2020);
  
  console.log(myCar.make);        
  console.log(myCar.model);        
  console.log(myCar.year);  