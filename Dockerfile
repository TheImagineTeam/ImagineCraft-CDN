FROM mono:latest
RUN apt update
RUN apt -y install zip unzip nodejs git npm

