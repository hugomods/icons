---
title: "Functions"
date: 2023-02-12T23:03:14+08:00
draft: false
---

The list of built-in functions.

<!--more-->

## `icons/functions/svg-resource`

The `icons/functions/svg-resource` function accept `vendor` and `name` parameters and returns the corresponding icon SVG resource.

```go
{{ $res := dict "vendor" "bootstrap" "name" "house" }}
{{ with partialCached "icons/functions/svg-resource" $res $res }}
  <img src="{{ .RelPermalink }}"></img>
{{ end }}
```
