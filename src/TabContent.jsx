export default function TabContent({ children, onClickAction, isSelected }) {
  return (
    <li>
      <button className={isSelected ? "active" : "undefined" } onClick={onClickAction}>
        {children}
      </button>
    </li>
  );
}
