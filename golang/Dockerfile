FROM golang:alpine as builder

WORKDIR /hellofc

COPY . .

RUN go build -o hello

FROM scratch

COPY --from=builder /hellofc /hellofc

CMD ["/hellofc"]