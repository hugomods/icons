---
title: "Usages"
date: 2023-02-12T23:02:28+08:00
draft: false
nav_weight: 4
---

This article offers some samples for showing how to use the icons in multiple ways.

<!--more-->

## Use Icons within Templates (Partials)

```go
{{ $context := dict
  "vendor" "bootstrap"
  "name" "house"
}}
{{ partial "icons/icon" $context }}
```

### Context

| Name        | Required | Description                                                      |
| ----------- | :------: | ---------------------------------------------------------------- |
| `vendor`    |    Y     | The vendor name of icons.                                        |
| `name`      |    Y     | The icon name.                                                   |
| `height`    |    N     | The height of icon, default to `1em`.                            |
| `width`     |    N     | The width of icon, default to `1em`.                             |
| `className` |    N     | The additional class names of `<svg>` tag after `hi-svg-inline`. |
| `color`     |    N     | The color of icon.                                               |

## Use Icons by shortcode

| Parameter   | Position |  Type  | Required | Description              |
| ----------- | :------: | :----: | :------: | ------------------------ |
| `vendor`    |   `#1`   | String |    Y     | The icons vendor's name. |
| `name`      |   `#2`   | String |    Y     | The icon's name.         |
| `color`     |    -     | String |    -     | The icon's color.        |
| `className` |    -     | String |    -     | The icon's class name.   |
| `width`     |    -     | String |    -     | The icon's width.        |
| `height`    |    -     | String |    -     | The icon's height.     |

```markdown
{{</* icons/icon bootstrap book */>}}
```

```markdown
{{</* icons/icon vendor=bootstrap name=book color=red */>}}
```
