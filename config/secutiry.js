module.exports.security = {
    oauth : {
        version : '2.0',
        token : {
            length: 32,
            expiration: 3600
        }
    },
    admin: {
        email: {
            address: 'xxxxxxxxxxxx@xxxxx.xxx',
            password: 'xxxxxxxxxx'
        },

    },
    server: {
        url: 'http://localhost:1337'
    }
};
