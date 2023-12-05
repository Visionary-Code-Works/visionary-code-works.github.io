#!/bin/bash

# Define variables
REPO_NAME="MyWebsite"
JEKYLL_THEME="minima" # or your preferred theme
GITHUB_USERNAME="thomasthaddeus"

# Step 1: Create a New Jekyll Site
jekyll new $REPO_NAME --theme $JEKYLL_THEME
cd $REPO_NAME

# Step 2: Initialize Git and Commit
git init
git add .
git commit -m "Initial Jekyll site with theme $JEKYLL_THEME"

# Step 3: Create GitHub Repository
gh repo create $REPO_NAME --public --source=. --remote=origin

# Step 4: Push to GitHub
git push -u origin main

# Step 5: Setup GitHub Actions for Jekyll
mkdir -p .github/workflows
echo "name: Jekyll site CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v4
    - name: Build and test Jekyll site
      uses: jekyll/actions-jekyll@v1
      with:
        token: ${{ secrets.GITHUB_TOKEN }}" > .github/workflows/jekyll.yml

git add .github/workflows/jekyll.yml
git commit -m "Setup GitHub Actions for Jekyll"
git push

echo "Repository setup completed!"

# Step 6: Dependency Management with Bundler
bundle init
echo "gem 'jekyll', '$(jekyll -v | cut -d' ' -f2)'" >> Gemfile
bundle install
git add Gemfile Gemfile.lock
git commit -m "Add Gemfile for Jekyll dependencies"
git push

# Step 7: Basic Content and Layout Setup
# (This step is usually manual and theme dependent. Script can create placeholder directories.)
mkdir -p _layouts _includes _sass
touch _layouts/default.html
touch _includes/header.html
touch _includes/footer.html
touch _sass/main.scss
git add _layouts _includes _sass
git commit -m "Add basic structure for layouts, includes, and sass"
git push

# Step 8: Initial README Documentation
echo "# $REPO_NAME

This is a Jekyll site hosted on GitHub Pages.

## Setup

* To run locally, use 'bundle exec jekyll serve'
* Push to the main branch to deploy to GitHub Pages via GitHub Actions.

## Structure

* _posts: Blog posts in Markdown format.
* _layouts: HTML layouts for site pages.
* _includes: Reusable HTML components.
* _sass: Sass files for styling.
* assets: Static files like CSS, JS, and images." > README.md

git add README.md
git commit -m "Add initial README documentation"
git push

echo "Repository setup completed!"
