import { add, minus } from '@packages/my-lib';

export default function Home() {
  return (
    <main>
      <p>20 + 10 : {add(20, 10)}</p>
      <p>20 - 10 : {minus(20, 10)}</p>
    </main>
  );
}
