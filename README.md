# dom-turtle

WIP using turtle with DOM nodes to draw a UI. See the [live demo](https://ggorlen.github.io/dom-turtle) and its [`index.html`](index.html) source.

Ideally, the goal is to integrate most of the [Python turtle API](https://docs.python.org/3/library/turtle.html).

## Usage

### Browser

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>dom-turtle demo</title>
<style>
#turtle-container > * {
  position: absolute;
}
</style>
</head>
<body>

<!-- always use a specific commit hash -->
<script src="https://cdn.jsdelivr.net/gh/ggorlen/dom-turtle@88cf054/js/dom-turtle.js"></script>
<div id="turtle-container"></div>
<script>

const rootEl = document.querySelector("#turtle-container");
const turtle = Turtle.turtle(rootEl);
turtle.goto(150, 80);

for (let i = 0; i < 27; i++) {
  const html = `<input
    value="DOM turtle!"
    style="transform: rotate(${turtle.heading()}deg);
           background: hsl(${i * 10}, 80%, 60%)"
  >`;
  turtle.shape(html);
  turtle.stamp();
  turtle.right(15);
  turtle.forward(40);
}

</script>
</body>
</html>
```

