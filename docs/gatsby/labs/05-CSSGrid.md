---
title: "CSS Grid"
---

## CSS Grid Lab

1. Create the directory `css-grid-example`
1. Open the `css-grid-example` directory in an editor
1. Create the file `display.css`
1. Add these base styles to set background and foreground colors as well as borders so we can easily see the grid being created.

   #### `display.css`

   ```css
   * {
     font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
     font-weight: 600;
     box-sizing: border-box;
   }

   html,
   body {
     background: #07038c;
     margin: 0;
   }

   .grid-item,
   header,
   main,
   nav,
   aside,
   footer {
     background: #044bd9;
     color: white;
     border: 1px solid #377eff;
   }

   a {
     color: white;
   }

   a:active,
   :focus {
     outline: 2px solid white;
     background: purple;
   }
   ```

1. Create the file `layout.css`
1. Create the file `index.html`
1. Add these elements so we can lay them out in different ways and link to the two previously created style sheets.

   #### `index.html`

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta http-equiv="X-UA-Compatible" content="IE=edge" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <link rel="stylesheet" href="../common/display.css" />
       <link rel="stylesheet" href="./layout.css" />
       <title>Example A</title>
     </head>
     <body>
       <header>Header</header>
       <nav>Side Nav</nav>
       <main>Main</main>
       <aside>Aside</aside>
       <footer>Footer</footer>
     </body>
   </html>
   ```

1. Install a web server (live reloading)

   ```shell
   npm install live-server -g
   ```

1. Start the server

   ```
   live-server .
   ```

1. Create a 3 column/ 3 row layout using CSS Grid.

   #### `layout.css`

   ```css
   html,
   body {
     height: 100%;
   }

   body {
     display: grid;
     grid-template-columns: 1 1 1;
     grid-template-rows: 1 1 1;
   }
   ```

1. Stretch the header and footer across all three columns.

   #### `layout.css`

   ```css
   header,
   footer {
     grid-column-start: 1;
     grid-column-end: 4;
   }
   ```

   Alternatively...

   #### `layout.css`

   ```css
   header,
   footer {
     grid-column: 1 / 4;
   }
   ```

1. Size the grid columns and rows to create a normal website layout.

   #### `layout.css`

   ```css
   html,
   body {
     height: 100%;
   }

   body {
     display: grid;
     grid-template-columns: 15em auto 15em;
     grid-template-rows: 5em auto 5em;
   }
   ```

1. Set the max-width of the body element so you can see the background.

   #### `layout.css`

   ```diff
   body {
   display: grid;
   grid-template-columns: 15em auto 15em;
   grid-template-rows: 5em auto 5em;
   +  margin: auto;
   +  max-width: 80em;
   }
   ```

1. Remove the sidebar nav and change the column layout to only be 2 columns.

   #### `layout.css`

   ```css
   body {
     display: grid;
     grid-template-columns: auto 15em;
     grid-template-rows: 5em auto 5em;
   }
   ```

## Reference

- [Visualize all the grid properties](https://grid.malven.co/)
- [Video: CSS Grid in 100 Seconds](https://www.youtube.com/watch?v=uuOXPWCh-6o)
- [CSS Tricks: Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [CSS Grid Illustrations](https://dev.to/joyshaheb/css-grid-cheat-sheet-illustrated-in-2021-1a3)
- [CSS Grid CheatSheet](https://devhints.io/css-grid)

## Applying in labs

```css
.grid-item,
header,
main,
/* nav, */
aside,
footer {
  border: 1px solid red !important;
}
```
