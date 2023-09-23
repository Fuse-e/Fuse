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
yt7to7to6fotf


                            {/* <div className="justify-center text-center">  
                            {user == null ? (
                                <Button onClick={() =>void signIn()}>Log In</Button>
                                ) : 
                                <Button onClick={() => void signOut()}>Sign Out</Button>
                            }
                        </div> */}