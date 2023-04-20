import Link from "next/link";

function LoginPage() {
  return (
    <div>
      <Link href="/student">Student? Login here</Link>
      <Link href="/staff">Staff? Login here</Link>
    </div>
  );
}

export default LoginPage;
