# docker nginx challenge

This repository is to resolve the follow challenge proposed on fullcycle course.
You can check it out on [fullcycle][fullcycle-website] docker course:

```
In this challenge, you'll put into practice what you've learned about using nginx as a reverse proxy. The main idea is that when a user accesses nginx, he will make a call to our node.js application. This application, in turn, will add a record to our mysql database, registering a name in the people table.

The return from the node.js application to nginx should be:

<h1>Full Cycle Rocks!</h1>

- List of names registered in the database.

Generate docker-compose in a way that we just run: docker-compose up -d that everything should be working and available on port: 8080.

Upload everything to a repository and deliver.

* The programming language for this challenge is Node/JavaScript.
```

## How to run

First you need to install [docker][docker],
than just execute:

```
docker compose up -d
```

## License

This repositpry is open-sourced software licensed under the [MIT license][mit-link].

[fullcycle-website]: https://fullcycle.com.br/
[docker]: https://docs.docker.com/engine/install/
[mit-link]: https://opensource.org/licenses/MIT
