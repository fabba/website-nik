import MobileNavigationItem from "./MobileNavigationItem";
import NavItemComponent from "./navigationItem";

export type NavItem = {
  label: string;
  href?: string;
  children?: NavItem[];
};

type NavbarProps = {
  items: NavItem[];
};

export default function Navbar({ items }: NavbarProps) {
  return (
    <>
      <nav className="flex-20 flex-col bg-emerald-50 items-center hidden md:flex space-x-6">
        {/* Desktop Menu */}
        <div className="">
          <a
            href={`${import.meta.env.BASE_URL}#/`}
            className="w-full block text-center p-4"
          >
            <img
              src={`${import.meta.env.BASE_URL}home/Nik_hompage.png`}
              alt="Nik homepage"
              className="w-full max-w-30 mx-auto object-contain"
            />
          </a>
          {items.map((item, index) => (
            <NavItemComponent key={index} item={item} />
          ))}
        </div>
      </nav>

      <nav className="flex flex-row items-start md:hidden bg-emerald-50 p-4 space-x-6">
        {items.map((item, index) => (
          <MobileNavigationItem
            key={index}
            item={item}
          />
        ))}
      </nav>
    </>
  );
}
