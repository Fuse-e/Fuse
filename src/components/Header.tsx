
import ThemeButton from "./ThemeButton";
import { signIn, signOut, useSession } from "next-auth/react";
import {  Link } from "@radix-ui/themes";
import { Button } from "./ui/Button";


export function Header() {
    const session = useSession()
    const user =session.data?.user
    return (
        <main>
            <div className="flex justify-center text-center items-center bg-opacity-10 bg-black border-2 rounded-b-lg">
                <div className="flex bg-black-200 box-border items-center h-10 p-4 border-4">
                    <div className="p-1 m-5 flex  justify-center text-center items-stretch">
                        {/* <Heading  className="" size="4">Flame⚡</Heading> */}
                        <div className="flex justify-center text-center">
                            <ul className=" flex gap-4 text-sm ">
                                <li>
                                    <Link href="/">Home</Link>
                                </li>
                                <li>
                                    <Link href="/">Dev</Link>
                                </li>
                                <li>
                                    <Link href="/">Browse</Link>
                                </li>
                                {user != null &&<li>
                                    <Link href={`/profiles/${user.id}`}>Profile</Link>
                                </li>}
                            </ul>
                        </div>
                        <div className="justify-center text-center">  
                            {user == null ? (
                                <Button onClick={() =>void signIn()}>Log In</Button>
                                ) : 
                                <Button onClick={() => void signOut()}>Sign Out</Button>
                            }
                        </div>
                    </div>
                </div>
            </div>          
            <ThemeButton />
        </main>
    )
}