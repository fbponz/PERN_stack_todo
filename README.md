# PERN_stack_todo

Application developed based on this video https://www.youtube.com/watch?v=ldYcgPKEZC8, has been added to be able to develop it with docker.

To launch the application just do the following command:

    $ docker-compose up -d

To stop the application just do the following command:

    $ docker-compose down

The website can be found at: http://localhost:80

The database used for this List App is postgreSQL(It is all initialized by the command to compose contain).
The PGADMIN application is also available to consult the database.
pgadmin -> <http://localhost:5050>
| E-mail      | pernuser@pern.org    |
| :------------- | -----------: |
| Password | pernpass |   


The database is configured with the following parameters.
| Base de datos |  perntodo |
| :------------- | -----------: |
| hostname | postgres |
| Usuario      | pernuser     |
|  Contraseña | pernpass    |

No need to create tables, initializes them during the container up process