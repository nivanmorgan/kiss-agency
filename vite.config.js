import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '');
	return {
		define: {
			'process.env': env,
		},
		plugins: [react()],
		assetsInclude: ['**/*.glb'],
	};
});

// https://vitejs.dev/config/
// export default defineConfig({
// 	plugins: [react()],
// 	define: { 'process.env': process.env },
// 	assetsInclude: ['**/*.glb'],
// });
