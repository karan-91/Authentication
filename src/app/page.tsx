import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Authentication</h1>

      <SignedIn>
        <UserButton />
      </SignedIn>

      <SignedOut>
        Please sign in <Link href="/sign-in">here</Link>
      </SignedOut>
    </div>
  );
}
