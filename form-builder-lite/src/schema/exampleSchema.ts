// src/schema/exampleSchema.ts
export const formSchema = [
  { name: "fullName", type: "text", label: "Full Name", required: true },
  { name: "email", type: "email", label: "Email Address", required: true },
  { name: "age", type: "number", label: "Age", required: false },
  { name: "gender", type: "select", label: "Gender", options: ["Male", "Female", "Other"] },
];
