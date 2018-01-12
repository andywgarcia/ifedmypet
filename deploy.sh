#/bin/bash
ng build --prod

#upload files
aws s3 cp ./dist s3://ifedmypet.com --recursive --acl public-read