# Define the structure of your pages
$pages = @{
    main = @{
        "about-us" = @(
            @{title="About"; url="/about/"},
            @{title="Team"; url="/team/"},
            @{title="Careers"; url="/careers/"},
            @{title="Press"; url="/press/"}
        )
        "services" = @(
            @{title="Services"; url="/services/"},
            @{title="Case Studies"; url="/case-studies/"},
            @{title="Testimonials"; url="/testimonials/"}
        )
        "portfolio" = @(
            @{title="Portfolio"; url="/portfolio/"},
            @{title="Gallery"; url="/gallery/"}
        )
        "resources" = @(
            @{title="Blog"; url="/blog/"},
            @{title="Resources"; url="/resources/"},
            @{title="News"; url="/news/"}
        )
        "community" = @(
            @{title="Events"; url="/events/"},
            @{title="Community Guidelines"; url="/community-guidelines/"}
        )
        "shop" = @{title="Shop"; url="/shop/"}
        "support" = @(
            @{title="Contact"; url="/contact/"},
            @{title="FAQ"; url="/faq/"}
        )
        "home" = @{title="Home"; url="/home/"}
    }
    footer = @{
        "quick-links" = @(
            @{title="Contact"; url="/contact/"},
            @{title="FAQ"; url="/faq/"},
            @{title="Sitemap"; url="/sitemap.xml"},
            @{title="Accessibility"; url="/accessibility/"}
        )
        "legal" = @(
            @{title="Privacy Policy"; url="/privacy-policy/"},
            @{title="Terms of Service"; url="/terms-of-service/"}
        )
    }
}

# Directory where the pages are expected to be
$pagesDirectory = "./"

# Function to create a markdown file
function Create-MarkdownFile($path) {
    $content = "---`r`nlayout: page`r`ntitle: '$($item.title)'`r`n---`r`n`r`n# $($item.title)`r`n"
    Set-Content -Path $path -Value $content
    Write-Host "Created markdown file for '$($item.title)' at '$path'"
}

# Iterate through the pages structure
foreach ($section in $pages.GetEnumerator()) {
    foreach ($category in $section.Value.GetEnumerator()) {
        foreach ($item in $category.Value) {
            # Convert URL to expected file path
            $filePath = [System.IO.Path]::Combine($pagesDirectory, $item.url.Trim('/').Replace('/', '\') + ".md")

            # Check if file exists
            if (-not (Test-Path -Path $filePath)) {
                # Create the markdown file
                Create-MarkdownFile -path $filePath
            }
        }
    }
}
