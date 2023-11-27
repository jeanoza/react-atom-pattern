import { useState } from "react";
import Button from "../components/atoms/Button";
import Input from "../components/atoms/Input";

interface HomeProps {}

export default function Home(props: HomeProps) {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  return (
    <div>
      <div className="flex gap-1 justify-center items-center">
        <div>Buttons:</div>
        <Button
          label="with class name"
          className="border border-red-400 border-8"
        />
        <Button label="without class name" />
      </div>
      <div className="flex gap-1 justify-center items-center">
        <div>Input:</div>
        <Input label="name" value={name} setValue={setName} />
        <Input label="email" value={email} setValue={setEmail} />
        <Button label="test" onClick={() => console.log(name, email)} />
      </div>
    </div>
  );
}
