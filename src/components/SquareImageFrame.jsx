export default function SquareImageFrame({ src, alt }) {
  return (
    <div className="square-image-frame">
      <img className="square-image-frame-image" src={src} alt={alt} />
    </div>
  );
}
