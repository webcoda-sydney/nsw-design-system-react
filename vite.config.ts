// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import fs from 'fs/promises';
export default defineConfig({
	plugins: [react(), dts()],
	resolve: {
		alias: {
			'@': resolve(__dirname, './src')
		}
	},
	build: {
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			name: 'NSW Design System React',
			// the proper extensions will be added
			fileName: 'index'
		},
		rollupOptions: {
			// make sure to externalize deps that shouldn't be bundled
			// into your library
			external: ['react', 'react-dom'],
			output: {
				// Provide global variables to use in the UMD build
				// for externalized deps
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM'
				}
			}
		}
	},
	optimizeDeps: {
		esbuildOptions: {
			plugins: [
				{
					name: 'load-js-files-as-jsx',
					setup(build) {
						build.onLoad(
							{ filter: /src\/.*\.js$/ },
							async (args) => ({
								loader: 'jsx',
								contents: await fs.readFile(args.path, 'utf8')
							})
						)
					}
				}
			]
		}
	}
})
