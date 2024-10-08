import { useState, useEffect } from "react";
import Header from "./components/Header";
import Result from "./components/Result";
import EnterUpperLimit from "./components/EnterUpperLimit";

// import { ProductListing, ProductEntry, ProductId } from "./types";
import FourOhFour from "./components/FourOhFour";
import { ErrorBoundary } from "react-error-boundary";
import { ZodError } from "zod";
import { getMedianPrimes } from "./services/medianPrime";

const App = () => {
  const [error, setError] = useState<boolean>(false);
  const [medianPrimes, setMedianPrimes] = useState<number[]>([]);
  const [upperLimit, setUpperLimit] = useState<number>(10);

  const fetchMedianPrimes = async () => {
    try {
      const data = await getMedianPrimes(upperLimit);
      console.log("fetchMedianPrimes data = ", data);
      setMedianPrimes(data.medianPrimes);
    } catch (error) {
      if (error instanceof ZodError) {
        console.log(
          "Zod Error: Unexpected Data Returned from API Call - fetchMedianPrimes",
        );
      }
      setError(true);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMedianPrimes();
  }, [upperLimit]);

  if (error) {
    return <FourOhFour />;
  }

  return (
    <ErrorBoundary fallback={<FourOhFour />}>
      <div id="app" className="min-h-screen flex flex-col">
        <Header />

        {/* Main Content */}
        <main className="flex-grow flex flex-col items-center justify-center px-6">
          {/* Input Field */}
          <EnterUpperLimit
            setUpperLimit={setUpperLimit}
            upperLimit={upperLimit}
          />
          <Result medianPrimesArray={medianPrimes} upperLimit={upperLimit} />
        </main>
      </div>
    </ErrorBoundary>
  );
};

export default App;
