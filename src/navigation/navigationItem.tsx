import type { NavItem } from "./navBar";

export default function NavItemComponent({
  item,
  fromChild,
}: {
  item: NavItem;
  fromChild?: boolean;
}) {
  if (!item.children) {
    return (
      <a
        href={item.href}
        className={`p-4 ml-2 mr-2 w-full block text-center hover:text-blue-600 ${!fromChild && "border-b border-gray-30"}`}
      >
        {item.label}
      </a>
    );
  }

  return (
    <div className={`flex flex-col items-center p-4 ml-2 mr-2 border-b border-gray-30`}>
      <b>{item.label}</b>
      {item.children.map((child, index) => (
        <div key={index}>
          <NavItemComponent item={child} fromChild={true} />
        </div>
      ))}
    </div>
  );
}
