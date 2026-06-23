"use client";

interface SideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SideDrawer({
  isOpen,
  onClose,
}: SideDrawerProps) {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-72 bg-white shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b p-5">
          <h2 className="text-lg font-semibold">Menu</h2>

          <button
            onClick={onClose}
            className="rounded p-2 hover:bg-gray-100"
          >
            ✕
          </button>
        </div>

        <nav className="p-5">
          <ul className="space-y-4">
            <li>
              <button className="w-full text-left font-medium">
                Home
              </button>
            </li>

            <li>
              <button className="w-full text-left font-medium">
                Courses
              </button>
            </li>

            <li>
              <button className="w-full text-left font-medium">
                Progress
              </button>
            </li>

            <li>
              <button className="w-full text-left font-medium">
                Settings
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}