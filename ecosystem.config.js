module.exports = {
  apps: [
    {
      name: 'graybay-docs',
      script: 'npm',
      args: 'start',
      cwd: '/var/www/graybay-docs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PORT: 4001
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 4001
      },
      error_file: './logs/err.log',
      out_file: './logs/out.log',
      log_file: './logs/combined.log',
      time: true
    }
  ]
} 