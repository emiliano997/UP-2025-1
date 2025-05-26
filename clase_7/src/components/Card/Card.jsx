export function Card({ img, title, description }) {
  return (
    <div>
      <img src={`/${img}`} alt="" height={65} width={65} />
      <h3>{title}</h3>
      <p> {description}</p>
    </div>
  );
}
