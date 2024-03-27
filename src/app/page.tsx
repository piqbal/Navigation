"client side"
import Link from "next/link";



export default function Home() {
  
  return (
    
    <main><div>
     <h1><b>HomePage</b></h1>

     <Link href="/Login">Go to Login</Link>
     <br></br>
     <Link href="/About">Go to About</Link>
    
     </div>
    </main>
  );
}
