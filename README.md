# Site da RLFOCUS

Site institucional de https://rlfocus.com.br (RLFOCUS Auditoria e Soluções Contábeis).
React + Vite, página única. Visual aprovado pelos sócios em set/2026 (protótipo em `design/`).

## Rodar e editar

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera dist/
```

Os textos, telefones, selos e serviços ficam em `src/conteudo.ts`. Os estilos em `src/styles.css`.
Imagens em `public/img/`.

Regras de conteúdo combinadas com o cliente: sem endereço cadastral, sem travessão, nenhuma afirmação
que não seja verdadeira (a empresa é de 2020; os "20 anos" são da carreira de cada sócio).

## Como vai ao ar (HostGator)

1. Push na `main`.
2. O GitHub Actions (`.github/workflows/deploy.yml`) faz o build e publica o resultado no branch `deploy`
   (com o `.cpanel.yml`).
3. No cPanel da HostGator, **Git Version Control** › repositório `rlfocus-site` › **Pull or Deploy**:
   "Update from Remote" e depois "Deploy HEAD Commit". O `.cpanel.yml` copia os arquivos para
   `/home2/rlfocu11/public_html/`.

O formulário de contato abre o WhatsApp comercial (12) 99187-6712 com a mensagem já escrita
(a hospedagem não tem backend de formulário).

## Pastas

- `src/`: o site (componentes em `src/components/`).
- `public/`: imagens, `.htaccess` (HTTPS, cache, cabeçalhos), `robots.txt`, `sitemap.xml`.
- `design/`: protótipo aprovado (desktop e celular) usado como referência.
