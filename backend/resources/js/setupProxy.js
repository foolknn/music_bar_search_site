import proxy from "http-proxy-middleware";

module.exports = function (app) {
    const headers = {
        "Content-Type": "application/json",
    };
    app.use(
        proxy("/api/v1/", {
            target:
                "http://webservice.recruit.co.jp/hotpepper/service_area/v1/?key=8bccc364ccb3713c",
            changeOrigin: true,
            secure: false,
            headers: headers,
        })
    );
};
