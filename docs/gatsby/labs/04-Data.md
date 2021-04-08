---
title: "Data"
---

## Query Site MetaData

1. Add a site title as metadata to the gatsby configuration file.

   #### `gatsby-config.js`

   ```diff
   module.exports = {
   +  siteMetadata: {
   +    title: `Acme Inc.`,
   +    description: `A corporate site`,
   +  },
     plugins: [`gatsby-plugin-emotion`, "gatsby-plugin-postcss"],
   }
   ```

2. Open GraphiQL and write a query for the siteMetadata.

   ```
   http://localhost:8000/___graphQL
   ```

   ```json
   query {
       site {
       siteMetadata {
           title
       }
       }
   }
   ```

## Create a Static Query

3. Use that query as a static query in the Header component to retrieve the data.
4. Display the data in the header to the left of the Navigation.

   ```diff
   import React from "react"
   - import { Link } from "gatsby"
   + import { useStaticQuery, graphql, Link } from "gatsby"

   export const NavLink = ({ children, to }) => {
     return (
       <Link
         className="mx-0 p-5 text-gray-600 text-lg hover:text-gray-800 hover:border-2 hover:border-solid hover:border-gray-800"
         to={to}
       >
         {children}
       </Link>
     )
   }

   export default function Header() {
   +  const data = useStaticQuery(graphql`
   +    query {
   +      site {
   +        siteMetadata {
   +          title
   +        }
   +      }
   +    }
   +  `)
     return (
       <header className="pt-5 pb-10 border-b-2 border-solid border-gray-600">
   +      <Link to="/" className="text-4xl mx-4">
   +        {data.site.siteMetadata.title}
   +      </Link>
   -      <nav>
   +      <nav className="inline">
           <NavLink to="/">Home</NavLink>
           <NavLink to="/about">About</NavLink>
         </nav>
       </header>
     )
   }

   ```

## Query Files

