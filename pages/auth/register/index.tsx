import Link from "next/link";
import AuthForm from "@/components/auth/AuthForm";

export default function RegisterPage() {
  return (
    <>
      <h2 className="text-gray-600 mb-6 italic">
        Don't have an account yet? <strong>Register here!</strong>
      </h2>
      <AuthForm isLoggingIn={false} />
      <h3 className="mt-6 text-gray-600 italic text-sm">
        Have an account already?{" "}
        <strong className="hover:text-blue-800 underline">
          <Link href="/auth/login">Log in</Link>
        </strong>
      </h3>
    </>
  );
}
