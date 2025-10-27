FROM oven/bun:1 AS frontend
WORKDIR /app
COPY twig/ ./twig
COPY assets/ ./assets
WORKDIR /app/twig
RUN bun ci
RUN bun run build


FROM php:8.4-apache
RUN apt-get update && apt-get install -y unzip git libicu-dev && docker-php-ext-install intl
WORKDIR /var/www/html
COPY --from=composer/composer:latest-bin /composer /usr/bin/composer
COPY twig/src .
COPY --from=frontend /app/twig/ .
COPY twig/docker/apache/apache.conf /etc/apache2/sites-available/apache.conf
RUN composer install
RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf &&\
    a2enmod rewrite &&\
    a2enmod headers &&\
    a2enmod rewrite &&\
    a2dissite 000-default &&\
    a2ensite apache &&\
    service apache2 restart
