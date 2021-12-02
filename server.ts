import * as express from 'express';
import * as path from 'path';

const app = express();
const port = process.env['PORT'] || 4200;

app.use('/', express.static(path.join(__dirname, 'weather-wardrobe')));

app.get('/*', (_request, response) => {
  response.sendFile(path.join(__dirname, 'weather-wardrobe', 'index.html'));
});

app.listen(port, () => {
  console.log(`🚀 server listening on port ${port}`);
});
