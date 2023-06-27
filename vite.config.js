import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    
  },
  // esbuild: {
  //     jsxInject: `import React from 'react';`,
  //   },
})

// export default {
//   // ...other configuration options
//   esbuild: {
//     jsxInject: `import React from 'react';`,
//   },
// };
