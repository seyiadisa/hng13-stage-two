import z from "zod/v4";

const loginSchema = z.object({
  email: z.email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(new RegExp(".*[0-9].*"), "Password must contain at least one number")
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
});

type fieldTypes = "email" | "password";

export const validateLoginInput = (
  e: InputEvent | FocusEvent | React.FormEvent<HTMLFormElement>,
) => {
  // return if e.target is a button element
  if ((e.target as HTMLElement).tagName === "BUTTON") return;

  const form = e.currentTarget as HTMLFormElement;
  const target = e.target as HTMLInputElement;
  const name = target.name;
  const value = target.value;

  const parsed = loginSchema.shape[name as fieldTypes].safeParse(value);
  const errorField = form.querySelector(`.error-${name}`) as HTMLSpanElement;

  if (!parsed.success) {
    errorField.style.display = "block";
    errorField.innerText = parsed.error.issues[0].message;
  } else {
    errorField.style.display = "none";
    errorField.innerText = "";
  }
};

export const handleLogin = async (
  e: SubmitEvent | React.FormEvent<HTMLFormElement>,
) => {
  e.preventDefault();

  const form = e.target;
  const emailField = (form as HTMLFormElement).querySelector("#email");
  const passwordField = (form as HTMLFormElement).querySelector("#password");
  const parsed = loginSchema.safeParse({
    email: (emailField as HTMLInputElement).value,
    password: (passwordField as HTMLInputElement).value,
  });

  if (!parsed.success) {
    console.log("", parsed.error.issues.join("\n"));
  } else {
    const res = await fetch(import.meta.env.VITE_BACKEND_URL + "/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(parsed.data),
    });

    if (res.status !== 200) {
      return { success: false, message: res.statusText };
    }

    const data = await res.json();
    localStorage.setItem("ticketapp_session", data.accessToken);
    localStorage.setItem("ticketapp_refresh", data.refreshToken);

    return { success: true, message: "Logged in successfully" };
  }
};
