import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";

export const Auth = () => {
  return (
    <div className="bg-black h-screen flex justify-center items-center text-white">
        <SignedOut>
            <SignUpButton mode="modal" className="bg-gray-900 px-2 mr-2 
            rounded-md py-1 hover:cursor-pointer hover:border-white hover:border-2" />
            <SignInButton mode="modal" className="bg-gray-900 px-2 mr-2 
            rounded-md py-1 hover:cursor-pointer hover:border-white hover:border-2" />
        </SignedOut>

        <SignedIn>
            <UserButton />
        </SignedIn>
        </div>
  )
};
