// ========== Encapsulation ========== //

class User {
    _fname: string
    _lname: string
    private _password: string
    readonly _gender: string

    constructor(fname: string, lname: string, password: string, gender: string) {
        this._fname = fname
        this._lname = lname
        this._password = password
        this._gender = gender
    }

    getFullName(): string {
        return `Name: ${this._fname} ${this._lname}`
    }
}

let user = new User("Sherzod", "Ashurov", `3104`, "male")
console.log(user.getFullName());

class Car {
    _model: string
    _hp: number
    _color: string
    _speed: number
    private _id: number

    constructor(model: string, hp: number, color: string, speed: number, id: number) {
        this._model = model
        this._hp = hp
        this._color = color
        this._speed = speed
        this._id = id
    }

    getModel(): string {
        return `Model: ${this._model}`
    }
}

let car = new Car("BMW m5", 321, "Black", 456, 2)
console.log(car.getModel());

class Animal {
    _name: string
    _isPeredator: boolean
    private _isUnique: boolean

    constructor(name: string, peredator: boolean, unique: boolean) {
        this._name = name
        this._isPeredator = peredator
        this._isUnique = unique
    }

    getRareAnimal(): string {
        if (this._isUnique) {
            return `This ${this._name} is a rare species`
        }
        else {
            return `This ${this._name} is not a rare species`
        }
    }
}

let animal = new Animal("Lion", true, true)
console.log(animal.getRareAnimal());


// ========== Inheritance ========== //

class Student extends User {

    _birthDate
    _ball: number
    _age: number

    constructor(ball: number, fname: string, lname: string, password: string, gender: string, birthDate: number) {
        super(fname, lname, password, gender)
        this._ball = ball
        this._birthDate = birthDate
    }

    getAge() {
        this._age = new Date().getFullYear() - this._birthDate
        return this._age
    }

}

let student = new Student(4, "Iskandar", "Abdumalikov", "IskandarMan", "male", 2007)
console.log(student.getAge());

class BMW extends Car {

    _brand: string

    constructor(model: string, hp: number, color: string, speed: number, id: number, brand: string) {
        super(model, hp, color, speed, id)
        this._brand = brand
    }
}

class Predator extends Animal {
    _isMammal: boolean

    constructor(name: string, peredator: boolean, unique: boolean, mammal: boolean) {
        super(name, peredator, unique)
        this._isMammal = mammal
    }

    getIsPeredator(): string {
        if (this._isMammal && this._isPeredator) {
            return `This animal is a predator and a mammal`
        }
        else {
            if (!this._isMammal && !this._isPeredator) {
                return `This animal is not a predator and a mammal`
            }
            else {
                return `This animal is the best of the best animal in the world`
            }
        }
    }
}

let predator = new Predator("Jaguar", true, true, true)
console.log(predator.getIsPeredator);


// ========== Abstraction ========== //

abstract class Animals {
    constructor(public name: string) { }

    abstract makeSound(): void;

    move(): void {
        console.log(`${this.name} is moving.`);
    }
}

class Dog extends Animals {
    constructor(name: string) {
        super(name);
    }

    makeSound(): void {
        console.log(`${this.name} says: Woof! Woof!`);
    }
}

class Cat extends Animals {
    constructor(name: string) {
        super(name);
    }

    makeSound(): void {
        console.log(`${this.name} says: Meow! Meow!`);
    }
}

class Chick extends Animals {
    constructor(name: string) {
        super(name);
    }

    makeSound(): void {
        console.log(`${this.name} says: chi! chi!`);
    }
}

const dog = new Dog("Buddy");
dog.makeSound();
dog.move();

const cat = new Cat("Whiskers");
cat.makeSound();
cat.move();


// ========== Polimorphisim ========== //

class MathAdd {

    add(a: any, b: any): any {
        return a + b
    }
}

class AddString extends MathAdd {
    constructor() {
        super()
    }

    add(a: any, b: any) {
        return `${a} ${b}`
    }    
}

class SquereNum extends MathAdd {
    constructor() {
        super()
    }

    add(a: any, b: any) {
        return a ** b
    }
}

class Numbers extends MathAdd {
    _num: number
    constructor(num) {
        super()
        this._num = num
    }

    add(a: any, b: any) {
        return a ** b + this._num
    }
}