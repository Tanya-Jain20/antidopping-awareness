export default function InfoBox({ title, children }) {
  return (
    <div className="info-box">
      <h3>{title}</h3>
      {children}
    </div>
  );
}