1. Download [these files](https://github.com/craigmckeachie/acme-snippets/archive/refs/heads/main.zip)
2. Unzip the files.
3. Copy the `articles` and `images` directories into the `acme\src` directory.
4. Install and configure the `gatsby-source-filesystem` plugin so we can read the files in the content directory.

   ```shell
   npm install gatsby-source-filesystem
   ```

   #### `gatsby-config.js`

   ```diff
   module.exports = {
     siteMetadata: {
       title: `Acme Inc.`,
       description: `A corporate site`,
     },
     plugins: [
   +    {
   +      resolve: `gatsby-source-filesystem`,
   +      options: {
   +        name: `src`,
   +        path: `${__dirname}/src`,
   +      },
   +    },
       `gatsby-plugin-emotion`,
       'gatsby-plugin-postcss',
     ],
   };
   ```

5. Save the file and restart the gatsby development server.

   ```
   Ctrl+C
   gatsby develop
   ```

6. Then open up GraphiQL again.

   ```
   http://localhost:8000/___graphQL
   ```

7. Write a query to view the file names in the content directory.

   ```json
   {
     allFile {
       edges {
         node {
           id
           relativePath
           prettySize
           birthTime(fromNow: true)
         }
       }
     }
   }
   ```

## Create a Page Query

4. Create a page named `files.js` that uses that uses a the query you just wrote as a `page query` to fetch data and then displays it in the page.

   #### `src\pages\files.js`

   ```js
   import { graphql } from "gatsby";
   import React from "react";
   import Layout from "../components/layout";
   import { PageTitle } from "../components/page-title";

   const Th = ({ children }) => {
     return (
       <th className="px-5 py-3 border-b-2 border-gray-200 bg-blue-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
         {children}
       </th>
     );
   };

   const Td = ({ children }) => {
     return (
       <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
         {children}
       </td>
     );
   };

   export default function Files({ data }) {
     return (
       <Layout>
         <PageTitle>Files</PageTitle>
         <table className="border border-gray-400 min-w-full leading-normal ">
           <thead>
             <tr>
               <Th>Relative PaTh</Th>
               <Th>Pretty Size</Th>
               <Th>File Type</Th>
               <Th>Created</Th>
             </tr>
           </thead>
           <tbody>
             {data.allFile.nodes.map(file => (
               <tr key={file.id}>
                 <Td>{file.relativePath}</Td>
                 <Td>{file.prettySize}</Td>
                 <Td>{file.extension}</Td>
                 <Td>{file.birthTime}</Td>
               </tr>
             ))}
           </tbody>
         </table>
       </Layout>
     );
   }

   export const query = graphql`
     {
       allFile {
         nodes {
           id
           relativePath
           prettySize
           extension
           birthTime(fromNow: true)
         }
       }
     }
   `;
   ```

5. Load the files page and verify the contents.

   ```
   http://localhost:8000/files/
   ```

   > Tip: visit the development 404 page by typing an invalid url to see a list of all available page routes

## Transform Markdown Files into HTML

1. Install and configure the transformer plugin.

   ```shell
   npm install gatsby-transformer-remark
   ```

   #### `gatsby-config.js`

   ```diff
   module.exports = {
     siteMetadata: {
       title: `Acme Inc.`,
       description: `A corporate site`,
     },
     plugins: [
       {
         resolve: `gatsby-source-filesystem`,
         options: {
           name: `src`,
           path: `${__dirname}/src`,
         },
       },
   +    `gatsby-transformer-remark`,
       `gatsby-plugin-emotion`,
       "gatsby-plugin-postcss",
     ],
   }

   ```

2. Restart the development server then refresh (or open again) GraphiQL.
3. Query the contents of your articles from the markdown files and transform them to HTML.

   ```json
   query {
     allMarkdownRemark {
       totalCount
       edges {
         node {
           frontmatter {
             id
             slug
             title
           }
           html
           timeToRead
           excerpt
         }
       }
     }
   }
   ```

4. Dislay the articles on the home page (`pages\index.js`).
   \*You won't need the `html` field from the query just the `excerpt` so you can leave it out for now.

   #### `src\pages\index.html`

   ```js
   import { graphql } from "gatsby";
   import React from "react";
   import Layout from "../components/layout";
   import { PageTitle } from "../components/page-title";

   export default function Home({ data }) {
     return (
       <Layout>
         <PageTitle>Home</PageTitle>
         <img src="https://source.unsplash.com/600x300/?house" alt="house" />
         <blockquote className="py-6 text-xl text-gray-800  bg-gray-300 text-center my-6">
           "We here at Acme Inc. understand that it is better to leverage
           efficiently than to benchmark extensibly."
         </blockquote>
         <p>
           What does the commonly-used commonly-used commonly-accepted industry
           jargon "holistic" really mean? What does the term "re-sizing" really
           mean? Imagine a combination of WAP and Apache. The ability to
           integrate compellingly leads to the power to grow seamlessly. Your
           budget for iterating should be at least one-tenth of your budget for
           harnessing. If all of this comes off as fabulous to you, that's
           because it is! The power to repurpose strategically leads to the
           aptitude to productize mega-compellingly. If you redefine
           proactively, you may have to maximize dynamically. Do you have a game
           plan to become subscriber-defined? Think
           micro-intra-clicks-and-mortar, open-source, C2B2B. If all of this
           seems confused to you, that's because it is!
         </p>
         <div className="py-12">
           <h2 className="text-xl">Featured Articles</h2>
           <hr className="border-gray-400 pb-4" />
           {data.allMarkdownRemark.edges.map(({ node }) => (
             <div className="py-2">
               <a className="hover:underline " href="">
                 <h3 className="text-sm text-gray-800 font-semibold tracking-wide uppercase">
                   {node.frontmatter.title}
                 </h3>
                 <p className="">{node.excerpt}</p>
               </a>
             </div>
           ))}
         </div>
       </Layout>
     );
   }

   export const query = graphql`
     query {
       allMarkdownRemark {
         totalCount
         edges {
           node {
             frontmatter {
               id
               slug
               title
             }
             timeToRead
             excerpt
           }
         }
       }
     }
   `;
   ```

## Create Pages from Data

1. Create the file `gatsby-node.js` at the root of the project.
2. Handle the create node event and log out the node.

   #### `gatsby-node.js`

   ```js
   exports.onCreateNode = ({ node }) => {
     console.log(`Node created of type "${node.internal.type}"`);
   };
   ```

3. Stop `gatsby develop` with `Ctrl+C` and start it again.

   ```shell
   Ctrl+C
   gatsby develop
   ```

4. Note all the `Node create of type ...` logged to the console.
5. Add an if statement to filter down to just `MarkdownRemark` nodes.

   #### `gatsby-node.js`

   ```js
   exports.onCreateNode = ({ node, getNode }) => {
     if (node.internal.type === "MarkdownRemark") {
       console.log(`Node created of type: ${node.internal.type}`);
       const fileNode = getNode(node.parent);
       console.log(fileNode.relativePath);
     }
   };
   ```

6. Restart the development server again.

7. The generated paths for each file will now be logged to the console.

   ```
   /articles/recontextualizing-extensibily/
   /articles/determining-your-feature-set/
   /articles/your-budget-for-streamlining/
   ```

8. Use `createNodeField` to create a node we can use as the path.

   #### `gatsby-node.js`

   ```js
   const { createFilePath } = require("gatsby-source-filesystem");

   exports.onCreateNode = ({ node, getNode, actions }) => {
     const { createNodeField } = actions;
     if (node.internal.type === "MarkdownRemark") {
       const path = createFilePath({ node, getNode, basePath: `pages` });
       createNodeField({ node, name: "path", value: path });
     }
   };
   ```

9. Restart the development server again.
10. Open GraphiQL and run the query below and you should see a new path node.

    ```json
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              path
            }
          }
        }
      }
    }
    ```

11. Query the data for each of those paths by handling the createPages event.

    #### `gatsby-node.js`

    ```js
    ...
    exports.createPages = async ({ graphql, actions }) => {

      const result = await graphql(`
        query {
          allMarkdownRemark {
            edges {
              node {
                fields {
                  path
                }
              }
            }
          }
        }
      `)
      console.log(JSON.stringify(result, null, 4))
    }
    ```

12. Restart the development server again.
13. You should see the path field being logged.
14. Create a page for each path.

    #### `gatsby-node.js`

    ```diff
    + const path = require(`path`)
    const { createFilePath } = require("gatsby-source-filesystem")

    exports.onCreateNode = ({ node, getNode, actions }) => {
      const { createNodeField } = actions
      if (node.internal.type === "MarkdownRemark") {
        const path = createFilePath({ node, getNode, basePath: `pages` })
        createNodeField({ node, name: "path", value: path })
      }
    }

    exports.createPages = async ({ graphql, actions }) => {
    +  const { createPage } = actions
      const result = await graphql(`
        query {
          allMarkdownRemark {
            edges {
              node {
                fields {
                  path
                }
              }
            }
          }
        }
      `)
    +  result.data.allMarkdownRemark.edges.forEach(({ node }) +=> {
    +    createPage({
    +      path: node.fields.path,
    +      component: path.resolve(`./src/templates/article.+js`),
    +      context: {
    +        // Data passed to context is available
    +        // in page queries as GraphQL variables.
    +        slug: node.fields.path,
    +      },
    +    })
    +  })
    + }
    ```

_We can test this in a minute but first we need to create the template we referenced in the above code._

14. Create a directory at `src/templates`, and then add the following in a file named `src/templates/article.js`.
15. Create the basics of a component to display an article but just hard-code a header.

    #### `src\templates\article.js`

    ```js
    import React from "react";
    import Layout from "../components/layout";
    import { PageTitle } from "../components/page-title";

    export default function Article() {
      return (
        <Layout>
          <PageTitle>Article Page</PageTitle>
        </Layout>
      );
    }
    ```

16. Restart the development server again.
17. In your browser, visit:

    ```
    http://localhost:8000/nothing
    ```

    > This is the default 404 page in gatsby that displays all the site pages including the ones you just dynamically created.

18. Click on of the article links and you should see the `Article Page` header displayed.

    ```
    Article Page
    ```

19. Write a query to find an article based on its slug/path.

    #### Query

    ```json
    query ($path: String!) {
      markdownRemark(fields: {path: {eq: $path}}) {
        html
        frontmatter {
          id
          title
        }
        fields {
          path
        }
      }
    }
    ```

    #### Query Variables

    ```json
    {
      "path": "/articles/your-budget-for-streamlining/"
    }
    ```

20. Update the article component as follows:

    - Add the query to find an article as page query
    - Display the title of the article
    - Display the `html` of the article

    #### `src\components\article.js`

    ```js
    + import { graphql } from 'gatsby';
    import React from 'react';
    import Layout from '../components/layout';
    import { PageTitle } from "../components/page-title"

    + export default function Article({ data }) {
    +  const article = data.markdownRemark;

      return (
        <Layout>
    +      <PageTitle>{article.frontmatter.title}</PageTitle>
    +      <div dangerouslySetInnerHTML={{ __html: article.html }} />
        </Layout>
      );
    }

    + export const query = graphql`
    +   query($path: String!) {
    +     markdownRemark(fields: { path: { eq: $path } }) {
    +       html
    +       frontmatter {
    +         id
    +         title
    +       }
    +       fields {
    +         path
    +       }
    +     }
    +   }
    + `
    ```

<!-- 21. Improve the styles of the Article component. Below is an example. -->

21. Update the article links on the home page to use the slug.

    #### `src\pages\index.js`

    ```diff
    - import { graphql } from "gatsby"
    + import { graphql, Link } from "gatsby"
    import React from "react"
    import Layout from "../components/layout"
    import { PageTitle } from "../components/page-title"

    export default function Home({ data }) {
      return (
        <Layout>
          <PageTitle>Home</PageTitle>
          ...
          <div className="py-12">
            <h2 className="text-xl">Featured Articles</h2>
            <hr className="border-gray-400 pb-4" />
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <div className="py-2">
    -            <a className="hover:underline" href="">
    +            <Link
                  className="hover:underline"
                  to={`articles${node.frontmatter.slug}`}
                >
                  <h3 className="text-sm text-gray-800 font-semibold tracking-wide uppercase">
                    {node.frontmatter.title}
                  </h3>
                  <p className="">{node.excerpt}</p>
    -             </a>
    +            </Link>
              </div>
            ))}
          </div>
        </Layout>
      )
    }

    export const query = graphql`
    query {
      allMarkdownRemark {
        totalCount
        edges {
          node {
            frontmatter {
              id
              slug
              title
            }
            timeToRead
            excerpt
          }
        }
      }
    }
    `
    ```

22. Alternatively, we could have update the query to return the path variable that we generated (which is the same as the slug except it includes the path).

    ```diff
    import { graphql, Link } from "gatsby"
    import React from "react"
    import Layout from "../components/layout"
    import { PageTitle } from "../components/page-title"

    export default function Home({ data }) {
      return (
        <Layout>
          <PageTitle>Home</PageTitle>
          ...
          <div className="py-12">
            <h2 className="text-xl">Featured Articles</h2>
            <hr className="border-gray-400 pb-4" />
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <div className="py-2">
    -             <Link
    -              className="hover:underline"
    -              to={`articles${node.frontmatter.slug}`}
    -              >
    +            <Link className="hover:underline" to={node.fields.path}>
                  <h3 className="text-sm text-gray-800 font-semibold tracking-wide uppercase">
                    {node.frontmatter.title}
                  </h3>
                  <p className="">{node.excerpt}</p>
                </Link>
              </div>
            ))}
          </div>
        </Layout>
      )
    }

    export const query = graphql`
      query {
        allMarkdownRemark {
          totalCount
          edges {
            node {
              frontmatter {
                id
    -            slug
                title
              }
    +          fields {
    +            path
    +          }
              timeToRead
              excerpt
            }
          }
        }
      }
    `
    ```

> **Note:** The graphql function call returns a Promise
> see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info

<!-- ## Query an external GraphQL API -->
