export const swcConfig = {
    sourceMaps: false,
    module: {
        type: 'commonjs',
        strict: true,
    },
    jsc: {
        target: 'es2020',
        parser: {
            syntax: 'typescript',
            decorators: true,
        },
        transform: {
            legacyDecorator: true,
            decoratorMetadata: true,
        },
        keepClassNames: true,
    },
};
