import { defineConfig } from 'vite';

export default defineConfig({
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-label',
      '@radix-ui/react-separator',
      '@radix-ui/react-slot',
      '@radix-ui/react-tooltip',
      'class-variance-authority',
      'clsx',
      'lucide-react',
      'tailwind-merge',
      'vaul'
    ]
  }
}) 