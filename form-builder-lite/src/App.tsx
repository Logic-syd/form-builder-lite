import { FormRenderer } from "./components/FormRenderer";
import { formSchema } from "./schema/exampleSchema";

function App() {
  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Form Builder Lite</h1>
      <FormRenderer schema={formSchema} />
    </div>
  );
}

export default App;
