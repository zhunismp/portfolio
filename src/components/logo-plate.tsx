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
  plate = true,
}: {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'xl';
  /**
   * Set false to drop the tile and render the mark on its own. Only safe where
   * the logo is known to be transparent, or where its opaque background reading
   * as an icon tile is acceptable — see the rounding note below.
   */
  plate?: boolean;
}) {
  const px = { sm: 18, md: 24, xl: 104 }[size];

  if (!plate) {
    return (
      <Image
        src={src}
        alt={alt}
        width={px}
        height={px}
        /**
         * Corners are rounded on the image itself, not on a wrapper. For a
         * transparent PNG or SVG this is a visual no-op — there is nothing at
         * the corners to clip. For 100x-logo.jpeg, whose near-black background
         * is baked in and cannot be removed, it makes that background read as a
         * deliberate icon tile instead of a stray rectangle. One generic rule,
         * no per-file knowledge, and it still holds for a fourth logo.
         */
        className="shrink-0 rounded-[18%] object-contain"
        style={{ width: px, height: px }}
      />
    );
  }

  const tile = { sm: 'h-7 w-7', md: 'h-11 w-11', xl: 'h-26 w-26' }[size];

  return (
    <span className={`${tile} flex shrink-0 items-center justify-center rounded-xs bg-plate`}>
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
