# TheR0cHa Coins — Netlify

Vitrine React + TypeScript/Vite pronta para deploy na Netlify, com identidade preta e dourada, personagem KC, campanha Semana da Black Friday e compra via WhatsApp.

## Deploy na Netlify (recomendado)

1. Envie esta pasta para um repositório GitHub (mantenha `netlify.toml` e `package.json` na raiz).
2. Na Netlify, escolha **Add new project → Import an existing project** e conecte o repositório.
3. A Netlify lerá o `netlify.toml`. As configurações são:
   - Build command: `npm run build`
   - Publish directory: `client/dist`
   - Node: `20`
4. Clique em **Deploy**. Nos próximos envios ao GitHub, a Netlify fará novos deploys automaticamente.

## Deploy manual

A Netlify Drop recebe arquivos já compilados. Para gerar a pasta de publicação localmente, rode na raiz do projeto:

```bash
npm install
npm run build
```

Para desenvolvimento local (vitrine + API), instale as dependências de cada pasta com `npm run install:all` e depois rode `npm run dev`.

Depois arraste somente a pasta `client/dist` para https://app.netlify.com/drop. Para esse modo, o build deve ser executado novamente antes de cada envio.

## Conteúdo da vitrine

- Pacotes: 5.000 (R$ 48,90), 10.000 (R$ 97,80), 20.000 (R$ 192,90), 30.000 (R$ 288,90) e 50.000 (R$ 479,90).
- Links de compra direcionam para o WhatsApp `+55 31 98660-0292`.
- Layout adaptado para desktop e celular.
- Personagem KC incluído em `client/src/assets/personagem-kc.png`.
- Redirecionamento SPA configurado para evitar erro 404 ao atualizar/abrir rotas diretamente.

## Importante sobre backend e painel

A Netlify publicará a vitrine estática gerada em `client/dist`. O diretório `server/` contém uma API Express/Prisma inicial, mas **não é executado automaticamente pelo deploy estático**. Para usar login administrativo real, persistência de preços/pedidos, banco de dados e pagamentos, será necessário hospedar essa API em um serviço Node compatível ou migrar seus endpoints para Netlify Functions e configurar as variáveis de ambiente. A área administrativa atual é apenas demonstrativa e não deve ser considerada segura em produção (senha de demonstração `admin123`).

A API inicial também não implementa checkout/pagamento nem entrega automática. Não coloque segredos em variáveis `VITE_*`, pois elas ficam expostas no navegador.
