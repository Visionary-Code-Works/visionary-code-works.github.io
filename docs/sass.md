# Documentation for `_sass` Directory

The `_sass` directory contains the SCSS (Sassy CSS) files used in the project. SCSS is an extension of CSS that allows for more complex styling with variables, mixins, functions, and nested rules. This directory is structured to make styling scalable and maintainable.

## Directory Structure

- `_base.scss`: Contains the fundamental styles applied across the entire website. This includes default styling for HTML elements like body, headings, paragraphs, links, and lists.

- `_bootstrap-overrides.scss`: Used to override Bootstrap's default styles. This file allows us to customize the Bootstrap components to fit the design requirements of our website.

- `_footer.scss`: Dedicated to styling the website's footer. It contains rules for layout, typography, color, and other footer-specific styles.

- `_header.scss`: Contains styles for the website's header section. This includes the navigation bar, site branding, and any other elements present in the header.

- `_mixins.scss`: Holds reusable pieces of SCSS code known as mixins. These mixins can be included in other SCSS files to avoid code duplication.

- `_navigation.scss`: Specifically for styling the navigation menu, including dropdowns, active states, and responsive behavior.

- `_responsive.scss`: Contains media queries and styles for different screen sizes, ensuring the site is responsive and adapts to various devices.

- `_sidebar.scss`: Styles for any sidebars used on the site. This can include layouts, widget styling, and responsiveness.

- `_variables.scss`: Defines SCSS variables used throughout the project. This includes colors, font settings, spacing units, and more for consistency and ease of changes.

## Usage

- Each SCSS file is a module focusing on a specific aspect of the website.
- Variables defined in `_variables.scss` are used across multiple files for consistent styling.
- Mixins in `_mixins.scss` are reused to handle common patterns like media queries, button styles, or flexbox layouts.

## Best Practices

- **Modularity**: Keep styles modular; each file should serve a specific purpose.
- **Consistency**: Use variables for colors, fonts, and other constants for consistent styling across the website.
- **Comments**: Use comments in SCSS files to explain the purpose of complex styles or why certain approaches were taken.
- **DRY Principle**: Avoid repeating code. Use mixins and variables to keep the code 'DRY' (Don't Repeat Yourself).

## Maintenance

- When updating styles, ensure changes are made in the appropriate files to maintain the structure.
- Test changes in various browsers and devices to ensure compatibility.
- Periodically review the styles to refactor or improve them for performance and maintainability.

---

<!-- This documentation provides a clear overview of the `_sass` directory's purpose and contents, making it easier for anyone working on the project to understand and contribute effectively. -->