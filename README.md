# Drop Down Menu

Javascript package for creating a drop down menu in HTML

# Installation

`npm install @salypse/drop-down-menu`

# Usage

```html
<!--
  In your HTML you will need an item of class "drop-down-menu"
    menu will have two children of class "drop-down-header" and "drop-down-items"
    "drop-down-items" children act as the drop down menu items that appear on clicking the header button
--!>

<div class = "drop-down-menu">
  <button class = "drop-down-header">Header</button
  <div class = "drop-down-items">
    <button>Item1</button>
    <button>Item2</button>
    <button>Item3</button>
  </div
</div>

```

```javascript
import DropDownMenu from "@salypse/drop-down-menu"

const testDropDownMenuDiv = document.querySelector(".drop-down-menu")
const testDropDownMenu = new DropDownMenu(testDropDownMenuDiv)
```
