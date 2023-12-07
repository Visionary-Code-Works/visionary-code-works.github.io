### Documentation for the `pages` Directory

**Overview:**
The `pages` directory in this Jekyll site contains individual Markdown (.md) files that represent different static pages of the website. Each file is written in Markdown format and contains YAML front matter for specifying metadata like layout, title, and permalink.

**Directory Structure:**

- `about.md`: The About Us page provides information about the company, team, mission, and values.
- `contact.md`: The Contact Us page includes details on how to reach the company, social media links, and an integrated contact form.
- `faq.md`: The FAQ page addresses frequently asked questions, offering quick information to common queries from users.
- `portfolio.md`: Showcases completed projects or case studies, highlighting the company's expertise and experience.
- `privacy-policy.md`: Details the company's policies regarding user data collection, usage, and protection.
- `services.md`: Describes the services offered by the company, along with details about each service.
- `thank-you.md`: A Thank You page for users who have submitted a form, providing a friendly acknowledgement.

**Page Creation and Editing:**

- **Front Matter**: Each page contains YAML front matter at the top, specifying the layout (`layout: page`) and the title (`title: Page Title`). The permalink (`permalink: /url/`) indicates the URL path for the page.
- **Content**: Below the front matter, the content of each page is written in Markdown. You can add headings, text, images, and links using standard Markdown syntax.
- **Contact Form Integration**: For the contact page, ensure that the form action is correctly set to integrate with services like Formspree or Netlify for form submissions.
- **Image and Link Paths**: When adding images or creating links, use relative URLs (`{{ '/path/to/asset' | relative_url }}`) for compatibility with Jekyll's build process.

**Best Practices:**

- **Consistency**: Keep a consistent style and format across all pages for a cohesive user experience.
- **Regular Updates**: Regularly review and update the content of these pages to ensure accuracy and relevance.
- **SEO Optimization**: Use descriptive titles and relevant content to improve SEO performance for each page.

**Testing and Deployment:**

- Before deploying updates, locally test the site (`bundle exec jekyll serve`) to ensure all pages are rendering correctly.
- Check for broken links, layout issues, and typos.

---

<!-- **Note:** This documentation should be updated whenever new pages are added or significant changes are made to the existing pages. It's a living document that aids in the maintainability and scalability of the website. -->

End of Documentation.
