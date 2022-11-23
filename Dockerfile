FROM nginx
RUN apt-get -y update 
COPY . /usr/share/nginx/html/
