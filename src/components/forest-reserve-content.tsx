import Image from "next/image";

const landscapes = [
  ["gallery-img-a.jpg", "Main pool", "Main pool at Waterside Residences — The Forest Reserve", 630, 350],
  ["gallery-img-b.jpg", "Balcony view", "Balcony view at The Forest Reserve", 630, 350],
  ["gallery-img-c.jpg", "Yoga deck", "Yoga deck at The Forest Reserve", 660, 730],
  ["gallery-img-d.jpg", "Kids stream", "Kids stream at The Forest Reserve", 630, 350],
  ["gallery-img-e.jpg", "Source fountain", "Source fountain at The Forest Reserve", 630, 350],
  ["gallery-img-f.jpg", "Resting space", "Forest resting space at The Forest Reserve", 660, 730],
] as const;

const plans = [
  ["Waterside-Residences-4LDKS-Typical-1.jpg", "Forest Reserve A, 4 LDK + servant, typical floor"],
  ["Waterside-Residences-3LDK-Refuge.jpg", "Forest Reserve A, 3 LDK refuge"],
  ["Waterside-Residences-Penthouse-A-Lower-Level.jpg", "Forest Reserve A, penthouse A, lower level"],
  ["Waterside-Residences-Penthouse-A-Upper-Level.jpg", "Forest Reserve A, penthouse A, upper level"],
  ["Waterside-Residences-3LDKS-Typical.jpg", "Forest Reserve B, 3 LDK + servant, typical floor"],
  ["Waterside-Residences-3LDKS-A-Typical.jpg", "Forest Reserve II, 3 LDK + servant A, typical floor"],
  ["The-Forest-Reserve-II-Pentouse-A-Lower.jpg", "Forest Reserve II, penthouse A, lower level"],
  ["The-Forest-Reserve-II-Pentouse-A-Upper.jpg", "Forest Reserve II, penthouse A, upper level"],
] as const;

export function ForestReserveContent({ name }: { name: string }) {
  return (
    <>
      <section className="border-y border-border/70 bg-white/70">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
              What does the {name} arrival look like?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Krisumi shows a timber-screened drop-off, a single residential
              tower, and a podium garden between the towers.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <figure className="sm:col-span-2">
              <Image
                src="/projects/forest-reserve/home-design-img.jpg"
                alt="Evening drop-off at Waterside Residences — The Forest Reserve"
                width={1320}
                height={650}
                className="h-72 w-full rounded-xl object-cover sm:h-96"
              />
              <figcaption className="mt-2 text-sm font-medium text-ink">
                Drop-off
              </figcaption>
            </figure>
            <figure>
              <Image
                src="/projects/forest-reserve/home-design-img-2.jpg"
                alt="Second view of The Forest Reserve drop-off"
                width={1320}
                height={650}
                className="h-64 w-full rounded-xl object-cover"
              />
              <figcaption className="mt-2 text-sm font-medium text-ink">
                Arrival court
              </figcaption>
            </figure>
            <figure>
              <Image
                src="/projects/forest-reserve/Group-80-1.png"
                alt="Forest Reserve tower above the landscape"
                width={569}
                height={500}
                className="h-64 w-full rounded-xl object-cover"
              />
              <figcaption className="mt-2 text-sm font-medium text-ink">
                Tower
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
            What landscapes and amenities does {name} publish?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Krisumi publishes a main pool, balcony views, a yoga deck, a kids
            stream, a source fountain, and a forest resting space, plus a pool
            bar, gazebo, waterscape, multipurpose hall, amphitheatre, kids
            water park, mist pond, gym, and lap pool.
          </p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {landscapes.map(([file, title, alt, width, height]) => (
            <figure key={file}>
              <Image
                src={`/projects/forest-reserve/${file}`}
                alt={alt}
                width={width}
                height={height}
                className="h-48 w-full rounded-xl object-cover"
              />
              <figcaption className="mt-2 text-sm font-medium text-ink">
                {title}
              </figcaption>
            </figure>
          ))}
        </div>
        <figure className="mt-4">
          <Image
            src="/projects/forest-reserve/speci-img-b.jpg"
            alt="Podium garden and pool between Forest Reserve towers"
            width={569}
            height={494}
            className="h-auto w-full rounded-xl object-cover sm:h-96"
          />
          <figcaption className="mt-2 text-sm font-medium text-ink">
            Podium garden
          </figcaption>
        </figure>
      </section>

      <section className="border-y border-border/70 bg-white/70">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
              Which unit plans does Krisumi publish for {name}?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              The Forest Reserve page publishes plans for Forest Reserve A,
              Forest Reserve B, and Forest Reserve II: 3 LDK, 3 LDK + servant,
              4 LDK + servant, and penthouses.
            </p>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {plans.map(([file, title]) => (
              <figure key={file}>
                <figcaption className="text-sm font-medium text-ink">
                  {title}
                </figcaption>
                <Image
                  src={`/projects/forest-reserve/${file}`}
                  alt={`Krisumi floor plan, ${title}`}
                  width={515}
                  height={410}
                  className="mt-3 h-auto w-full rounded-xl border border-border/80 bg-white"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
            Where does {name} sit, and what is the price?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Krisumi places The Forest Reserve in Sector 36A and does not
            publish a price list on this project page. Spandaman confirms the
            current figure for the home you shortlist.
          </p>
        </div>
        <figure className="mt-8">
          <Image
            src="/projects/forest-reserve/map-img-1.png"
            alt="Location map for Waterside Residences — The Forest Reserve"
            width={2036}
            height={1146}
            className="h-auto w-full rounded-xl border border-border/80 bg-white"
          />
        </figure>
      </section>
    </>
  );
}
