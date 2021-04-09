---
title: 'CSS Grid'
---

## CSS Grid Example

1. In a directory separate from `acme`, create the directory `css-grid-example`
1. Open the `css-grid-example` directory in an editor
1. Create the file `display.css`
1. Add these base styles to set background and foreground colors as well as borders so we can easily see the grid being created.

   #### `display.css`

   ```css
   * {
     font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
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

## Applying to Acme

### Using CSS

1. Open your `acme` gatsby directory in an editor.
2. Change the `footer.js` to use a `footer` element instead of `div`.

   #### `src\components\footer.js`

   ```diff
   export default function Footer() {
     return (
   -    <div>
   +    <footer>
         <nav className="my-8">
           <FooterLink>Privacy</FooterLink>
           <FooterLink>Terms</FooterLink>
           <FooterLink>Careers</FooterLink>
           <span className="text-gray-400"> &#169; Acme Inc.</span>
         </nav>
   -    </div>
   +    </footer>
     )
   }
   ```

3. Modify `layout` to include three distinct areas: Header, Main, and Footer.

   #### `src\components\layout.js`

   ```js
   export default function Layout({ children }) {
     return (
       <div className="p-2 mx-auto container w-auto border-box">
         <Header />
         <main>{children}</main>
         <aside>
           <figure className="p-6 shadow-sm rounded-md  bg-gray-300  my-6">
             <blockquote className="text-xl text-gray-600 ">
               "We here at Acme Inc. understand that it is better to leverage
               efficiently than to benchmark extensibly."
             </blockquote>
             <figcaption>
               -Anders Reinfeld, <em>CEO</em>
             </figcaption>
           </figure>
         </aside>
         <Footer />
       </div>
     );
   }
   ```

4. Add the following css to create a two column, three row grid layout.

   #### `src\styles\global.css`

   ```css
   .container {
     display: grid;
     grid-template-columns: 1fr 20em;
     grid-template-rows: 6em 1fr 6em;
   }

   header,
   footer {
     grid-column: 1/3;
   }

   /*comment these styles after getting it working, these will just allow us to see the grid */
   .grid-item,
   header,
   main,
   aside,
   footer {
     border: 1px solid red !important;
   }
   ```

5. View the site and verify the new layout.

### Using Tailwind Utility Classes

In this section we are going to achieve the same CSS grid using tailwind utility classes instead of custom CSS.

1. Extend Tailwind's theme to define `grid-columns-layout` and `grid-rows-layout` classes with the desired 2 column, 3 row layout.

   #### `tailwind.config.js`

   ```diff

   module.exports = {
     purge: ["./src/**/*.js"],
     darkMode: false, // or 'media' or 'class'
     theme: {
       extend: {
   +      gridTemplateColumns: {
   +        layout: "1fr 20em",
   +      },
   +      gridTemplateRows: {
   +        layout: "6em 1fr 6em",
   +      },
       },
     },
     variants: {
       extend: {
         borderWidth: ["hover"],
         borderStyle: ["hover"],
         borderColor: ["hover"],
       },
     },
     plugins: [],
   }
   ```

1. Add those new utility classes and the grid class to the layout.

   #### `src\components\layout.js`

   ```diff
   ...
   export default function Layout({ children }) {
     return (
   -     <div className="p-2 mx-auto container w-auto border-box">
   +    <div className="container mx-auto grid grid-cols-layout grid-rows-layout">
         <Header />
         <main>{children}</main>
         <aside>
           <figure className="p-6 shadow-sm rounded-md  bg-gray-300  my-6">
             <blockquote className="text-xl text-gray-600 ">
               "We here at Acme Inc. understand that it is better to leverage
               efficiently than to benchmark extensibly."
             </blockquote>
             <figcaption>
               -Anders Reinfeld, <em>CEO</em>
             </figcaption>
           </figure>
         </aside>
         <Footer />
       </div>
     )
   }
   ```

1. Add the `col-start-1` and `col-end-3` utility classes from Tailwind to the `header.js` and `footer.js`

   #### `src\components\header.js`

   ```diff
   ...
   export default function Header() {
   ...

     return (
   -    <header className="pt-5 pb-10 border-b-2 border-solid border-gray-600">
   +    <header className="col-start-1 col-end-3 pt-5 pb-10 border-b-2 border-solid border-gray-600">
         <Link to="/" className="text-4xl mx-4">
           {data.site.siteMetadata.title}
         </Link>
         <nav className="inline">
           <NavLink to="/">Home</NavLink>
           <NavLink to="/about">About</NavLink>
         </nav>
       </header>
     )
   }


   ```

   #### `src\components\footer.js`

   ```diff
   export default function Footer() {
     return (
   -    <footer>
   +    <footer className="col-start-1 col-end-3">
         <nav className="my-8">
           <FooterLink>Privacy</FooterLink>
           <FooterLink>Terms</FooterLink>
           <FooterLink>Careers</FooterLink>
           <span className="text-gray-400"> &#169; Acme Inc.</span>
         </nav>
       </footer>
     )
   }
   ```

1. If time permits, add a CSS transform to the aside in `layout.js`.

   #### `src\components\layout.js`

   ```diff
   ...
   export default function Layout({ children }) {
     return (
       <div className="container mx-auto grid grid-cols-layout grid-rows-layout">
         <Header />
         <main>{children}</main>
   -      <aside>
   -        <figure className="p-6 shadow-sm rounded-md  bg-gray-300  my-6">
   +      <aside className="m-2 p-2 bg-gray-100 w-full h-56 flex-none rounded-xl">
   +        <figure className="transform -rotate-1 p-6 shadow-sm rounded-md  bg-red-200  my-2 mx-0">
             <blockquote className="text-xl text-gray-600 ">
               "We here at Acme Inc. understand that it is better to leverage
               efficiently than to benchmark extensibly."
             </blockquote>
             <figcaption>
               -Anders Reinfeld, <em>CEO</em>
             </figcaption>
           </figure>
         </aside>
         <Footer />
       </div>
     )
   }
   ```
