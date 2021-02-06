- git clone repo; if needed

- copy folder structure in cloned repo

- npm init -y

- npm i dotenv ejs express express-session method-override mongoose node-sass bcrypt ejs-mate joi connect-flash multer multer-storage-cloudinary cloudinary @mapbox/mapbox-sdk

- update package.json with engines version:
  "engines": {
  "node": "15.0.1"
  }

- add sass script and initiate in CLI with 'npm run sass':
  "scripts": {
  "sass": "node-sass -w public/scss/ -o public/dist/css/ --recursive"
  }

- connect in .env file with one of these options:
  MONGODB_URI=mongodb://localhost:27017/database-name
  MONGODB_URI=paste cloud-database path here
