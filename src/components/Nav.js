import { navLinks } from '../data/content';

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#faf9f7]/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#home" className="font-display font-bold text-base sm:text-lg tracking-tight uppercase text-black">
          Gili Weissberg
        </a>
        <ul className="flex gap-6 sm:gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-zinc-700 hover:text-black transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
