import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 py-8 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex items-center gap-2 text-gray-400">
            <span>Built with React, Tailwind CSS</span>
            <Heart
              className="text-red-500 fill-red-500"
              size={16}
            />
            <span>Motion</span>
          </div>
          <p className="text-gray-500 text-sm">
            © {currentYear} Ritadj Zekkour | Flutter Developer
          </p>
        </div>
      </div>
    </footer>
  );
}