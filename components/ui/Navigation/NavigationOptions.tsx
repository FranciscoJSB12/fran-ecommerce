import NavigationItem from "./NavigationItem";

interface NavigationOptionProps {
  closeNavigation: () => void;
}

export default function NavigationOptions({
  closeNavigation,
}: NavigationOptionProps) {
  return (
    <ul className="w-full flex flex-col items-center py-5">
      <li className="w-11/12" onClick={closeNavigation}>
        <NavigationItem href="/auth/register" text="Register" />
      </li>
      <li className="w-11/12" onClick={closeNavigation}>
        <NavigationItem href="/auth/login" text="Log in" />
      </li>
    </ul>
  );
}
