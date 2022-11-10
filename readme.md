

![Logo](https://caesardev.se/docs/caesar-lightbox/caesar-lightbox-icon-80.png)



## Caesar lightbox

Making lightboxes great again!





## Features

- Simplicity first
- No settings
- Totally customizable




## Dependencies

 - [Tailwind CSS](https://tailwindcss.com/)
 - [Alpine.js](https://alpinejs.dev/)

The lightbox uses Tailwind CSS and alpine.js, because who dosen't?


## Demo

https://caesardev.se/docs/caesar-lightbox/

## Example

A working example is included in the **example** folder. Open the index.html file in your browser to try it out. 



## Use in your project


- Copy the contents of **caesar-lightbox.html** and place somewhere in your html/template code. Preferably in the header/footer if you want it available on all pages.

- Include the Scripts

    
        <!-- Scripts -->
        <script src="./caesar-lightbox.js"></script>
        <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>

Note that the Tailwind CSS is included with a CDN link.

```bash
<!-- Tailwind CDN -->
<script src="https://cdn.tailwindcss.com"></script>
```
Tailwind CDN shouldn't be used other than for the demo. In real projects use your own compiled css.


#### Make it work

- The lightbox needs a buch of images which it will look for when the docoment loads. Modify the querySelector vaiable in **caesar-lightbox.js** to suit your html. 
 
        const querySelector = 'img.caesar-lightbox';

You could also modify where to find the url for the image element with the **imgUrlAttribute** variable. Have a look in the exaple how this works.
