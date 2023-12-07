import Link from "next/link"
import "./layout.css"
export default function Layout
({children})
{
    return(
        <div>
            <ul>
                <li>
                    <Link href="/login">Login main</Link>  
                </li>
                <li>
                <Link href="/login/innerlogin">innerLogin</Link>
                </li>
            </ul>
             {children}
           
           
        </div>
    )
}