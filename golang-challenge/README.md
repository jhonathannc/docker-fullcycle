## Description

This repository is to resolve the follow challenge proposed on fullcycle course.
You can check it out on [fullcycle][fullcycle-website] docker course:

```
This challenge is very exciting especially if you have never worked with the Go language!
You will have to publish an image to docker hub. When we run:
docker run <your-user>/fullcycle
We must have the following result: Full Cycle Rocks!!
If you notice, this image just prints the message as a final result, so it's worth checking out the Go Lang website to learn how to say "hello world".
Remembering that Go Lang has ready-made official images, it is worth consulting the Docker Hub.
3) Our Go project image needs to be less than 2MB =)
Tip: In the introduction video about Docker when we talk about the layered file system, I present a "root" image, maybe it's a good idea to use it.
Have a good time!
```

## How to run

First you need to install the [docker][docker],
than execute:

```
docker build --tag YOUR_IMAGE_NAME .

docker run YOUR_IMAGE_NAME
```

PS: You can find the image builded [here](https://hub.docker.com/r/jhonathannc/hellofc).

### License

This repositpry is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

[docker]: https://docs.docker.com/engine/install/
