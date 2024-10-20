FROM ubuntu:latest
LABEL SITEHOST="MARIO"
RUN  apt update
RUN apt install apache2 unzip -y
RUN rm -rf /var/www/html/index.html
WORKDIR /var/www/html/
#ADD https://www.free-css.com/assets/files/free-css-templates/download/page296/oxer.zip .
COPY Mario_Game-main.zip .
RUN unzip Mario_Game-main.zip
RUN mv Mario_Game-main/*  .
EXPOSE 80
CMD ["apache2ctl" , "-DFOREGROUND"]