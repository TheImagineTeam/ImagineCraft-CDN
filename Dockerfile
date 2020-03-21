FROM scottyhardy/docker-wine
RUN apt update
RUN apt -y install zip unzip nodejs git npm

