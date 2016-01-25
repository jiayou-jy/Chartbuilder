# Making Chartbuilder Yours

The following assumes you have a dev instance of Chartbuilder up and running at `localhost:3000`. Best to also have a gander at [Diving into Chartbuilder](https://github.com/Quartz/Chartbuilder/blob/master/docs/01-introduction.md) and [Customizing Chartbuiler](https://github.com/Quartz/Chartbuilder/blob/master/docs/02-customizing-chartbuilder.md) (though this documentation aims to clarify some of that.

Also ICYMI: Chartbuilder uses [Stylus](http://stylus-lang.com/) for its CSS. Stylus is a lot like SASS or LESS and has supporting syntax highlight for Sublime Text (and I'm sure others). It also uses `.jsx` files, which are syntax highlighted using the Babel package in Sublime Text. I found it to be very helpful because standard JS highlighting makes it look like everything is broken.

Sections:

- [Title](#title)
- [Typography](#typography)
- [Colors](#colors)
- [Formatting](#formatting)
- [Adding a logo](#adding-a-logo)
- [Adding a subtitle](#adding-a-subtitle)

# TITLE

Change the display and page title at `Chartbuilder/src/htdocs/index.html`

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
    <title>George's Charts - A Chartbuilder Fork</title>
    <link rel="stylesheet" href="css/main.css">
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
</head>
<body>
    <div class="header">
        <h1>George's Charts</h1>
    </div>
    <div class="chartbuilder-container">
    </div>
    <script src="js/main.js"></script>
</body>
</html>
```

Save.

# TYPOGRAPHY

Getting Google's webfonts to work with @import or even a link reference in `<head>` was a total nightmare so I went with downloaded fonts. (Might have something to do with Chartbuilder converting all fonts to base64. Also might not.)

Create a directory `fonts` to `Chartbuilder/src/` and dump whatever fonts you plan to use in there. I'm using [_Open Sans_](https://www.google.com/fonts) from Google. 

Open `Chartbuilder/src/styl/fonts.styl` and call your fonts like so:

```stylus
@font-face {
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
src: url('/fonts/Open_Sans/OpenSans-Regular.ttf');
}

@font-face {
font-family: 'Open Sans Bold';
font-style: bold;
font-weight: 700;
src: url('/fonts/Open_Sans/OpenSans-Bold.ttf');
}

@font-face {
font-family: 'Open Sans Light';
font-style: normal;
font-weight: 300;
src: url('/fonts/Open_Sans/OpenSans-Light.ttf');
}
```

Keep the old references or don't (probably don't).
Save.

Open `Chartbuilder/src/styl/type.styl` and use your new fonts:

```stylus
// Typography

// Fonts
$font-sans = 'Open Sans', sans-serif
$font-sans-light = 'Open Sans Light', sans-serif
$font-sans-bold = 'Open Sans Bold', sans-serif
$font-serif = Georgia,'Times New Roman',Times,serif
$primary-font-family = $font-sans
$secondary-font-family = $font-serif
$monospaced-font-family = Monaco, Lucida Console, monspace
```

Save.

Apply a new font specifically:

Open `Chartbuilder/src/styl/layout.styl`

Find `h1` under `.header` and add `font-family $font-sans-bold` so it looks like this:

```stylus
.header
        background-color #333
        margin-top 0
        top 0
        position fixed
        height $header-height
        width 100%
        z-index 10000
        padding 0.5em 0 0 0.25em
        h1
            color #777
            margin 0
            line-height 1
            padding 0
            font-family $font-sans-bold
```

Save. Look, now your title bar is bold.

I don't like the way the 'light' version of Open Sans looks, so we're going to mostly remove it from the chart. That happens at `Chartbuilder/src/styl/chart-renderer.styl`. Compare [my version](https://github.com/golfecholima/Chartbuilder/blob/master/src/styl/chart-renderer.styl) with the Chartbuilder [master version](https://github.com/Quartz/Chartbuilder/blob/master/src/styl/chart-renderer.styl). (Hint: Don't worry about the missing `.svg-text-sub` that's only present if you want to [add a subtitle](#add-a-subtitle) to your Chartbuilder.)

# COLORS

Colors are all handled at `Chartbuilder/src/styl/colors.styl`. As mentioned in the documentation, Chartbuilder needs to know how many colors are being used in the chart. If you don't need more than 11 colors, perfect. Swap out hex values to your hearts content from the list under `$chart-colors =\`. Changing anything in this file before `$chart-colors =\` will affect a variety of elements in the Chartbuilder interface and on the chart itself. Everything with a `$` is a variable in Stylus, so search through the files to determine exactly what color variables are assigned to what. (Much of it can be found in the `/chart-renderer.styl` sheet mentioned earlier.)

**NOTE**: Chartbuilder relies heavily on SVG to work its magic. The CSS property `color` and many other normal CSS properties (such as `background`) do not function as expected. When you're looking at elements in your browser inspector the color of the element will instead correspond to the `fill` property. Folks new to SVG (like me) will find [this SVG documentation](https://developer.mozilla.org/en-US/docs/Web/SVG) useful.

### Adding colors

If you must have more than the default 11 colors, here's how:

Get your list of colors finalized. Count how many colors you have. Open `Chartbuilder/src/js/config/chart-style.js` and find `numColors:`. Change the number to correspond with the counting performed earlier.



# FORMATTING
# ADD A LOGO
# ADD A SUBTITLE


