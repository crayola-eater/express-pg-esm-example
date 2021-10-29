import env from "env-var";

export const PORT = env.get("PORT").required().asPortNumber();
