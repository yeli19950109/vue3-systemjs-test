import vue from 'rollup-plugin-vue'
import typescript from '@rollup/plugin-typescript'
import replace from '@rollup/plugin-replace'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import alias from '@rollup/plugin-alias';
import image from '@rollup/plugin-image';
import url from '@rollup/plugin-url';

export default {
    input: 'src/index.ts',
    output: {
        format: 'systemjs',
        file: 'dist/index.js',
        paths: {
            vue: 'vue3'
        }
    },
    external: ['vue'],
    plugins: [
        alias({
            entries: [
                {find: 'vue', replacement: 'vue3'},
            ]
        }),
        typescript({}),
        vue({
            css: true,
            target: "browser"
        }),
        replace({
            'process.env.NODE_ENV': JSON.stringify('production'),
            preventAssignment: true
        }),
        resolve({
            extensions: [
                '.ts',
                '.tsx',
                '.mjs',
                '.js',
                '.jsx',
                '.vue',
                '.json',
                '.sass',
                '.scss',
                '.css',
            ]
        }),
        commonjs({}),
        image(),
        url()
    ]
}