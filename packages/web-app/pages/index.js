import foo from "@scoped/foo";
import Bar from "@scoped/bar";

export default function Home() {
  return (
    <div>
      Imported modules from another workspace:
      <pre>{foo}</pre>
      <Bar />
    </div>
  );
}
