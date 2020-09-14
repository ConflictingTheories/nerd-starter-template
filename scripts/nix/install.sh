#!/bin/bash
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
declare -x BUILD_PATH=$(pwd)\..

cd $BUILD_PATH

source $BUILD_PATH/.env

# Compile
docker-compose build 

# Deploy
docker-compose up -d

# Migrate DB
yarn
yarn migrate

# Seed DB
yarn seed
