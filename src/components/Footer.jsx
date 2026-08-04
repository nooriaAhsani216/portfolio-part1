import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-700 bg-card/40">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row">
        <p className="text-sm dark:text-slate-400 text-white">
          © {new Date().getFullYear()} Nooria. All rights reserved.
        </p>
        <SocialLinks />
      </div>
    </footer>
  );
}