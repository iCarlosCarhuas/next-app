import Link from 'next/link'

export default function NavBar() {
	return(
		<div>
			<h1>Navbar</h1>
			<ul>
				<li>
          			<Link href="/">Home</Link>
        		</li>
        		<li>
          			<Link  href="/About">About</Link>
        		</li>
        		<li>
          			<Link  href="/Services">Services</Link>
        		</li>
        		<li>
          			<Link  href="/Users">Users</Link>
        		</li>
			</ul>
		</div>
		)
}