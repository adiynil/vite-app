import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteComponents, {
  AntDesignVueResolver,
} from 'vite-plugin-components';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ViteComponents({
    customComponentResolvers: [
      AntDesignVueResolver(),
    ]
  }), vue()]
})
