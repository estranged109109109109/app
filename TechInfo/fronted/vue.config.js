//var path = require("path")

module.exports = {
    "outputDir": "C:\\workspace\\TechInfo\\backend\\public",
    "devServer": {
        "proxy" : {
            "/techinfo": {
                "target": "http://localhost:3000/",
                "changeOrigin" : true
            },
            "/fieldinfo": {
                "target": "http://localhost:3000/",
                "changeOrigin" : true
            },
            "/tableinfo": {
                "target": "http://localhost:3000/",
                "changeOrigin" : true
            }
        },
    },
    "transpileDependencies": [
        "vuetify"
    ]
}