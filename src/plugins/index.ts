import { App } from "vue";
import pluginUview from "./uview";

export default function (app: App) {
  app.use(pluginUview);
}
