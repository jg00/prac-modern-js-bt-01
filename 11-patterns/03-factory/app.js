// Factory - produce and return instance objects

// Ex 1
function MemberFactory() {
  this.createMember = function (name, type) {
    let member;

    if (type === "simple") {
      member = new SimpleMembership(name);
    } else if (type === "standard") {
      member = new StandardMembership(name);
    } else if (type === "super") {
      member = new SuperMembership(name);
    }

    member.type = type;

    member.define = function () {
      console.log(`${this.name} (${this.type}): ${this.cost}`);
    };

    return member; // return a new instance
  };
}

const SimpleMembership = function (name) {
  this.name = name;
  this.cost = "$5";
};

const StandardMembership = function (name) {
  this.name = name;
  this.cost = "$15";
};

const SuperMembership = function (name) {
  this.name = name;
  this.cost = "$25";
};

const members = [];

// Instantiate MemberFactory
const factory = new MemberFactory();

members.push(factory.createMember("John Doe", "simple"));
members.push(factory.createMember("Chris Jackson", "super"));
members.push(factory.createMember("Janice Williams", "simple"));
members.push(factory.createMember("Tom Smith", "standard"));

console.log(members);

members.forEach(function (member) {
  member.define();
});

// Ex 2
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    },
  };
}

const circle1 = createCircle(1);

// console.log(circle1);
// circle1.draw();
