
import ThemeButton from "./ThemeButton";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button, Heading, Link } from "@radix-ui/themes";


export function Header() {
    const session = useSession()
    const user =session.data?.user
    return (
        <main>
            <div className="flex justify-center text-center items-center bg-opacity-10 bg-black border-2 rounded-b-lg">
                <div className="flex bg-black-200 box-border items-center h-10 p-4 border-4">
                    <div className="p-1 m-5 flex  justify-center text-center items-stretch">
                        <Heading  className="" size="4">Flame⚡</Heading>
                        <div className="flex justify-center text-center">
                            {/* <Heading align="left" className="flex text-center text-sm">Flame⚡</Heading> */}
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
                                <Button onClick={() =>void signIn()} variant="outline" radius="full" size="1">Log In</Button>
                                ) : 
                                <Button onClick={() => void signOut()} variant="outline" radius="full" size="1" className="align-right">Sign Out</Button>
                            }
                        </div>
                    </div>
                </div>
            </div>          
            {/* <ThemeButton /> */}
        </main>
    )
}