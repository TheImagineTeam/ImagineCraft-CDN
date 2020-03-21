FROM scottyhardy/docker-wine
RUN apt update
RUN apt -y install zip unzip nodejs git npm
RUN apt -y install dirmngr gnupg apt-transport-https ca-certificates
RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 3FA7E0328081BFF6A14DA29AA6A19B38D3D831EF
RUN sh -c 'echo "deb https://download.mono-project.com/repo/ubuntu stable-bionic main" > /etc/apt/sources.list.d/mono-official-stable.list'
RUN apt update
RUN apt install mono-complete
RUN mono --version