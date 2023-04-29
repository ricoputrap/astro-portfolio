---
layout: "../../layouts/PostLayout.astro"
title: How Browser Caches an Image
date: "2023-04-29"
author: Rico Putra
description: What is Image Caching and how does browser cache an image? We will try to find out the answer by understanding the fundamental of caching.
tags: ["Caching"]
slug: image-caching
cover: ""
draft: true
---

To control caching behavior, server response headers play a crucial role. When the image is requested from the remote storage, the server can send appropriate caching headers to instruct the browser on how to cache the image. Common caching headers include Cache-Control and Expires.

If the server sets appropriate caching headers, the browser will cache the image based on those instructions. Subsequent requests for the same image will be fulfilled from the cache unless the cache expires or the server instructs the browser to revalidate the image.