export * from "./tickets";
export * from "./cards";
import z from "zod/v4";

const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(8),
});

export const handleLogin = (
  e: SubmitEvent | React.FormEvent<HTMLFormElement>,
) => {
  e.preventDefault();
  console.log("tried");
};
