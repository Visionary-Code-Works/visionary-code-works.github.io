# Documentation for `_layouts` Directory

The `_layouts` directory in a Jekyll website contains the template files used to define the structure and layout of different types of pages on the site. Layouts are a core feature of Jekyll, providing a way to wrap content in a consistent, reusable HTML structure. Each layout file is a template that can be applied to multiple pages or posts.

## Directory Structure

- `default.html`: The base layout applied to most pages. It includes the basic HTML structure, header, footer, and placeholders for including additional content. All other layouts typically extend this layout.

- `post.html`: A specialized layout for individual blog posts. It typically includes styling and structure specific to blog content, like post metadata (date, author, tags), a comment section, and navigation to other posts.

- `page.html`: Used for standard pages such as 'About Us', 'Contact', and other similar pages. This layout is simpler compared to `post.html`, focusing more on static content.

- `home.html`: The layout for the site’s homepage. It often includes elements like a hero section, featured content, latest posts, or other dynamic sections specific to the homepage.

- `archive.html`: A layout for archive pages that list posts by date, category, or tag. It's typically a list or grid view of posts with links to individual posts.

- `category.html` and `tag.html`: These are similar to `archive.html` but specifically for listing posts by categories or tags.

- `custom.html`: An example of a custom layout for specific needs or unique page designs that don't fit into other standard layouts.

## Usage

- To apply a layout to a page or a post, specify the layout in the front matter. For example, `layout: post` will apply the `post.html` layout to a page.
- Layouts can inherit from each other. For example, most layouts will include the same header and footer by inheriting from the `default.html` layout.

## Best Practices

- **Consistency**: Ensure a consistent look and feel across the site by using layouts effectively.
- **DRY Principle**: Avoid repetition. Common elements like headers, footers, and navigation should be included in the `default.html` layout to be shared across all layouts.
- **Comments**: Use comments within the layout files to explain sections and any specific logic or conditions.
- **Semantic HTML**: Use semantic HTML tags for better readability, SEO, and accessibility.

## Maintenance

- When making changes to common elements like the header or footer, update the `default.html` layout so that the changes reflect across all pages using this layout.
- Test layout changes across different page types to ensure there are no unintended side effects.
- Regularly review and refactor the layouts to improve performance, maintainability, and compliance with web standards.

---

<!-- This documentation serves as a guide for developers and content creators working with the `_layouts` directory, ensuring they understand the purpose and use of each layout within the Jekyll site. -->