// Chatroom (mediator), User (colleages of the chatroom)
// Either send to single user or broadcast to entire chatroom

const User = function (name) {
  this.name = name;
  this.chatroom = null;
};

User.prototype = {
  send: function (message, to) {
    this.chatroom.send(message, this, to); // 'this' pertains to the User
  },
  recieve: function (message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  },
};

const Chatroom = function () {
  let users = {}; // list of users

  return {
    register: function (user) {
      users[user.name] = user;
      user.chatroom = this; // Set to the current chatroom
    },
    send: function (message, from, to) {
      if (to) {
        // Single user message
        to.recieve(message, from);
      } else {
        // Mass message
        for (let key in users) {
          if (users[key] !== from) {
            users[key].recieve(message, from);
          }
        }
      }
    },
  };
};

const brad = new User("Brad");
const jeff = new User("Jeff");
const sara = new User("Sara");

const chatroom = new Chatroom();

chatroom.register(brad);
chatroom.register(jeff);
chatroom.register(sara);

// Message to specific users
brad.send("Hello Jeff", jeff);
sara.send("Hello Brad, you are the best dev ever!", brad);

// Message to everyone registered to the chatroom
jeff.send("Hello everyone");
