#!/usr/bin/env bash

curl -G -w "Local Jenkins response: %{http_code}" http://localhost:8080/job/thl-server-site/build?token=f1ddd1a99d1f96f77bab86e708fc580fd7480d22
