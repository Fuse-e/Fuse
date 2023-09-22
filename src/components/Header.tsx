
import ThemeButton from "./ThemeButton";
import { signIn, signOut, useSession } from "next-auth/react";
import {  Link } from "@radix-ui/themes";
import { Button } from "./ui/Button";


export function Header() {
    const session = useSession()
    const user =session.data?.user
    return (
        <main>
            <div className="justify-center text-center grid gap-4">
                    <div className="flex font-bold items-center justify-center p-3 text-center bg-grey-800 fw-50 mx-auto">
                        <div className="font-bold">
                        <Button
                            type="submit"
                            variant="link"
                            className=""
                        >
                            <Link href="/">Home</Link>
                        </Button>
                        </div>
                        <div className="font-bold">
                        <Button
                            type="submit"
                            variant="link"
                            className=" "
                        >
                            <a href="/about">Dev</a>
                        </Button>
                        </div>
                        <div className="font-bold">
                        <Button
                            type="submit"
                            variant="link"
                            className=""
                        >
                            <a href="/chat">Browse</a>
                        </Button>
                        </div>
                        <ThemeButton />
                    </div>
            </div>        
        </main>
    )
}

