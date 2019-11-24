# Todo

Simple to-do list app. Lets you group tasks into boards and such. 

The front end of the app is built with React.js, and the back end is Django and Tastypie.


### Cloning the repo

You will need to have Docker and docker-compose installed on you computer.

+ `cd` into the top level (root) of the project directory
+ Build the container with `docker-compose build`
+ Run migrations in the container and create a superuser:
  ```
  docker-compose run web python manage.py migrate
  docker-compose run web python manage.py createsuperuser
  ``` 
+ Run `docker-compose up` to start the development server.
