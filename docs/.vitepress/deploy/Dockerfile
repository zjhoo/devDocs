FROM harbor.scshyzh.cn:50148/enterprise-v8/nginx/nginx:1.27
WORKDIR /opt

# api proxy 地址
ENV API_PROXY_PASS="http://gateway:2000/"

COPY ./dist /usr/share/nginx/html/
COPY ./default.conf /etc/nginx/templates/default.conf.template
