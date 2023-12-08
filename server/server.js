import app from "./app.js";
import connectDB from "./db/db.js";

// connectDB();

if (process.env.NODE_ENV !== "PRODUCTION") {
    console.log("Development mode");
}

const server = app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});

process.on("unhandledRejection", (err) => {
    console.log("UNHANDLED REJECTION! Shutting down...");
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
});
