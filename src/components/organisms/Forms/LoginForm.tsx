import { useState } from "react";
import Form from "../../molecules/Form/Form";
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";

interface LoginFormData {
  name: string;
  email: string;
}

function LoginForm() {
  const [data, setData] = useState<LoginFormData>({ name: "", email: "" });
  return (
    <div className="flex gap-1 justify-center items-center flex-col border p-4">
      <div>LoginForm</div>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("onsubmit");
        }}
      >
        <Input
          label="name"
          value={data.name}
          setValue={(name) => setData({ ...data, name })}
        />
        <Input
          label="email"
          value={data.email}
          setValue={(email) => setData({ ...data, email })}
        />
        <div className="flex justify-end w-100 my-2">
          <Button
            type="submit"
            label="login"
            onClick={() => console.log(data)}
          />
        </div>
      </Form>
    </div>
  );
}

export default LoginForm;
