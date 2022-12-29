# Hugo Icons Module

The SVG icons Hugo module that compatible with most of the icons' vendors, such as [Bootstrap Icons](https://icons.getbootstrap.com/), [Simple Icons](https://simpleicons.org/) and [Font Awesome](https://fontawesome.com/).

The icons were loaded as inline SVG on demand.

## Installation

You'll need import the icons' vendors first.

| Vendor | Module Path 
|---|---
| [Bootstrap Icons](https://github.com/razonyang/hugo-mod-icons-bootstrap) | `github.com/razonyang/hugo-mod-icons-bootstrap`
| [Simple Icons](https://github.com/razonyang/hugo-mod-icons-simple-icons) | `github.com/razonyang/hugo-mod-icons-simple-icons`
| [Font Awesome Icons](https://github.com/razonyang/hugo-mod-icons-font-awesome) | `github.com/razonyang/hugo-mod-icons-font-awesome`

> [Request a new icons' vendor](https://github.com/razonyang/hugo-mod-icons/issues/new) or list your vendor by PR.

Let's say we're going to use three vendors.

```toml
// config.toml
theme = [
  "github.com/razonyang/hugo-mod-icons-bootstrap",
  "github.com/razonyang/hugo-mod-icons-simple-icons",
  "github.com/razonyang/hugo-mod-icons-font-awesome",
]
```

## Usage

Now we're able to generate the inline SVG via `icons/icon` partial.

```go
{{ $context := dict
  "vendor" "bootstrap"
  "name" "house"
}}
{{ partial "icons/icon" $context }}
```

### Context

| Name | Required | Description
|:-:|:-:|---
| `vendor` | Y | The vendor name of icons.
| `name` | Y | The icon name.
| `height` | N | The height of icon, default to `1em`.
| `width` | N | The width of icon, default to `1em`.
| `className` | N | The additional class names of `<svg>` tag after `hi-svg-inline`.
| `color` | N | The color of icon.

### Style

You may need to adjust your CSS like following to align the icon to vertical middle. 

```css
.hi-svg-inline {
  vertical-align: -0.125rem;
}
```
