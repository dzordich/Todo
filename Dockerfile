FROM python:3.7-stretch
COPY requirements.txt /code/requirements.txt
RUN apt update && apt upgrade -y
RUN pip install -r /code/requirements.txt
ADD . /code/todo
WORKDIR /code/todo/ToDo
RUN npm install; npm run build