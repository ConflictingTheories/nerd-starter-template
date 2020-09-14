# /*                                            *\
# ** ------------------------------------------ **
# **           Sample - Weather SPA    	      **
# ** ------------------------------------------ **
# **  Copyright (c) 2020 - Kyle Derby MacInnis  **
# **                                            **
# ** Any unauthorized distribution or transfer  **
# **    of this work is strictly prohibited.    **
# **                                            **
# **           All Rights Reserved.             **
# ** ------------------------------------------ **
# \*                                            */

# Read .ENV Variables
$env:BUILD_PATH="$(Get-Location)"
Set-Location $env:BUILD_PATH;

foreach( $line in $(Get-Content "$env:BUILD_PATH\.env")){
    $envData = $line.Split('=')
    Write-Output "$($envData.get(0))=$($envData.get(1))"
    [Environment]::SetEnvironmentVariable($envData.get(0), $envData.get(1), "User")   
}

# Deploy
docker-compose up -d

Set-Location $env:BUILD_PATH;
