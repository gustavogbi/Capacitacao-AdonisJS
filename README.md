# Descrição

Este projeto é um exemplo de como funcionaria um blog, tendo usuários, posts e comentários como entidades, implementando seus respectivos CRUDs.

## Setup

Necessita o NodeJS instalado

```bash
npm i -g @adonisjs/cli
adonis new "Capacitacao AdonisJS" --api-only
cd "Capacitacao AdonisJS"
npm install sqlite3
adonis make:migration posts
adonis make:migration comments
adonis make:model Post
adonis make:model Comment
adonis make:validator User
adonis make:controller User
adonis make:controller Post
adonis make:controller Comment
```

### Migrations

```js
adonis migration:status
adonis migration:run
adonis migration:reset
```

### Run

```bash
adonis serve --dev
```
