import * as mysql2 from 'mysql2/promise';
import config from '@config';

const pool = mysql2.createPool(config.DB);

export default pool;
