FROM php:8.4-apache

RUN apt-get update && apt-get install -y unzip git libicu-dev && docker-php-ext-install intl

# RUN curl -sLO https://github.com/tailwindlabs/tailwindcss/releases/download/v4.1.16/tailwindcss-linux-x64

# RUN chmod +x tailwindcss-linux-x64

# RUN mv tailwindcss-linux-x64 /usr/bin/tailwindcss

WORKDIR /var/www/html

COPY --from=composer/composer:latest-bin /composer /usr/bin/composer

COPY assets/ assets/

COPY twig/src .

COPY twig/docker/apache/apache.conf /etc/apache2/sites-available/apache.conf

# RUN tailwindcss -i css/main.css -o output.css --minify

RUN composer install

RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf &&\
    a2enmod rewrite &&\
    a2enmod headers &&\
    a2enmod rewrite &&\
    a2dissite 000-default &&\
    a2ensite apache &&\
    service apache2 restart

