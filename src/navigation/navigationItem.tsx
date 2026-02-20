import { ChevronDown } from "lucide-react"
import { useState } from "react"
import type { NavItem } from "./navBar"

export default function NavItemComponent({ item, fromChild }: { item: NavItem, fromChild?: boolean   }) {
  const [open, setOpen] = useState(false)

  if (!item.children) {
    return (
      <a
        href={item.href}
        className={`p-4 ml-2 mr-2  ${!fromChild && "border-b border-gray-30"}`}
      >
        {item.label}
      </a>
    )
  }

  return (
    <div
      className={`flex flex-col p-4 ml-2 mr-2 border-b border-gray-30`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center gap-1 hover:text-blue-600">
        {item.label}
        <ChevronDown size={16} />
      </button>

      {open && (
        <div>
          {item.children.map((child, index) => (
            <div key={index}>
              <NavItemComponent item={child} fromChild={true} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}