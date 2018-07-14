<p align="center"><img src="ramd-logo.png" /></p>

<h1 align="center"> ramd.js </h1>

<p align="center"> Minimal standalone JS library for building TODO like web applications. </p>

<hr/>

<p> RAMD or Render - Add - Modify - Delete is minimal 0.65 kb library for making simple list projects. Everything is based on the "simplified virtual DOM" that is basically JavaScript Object listing the essential element properties. This Object acts like internal DB that can be stored locally or send to the server. The importance of the "virtualdom" vs DOM is not about the speed but rather ease of use and storage. </p>

```javascript

// simplified virtual DOM

var someObjectName = {
  "1531563018024-9718829aa677": {
    "element": "li",
    "text": "Hello World",
    "cssStyle": "color:red",
    "id": "",
    "className": "hello"
  },
  "1531563018029-47baba1f2315": {
    "element": "div",
    "text": "button",
    "cssStyle": "",
    "id": "",
    "className": "del"
  }

```
<p>The Object method "1531563018024-9718829aa677" is Timestamp - Random Number. You can use the Timestamp to determine when the element was added. </p>

<h3> What contains library? </h3>

<ul>
  <li>$ - Selector</li>
  <li>on - addEventListener</li>
  <li>Render and renderOne - render all and render one element</li>
  <li>Adding, modifying and deleting elements </li>
  <li>localStorage for storing the virtualdom</li>
</ul>

<h3> Making the super simple TODO : </h3>

```javascript

// Just with few lines of code you can add and delete elements

var el1 = {}

on($("#bt"), 'click', function(e) {
    add(el1, $("#todo")[0], "li", $("#tx")[0].value);

    on($("li"), 'dblclick', function(e) {
        del(el1, this);
    });
});
```

<p> Here is the Demo of the super simple TODO: </p>

<a href="https://vladocar.github.io/ramd.js/simple-todo.html"> Super simple TODO demo </a>

<a href="https://vladocar.github.io/ramd.js/"> More complex TODO demo that saves the data in the browser</a>



<h3> Download & Installation </h3>

You can use direct download or:

```shell
$ npm i ramd
```

<h3>License</h3>

This project is licensed under the MIT License
