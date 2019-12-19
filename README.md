<h1 align="center">Eat-the-Burger! 🍔 </h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0-blue.svg?cacheSeconds=2592000" />
  <img src="https://img.shields.io/badge/npm-%3E%3D5.5.0-blue.svg" />
  <img src="https://img.shields.io/badge/node-%3E%3D9.3.0-blue.svg" />
</p>

> Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like. Whenever a user submits a burger's name, the app will display the burger waiting to be devoured. The app will store every burger in a database, whether devoured or not.

## Prerequisites

- npm >=5.5.0
- node >=9.3.0
- SQL Server database

## Install

```sh
npm install
```

### Installation Notes

- Run the queries from 'schema.sql' file on your SQL Server to create the database and replace ```process.env.DB_PASS``` in the connection.js file with your database password.

## Usage

```sh
npm run start
```

## Built With

* [Express](https://www.npmjs.com/package/express) - Fast, unopinionated, minimalist web framework for node.
* [Express Handlebars](https://www.npmjs.com/package/express-handlebars) - A Handlebars view engine for Express which doesn't suck.
* [Mysql](https://www.npmjs.com/package/mysql) - This is a node.js driver for mysql.

## Author

👤 **Elmer C. Galo**

* Website: https://github.com/galoelmer

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2019 [Elmer C. Galo](https://github.com/galoelmer).<br />
This project is [MIT](https://github.com/kefranabg/readme-md-generator/blob/master/LICENSE) licensed.

