#!/bin/bash
script_dir=`dirname $0`

cd ${script_dir}/..
npm run format && \
  ${script_dir}/generate-api-client-responses.sh && \
  ${script_dir}/generate-deno-source.sh
