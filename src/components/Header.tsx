
// import ThemeButton from "./ThemeButton";
import { signIn, signOut, useSession } from "next-auth/react";
// import {  Link } from "@radix-ui/themes";
// import { Button } from "./ui/NewButton";
import Link from "next/link";
import NewButton from "./ui/NewButton";
// import { NewButton } from "./ui/NewButton";


export function Header() {
    const session = useSession()
    const user =session.data?.user
    return (
        <main>
            <div className="fixed top-0 w-full left-0 border-b border-white-ao8">
                <header className="flex h-[var(--navigation-height)]">
                    <Link className="flex items-center text-md" href="/"></Link>

                    <nav className="h-full">
                        <ul className="flex items-center h-full [&_a]:text-sm [&_li]:ml-6">
                            <li>
                                <Link href="#">Home</Link>
                            </li>
                            <li>
                                <Link href="#">Dev</Link>
                            </li>
                            <li>
                                <Link href="#">Browse</Link>
                            </li>
                            <li>
                                <Link href="#">Features</Link>
                            </li>
                        </ul>
                    </nav>

                    <div className="ml-auto h-full flex items-center">
                        <NewButton href={""}>login in</NewButton>
                        {/* <ul>
                            {user != null &&<li>
                                    <Link href={`/profiles/${user.id}`}>Profile</Link>
                            </li>}

                            <div className="justify-center text-center">  
                            {user == null ? (
                                <Button onClick={() =>void signIn()} className="test-sm mr-6">Log In</Button>
                                ) : 
                                <Button onClick={() => void signOut()}>Sign Out</Button>
                            }
                            </div> 
                        </ul> */}
                    </div>
                </header>
            </div>
         {/* <ThemeButton /> */}
        </main>
    )
}

