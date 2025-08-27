import { ClientComponent } from "./ClientComponent";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  const props = { key : process.env.SECRET };
  
  return <ClientComponent {...props}/>;
}
