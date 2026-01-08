export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-center md:text-left">
          <p className="text-xs md:text-sm text-gray-500">
            © {new Date().getFullYear()} Ironclad Infrastructure LLC. All rights reserved.
          </p>
          <p className="text-xs md:text-sm text-gray-500">
            Secure cloud infrastructure and AI-assisted automation
          </p>
        </div>
      </div>
    </footer>
  );
}
