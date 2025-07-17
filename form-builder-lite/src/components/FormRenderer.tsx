// src/components/FormRenderer.tsx
import { useForm } from "react-hook-form";

export function FormRenderer({ schema }: { schema: any[] }) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {schema.map((field) => (
        <div key={field.name}>
          <label className="block font-medium mb-1">{field.label}</label>
          {field.type === "select" ? (
            <select {...register(field.name)} className="border p-2 w-full">
              {field.options.map((opt: string) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={field.type}
              {...register(field.name, { required: field.required })}
              className="border p-2 w-full"
            />
          )}
        </div>
      ))}
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
}
