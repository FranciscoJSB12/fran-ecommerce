import NavigationItem from "./NavigationItem";

export default function NavigationOptions() {
  return (
    <ul className="flex flex-col items-center gap-6 py-5">
      <li>
        <NavigationItem href="/auth/register" text="Register" />
      </li>
      <li>
        <NavigationItem href="/auth/login" text="Log in" />
      </li>
    </ul>
  );
}
