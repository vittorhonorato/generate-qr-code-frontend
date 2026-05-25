# QR Code Frontend

Frontend em Angular para geração de QR Code a partir de uma URL/texto informado pelo usuário.

## Visão Geral

A aplicação exibe um formulário simples com campo de texto e botão para gerar QR Code. Ao enviar:

- faz uma requisição `POST` para a API backend;
- em caso de sucesso, renderiza a imagem do QR Code na tela;
- em caso de erro, exibe a mensagem retornada pelo backend.

## Funcionalidades

- Geração de QR Code via integração HTTP.
- Validação de formulário com `Reactive Forms`.
- Exibição de erro amigável vindo do backend.
- Interface responsiva e minimalista.

## Stack

- Angular `16.2.x`
- TypeScript
- SCSS
- RxJS

## Requisitos

- Node.js 18+ (recomendado)
- npm 9+
- Backend de QR Code rodando localmente (padrão: `http://localhost:8080`)

## Como Rodar

1. Instale dependências:

```bash
npm install
```

2. Execute em modo desenvolvimento:

```bash
npm start
```

3. Abra no navegador:

```text
http://localhost:4200
```

## Scripts Disponíveis

- `npm start`: inicia servidor de desenvolvimento (`ng serve`)
- `npm run build`: gera build de produção
- `npm run watch`: build em modo watch
- `npm test`: executa testes unitários

## Integração com Backend

A integração está no arquivo `src/app/service/api.service.ts`.

Base URL atual:

```ts
API_URL = "http://localhost:8080"
```

Endpoint utilizado:

- `POST /qrcode`

### Contrato esperado

#### Request

```json
{
  "text": "https://seusite.com"
}
```

#### Response de sucesso

```json
{
  "url": "https://.../qrcode.png"
}
```

#### Response de erro (exemplo)

```json
{
  "text": "text é obrigatório"
}
```

## Tratamento de Erro no Frontend

No `submit()` do componente:

- limpa estado anterior de erro e resultado;
- exibe a mensagem `err.error.text` quando vier no formato esperado;
- usa fallback: `Não foi possível gerar o QR Code. Tente novamente.`

## Estrutura Principal

```text
src/
  app/
    generate-qr-code/
      generate-qr-code.component.ts
      generate-qr-code.component.html
      generate-qr-code.component.scss
    service/
      api.service.ts
    model/
      qrcode.model.ts
```

## Próximas Melhorias Sugeridas

- Mover `API_URL` para `environment.ts`.
- Adicionar estado de carregamento no botão durante a requisição.
- Incluir testes unitários para cenários de sucesso e erro do `submit()`.
