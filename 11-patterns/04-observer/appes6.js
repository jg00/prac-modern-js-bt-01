// Observer - allows us to subscribe/unsubscribe to certain functionality
class EventObserver {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn); // Subscribe to functions in this case event handler functions.
    console.log(`You are subscribed to ${fn.name}`);
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter(function (item) {
      if (item !== fn) return item;
    });
    console.log(`You are now unsubscribed from ${fn.name}`);
  }

  fire() {
    this.observers.forEach(function (item, index) {
      // console.log(index);
      item.call(); // Fire every function I am subscribed to.
    });
  }
}

// Init EventObserver
const click = new EventObserver();

// Event listeners
document.querySelector(".sub-ms").addEventListener("click", function () {
  click.subscribe(getCurMilliseconds);
});

document.querySelector(".unsub-ms").addEventListener("click", function () {
  click.unsubscribe(getCurMilliseconds);
});

document.querySelector(".sub-s").addEventListener("click", function () {
  click.subscribe(getCurSeconds);
});

document.querySelector(".unsub-s").addEventListener("click", function () {
  click.unsubscribe(getCurSeconds);
});

document.querySelector(".fire").addEventListener("click", function () {
  click.fire();
});

// Click Handlers
const getCurMilliseconds = function () {
  console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
};

const getCurSeconds = function () {
  console.log(`Current Seconds: ${new Date().getSeconds()}`);
};
