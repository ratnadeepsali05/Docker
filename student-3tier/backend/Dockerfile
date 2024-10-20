FROM ubuntu:latest
LABEL Backend="studentappbackend"
ADD  https://dlcdn.apache.org/tomcat/tomcat-9/v9.0.93/bin/apache-tomcat-9.0.93.zip /opt
WORKDIR /opt/
RUN apt update && \
    apt install unzip openjdk-11-jdk -y && \
    unzip apache-tomcat-9.0.93.zip && \
    chmod +rwx /opt/apache-tomcat-9.0.93/bin/*.sh
    COPY mysql-connector.jar /opt/apache-tomcat-9.0.93/lib/
    COPY student.war /opt/apache-tomcat-9.0.93/webapps/
    COPY context.xml /opt/apache-tomcat-9.0.93/conf/
EXPOSE 8080
CMD ["/opt/apache-tomcat-9.0.93/bin/catalina.sh" , "run"]