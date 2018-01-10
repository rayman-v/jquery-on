# jquery-on
a jquery extend function '$.on' for all eventListener

### Usage
- include `jquery.js` and `jquery.on.min.js`
- html
```
<div id="a">aaaaaaa</div>
<input id="b" placeholder="b">
<div class="ul" id="ul">
  <span class="li">1</span>
  <span class="li">2</span>
</div>
```
- javascript
```
$.on({
  window: {
    scroll: function(event) {
      console.log('window scroll');
    }
  },
  '#a': {
    click: function(event) {
      console.log('a click');
    },
    dblclick: function(event) {
      console.log('a dblclick');
    }
  },
  '#b': {
    'input change': function(event) {
      console.log('b input or change');
    }
  },
  '.li': {
    parent: '#ul', // Event Delegation
    click: function(event) {
      console.log('li input or change');
    }
  }
});
```

### Explain
- All selectors and event just pass to $.fn.on function;
- Read the souce file and give me some advices [jquery.on.js]("https://github.com/rayman-v/jquery-on/blob/master/jquery.on.js");