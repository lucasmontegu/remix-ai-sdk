# Welcome to Remix + AI SDK OF VERCEL!

- 📖 [Remix docs](https://remix.run/docs)
- 📖 [Vercel AI SDK](https://sdk.vercel.ai/)
- 📖 [Vercel AI SDK - AI SDK for Remix examples](https://github.com/vercel/ai/tree/aa23feddc92694e11b049fe875824e2d2622a38d/examples/remix-openai/app/routes)

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
     OPENAI_MODEL=gpt-4o-mini
     ```

## Desarrollo

Ejecuta el servidor de desarrollo:

```shellscript
npm run dev
```

## Despliegue en Vercel

Este proyecto está preconfigurado para ser desplegado en Vercel. Para desplegarlo:

1. Crea una cuenta en [Vercel](https://vercel.com) si aún no tienes una
2. Instala Vercel CLI (opcional):
   ```sh
   npm i -g vercel
   ```
3. Conecta tu repositorio con Vercel:
   - Ve a [vercel.com/new](https://vercel.com/new)
   - Importa tu repositorio
   - Vercel detectará automáticamente que es un proyecto Remix
   - Configura las variables de entorno necesarias en la interfaz de Vercel

También puedes desplegar directamente desde la línea de comandos:
```sh
vercel
```

## Construcción Local

Si deseas construir la aplicación localmente:

```sh
npm run build
```

Luego ejecuta la aplicación en modo producción:

```sh
npm start
```

## Estilos

Esta plantilla viene con [Tailwind CSS](https://tailwindcss.com/) ya configurado para una experiencia inicial simple y predeterminada. Puedes usar el framework CSS que prefieras. Consulta la [documentación de Vite sobre CSS](https://vitejs.dev/guide/features.html#css) para más información.
