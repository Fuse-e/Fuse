
// import ThemeButton from "./ThemeButton";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import NewButton from "./ui/NewButton";
import { Logo } from "public/icons/Logo";
import { Container } from "./container";
import ThemeButton from "./ThemeButton";


export function Header() {
    const session = useSession()
    const user =session.data?.user
    return (
        <main>
                <header className="fixed top-0 w-full left-0 border-b border-white-ao8 backdrop-[12px]">
                    <Container className="flex h-[var(--navigation-height)]">
                        <Link className="flex items-center text-md" href="/">   
                            <Logo className="w-[1.8rem] h-[1.8rem] mr-4"/> Fuse 
                        </Link>
                        <nav className="h-full">
                            <ul className="flex items-center h-full [&_a]:text-sm [&_a:hover]:text-grey [&_a]:transition-colors [&_li]:ml-6">
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

                        <ThemeButton />


                        <div className="ml-auto h-full flex items-center">
                            <NewButton  href={""}>login in</NewButton>
                            {/* <ul>
                                {user != null &&<li>
                                        <Link href={`/profiles/${user.id}`}>Profile</Link>
                                </li>}

                                <div className="justify-center text-center">  
                                {user == null ? (
                                    <NewButton onClick={() =>void signIn()} className="test-sm mr-6">Log In</NewButton>
                                    ) : 
                                    <NewButton onClick={() => void signOut()}>Sign Out</NewButton>
                                }
                                </div> 
                            </ul> */}
                        </div>
                    </Container>
                </header>
        </main>
    )
}

