import { Button } from "antd";
import { Greet } from "../../wailsjs/go/app/App";
import useStore from "../store";

function Home() {
  const { count, setCount } = useStore();

  async function btn1(count: number) {
    let result = await Greet(count);
    setCount(result);
  }

  return (
    <div className="flex flex-col items-center leading-8">
      <h1>Vite + React</h1>
      <div className="place-items-center">
        <Button type="primary" size="large" onClick={() => btn1(count)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/pages/Home.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="font-bold text-base">Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default Home;
