#! /bin/sh -eu
# 仓库地址
register=$1
# 镜像名
image_name=$2
# 镜像版本
image_tag=$3
# 环境 test 或者 pro
profile=$4

docker login -uadmin -pHYzh248713  harbor.scshyzh.cn:50148

image=${register}/${image_name}:${image_tag}

echo "开始构建镜像：${image}"

if [ $profile ] && [ $profile == 'pro' ]
then
  # 生产使用多平台构建，用于直接构建两个平台的镜像
  echo "构建生产镜像"
  docker buildx build -t ${image} --platform linux/amd64,linux/arm64 . --push
else
  # 非生产使用普通构建
  echo "构建测试镜像"
  docker build -t ${image} . --push
fi


