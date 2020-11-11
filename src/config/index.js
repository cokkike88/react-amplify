import developer from './development.json';
import production from './production.json';
import localhost from './localhost.json';

let config = {};

switch (process.env.NODE_ENV) {
    case 'development':
        config = localhost
        break;

    case 'production':
        config = production;
        break
    default:
        config = localhost
        break;
}

export default config;