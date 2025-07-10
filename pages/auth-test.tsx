import { useState } from "react";
import { signIn, useSession } from "next-auth/react";

export default function AuthTest() {
  const { data: session, status } = useSession();
  const [email, setEmail] = useState("admin@carrental.com");
  const [password, setPassword] = useState("demo123");
  const [result, setResult] = useState("");

  const handleSignIn = async () => {
    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      setResult(JSON.stringify(result, null, 2));
      console.log("SignIn result:", result);
    } catch (error) {
      console.error("SignIn error:", error);
      setResult("Error: " + error);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "monospace" }}>
      <h1>Authentication Test</h1>

      <div style={{ marginBottom: "20px" }}>
        <h2>Session Status: {status}</h2>
        {session && <pre>{JSON.stringify(session, null, 2)}</pre>}
      </div>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          style={{ display: "block", marginBottom: "10px", padding: "5px" }}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          style={{ display: "block", marginBottom: "10px", padding: "5px" }}
        />
        <button onClick={handleSignIn} style={{ padding: "10px" }}>
          Sign In
        </button>
      </div>

      <div>
        <h3>Result:</h3>
        <pre style={{ background: "#f0f0f0", padding: "10px" }}>{result}</pre>
      </div>
    </div>
  );
}
