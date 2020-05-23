import express from 'express';
import swaggerUi from 'swagger-ui-express';
import Yaml from 'yamljs';
import { json } from 'body-parser';
import indexRouter from './routes';
import userRouter from './routes/user.route';
import dbConnection from './util/database';
import educationProviderRouter from './routes/educationProvider.route';
import institutionRoute from './routes/instution.route';

const port = process.env.PORT || 3000;
const swaggerDoc = Yaml.load('src/openapi.yml');

const app = express();
app.use(express.json());

/** --- middleware ---- */
app.use(json());
/** --- middleware ---- */
app.use('/api', indexRouter);
app.use('/api/auth', userRouter);
app.use('/api/education-provider', educationProviderRouter);
app.use('/api/institution', institutionRoute);
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

/** database connection */
dbConnection.on('error', console.error.bind(console, 'connection error:'));
dbConnection.once('open', console.info.bind(console, 'connection established:'));
/** database connection */
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
