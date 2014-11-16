# MacScroller

Lightweight jQuery plugin to enable a cross-browser flexible scroll to top function and adds smooth scrolling for internal links.

## Setup

Include Font Awesome and the MacScroller stylesheet in your webpage (preferably before the closing HEAD tag):

```html

<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
<link type="text/css" href="assets/js/mac-scroller/mac-scroller.css" rel="stylesheet">

```

And, include the jQuery library (version 1.7 or newer) and MacScroller script in your webpage (preferably before the closing BODY tag):

```html

<script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
<script src="jquery.mac-scroller.min.js"></script>
<script>
  // Initialize Mac Scroller
  $("body").MacScroller();

  // Or, initialize with customizations
  $("body").MacScroller({
  	background: "black",
    color: "white",
    transparency: 90,
    positionX: "right",
    positionY: "bottom",
    fadeSpeed: 200,
    smooth: true
    offset: 100,
  });
</script>

```

## Options

| Name | Description | Type | Default |
|------|-------------|------|---------|
| `background` | The background color of the scroller element | String | "black" |
| `color` | The color of the arrow within the scroller element | String | "white" |
| `transparency` | The opacity of the entire scroller element | Integer | 100 |
| `positionX` | The horizontal position of the scroller on the page. Options include: "left" or "right" | String | "right" |
| `positionY` | The vertical position of the scroller on the page. Options include: "top" or "bottom" | String | "bottom" |
| `fadeSpeed` | The speed at which the scroller fades in at in milliseconds | Integer | 200 |
| `smooth` | Enables smooth scrolling for internal page links | Boolean | true |
| `offset` | If smooth is enabled, sets the scroll offset for internal links. Usually this would be set to the height of the navigation bar | Integer | 100 |

## Changelog

### Version 0.1.1

Improve documentation

### Version 0.1.0

Inital commit