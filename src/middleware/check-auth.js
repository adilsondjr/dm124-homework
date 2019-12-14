const checkAuth = (request, response, next) => {
    const token = request.headers.authorization;

    if (/YWRtaW46YWRtaW4=/.test(token)) {
        next();
    } else {
        response.status(401).json({
        message: 'Not authorized'
        });
    }
};

module.exports = checkAuth;