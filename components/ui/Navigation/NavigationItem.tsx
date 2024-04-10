import Link from "next/link";
import { useRouter } from "next/router";

interface NavigationItemProps {
  text: string;
  href: string;
}

const inActivePath = "my-1 py-2 text-center text-gray-700 xlg:text-white block";
const activePath = inActivePath + " bg-blue-600 rounded-lg text-white";

export default function NavigationItem({ text, href }: NavigationItemProps) {
  const { asPath } = useRouter();
  return (
    <Link
      href={href}
      className={`${asPath !== href ? inActivePath : activePath}`}
    >
      {text}
    </Link>
  );
}
