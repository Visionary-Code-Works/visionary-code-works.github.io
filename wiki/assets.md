# Documentation for `assets` Directory

The `assets` directory in a Jekyll project is a central repository for storing and organizing all static files like stylesheets, JavaScript files, images, and other media assets. This directory plays a crucial role in defining the look, feel, and functionality of your website.

## Directory Structure

The `assets` directory typically includes subdirectories for different types of assets:

- `css`: Contains CSS files for styling the website. This often includes a main stylesheet (like `main.scss` or `style.css`) and might also include other CSS or SCSS files for specific components or pages.

- `js`: Holds JavaScript files that add interactivity or functionality to the website. This could include custom scripts (`custom.js`) and a main script file (`main.js`), along with any third-party libraries or frameworks.

- `img`: Stores image files used across the website. This includes logos, banners, post images, and any other graphical content.

## Usage and Best Practices

- **Organizing Files**: Keep assets organized in their respective subdirectories. This helps in maintaining the project and makes it easier to locate specific files.

- **Naming Conventions**: Use clear and descriptive names for files to quickly identify their purpose or the content they relate to.

- **Optimization**: Optimize assets for web use. For images, this means using appropriate formats (like JPEG, PNG, SVG) and compressing them for faster load times. For JavaScript and CSS, minification can be used to reduce file size.

- **Version Control**: While assets should be part of your version control system, be mindful of large files, particularly high-resolution images or videos, as they can significantly increase the size of your repository.

- **Path References**: In your HTML, CSS, or JavaScript files, reference these assets using the correct path. Jekyll allows you to use site variables to construct these paths dynamically, e.g., `{{ '/assets/img/logo.png' | relative_url }}`.

## Example: Adding a Stylesheet

To include a CSS file (e.g., `main.css`) in your layout, you would typically add the following line in the `<head>` section of your HTML layout:

```html
<link rel="stylesheet" href="{{ '/assets/css/main.css' | relative_url }}">
```

## Example: Adding a JavaScript File

To add a JavaScript file to your site, you would place it in the `js` subdirectory and then link to it before the closing `</body>` tag in your HTML layout:

```html
<script src="{{ '/assets/js/main.js' | relative_url }}"></script>
```

---

<!-- The `assets` directory is essential for managing the static content that contributes to the overall aesthetics and functionality of your Jekyll site. Proper organization and optimization of assets in this directory are crucial for maintaining an efficient and effective website. -->