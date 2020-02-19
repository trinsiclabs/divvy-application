FROM php:7.3.6-apache
    RUN a2enmod rewrite
    RUN apt-get -y update \
        && apt-get install -y \
            libicu-dev \
        && docker-php-ext-configure \
            intl \
        && docker-php-ext-install \
            intl \
            pdo \
            pdo_mysql \
            mysqli
    RUN pecl install \
        xdebug-2.7.2 \
        && docker-php-ext-enable \
        xdebug
