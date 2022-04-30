# BookThing Front-End Angular

## Clone repo

run `git clone https://github.com/dbarfa/BookThing.git`
`cd BookThing`

## Install npm packages from `package.json`

`npm install`

## Clone BookThingBackEnd
run 
`cd ..`
`git clone https://github.com/dbarfa/BookThingBackEnd`
`cd BookThingBackEnd`
## Install missing vendor librairies from composer.json
`composer install`

## Start SQL server and modify .env
Ex for MySQL
- on linux run :
`sudo service mysql start`
- windows run : 
`mysqld`

#### Add to .env :
`DATABASE_URL="mysql://db_user:db_password@127.0.0.1:3306/bookthing`
replace db_user db_password with server informations

## Create database
run `php bin/console doctrine:database:create`

## Start BookThingBackEnd
run `symfony server:start`

## Development server

Run `ng s -o` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
