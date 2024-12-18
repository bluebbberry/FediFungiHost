import express from 'express';
import cors from "cors";
import userController from "./src/controllers/user.controller.js";
import fungiController from "./src/controllers/fungi.controller.js";
import {startAnsweringMentions, startFungiLifecycle} from "./src/services/fungi.service.js";
import notificationsController from "./src/controllers/notifications.controller.js";

// ============== REST API ===================
const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:4200',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use('/user', userController);
app.use('/fungi', fungiController);
app.use('/notifications', notificationsController);

const PORT = 3000;

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});

startFungiLifecycle();
startAnsweringMentions();
