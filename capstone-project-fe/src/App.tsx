import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Data {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function App() {
  const { data } = useQuery({
    queryFn: async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      return data as Data;
    },
  });
}

export default App;
