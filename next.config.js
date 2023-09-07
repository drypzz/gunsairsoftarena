import TerserPlugin from 'terser-webpack-plugin';

export function webpack(config, { isServer }) {
    if (!isServer) {
        config.optimization.minimize = true;
        config.optimization.minimizer = [
            new TerserPlugin({
                terserOptions: {
                    compress: {},
                    mangle: true,
                },
            }),
        ];
    }

    return config;
}