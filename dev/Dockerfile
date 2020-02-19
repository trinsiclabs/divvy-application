FROM alpine:3.10

RUN apk --update add \
    bash \
    wget \
    curl \
    git \
    chromium \
    chromium-chromedriver \
    php7 \
    php7-curl \
    php7-openssl \
    php7-json \
    php7-phar \
    php7-dom \
    php7-mbstring \
    php7-ctype \
    php7-intl \
    php7-session \
    php7-simplexml \
    php7-tokenizer \
    php7-xml \
    php7-fileinfo \
    php7-xmlwriter \
    php7-pdo \
    php7-pdo_mysql \
    nodejs \
    npm \
    && rm /var/cache/apk/*

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/bin --filename=composer

RUN mkdir -p /var/app/client /var/app/server

WORKDIR /var/app

CMD tail -f /dev/null
