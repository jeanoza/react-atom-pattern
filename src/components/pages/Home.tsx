import { useState } from "react";
import LoginForm from "../organisms/Forms/LoginForm";

export default function Home() {
  return (
    <div>
      <h1>Atoms</h1>
      {/* <div className="flex gap-1 justify-center items-center">
        <div>Buttons:</div>
        <Button
          label="with class name"
          className="border border-red-400 border-8"
        />
        <Button label="without class name" />
      </div>
      <div className="flex gap-1 justify-center items-center">
        <div>Input:</div>
        <Input
          label="name"
          value={data.name}
          setValue={(name) => setData({ ...data, name })}
          wrapperStyle="border border-red-400 border-8"
        />
        <Input
          label="email"
          value={data.email}
          setValue={(email) => setData({ ...data, email })}
        />
        <Button label="alert states" onClick={() => console.log(data)} />
      </div> */}
      <LoginForm />
    </div>
  );
}
