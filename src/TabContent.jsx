export default function TabContent({ children, onClickAction}) {
  return (
    <li>
      <button onClick={onClickAction}>{children}</button>
    </li>
  );
}
