;(function () {
  "use strict";

  function rad(deg) {
    return deg * Math.PI / 180;
  }

  function turtle(rootElement) {
    return {
      rootElement: rootElement,
      x: 0,
      y: 0,
      angle: 0,
      html: '<input type="radio" name="turtle" checked>',
      stamps: [],
      heading: function () {
        return this.angle;
      },
      setheading: function (angle) {
        this.angle = angle;
      },
      setx: function (x) {
        this.x = x;
      },
      sety: function (y) {
        this.y = y;
      },
      xcor: function () {
        return this.x;
      },
      ycor: function () {
        return this.y;
      },
      goto: function (x, y) {
        this.x = x;
        this.y = y;
      },
      forward: function (distance) {
        this.x += Math.cos(rad(this.angle)) * distance;
        this.y += Math.sin(rad(this.angle)) * distance;
      },
      backward: function (distance) {
        this.x -= Math.cos(rad(this.angle)) * distance;
        this.y -= Math.sin(rad(this.angle)) * distance;
      },
      left: function (angle) {
        this.angle -= angle;
      },
      right: function (angle) {
        this.angle += angle;
      },
      shape: function (html) {
        this.html = html;
      },
      stamp: function () {
        var el = document.createElement("div");
        el.innerHTML = this.html;
        rootElement.appendChild(el);
        this.stamps.push(el);
        el.classList.add("turtle-el");
        el.style.left = this.x + "px";
        el.style.top = this.y + "px";
        return this.stamps.length - 1;
      },
      clearstamps: function () {
        this.stamps.forEach(e => e.remove());
        this.stamps = [];
      },
      clearstamp: function (stampid) {
        this.stamps.splice(stampid, 1)[0].remove();
      },
      position: function () {
        return [this.x, this.y];
      },

      getstamp: function (stampid) {
        return this.stamps[stampid];
      },
    };
  };

  var Turtle = {
    turtle: turtle,
  };

  if (typeof module === "object" && 
      typeof module.exports === "object") {
    module.exports = Turtle;
  }

  if (typeof window === "object") {
    window.Turtle = Turtle;
  }
})();

