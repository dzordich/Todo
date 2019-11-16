FROM python:3.7-stretch
RUN mkdir /code
WORKDIR /code
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash - && apt-get install -y nodejs && apt update && apt upgrade -y && pip install --upgrade "pip<10" virtualenv
RUN virtualenv ve && /code/ve/bin/pip install -U "pip<10"
COPY requirements.txt /code/requirements.txt
RUN apt update && apt upgrade -y
RUN pip install -r /code/requirements.txt
ADD . /code/todo
WORKDIR /code/todo/todo
RUN npm install; npm run build