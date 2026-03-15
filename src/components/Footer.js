import { contact } from '../data/content';

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-zinc-200/80">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-display font-bold text-zinc-900">Gili Weissberg</span>
        <a href={`mailto:${contact.email}`} className="text-zinc-600 hover:text-zinc-900 transition-colors">
          {contact.email}
        </a>
        <span className="text-sm text-zinc-500">© {new Date().getFullYear()} · Made with care</span>
      </div>
    </footer>
  );
}
