import app from './app.js';
import * as config from '../config/index.js';

app.listen(config.server.PORT, () => {
  console.log('Server now listening on port ' + config.server.PORT);
});
