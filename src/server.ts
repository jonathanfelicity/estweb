import App from "./index";
import PagesRoutes from "./routes/pages.routes";

const app = new App([new PagesRoutes(), ])


app.listen()