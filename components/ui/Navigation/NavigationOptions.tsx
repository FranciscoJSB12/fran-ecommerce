import NavigationItem from "./NavigationItem";

interface NavigationOptionProps {
  closeNavigation: () => void;
}

export default function NavigationOptions({
  closeNavigation,
}: NavigationOptionProps) {
  return (
    <ul className="flex flex-col items-center gap-6 py-5">
      <li onClick={closeNavigation}>
        <NavigationItem href="/auth/register" text="Register" />
      </li>
      <li onClick={closeNavigation}>
        <NavigationItem href="/auth/login" text="Log in" />
      </li>
    </ul>
  );
}
