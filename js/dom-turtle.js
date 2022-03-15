;(function () {
  "use strict";

  function rad(deg) {
    return deg * Math.PI / 180;
  }

  var turtle = function (rootElement) {
    this.rootElement = rootElement;
    this.x = 0;
    this.y = 0;
    this.angle = 0;
    this.html = '<input type="radio" name="turtle" checked>';
    this.stamps = [];
  };
  turtle.prototype.heading = function () {
    return this.angle;
  };
  turtle.prototype.setheading = function (angle) {
    this.angle = angle;
  };
  turtle.prototype.setx = function (x) {
    this.x = x;
  };
  turtle.prototype.sety = function (y) {
    this.y = y;
  };
  turtle.prototype.xcor = function () {
    return this.x;
  };
  turtle.prototype.ycor = function () {
    return this.y;
  };
  turtle.prototype.goto = function (x, y) {
    this.x = x;
    this.y = y;
  };
  turtle.prototype.forward = function (distance) {
    this.x += Math.cos(rad(this.angle)) * distance;
    this.y += Math.sin(rad(this.angle)) * distance;
  };
  turtle.prototype.backward = function (distance) {
    this.x -= Math.cos(rad(this.angle)) * distance;
    this.y -= Math.sin(rad(this.angle)) * distance;
  };
  turtle.prototype.left = function (angle) {
    this.angle -= angle;
  };
  turtle.prototype.right = function (angle) {
    this.angle += angle;
  };
  turtle.prototype.shape = function (html) {
    this.html = html;
  };
  turtle.prototype.stamp = function () {
    var el = document.createElement("div");
    el.innerHTML = this.html;
    this.rootElement.appendChild(el);
    this.stamps.push(el);
    el.classList.add("turtle-el");
    el.style.left = this.x + "px";
    el.style.top = this.y + "px";
    return this.stamps.length - 1;
  };
  turtle.prototype.clearstamps = function () {
    this.stamps.forEach(e => e.remove());
    this.stamps = [];
  };
  turtle.prototype.clearstamp = function (stampid) {
    this.stamps.splice(stampid, 1)[0].remove();
  };
  turtle.prototype.position = function () {
    return [this.x, this.y];
  };
  turtle.prototype.getstamp = function (stampid) {
    return this.stamps[stampid];
  };

  var Turtle = {
    turtle: function (rootElement) {
      return new turtle(rootElement);
    },
  };

  if (typeof module === "object" && 
      typeof module.exports === "object") {
    module.exports = Turtle;
  }

  if (typeof window === "object") {
    window.Turtle = Turtle;
  }
})();

