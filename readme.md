# NERD - Nginx, ExpressJS, ReactJS, Docker
NERD is a starter template to help bootstrap projects using a stack built with those technologies. In addition - this start template includes a Database reference as well and used MySQL as its example - however, this can quite easily be changed as it uses an ORM. 

## Dependencies (to deploy)
The Following Technologies are required to run and deploy NERD:
- Docker / Docker-Compose

## Deployment
Please see the following instructions for deploying locally.

First, set your configurations for your environment variables in the `.env` file (see `.env-sample`) and then proceed with the following depending on your OS:

### Windows
Please run the following:

        > . scripts/start.ps1

### Linux / Mac
Please run the following:

        $ bash scripts/start.sh

## Usage
Once the deployment has finished, it should if successful, now be running and accessible from your Browser:

        http://localhost/

__Note__: Also exposed via the default port: `8081`

## License
MIT License - See License File for more details.