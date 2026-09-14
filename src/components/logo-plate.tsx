import Image from 'next/image';

/**
 * A logo centred on a light tile.
 *
 * Six-plus of the 28 logos in /public are black or near-black — next-logo.svg
 * carries no fill attribute at all, argo is #010101, go is #231F20, scala is
 * #390d09, kafka is black, and 100x-logo.jpeg is a JPEG with a baked opaque
 * background that cannot be made transparent. On the dark scheme's #000 canvas
 * they would vanish.
 *
 * The plate stays light in BOTH schemes (dimmed to #dedee3 in dark so a small
 * tile doesn't glare against black). That is deterministic across all 28 assets
 * with zero per-file knowledge, it makes the JPEG's baked background read as
 * intentional, and it survives adding a 29th logo. It is also a real Apple
 * pattern — App Store icon tiles, Settings row glyphs.
 */
export function LogoPlate({
  src,
  alt,
  size = 'md',
}: {
  src: string;
  alt: string;
  size?: 'sm' | 'md';
}) {
  const plate = size === 'md' ? 'h-11 w-11' : 'h-7 w-7';
  const px = size === 'md' ? 24 : 18;

  return (
    <span
      className={`${plate} flex shrink-0 items-center justify-center rounded-xs bg-plate`}
    >
      <Image
        src={src}
        alt={alt}
        width={px}
        height={px}
        className="object-contain"
        style={{ width: px, height: px }}
      />
    </span>
  );
}
