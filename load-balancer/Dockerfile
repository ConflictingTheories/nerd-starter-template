# /*                                            *\
# ** ------------------------------------------ **
# **           Sample - NERD Starter    	      **
# ** ------------------------------------------ **
# **  Copyright (c) 2020 - Kyle Derby MacInnis  **
# **                                            **
# ** Any unauthorized distribution or transfer  **
# **    of this work is strictly prohibited.    **
# **                                            **
# **           All Rights Reserved.             **
# ** ------------------------------------------ **
# \*                                            */

FROM nginx:alpine
# Add Configuration for nginx
ADD ./nginx.conf /etc/nginx/nginx.conf
# Expose Ports
EXPOSE 80 443
# RUN
CMD tail -f /var/log/nginx/access.log


# # Install SSL (Cert - Only do this Once - to Avoid Issues Mount Directory)
# # Install LetsEncrypt (SSL)
# RUN apk add python3 python3-dev build-base libressl-dev musl-dev libffi-dev
# RUN python -m pip install pip --upgrade
# RUN python -m pip install certbot-nginx
# RUN mkdir /etc/letsencrypt
# ADD ./certs /etc/letsencrypt
# # Renewal
# RUN mkdir /etc/cron.d/ -p
# RUN echo "0 12 * * * /usr/bin/certbot renew --quiet" > /etc/cron.d/renew.cron
# # Run & Generate SSL
# CMD certbot --nginx \
#   --non-interactive \
#   --agree-tos \
#   --email webmaster@example.com \
#   ; tail -f /var/log/nginx/access.log
