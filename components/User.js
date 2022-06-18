import { useSession, signIn, signOut } from "next-auth/react";

export default function User({ className }) {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <button onClick={signOut}>{session.user.name}</button>
      </>
    );
  }
  return (
    <>
      <button
        className={`bg-blue-500 px-6 py-2 font-medium rounded-md text-white hover:brightness-105 hover:shadow-md ${className}`}
        onClick={signIn}
      >
        Sign In
      </button>
    </>
  );
}
