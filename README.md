# Hugo Icons Module

The SVG icons Hugo module that compatible with most of the icons' vendors, such as [Bootstrap Icons](https://icons.getbootstrap.com/), [Simple Icons](https://simpleicons.org/) and [Font Awesome](https://fontawesome.com/).

The icons were loaded as inline SVG on demand.

## Installation

You'll need import the icons' vendors first.

| Vendor | Vendor Names | Module Path 
|---|:-:|---
| [Bootstrap Icons](https://github.com/razonyang/hugo-mod-icons/tree/main/vendors/bootstrap) | `bootstrap` | `github.com/razonyang/hugo-mod-icons/vendors/bootstrap`
| [Simple Icons](https://github.com/razonyang/hugo-mod-icons/tree/main/vendors/simple-icons) | `simple-icons` | `github.com/razonyang/hugo-mod-icons/vendors/simple-icons`
| [Font Awesome Icons](https://github.com/razonyang/hugo-mod-icons/tree/main/vendors/font-awesome) | `font-awesome-brands`, `font-awesome-regular`, `font-awesome-solid` | `github.com/razonyang/hugo-mod-icons/vendors/font-awesome`

> [Request a new icons' vendor](https://github.com/razonyang/hugo-mod-icons/issues/new) or list your vendor by PR.

Let's say we're going to use three vendors.

```toml
// config.toml
theme = [
  "github.com/razonyang/hugo-mod-icons/vendors/bootstrap",
  "github.com/razonyang/hugo-mod-icons/vendors/simple-icons",
  "github.com/razonyang/hugo-mod-icons/vendors/font-awesome",
]
```

or via `module.imports` (recommended)

```toml
// config.toml
[[module.imports]]
path = "github.com/razonyang/hugo-mod-icons/vendors/bootstrap"

[[module.imports]]
path = "github.com/razonyang/hugo-mod-icons/vendors/simple-icons"

[[module.imports]]
path = "github.com/razonyang/hugo-mod-icons/vendors/font-awesome"
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

### Functions

#### `icons/functions/svg-resource` Function

The `icons/functions/svg-resource` function accept `vendor` and `name` parameters and returns the corresponding icon SVG resource.

```go
{{ $res := dict "vendor" "bootstrap" "name" "house" }}
{{ with partialCached "icons/functions/svg-resource" $res $res }}
<img src="{{ .Permalink }}"></img>
{{ end }}
```
