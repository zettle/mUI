module.exports = {
    "resolve": {
        "alias": {
            "site-mobile-shared": "E:\\workspace\\ui-by-vant-created\\node_modules\\@vant\\cli\\dist\\site-mobile-shared.js",
            "site-desktop-shared": "E:\\workspace\\ui-by-vant-created\\node_modules\\@vant\\cli\\dist\\site-desktop-shared.js"
        }
    },
    "module": {
        "rules": [
            {
                test: /\.(js|ts|jsx|tsx)$/,
                exclude: /node_modules\/(?!(@vant\/cli))/,
                "use": [
                    {
                        "loader": "cache-loader",
                        "options": {
                            "cacheDirectory": "E:\\workspace\\ui-by-vant-created\\node_modules\\.cache"
                        }
                    },
                    "babel-loader"
                ]
            },
            {
                test: /\.less$/,
                "sideEffects": true,
                "use": [
                    "style-loader",
                    "css-loader",
                    {
                        "loader": "postcss-loader",
                        "options": {
                            "config": {
                                "path": "E:\\workspace\\ui-by-vant-created\\node_modules\\@vant\\cli\\lib\\config\\postcss.config.js"
                            }
                        }
                    },
                    "less-loader"
                ]
            },
            {
                test: /\.scss$/,
                "sideEffects": true,
                "use": [
                    "style-loader",
                    "css-loader",
                    {
                        "loader": "postcss-loader",
                        "options": {
                            "config": {
                                "path": "E:\\workspace\\ui-by-vant-created\\node_modules\\@vant\\cli\\lib\\config\\postcss.config.js"
                            }
                        }
                    },
                    {
                        "loader": "sass-loader",
                        "options": {
                            "implementation": {
                                "info": "dart-sass\t1.28.0\t(Sass Compiler)\t[Dart]\ndart2js\t2.10.3\t(Dart Compiler)\t[Dart]",
                                "types": {
                                    
                                },
                                "NULL": {
                                    
                                },
                                "TRUE": {
                                    "value": true
                                },
                                "FALSE": {
                                    "value": false
                                }
                            }
                        }
                    }
                ]
            },
            {
                test: /\.md$/,
                "use": [
                    {
                        "loader": "cache-loader",
                        "options": {
                            "cacheDirectory": "E:\\workspace\\ui-by-vant-created\\node_modules\\.cache"
                        }
                    },
                    "vue-loader",
                    "@vant/markdown-loader"
                ]
            }
        ]
    },
    "plugins": [
        {
            
        },
        {
            "compilationSuccessInfo": {
                
            },
            "shouldClearConsole": false,
            "logLevel": 1,
            "formatters": [
                null,
                null,
                null
            ],
            "transformers": [
                null,
                null,
                null
            ],
            "previousEndTimes": {
                
            },
            "reporter": {
                "enabled": true
            }
        },
        {
            "profile": false,
            "modulesCount": 500,
            "showEntries": false,
            "showModules": true,
            "showActiveModules": true,
            "options": {
                "name": "Vant Cli",
                "color": "#07c160",
                "reporters": [
                    "fancy"
                ],
                "reporter": null
            },
            "reporters": [
                {
                    
                }
            ]
        },
        {
            
        },
        {
            "options": {
                "template": "E:\\workspace\\ui-by-vant-created\\node_modules\\@vant\\cli\\site\\desktop\\index.html",
                "templateContent": false,
                "filename": "index.html",
                "hash": false,
                "inject": "body",
                "scriptLoading": "blocking",
                "compile": true,
                "favicon": false,
                "minify": "auto",
                "cache": true,
                "showErrors": true,
                "chunks": [
                    "chunks",
                    "site-desktop"
                ],
                "excludeChunks": [
                    
                ],
                "chunksSortMode": "auto",
                "meta": {
                    
                },
                "base": false,
                "title": "ui-by-vant-created",
                "xhtml": false,
                "logo": "https://img.yzcdn.cn/vant/logo.png"
            },
            "version": 4
        },
        {
            "options": {
                "template": "E:\\workspace\\ui-by-vant-created\\node_modules\\@vant\\cli\\site\\mobile\\index.html",
                "templateContent": false,
                "filename": "mobile.html",
                "hash": false,
                "inject": "body",
                "scriptLoading": "blocking",
                "compile": true,
                "favicon": false,
                "minify": "auto",
                "cache": true,
                "showErrors": true,
                "chunks": [
                    "chunks",
                    "site-mobile"
                ],
                "excludeChunks": [
                    
                ],
                "chunksSortMode": "auto",
                "meta": {
                    
                },
                "base": false,
                "title": "ui-by-vant-created",
                "xhtml": false,
                "logo": "https://img.yzcdn.cn/vant/logo.png"
            },
            "version": 4
        }
    ],
    "optimization": {
        "splitChunks": {
            "cacheGroups": {
                "chunks": {
                    "chunks": "all",
                    "minChunks": 2,
                    "minSize": 0,
                    "name": "chunks"
                }
            }
        }
    }
};