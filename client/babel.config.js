module.exports = function (api) {
    api.cache(true);
    return {
        presets: ["babel-preset-expo"],
        plugins: [
            // Required for expo-router
            "expo-router/babel",
            "@babel/plugin-proposal-export-namespace-from",
            "react-native-reanimated/plugin",
            [
                "module-resolver",
                {
                    alias: {
                        "@app": "./app",
                        "@assets": "./assets",
                        "@components": "./components",
                        "@constants": "./constants",
                    },
                },
            ],
        ],
        env: {
            production: {
                plugins: ["react-native-paper/babel"],
            },
        },
    };
};
