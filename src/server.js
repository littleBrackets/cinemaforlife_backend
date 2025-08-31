const dotenv = require('dotenv');
const env = process.env.NODE_ENV || 'development';
dotenv.config({ path: `.env.${env}` });

const app = require("./app");
// const { startCacheScheduler } = require("./services/cacheScheduler");

const PORT = process.env.PORT || 5100;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  // startCacheScheduler();
});
