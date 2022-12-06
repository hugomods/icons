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
  "height" "1em"
  "width" "1em"
  "className" "hugo-icon"
  "color" "green"
}}
{{ partial "icons/icon" $context }}
```

### Context

| Name | Required | Description
|:-:|:-:|---
| `vendor` | Y | The vendor name of icons.
| `name` | Y | The icon name.
| `height` | N | The height of icon.
| `width` | N | The width of icon.
| `className` | N | The class name of `<svg>` tag.
| `color` | N | The color of icon.
