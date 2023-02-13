---
title: Hugo Icons 模块
layout: landing
description: The Hugo icons module that generates inline SVG icons.
menu:
  main:
    name: 主页
    weight: 1
    params:
      icon:
        vendor: bootstrap
        name: house
---

<div class="px-4 pt-5 my-5 text-center border-bottom">
  <h1 class="display-4 fw-bold">{{< param title >}}</h1>
  <div class="col-lg-6 mx-auto">
    <p class="lead mb-4">{{< param description >}}</p>
    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
      <a role="button" class="btn btn-primary btn-lg px-4 me-sm-3" href="{{< ref path=`docs` lang=en >}}">
        {{< icons/icon vendor=bootstrap name=book className="me-1" >}}
        Read the docs
      </a>
      <a role="button" class="btn btn-outline-success btn-lg px-4" href="{{< ref path=`icons` lang=en >}}">
        {{< icons/icon vendor=bootstrap name=book className="me-1" >}}
        Search icons
      </a>
    </div>
  </div>
</div>

<h2 class="text-center mb-5">Vendors</h2>

<div class="row row-cols-2 row-cols-sm-3 row-cols-md-5 mb-4">
  <div class="col d-flex flex-column align-items-center mb-3">
    <div class="p-4 bg-light mb-3 w-100 text-center">{{< icons/icon vendor=bootstrap name=bootstrap width=3em height=3em >}}</div>
    <div>
      <a href="{{< ref path=`docs/vendors#bootstrap-icons-vendor` lang=en >}}">Bootstrap Icons</a>
    </div>
  </div>
  <div class="col d-flex flex-column align-items-center mb-3">
    <div class="p-4 bg-light mb-3 w-100 text-center">{{< icons/icon vendor=feather name=feather width=3em height=3em >}}</div>
    <div>
      <a href="{{< ref path=`docs/vendors#feather-icons-vendor` lang=en >}}">Feather Icons</a>
    </div>
  </div>
  <div class="col d-flex flex-column align-items-center mb-3">
    <div class="p-4 bg-light mb-3 w-100 text-center">{{< icons/icon vendor=simple-icons name=fontawesome width=3em height=3em >}}</div>
    <div>
      <a href="{{< ref path=`docs/vendors#font-awesome-icons-vendor` lang=en >}}">Font Awesome Icons</a>
    </div>
  </div>
  <div class="col d-flex flex-column align-items-center mb-3">
    <div class="p-4 bg-light mb-3 w-100 text-center">{{< icons/icon vendor=simple-icons name=simpleicons width=3em height=3em >}}</div>
    <div>
      <a href="{{< ref path=`docs/vendors#simple-icons-vendor` lang=en >}}">Simple Icons</a>
    </div>
  </div>
  <div class="col d-flex flex-column align-items-center mb-3">
    <div class="p-4 bg-light mb-3 w-100 text-center">{{< icons/icon vendor=tabler name=brand-tabler width=3em height=3em >}}</div>
    <div>
      <a href="{{< ref path=`docs/vendors#tabler-icons-vendor` lang=en >}}">Tabler Icons</a>
    </div>
  </div>
</div>
