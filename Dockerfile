FROM python:3.7-stretch
RUN mkdir /code
WORKDIR /code
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash - && apt-get install -y nodejs && apt update && apt upgrade -y && pip install --upgrade pip virtualenv
RUN virtualenv ve && /code/ve/bin/pip install -U pip
COPY requirements.txt /code/requirements.txt
RUN apt update && apt upgrade -y
RUN pip install -r /code/requirements.txt
ADD . /code/todo
WORKDIR /code/todo/ToDo
RUN npm install; npm run build