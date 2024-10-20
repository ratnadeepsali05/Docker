FROM ubuntu:latest
LABEL DEVOPSENGG="Ratanadeep"
RUN  apt update
RUN apt install apache2 unzip -y
RUN rm -rf /var/www/html/index.html
WORKDIR /var/www/html/
#ADD https://www.free-css.com/assets/files/free-css-templates/download/page296/oxer.zip .
COPY oxer.zip .
RUN unzip oxer.zip
RUN mv oxer-html/*  .
EXPOSE 80
CMD ["apache2ctl" , "-DFOREGROUND"]
