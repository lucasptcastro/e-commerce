import "../styles/global.css";
import { CarProvider } from "../context/CarContext";

export default function App({ Component, pageProps }) {
  return (
    <CarProvider>
      <Component {...pageProps} />
    </CarProvider>
  );
}
