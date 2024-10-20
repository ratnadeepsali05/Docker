FROM ubuntu:latest
LABEL SITEHOST="TODO"
RUN apt update
RUN apt install nginx -y
RUN rm -rf /var/www/html/index.html
WORKDIR /var/www/html/
COPY todo6/* .
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]