import Link from "next/link";

interface NavigationItemProps {
  text: string;
  href: string;
}

export default function NavigationItem({ text, href }: NavigationItemProps) {
  return (
    <Link href={href} className="text-gray-700 xlg:text-white block">
      {text}
    </Link>
  );
}
