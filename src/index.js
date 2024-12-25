import mongoose from "mongoose";
import app from "./app.js";

const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/cqrs-boilerplate', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});