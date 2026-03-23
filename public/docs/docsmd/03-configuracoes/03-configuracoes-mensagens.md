# Passo 2: Configurações de Mensagens

As configurações de mensagens controlam os intervalos entre mensagens individuais enviadas pelo sistema.

## 📝 Configurações Disponíveis

### Intervalo Mínimo entre Mensagens (s)
- **O que é:** Tempo mínimo de espera (em segundos) entre cada mensagem enviada
- **Recomendado:** 10 segundos
- **Valor padrão:** 10 segundos

### Intervalo Máximo entre Mensagens (s)
- **O que é:** Tempo máximo de espera (em segundos) entre cada mensagem enviada
- **Recomendado:** 20 segundos
- **Valor padrão:** 15 segundos

## 💡 Como Funciona

O sistema escolhe aleatoriamente um valor entre o intervalo mínimo e máximo para cada mensagem. Isso torna o padrão de envio mais natural e menos detectável.

### Exemplo:
- **Intervalo Mínimo:** 10s
- **Intervalo Máximo:** 20s
- **Resultado:** O sistema esperará entre 10 e 20 segundos (aleatório) antes de enviar cada mensagem

## ⚠️ Recomendações

- **Iniciantes:** Use 10s mínimo e 20s máximo
- **Intermediário:** Após testar, você pode reduzir para 8s mínimo e 15s máximo
- **Avançado:** Apenas após vários testes bem-sucedidos, considere valores menores

## 🔗 Próximos Passos

👉 [Próximo: Configurações de Campanhas](./04-configuracoes-campanhas.md)

## 🔙 Navegação

- [⬅️ Voltar: Acessar Configurações](./02-acessar-configuracoes.md)
- [📋 Voltar ao Índice do Tutorial](./README.md)
- [🏠 Voltar ao Índice Principal](../README.md)




