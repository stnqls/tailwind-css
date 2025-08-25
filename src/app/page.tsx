import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Link href={'/button'}>Button</Link>
        <br />
        <br />

        <h1 className="heading1_bold --color-midnight">Heading 1</h1>
        <h2 className="heading2_bold">Heading 2</h2>
        <p className="body1_regular">Body 1</p>
        <p className="body2_regular">Body 2</p>
      </main>
    </div>
  );
}
