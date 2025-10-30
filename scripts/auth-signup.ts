import z from "zod/v4";

const signupSchema = z
  .object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    email: z.email("Invalid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(
        new RegExp(".*[0-9].*"),
        "Password must contain at least one number",
      )
      .regex(
        new RegExp(".*[A-Z].*"),
        "Password must contain at least one uppercase letter",
      )
      .regex(
        new RegExp(".*[a-z].*"),
        "Password must contain at least one lowercase letter",
      )
      .regex(
        new RegExp(".*[`~<>?,./!@#$%^&*()|{}[_+-=].*"),
        "Password must contain at least one symbol",
      ),
    // confirmPassword must be the same value as password
    confirmPassword: z.string(),
  })
  .refine((data) => data.confirmPassword === data.password, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type fieldTypes = "name" | "email" | "password" | "confirmPassword";

export const validateSignupInput = (
  e:
    | InputEvent
    | FocusEvent
    | (typeof import("react") extends Record<string, any>
        ? import("react").FormEvent<HTMLFormElement>
        : never),
) => {
  // return if e.target is a button element
  if ((e.target as HTMLElement).tagName === "BUTTON") return;

  const form = e.currentTarget as HTMLFormElement;
  const target = e.target as HTMLInputElement;
  const name = target.name;
  const value = target.value;

  const parsed = signupSchema.shape[name as fieldTypes].safeParse(value);
  const errorField = form.querySelector(`.error-${name}`) as HTMLSpanElement;

  if (!parsed.success) {
    errorField.style.display = "block";
    errorField.innerText = parsed.error.issues[0]?.message ?? "Invalid input";
  } else {
    errorField.style.display = "none";
    errorField.innerText = "";
  }
};

export const handleSignup = async (
  e:
    | SubmitEvent
    | (typeof import("react") extends Record<string, any>
        ? import("react").FormEvent<HTMLFormElement>
        : never),
) => {
  e.preventDefault();

  const form = e.target;
  const nameField = (form as HTMLFormElement).querySelector("#name");
  const emailField = (form as HTMLFormElement).querySelector("#email");
  const passwordField = (form as HTMLFormElement).querySelector("#password");
  const confirmPasswordField = (form as HTMLFormElement).querySelector(
    "#confirmPassword",
  );

  const parsed = signupSchema.safeParse({
    name: (nameField as HTMLInputElement).value,
    email: (emailField as HTMLInputElement).value,
    password: (passwordField as HTMLInputElement).value,
    confirmPassword: (confirmPasswordField as HTMLInputElement).value,
  });

  if (!parsed.success) {
    console.log("", parsed.error.issues.join("\n"));
  } else {
    const res = await fetch(
      import.meta.env.VITE_BACKEND_URL + "/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(parsed.data),
      },
    );

    if (res.status !== 200) {
      return { success: false, message: res.statusText };
    }

    const data = await res.json();

    localStorage.setItem("ticketapp_session", data.accessToken);
    localStorage.setItem("ticketapp_refresh", data.refreshToken);

    return { success: true, message: "Account created successfully" };
  }
};
