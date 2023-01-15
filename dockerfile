FROM python:latest
ENV xhadr_ "/venv"
RUN python -m venv $xhadr_
ENV PATH "$xhadr_/bin:$PATH"
RUN apt-get update && apt-get install -y \
jq \
git \
curl \
wget \
bpm-tools \
opus-tools \
python3-pip \
python-is-python3
RUN curl -s https://deb.nodesource.com/setup_16.x | bash
RUN apt-get update && apt-get install nodejs -y
RUN npm install -g spotify-dl spdl-core forever pm2 yarn corepack && hash -r
RUN yarn set version berry
RUN git clone --branch magneum https://github.com/xhadr/Vlkyre
RUN cd Vlkyre
WORKDIR /Vlkyre
RUN git init --initial-branch=magneum
RUN git fetch origin magneum
RUN git reset --hard origin/magneum
RUN pip install -r requirements.txt
RUN yarn install --ignore-engines
CMD python Operator.py