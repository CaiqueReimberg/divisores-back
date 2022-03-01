import 'dotenv/config';
import { app } from "./app";

// Inicialização do serviço
app.listen(process.env.PORT, () => {
  console.log(`Server listening on port: ${process.env.PORT}`)
});
