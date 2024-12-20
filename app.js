const express = require("express");
const cors = require("cors");
const contactsRouter = require("./app/routes/contact.route");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/contacts", contactsRouter)
app.use((req, res, next) => {
    // Code ở đây sẽ chạy khi không có route được định nghĩa nào
    // khớp với yêu cầu. Gọi next() để chuyển sang middleware xử lý lỗi
    return next(new ApiError(404, "Resource not found"));
});
app.use((err, req, res, next) => {
    // Middleware xử lý lỗi tập trung.
    // Trong các đoạn code xử lý ở các route, gọi next(error) sẽ chuyển về middleware xửlý lỗi này
    return res.status(error.statusCode || 500).json({
        message: error.message || "Internal Server Error",
    });
});
app.get("/", (req, res) => {
    res.json({ message: "Welcome to contact book application" });
});
module.exports = app;