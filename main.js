// ========== Encapsulation ========== //
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(fname, lname, password, gender) {
        this._fname = fname;
        this._lname = lname;
        this._password = password;
        this._gender = gender;
    }
    User.prototype.getFullName = function () {
        return "Name: ".concat(this._fname, " ").concat(this._lname);
    };
    return User;
}());
var user = new User("Sherzod", "Ashurov", "3104", "male");
console.log(user.getFullName());
var Car = /** @class */ (function () {
    function Car(model, hp, color, speed, id) {
        this._model = model;
        this._hp = hp;
        this._color = color;
        this._speed = speed;
        this._id = id;
    }
    Car.prototype.getModel = function () {
        return "Model: ".concat(this._model);
    };
    return Car;
}());
var car = new Car("BMW m5", 321, "Black", 456, 2);
console.log(car.getModel());
var Animal = /** @class */ (function () {
    function Animal(name, peredator, unique) {
        this._name = name;
        this._isPeredator = peredator;
        this._isUnique = unique;
    }
    Animal.prototype.getRareAnimal = function () {
        if (this._isUnique) {
            return "This ".concat(this._name, " is a rare species");
        }
        else {
            return "This ".concat(this._name, " is not a rare species");
        }
    };
    return Animal;
}());
var animal = new Animal("Lion", true, true);
console.log(animal.getRareAnimal());
// ========== Inheritance ========== //
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(ball, fname, lname, password, gender, birthDate) {
        var _this = _super.call(this, fname, lname, password, gender) || this;
        _this._ball = ball;
        _this._birthDate = birthDate;
        return _this;
    }
    Student.prototype.getAge = function () {
        this._age = new Date().getFullYear() - this._birthDate;
        return this._age;
    };
    return Student;
}(User));
var student = new Student(4, "Iskandar", "Abdumalikov", "IskandarMan", "male", 2007);
console.log(student.getAge());
var BMW = /** @class */ (function (_super) {
    __extends(BMW, _super);
    function BMW(model, hp, color, speed, id, brand) {
        var _this = _super.call(this, model, hp, color, speed, id) || this;
        _this._brand = brand;
        return _this;
    }
    return BMW;
}(Car));
var Predator = /** @class */ (function (_super) {
    __extends(Predator, _super);
    function Predator(name, peredator, unique, mammal) {
        var _this = _super.call(this, name, peredator, unique) || this;
        _this._isMammal = mammal;
        return _this;
    }
    Predator.prototype.getIsPeredator = function () {
        if (this._isMammal && this._isPeredator) {
            return "This animal is a predator and a mammal";
        }
        else {
            if (!this._isMammal && !this._isPeredator) {
                return "This animal is not a predator and a mammal";
            }
            else {
                return "This animal is the best of the best animal in the world";
            }
        }
    };
    return Predator;
}(Animal));
var predator = new Predator("Jaguar", true, true, true);
console.log(predator.getIsPeredator);
// ========== Abstraction ========== //
var Animals = /** @class */ (function () {
    function Animals(name) {
        this.name = name;
    }
    Animals.prototype.move = function () {
        console.log("".concat(this.name, " is moving."));
    };
    return Animals;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.makeSound = function () {
        console.log("".concat(this.name, " says: Woof! Woof!"));
    };
    return Dog;
}(Animals));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.makeSound = function () {
        console.log("".concat(this.name, " says: Meow! Meow!"));
    };
    return Cat;
}(Animals));
var Chick = /** @class */ (function (_super) {
    __extends(Chick, _super);
    function Chick(name) {
        return _super.call(this, name) || this;
    }
    Chick.prototype.makeSound = function () {
        console.log("".concat(this.name, " says: chi! chi!"));
    };
    return Chick;
}(Animals));
var dog = new Dog("Buddy");
dog.makeSound();
dog.move();
var cat = new Cat("Whiskers");
cat.makeSound();
cat.move();
// ========== Polimorphisim ========== //
var MathAdd = /** @class */ (function () {
    function MathAdd() {
    }
    MathAdd.prototype.add = function (a, b) {
        return a + b;
    };
    return MathAdd;
}());
var AddString = /** @class */ (function (_super) {
    __extends(AddString, _super);
    function AddString() {
        return _super.call(this) || this;
    }
    AddString.prototype.add = function (a, b) {
        return "".concat(a, " ").concat(b);
    };
    return AddString;
}(MathAdd));
var SquereNum = /** @class */ (function (_super) {
    __extends(SquereNum, _super);
    function SquereNum() {
        return _super.call(this) || this;
    }
    SquereNum.prototype.add = function (a, b) {
        return Math.pow(a, b);
    };
    return SquereNum;
}(MathAdd));
var Numbers = /** @class */ (function (_super) {
    __extends(Numbers, _super);
    function Numbers(num) {
        var _this = _super.call(this) || this;
        _this._num = num;
        return _this;
    }
    Numbers.prototype.add = function (a, b) {
        return Math.pow(a, b) + this._num;
    };
    return Numbers;
}(MathAdd));
