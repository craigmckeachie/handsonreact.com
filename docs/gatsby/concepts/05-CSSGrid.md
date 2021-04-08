---
title: "CSS Grid"
---

## What is a Grid?

CSS Grid Layout (aka “Grid”), is a two-dimensional grid-based layout system that aims to do nothing less than completely change the way we design grid-based user interfaces. CSS has always been used to lay out our web pages, but it’s never done a very good job of it. First, we used tables, then floats, positioning and inline-block, but all of these methods were essentially hacks and left out a lot of important functionality (vertical centering, for instance).

> What about Flexbox?
>
> Flexbox helped out, but it’s intended for simpler one-dimensional layouts, not complex two-dimensional ones (Flexbox and Grid actually work very well together). Grid is the very first CSS module created specifically to solve the layout problems we’ve all been hacking our way around for as long as we’ve been making websites.

## Terminology

- Grid container
- Grid items
- Grid lines
- Grid cells
- Grid columns
- Grid rows
- Grid tracks
- Grid areas

  > [Visualize these by looking at this cheatsheet](https://css-tricks.com/snippets/css/complete-guide-grid/#important-terminology)

- [Gaps](https://css-tricks.com/snippets/css/complete-guide-grid/#column-gaprow-gapgrid-column-gapgrid-row-gap)

- Margins: outside the grid

### CSS Properties

- [28 properties with similar names](https://css-tricks.com/snippets/css/complete-guide-grid/#grid-properties)
- Creates confusion
- [Visualizing the grid properties](https://grid.malven.co/)

> Tip: Focus on short list of critical properties below

- Creating the Grid
  - grid-template-columns
  - grid-template-rows
- Placing items in the grid
  - grid-column-[start|end]
  - grid-row-[start|end]

### Browser Support

- Modern Browsers Supported
- IE 10-11 Partial (Early version, requires -ms- prefix)
- Reference: https://caniuse.com/css-grid

### Techniques for Older Browsers

- Feature Detection
- Prefixed rules for Internet Explorer
- Progressive Enhancement
