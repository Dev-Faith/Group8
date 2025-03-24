"use client";
import { useEffect, useState } from "react";
import { account, ID } from "../../appwrite";
import { useRouter } from "next/navigation";

// const LoginPage = () => {
//   const [loggedInUser, setLoggedInUser] = useState(null);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");

//   const login = async (email, password) => {
//     const session = await account.createEmailPasswordSession(email, password);
//     setLoggedInUser(await account.get());
//   };

//   const register = async () => {
//     await account.create(ID.unique(), email, password, name);
//     login(email, password);
//   };

//   const logout = async () => {
//     await account.deleteSession("current");
//     setLoggedInUser(null);
//   };

//   useEffect(() => {
//     try {
//       setLoggedInUser(account.get());
//       console.log(loggedInUser);
//     } catch (error) {}
//   }, []);

//   if (loggedInUser !== null) {
//     return (
//       <div>
//         <p>Logged in as {loggedInUser.name}</p>
//         <button type="button" onClick={logout}>
//           Logout
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <p>Not logged in</p>
//       <form>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <button type="button" onClick={() => login(email, password)}>
//           Login
//         </button>
//         <button type="button" onClick={register}>
//           Register
//         </button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;

import { FcGoogle } from "react-icons/fc";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

import useStore from "../../../store";

const Login3 = ({
  heading = "Login",
  subheading = "Welcome back",
  logo = {
    url: "https://www.shadcnblocks.com",
    src: "https://shadcnblocks.com/images/block/logos/shadcnblockscom-icon.svg",
    alt: "Shadcnblocks",
  },
  loginText = "Log in",
  googleText = "Log in with Google",
  signupText = "Don't have an account?",
  signupUrl = "#",
}) => {
  //   const [loggedInUser, setLoggedInUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(null);

  const [toggleSignin, setToggleSignin] = useState(true);

  const router = useRouter();

  //   const login = async (email, password) => {
  //     try {
  //       const session = await account.createEmailPasswordSession(email, password);
  //       setLoggedInUser(await account.get());
  //       router.push("/");
  //     } catch (error) {
  //       console.error(error);
  //       setError(error);
  //     }
  //   };

  //   const register = async () => {
  //     try {
  //       await account.create(ID.unique(), email, password);
  //       login(email, password);
  //       router.push("/");
  //     } catch (error) {
  //       setError(error);
  //       console.error(error);
  //     }
  //   };

  //   useEffect(() => {
  //     try {
  //       setLoggedInUser(account.get());
  //       console.log(loggedInUser);
  //     } catch (error) {}
  //   }, []);

  //   if (loggedInUser !== null) {
  //     return (
  //       <div>
  //         <p>Logged in as {loggedInUser.name}</p>
  //         <button type="button" onClick={logout}>
  //           Logout
  //         </button>
  //       </div>
  //     );
  //   }

  const user = useStore((state) => state.user);
  const login = useStore((state) => state.login);
  const register = useStore((state) => state.register);

  useEffect(() => {
    // const user = account.get();
    if (user) {
      setLoggedInUser(user);
      router.push("/");
      console.log(user);
    }
  }, []);

  if (!toggleSignin) {
    return (
      <section className="py-32 w-[40rem]">
        <div className="container">
          <div className="flex flex-col gap-4">
            <div className="mx-auto w-full max-w-sm rounded-md p-6 shadow">
              <div className="mb-6 flex flex-col items-center">
                <a href={logo.url} className="mb-6 flex items-center gap-2">
                  <img src={logo.src} className="max-h-8" alt={logo.alt} />
                </a>
                <h1 className="mb-2 text-2xl font-bold">{"Sign up"}</h1>
                <p className="text-muted-foreground">{"Welcome friend"}</p>
              </div>
              <div>
                <div className="grid gap-4">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <div>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="remember"
                        className="border-muted-foreground"
                      />
                      <label
                        htmlFor="remember"
                        className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Remember me
                      </label>
                    </div>
                    <a
                      href="#"
                      className="text-sm text-primary hover:underline"
                    >
                      Forgot password
                    </a>
                  </div>
                  <Button
                    type="submit"
                    className="mt-2 w-full"
                    onClick={() => register(email, password)}
                  >
                    {"sign up"}
                  </Button>
                  <Button variant="outline" className="w-full">
                    <FcGoogle className="mr-2 size-5" />
                    {googleText}
                  </Button>
                </div>
                <div className="mx-auto mt-8 flex justify-center gap-1 text-sm text-muted-foreground">
                  <p>{signupText}</p>
                  <button
                    onClick={() => setToggleSignin(true)}
                    className="font-medium text-primary"
                  >
                    Sign in
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-32 w-[40rem]">
      <div className="container">
        <div className="flex flex-col gap-4">
          <div className="mx-auto w-full max-w-sm rounded-md p-6 shadow">
            <div className="mb-6 flex flex-col items-center">
              <a href={logo.url} className="mb-6 flex items-center gap-2">
                <img src={logo.src} className="max-h-8" alt={logo.alt} />
              </a>
              <h1 className="mb-2 text-2xl font-bold">{heading}</h1>
              <p className="text-muted-foreground">{subheading}</p>
            </div>
            {/* <div className="text-center">{error != null && error}</div> */}
            <div>
              <div className="grid gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <div>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="remember"
                      className="border-muted-foreground"
                    />
                    <label
                      htmlFor="remember"
                      className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Remember me
                    </label>
                  </div>
                  <a href="#" className="text-sm text-primary hover:underline">
                    Forgot password
                  </a>
                </div>
                <Button
                  type="submit"
                  className="mt-2 w-full"
                  onClick={() => login(email, password)}
                >
                  {loginText}
                </Button>
                <Button variant="outline" className="w-full">
                  <FcGoogle className="mr-2 size-5" />
                  {googleText}
                </Button>
              </div>
              <div className="mx-auto mt-8 flex justify-center gap-1 text-sm text-muted-foreground">
                <p>{signupText}</p>
                <button
                  onClick={() => setToggleSignin(false)}
                  className="font-medium text-primary"
                >
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Login3 };
