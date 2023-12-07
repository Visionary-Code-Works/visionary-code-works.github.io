# Documentation for `templates` Directory

The `templates` directory is used for storing template files that define the structure and layout of different types of pages or components in a Jekyll project.

## Directory Structure and Usage

- **HTML Templates**: Contains HTML files that serve as templates for various parts of the site, such as blog post layouts, header and footer layouts, or custom page designs.

- **Include Files**: May include smaller reusable components (similar to those in `_includes`), like navigation bars, breadcrumb trails, or social media link templates.

- **Markdown Templates**: For content-heavy sites, Markdown templates with predefined structure for blog posts, news articles, or documentation pages.

## Best Practices

- **Consistency**: Maintain a consistent structure across templates for a cohesive look and feel.

- **Commented Code**: Comment sections of the templates to describe their purpose, especially for complex layouts.

- **Front Matter Defaults**: Use Jekyll's front matter defaults to apply template layouts automatically to specific types of pages or posts.

- **Responsive Design**: Ensure that templates are designed with responsiveness in mind, adapting to different screen sizes and devices.

## Example Template

A basic HTML template for a blog post might look like this:

```html
<!DOCTYPE html>
<html>
<head>
    <!-- Head elements here -->
</head>
<body>
    {% include header.html %}
    <article>
        <!-- Article content here -->
    </article>
    {% include footer.html %}
</body>
</html>
```

This template could be used as a starting point for creating individual blog post pages.

---

<!-- Both `scripts` and `templates` directories play significant roles in a Jekyll project, facilitating automation and consistency in development and content presentation. Proper documentation and organization in these directories contribute to a more efficient and maintainable project structure. -->
