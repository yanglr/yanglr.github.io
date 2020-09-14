$files = Get-ChildItem "." -Filter *.md
# Write-Host ($files | Format-Table | Out-String)

function getOldPostUrl([string] $fileName) {   
    $dateTimeString = [regex]::Matches($fileName, '\d{1,4}\-\d{1,2}\-\d{1,2}')[0].Groups[0].Value
    $newFormatOfDate = $dateTimeString -replace '-', '/'
    $postTitle = $fileName -replace ( -join ($dateTimeString, '-')), ''
    return -join ('/', $newFormatOfDate, '/', $postTitle)
}

function replaceFrontMatter([string] $filePath) {   
    (Get-Content -path $filePath) | Foreach-Object {
            $postTitle = getOldPostUrl($filePath)        
            $_ -replace 'title:', -join ("redirect_from:`r`n  - ", ($postTitle -replace ".md", ""), "/`r`ntitle:") `
        } | Set-Content -Path $filePath
}

for ($i = 0; $i -lt $files.Count; $i++) {
    $file = $files[$i].Name  # 

    replaceFrontMatter($file)
}

Write-Output("Done")
