# Use existing docker file as a base
FROM alpine
# Download and install a dependency
RUN apk add --update redis
# Tell the image what to do when it starts as  a container
CMD ["redis-server"]





# FROM node:14.16.0
# CMD ["/bin/bash"]