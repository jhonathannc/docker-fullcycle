## Description

The propose of this repository is to study the nginx serving an application with reverse proxy.
Here i create a container for nginx and another for laravel. The nginx container will get the user request and then send it to the laravel container.
Warn: If your application has images, you need to put then in nginx container, because nginx call laravel by php-fpm, and he does not process images, just php files.

## How to run

First you need to install the [docker][docker],
than execute:

```
Create the network:
docker network create laranet

Build laravel image:
docker build -t username/laravel:prod ./laravel -f Dockerfile.prod

Build nginx image:
docker build -t username/nginx:prod ./nginx -f Dockerfile.prod

Run Laravel image:
docker run -d --network laranet --name laravel -p 8080:80 username/laravel:prod

Run nginx image:
docker run -d --network laranet --name nginx -p 8080:80 username/nginx:prod

And now you will be able to access the laravel application in your browser.
```

### License

This repositpry is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

[docker]: https://docs.docker.com/engine/install/
