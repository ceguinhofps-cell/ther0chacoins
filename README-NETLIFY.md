# TheR0cHa Coins — publicação na Netlify

## Importante: estrutura do repositório

Envie **o conteúdo desta pasta** para a raiz do repositório GitHub. O arquivo `netlify.toml` e o `package.json` precisam ficar na raiz do repositório, e não dentro de uma pasta adicional `therocha-coins-site/`.

## Configuração na Netlify

- Base directory: deixe em branco (raiz do repositório)
- Build command: `npm install --include=dev && npm run build`
- Publish directory: `client/dist`
- Node version: `20`

O `netlify.toml` já contém essas configurações. Se a tela de configuração da Netlify tiver valores antigos salvos, atualize-os para os valores acima.

## Publicar

1. Extraia o ZIP.
2. Envie os arquivos e pastas que estão dentro dele para a raiz do repositório GitHub.
3. Na Netlify, abra Site configuration > Build & deploy > Build settings.
4. Confira os valores acima e faça um novo deploy com Clear cache and deploy site.

## Observação

Este projeto publica a vitrine React/Vite como site estático. O servidor Express e o banco de dados não são publicados pela Netlify com esta configuração; precisam de hospedagem/serviço separado caso sejam utilizados.
