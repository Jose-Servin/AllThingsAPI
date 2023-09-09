# Introduction to Responsive Web Design

In it's most basic form, a media query helps us achieve either 'desktop first" or "mobile first" layouts.

A basic media query can be:

```css

@media (max-width: 600px)
```

Which means if the width of the viewport is less than or equal to 600px then all the css under this media query will be applied. All of the 'global css' will also apply since a media query changes only certain css properties.

## How to select media query breakpoints

A good breakpoint strategy is to select breakpoint based on screen width ranges. This way, we are not selecting based on device (iphone, ipad etc.) but rather, by the width of the screen being used.

* Phones (300px - 500px)
* vertical tablets (600px - 900px)
* horizontal tablets (900px - 1100px)
* laptops (> 1200px)

The 'perfect' breakpoint strategy is to create breakpoints where the design breaks. This means, we start with out standard screen width i.e the width we are working on and decrease until the design breaks and is no longer acceptable. Then, we create a media query to handle this.

This allows our media queries to be truly independent of devices.

A combination of these two strategies is what is recommended.

### Responding to Small Laptops
