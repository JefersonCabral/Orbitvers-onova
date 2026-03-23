// Simple Node.js server to fetch stats from database
// This runs separately and only serves stats data
// This is part of the orbitsender-site, not the main backend
import http from 'http';
import pg from 'pg';
const { Pool } = pg;

// Database configuration - obrigatoriamente via variáveis de ambiente
// Defina as variáveis abaixo no ambiente de produção (Docker, .env, etc.)
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
};

console.log('📊 Stats Server Configuration:');
console.log(`   DB_HOST: ${dbConfig.host}`);
console.log(`   DB_PORT: ${dbConfig.port}`);
console.log(`   DB_NAME: ${dbConfig.database}`);
console.log(`   DB_USER: ${dbConfig.user}`);

const pool = new Pool(dbConfig);

const PORT = process.env.STATS_PORT || 3001;

const server = http.createServer(async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  if (req.url === '/stats' && req.method === 'GET') {
    try {
      // Get total campaigns count (all campaigns that are not deleted)
      const campaignsQuery = `
        SELECT COUNT(*) as total_campaigns
        FROM campaigns 
        WHERE is_deleted = false
      `;

      // Get total messages count (total campaign_groups = total messages sent)
      const messagesQuery = `
        SELECT COUNT(*) as total_messages
        FROM campaign_groups
      `;

      const [campaignsResult, messagesResult] = await Promise.all([
        pool.query(campaignsQuery),
        pool.query(messagesQuery)
      ]);

      const stats = {
        success: true,
        data: {
          total_campaigns: parseInt(campaignsResult.rows[0]?.total_campaigns || '0'),
          total_messages: parseInt(messagesResult.rows[0]?.total_messages || '0')
        }
      };

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(stats));
    } catch (error) {
      console.error('Error fetching stats:', error);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({
        success: false,
        error: 'Internal server error',
        data: {
          total_campaigns: 0,
          total_messages: 0
        }
      }));
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ success: false, error: 'Not found' }));
  }
});

server.listen(PORT, () => {
  console.log(`📊 Stats server running on port ${PORT}`);
  console.log(`   Endpoint: http://localhost:${PORT}/stats`);
});

// Test database connection on startup
pool.query('SELECT 1')
  .then(() => {
    console.log('✅ Database connection successful');
  })
  .catch((err) => {
    console.error('❌ Database connection failed:', err.message);
    console.error('   Make sure PostgreSQL is running and credentials are correct');
  });

// Graceful shutdown
process.on('SIGTERM', async () => {
  console.log('🛑 Shutting down stats server...');
  await pool.end();
  server.close(() => {
    process.exit(0);
  });
});

process.on('SIGINT', async () => {
  console.log('🛑 Shutting down stats server...');
  await pool.end();
  server.close(() => {
    process.exit(0);
  });
});

