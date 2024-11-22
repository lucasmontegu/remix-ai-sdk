# Welcome to Remix!

- 📖 [Remix docs](https://remix.run/docs)

## Configuración Inicial

1. Instala las dependencias del proyecto:

```shellscript
npm install
```

2. Configura las variables de entorno:
   - Copia el archivo `.env.example` a `.env`
   - Completa las siguientes variables requeridas:
     ```
     OPENAI_API_KEY=tu_api_key_de_openai
     CLAUDE_API_KEY=tu_api_key_de_anthropic
     DATABASE_URL=tu_url_de_base_de_datos
     ```

## Desarrollo

Ejecuta el servidor de desarrollo:

```shellscript
npm run dev
```

## Despliegue

Primero, construye la aplicación para producción:

```sh
npm run build
```

Luego ejecuta la aplicación en modo producción:

```sh
npm start
```

Ahora necesitarás elegir un host para hacer el despliegue.

### DIY

Si estás familiarizado con el despliegue de aplicaciones Node, el servidor de aplicaciones incorporado de Remix está listo para producción.

Asegúrate de desplegar el resultado de `npm run build`:

- `build/server`
- `build/client`

## Estilos

Esta plantilla viene con [Tailwind CSS](https://tailwindcss.com/) ya configurado para una experiencia inicial simple y predeterminada. Puedes usar el framework CSS que prefieras. Consulta la [documentación de Vite sobre CSS](https://vitejs.dev/guide/features.html#css) para más información.
