module.exports = {
    apps: [{
        name: 'weixinDev',
        script: 'bin/www',
        watch: false,
        watch_delay: 1000,
        ignore_watch : ["node_modules", "data/log",".vscode"],
        watch_options: {
        "followSymlinks": false
        },
        output: "data/log/pm2_nova_out.log",
        error: "data/log/pm2_nova_error.log",
        log_date_format: "DD-MM-YYYY",
        exec_mode: "cluster",
        env: {
            NODE_ENV: 'production'
        }
    }]
};