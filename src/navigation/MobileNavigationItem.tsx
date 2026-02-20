import { useState } from "react"
import type { NavItem } from "./navBar"
import { ChevronDown } from "lucide-react"

export default function MobileNavigationItem({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false)

  if (!item.children) {
    return (
      <a
        href={item.href}
        className="block py-2"
      >
        {item.label}
      </a>
    )
  }

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between w-full py-2"
      >
        {item.label}
        <ChevronDown
          size={16}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="pl-4 border-l space-y-1">
          {item.children.map((child, index) => (
            <MobileNavItem key={index} item={child} />
          ))}
        </div>
      )}
    </div>
  )
}