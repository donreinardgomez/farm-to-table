#!/bin/sh

if [ $1 == "dev" ]
then
  echo "Building for DEV environment"
  cp env.dev.ts env.ts
elif [ $1 == "prd" ]
then
  echo "Building for PRODUCTION environment"
  cp env.prd.ts env.ts
else
  echo "Building for STAGING environment"
  cp env.stg.ts env.ts
fi

yarn enterprise
