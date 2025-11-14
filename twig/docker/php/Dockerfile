FROM php:8.4-apache
RUN apt-get update && apt-get install -y unzip git libicu-dev && docker-php-ext-install intl
COPY --from=composer/composer:latest-bin /composer /usr/bin/composer
COPY --from=oven/bun:1 /usr/local/bin /usr/local/bin
WORKDIR /app
COPY twig/ ./twig
COPY assets/ ./assets
COPY scripts/ ./scripts
WORKDIR /app/scripts
RUN bun link
WORKDIR /app/twig
RUN bun install
RUN bun run build
WORKDIR /var/www/html
COPY twig/src .
COPY twig/src/.htaccess .
COPY twig/docker/apache/apache.conf /etc/apache2/sites-available/apache.conf
RUN composer install
RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf &&\
    a2enmod rewrite &&\
    a2enmod headers &&\
    a2enmod rewrite &&\
    a2dissite 000-default &&\
    a2ensite apache &&\
    service apache2 restart
