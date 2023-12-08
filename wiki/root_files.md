# Documentation for Root Files in a Jekyll Project

## `CHANGELOG.md`

### Purpose

- The `CHANGELOG.md` file is used to keep track of all the changes made to the project over time. This includes new features, bug fixes, performance improvements, and any other significant alterations.

### Usage

- Update this file every time you make a change to the project that users should know about.
- Follow a consistent format (like [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)) for readability and clarity.
- Include the version number and release date for each set of changes.

## `Gemfile` and `Gemfile.lock`

### Purpose - 2

- The `Gemfile` is a Ruby file used to define the gem dependencies for your Jekyll project. It specifies which gems and versions are required to build and run your site.
- The `Gemfile.lock` file is automatically generated and lists all the dependencies specified in your `Gemfile`, along with their exact versions. It ensures consistent gem versions across different environments.

### Usage - 2

- To add a new gem, include it in the `Gemfile` and run `bundle install`. This will update `Gemfile.lock`.
- Commit `Gemfile.lock` to your version control to ensure consistency across different development environments.
- Regularly update your gems with `bundle update` and test your site to catch any compatibility issues.

## `LICENSE`

### Purpose - 3

- The `LICENSE` file contains the licensing information for your project. It specifies how others can use, modify, and distribute your project.

### Usage - 3

- Choose an appropriate license based on how you want your project to be used. Common licenses for open-source projects include MIT, Apache, and GPL.
- Clearly state any restrictions or obligations that come with using your project.

## `README.md`

### Purpose - 4

- The `README.md` file serves as the first point of documentation for anyone who encounters your project. It provides an overview of what the project is, how to set it up, how to use it, and how to contribute.

### Usage - 4

- Include a project title and a brief description.
- Provide instructions for setting up and running the project.
- Document any prerequisites or dependencies.
- Guide on how to contribute to the project, if applicable.
- Contact information or links to further documentation.

## `_config.yml`

### Purpose - 5

- The `_config.yml` file is the main configuration file for a Jekyll site. It includes settings for the Jekyll build process, site variables, and more.

### Usage - 5

- Define global variables like `title`, `email`, `description`, `baseurl`, etc.
- Configure build settings such as markdown processor, permalink structure, and pagination.
- Add custom configurations as needed for your specific Jekyll plugins or themes.
- Avoid storing sensitive data like passwords or API keys directly in this file.

---

<!-- These documents play a vital role in the organization and management of a Jekyll project. Proper documentation ensures that the project is accessible and maintainable, facilitating collaboration and development. -->