'use client';
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-10">
      <section className="footer sm:footer-horizontal p-10 max-w-7xl mx-auto">
        {/* Branding / About */}
        <aside>
          <Image src='/media/logo.webp' alt='nayems canvas logo' width={200} height={200} className='w-10 md:w-20' />
          <h2 className="text-xl font-bold mb-2">Nayem's Canvas</h2>
          <p className="text-gray-400">
            A personal blog sharing insights, tutorials, and projects on web development, design, and tech.
          </p>
        </aside>

        {/* Navigation */}
        <nav>
          <h6 className="footer-title mb-2 font-semibold">Explore</h6>
          <ul className="flex flex-col gap-2">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/recentposts">Recent Posts</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>

        {/* Social & Contact */}
        <div>
          <h6 className="footer-title mb-2 font-semibold">Connect</h6>
          <div className="flex gap-4 mb-2">
            <a href="https://github.com/nayem-ahmedz" target="_blank" rel="noopener noreferrer" title="GitHub" className="hover:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.467-1.332-5.467-5.931 0-1.31.467-2.381 1.235-3.221-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.289-1.552 3.295-1.23 3.295-1.23.653 1.653.241 2.873.118 3.176.77.84 1.233 1.911 1.233 3.221 0 4.61-2.807 5.628-5.479 5.922.43.372.823 1.103.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .321.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </a>
            <a href="https://linkedin.com/in/nayem-ahmedz" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="hover:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                <path d="M4.98 3.5C4.98 5.43 3.43 7 1.5 7S-2 5.43-2 3.5 0.57 0 2.5 0 4.98 1.57 4.98 3.5zM.02 8h5v16h-5V8zm7.5 0h4.78v2.23h.07c.66-1.25 2.27-2.56 4.67-2.56 5 0 5.92 3.29 5.92 7.57V24h-5v-7.84c0-1.87-.03-4.28-2.61-4.28-2.62 0-3.02 2.05-3.02 4.16V24h-5V8z"/>
              </svg>
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            Email: <a href="mailto:nayemahmedz@proton.me" className="underline">nayemahmedz@proton.me</a>
          </p>
        </div>
      </section>

      {/* Copyright */}
      <div className="text-center py-4 border-t border-gray-700">
        &copy; {new Date().getFullYear()} Nayem's Canvas. All rights reserved.
      </div>
    </footer>
  );
}