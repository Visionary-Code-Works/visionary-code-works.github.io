# VCW-Tech

Welcome to the repository for VCWTech. This site is built with [Jekyll](https://jekyllrb.com/), a static site generator, and styled using [Bootstrap](https://getbootstrap.com/) (included via CDN). It's automatically built and deployed using GitHub Actions.

[![Auto Update Changelog](https://github.com/Visionary-Code-Works/vcwtech.github.io/actions/workflows/changelog.yml/badge.svg)](https://github.com/Visionary-Code-Works/vcwtech.github.io/actions/workflows/changelog.yml)

## Features

- Responsive design with Bootstrap
- Automated build and deployment with GitHub Actions
- Includes custom JavaScript and CSS

## Prerequisites

To set up this project locally, you will need the following:

- Ruby (version as specified in `.ruby-version`)
- Bundler (`gem install bundler`)
- Jekyll (`gem install jekyll`)

## Local Development

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/my-jekyll-site.git
   cd my-jekyll-site
   ```

2. Install dependencies:

   ```bash
   bundle install
   ```

3. Serve the site locally:

   ```bash
   bundle exec jekyll serve
   ```

   You can now view the site at `localhost:4000`.

## Structure

- `_layouts`: Jekyll HTML layouts.
- `_includes`: Reusable HTML snippets.
- `_sass`: Sass partials for styling.
- `assets`: Contains static files such as images, CSS, and JavaScript.
- `_config.yml`: Configuration settings for Jekyll.
- `.github/workflows/jekyll.yml`: GitHub Actions workflow for CI/CD.
- `Gemfile`: Ruby dependencies for Jekyll.

## Contributing

Contributions to this site are welcome. Here's how you can contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a new Pull Request.

For more details on contributing, please read [CONTRIBUTING.md](CONTRIBUTING.md).

## Deployment

This site is automatically built and deployed by GitHub Actions when changes are pushed to the `main` branch.

## License

This project is open source and available under the [MIT License](LICENSE).

### Notes

- Make sure to replace `https://github.com/yourusername/my-jekyll-site.git` with your actual repository URL.
- Update the Ruby version in the prerequisites if different from what's used in your project.
- Customize any part of the README to better fit the specifics of your site or add additional sections as necessary, like a section for 'Tests' if you have automated testing set up.
- Consider adding a `CONTRIBUTING.md` file with detailed contribution guidelines, and a `LICENSE` file, especially if your project is open source.
