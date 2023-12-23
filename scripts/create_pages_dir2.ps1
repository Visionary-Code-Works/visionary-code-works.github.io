# Define the structured data
$pages = @(
    @{title="About"; url="/about/"},
    @{title="Blog"; url="/blog/"},
    @{title="Contact"; url="/contact/"},
    @{title="FAQ"; url="/faq/"},
    @{title="Portfolio"; url="/portfolio/"},
    @{title="Privacy Policy"; url="/privacy-policy/"},
    @{title="Services"; url="/services/"},
    @{title="Terms of Service"; url="/terms-of-service/"},
    @{title="Thank You"; url="/thank-you/"}
    # Add other pages as needed
)

# Directory where the pages are expected to be
$pagesDirectory = "./"

# Function to create a markdown file
function Create-MarkdownFile($path, $title) {
    $content = "---`r`nlayout: page`r`ntitle: '$title'`r`n---`r`n`r`n# $title`r`n"
    Set-Content -Path $path -Value $content
    Write-Host "Created markdown file for '$title' at '$path'"
}

# Iterate through the structured data
foreach ($item in $pages) {
    # Convert URL to expected file name
    $fileName = $item.url.Trim('/').Replace('/', '-') + ".md"
    $filePath = Join-Path -Path $pagesDirectory -ChildPath $fileName

    # Check if file exists
    if (-not (Test-Path -Path $filePath)) {
        # Create the markdown file
        Create-MarkdownFile -path $filePath -title $item.title
    } else {
        Write-Host "File already exists for '$($item.title)'"
    }
}
