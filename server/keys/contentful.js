import DevCredentials from './contentful.dev.js';

let space;
let accessToken;

if (process.env.SPACE && process.env.ACCESS_TOKEN) {
  space = process.env.SPACE;
  accessToken = process.env.accessToken;
} else {
  space = DevCredentials.space;
  accessToken = DevCredentials.accessToken;
}

export default {
  space: space,
  accessToken: accessToken
};
