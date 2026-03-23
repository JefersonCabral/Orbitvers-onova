#!/bin/bash

# Script para iniciar o desenvolvimento com stats-server
echo "🚀 Iniciando desenvolvimento do OrbitSender Site..."

# Verificar se o PostgreSQL está acessível
echo "📊 Verificando conexão com PostgreSQL..."
if ! pg_isready -h localhost -p 5432 -U orbitsender > /dev/null 2>&1; then
    echo "⚠️  PostgreSQL não está acessível em localhost:5432"
    echo "   Certifique-se de que o PostgreSQL está rodando ou ajuste as variáveis de ambiente"
    echo ""
    echo "   Você pode configurar as variáveis:"
    echo "   export DB_HOST=localhost"
    echo "   export DB_PORT=5432"
    echo "   export DB_NAME=orbitsender"
    echo "   export DB_USER=orbitsender"
    echo "   export DB_PASSWORD=orbitsender_password"
    echo ""
fi

# Iniciar stats-server em background
echo "📈 Iniciando stats-server na porta 3001..."
node stats-server.js &
STATS_PID=$!

# Aguardar um pouco para o stats-server iniciar
sleep 2

# Verificar se o stats-server está rodando
if ps -p $STATS_PID > /dev/null; then
    echo "✅ Stats-server iniciado (PID: $STATS_PID)"
else
    echo "❌ Erro ao iniciar stats-server"
    exit 1
fi

# Iniciar Vite
echo "🌐 Iniciando Vite dev server..."
npm run dev

# Quando o Vite parar, matar o stats-server
echo "🛑 Parando stats-server..."
kill $STATS_PID 2>/dev/null

