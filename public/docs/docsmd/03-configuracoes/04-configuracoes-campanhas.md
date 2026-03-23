# Passo 3: Configurações de Campanhas

As configurações de campanhas controlam os intervalos entre diferentes campanhas.

## 📝 Configurações Disponíveis

### Intervalo Mínimo entre Campanhas (s)
- **O que é:** Tempo mínimo de espera (em segundos) entre o término de uma campanha e o início de outra
- **Recomendado:** 300 segundos (5 minutos)
- **Valor padrão:** 300 segundos

### Intervalo Máximo entre Campanhas (s)
- **O que é:** Tempo máximo de espera (em segundos) entre o término de uma campanha e o início de outra
- **Recomendado:** 600 segundos (10 minutos)
- **Valor padrão:** 600 segundos

## 💡 Como Funciona

Assim como nas mensagens, o sistema escolhe aleatoriamente um valor entre o intervalo mínimo e máximo antes de iniciar uma nova campanha.

## ⚠️ Importante

- Estas configurações se aplicam quando você tem múltiplas campanhas na fila
- Se você enviar apenas uma campanha, essas configurações não se aplicam
- Intervalos maiores entre campanhas ajudam a manter a segurança

## 🔗 Próximos Passos

👉 [Próximo: Indicador de Risco](./05-indicador-risco.md)

## 🔙 Navegação

- [⬅️ Voltar: Configurações de Mensagens](./03-configuracoes-mensagens.md)
- [📋 Voltar ao Índice do Tutorial](./README.md)
- [🏠 Voltar ao Índice Principal](../README.md)




