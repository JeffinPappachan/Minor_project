import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import "./login.css";
import { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
export function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [user, setUser] = useState("");
  const [remember, setRemember] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => (setUser(userCredential?.user)))
        .finally(() => console.log("User Logged in with email: ", user.email));
      window.location.href = "/profile";

    } catch (error) {
      console.error(error.messsage);
    }
    // console.log(formData);
    if (remember) {
      localStorage.setItem("username", formData.email);
      localStorage.setItem("password", formData.password);
    }
  };

  useEffect(() => {
    const email = localStorage.getItem("username");
    const password = localStorage.getItem("password");
    if (email && password) {
      setFormData({ email, password });
    }
  }, []);

  return (
    <div className="login-form-container">
      <form
        className="flex-container max-w-md flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="username" value="Your Email" />
            <TextInput
              id="email"
              type="email"
              placeholder="Enter your Email"
              required
              shadow
              value={formData.email}
              onChange={handleChange}
            />
            <Label htmlFor="password" value="Your password" />
            <TextInput
              id="password"
              type="password"
              required
              shadow
              value={formData.password}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox
            id="remember"
            checked={remember}
            onChange={() => setRemember(!remember)}
          />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button onClick={handleSubmit} type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}
