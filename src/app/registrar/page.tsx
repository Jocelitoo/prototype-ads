"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { registerSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const Register = () => {
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      age: 0,
      phone: "",
      email: "",
      schoolStatus: "",
      sport: "",
    },
  });

  function onSubmit() {
    form.reset();
    toast("Dados enviados para análise", {
      style: { backgroundColor: "#13ec7e" },
    });
  }

  return (
    <main className="flex justify-center flex-grow my-8 px-4 sm:px-8 lg:px-20">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 border rounded-md p-4 w-full max-w-lg "
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome:</FormLabel>
                <FormControl>
                  <Input placeholder="Pedro" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Idade:</FormLabel>
                <FormControl>
                  <Input placeholder="15" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="schoolStatus"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Escolaridade:</FormLabel>
                <FormControl>
                  <Input placeholder="Ensino médio completo" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefone:</FormLabel>
                <FormControl>
                  <Input placeholder="1234-5432" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email:</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="atleta@outlook.com"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="sport"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Esporte:</FormLabel>
                <FormControl>
                  <Input placeholder="Futebol" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            size={"lg"}
            variant={"outline"}
            type="submit"
            className="w-full bg-green-300 hover:bg-green-500"
          >
            Cadastrar-se
          </Button>
        </form>
      </Form>
    </main>
  );
};

export default Register;
