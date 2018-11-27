#!/usr/bin/env bash

# export bin cmd
export PATH=$(npm bin):$PATH

# define vars
WPK_CONFIG='webpack.config.js'

# start
webpack --config "$(pwd)/${WPK_CONFIG}"
