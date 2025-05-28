import { z } from "zod";

export const registerSchema = z.object({
  username: z.string().min(2, {
    message: "Campo obrigatório",
  }),
  age: z.coerce.number().min(10, {
    message: "Idade minima: 10",
  }),
  email: z.string().min(2, {
    message: "Campo obrigatório",
  }),
  phone: z.string().min(2, {
    message: "Campo obrigatório",
  }),
  schoolStatus: z.string().min(2, {
    message: "Campo obrigatório",
  }),
  sport: z.string().min(2, {
    message: "Campo obrigatório",
  }),
});
