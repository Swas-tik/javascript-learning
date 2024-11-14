class Vehical {

  constructor(carName, engine, fuelType, mileage, seatingCapacity){
    this.carName = carName;
    this.engine = engine;
    this.fuelType = fuelType;
    this.mileage = mileage;
    this.seatingCapacity = seatingCapacity;
  }
  details (){
    console.log(`============= details of ${this.carName} ==========`)
    console.log(`Car: ${this.carName}, Engine: ${this.engine}, Fuel Type: ${this.fuelType}, Mileage: ${this.mileage}, Seating Capacity: ${this.seatingCapacity}`)
  }
}

const taigun = new Vehical('Volkswagen Taigun', '999 cc, 3 Cylinders Inline', 'Petrol', '19.87 kmpl', '5 person')
 taigun.details();
// console.log(taigun)

const creta = new Vehical('Hyundai Creta', '1497 cc, 4 Cylinders Inline', 'Petrol', '17.40', '5 person')
creta.details();
// console.log(creta)

const xuv = new Vehical('Mahindra XUV 3XO', '1197 cc, 3 Cylinders Inline', 'Petrol', '18.89', '5 person')
xuv.details();

const nexon = new Vehical('Nexon Smart Plus', '1199 cc, 3 Cylinders Inline', 'Petrol', '17.44', '5 person')
nexon.details();

const swift = new Vehical('Maruti Swift', '1197 cc, 3 Cylinders Inline', 'Petrol', '24.8', '5 person')
nexon.details();

console.log('-------------------------------------------------------------------')

class College {

  constructor(university, address, founded, courses){
    this.university= university;
    this.address= address;
    this.founded =founded;
    this.courses= courses;
  }
  details(){
    console.log(`======== Complete details of ${this.College}=========`)
    console.log(`University: ${this.university}, Address: ${this.address}, Founded: ${this.founded}, Courses: ${this.courses}`)
  }
}

const iitBombay = new College('IIT Bombay', "Main Gate Rd, IIT Area, Powai, Mumbai, Maharashtra", '1958', 'science,engineering')
iitBombay.details()

const iiscBangaluru = new College('IISc Bangaluru', " CV Raman Rd, Bengaluru, Karnataka", '1909', 'science, engineering, design')
iiscBangaluru.details()

const mit = new College('MIT', " 77 Massachusetts Ave, Cambridge, MA", '1861', 'modern technology and science')
mit.details()

const bits = new College('BITS', " BITS, Pilani, Rajasthan", '1964', 'Engineering Optimization')
bits.details()