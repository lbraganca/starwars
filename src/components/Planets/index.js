import { useQuery } from "react-query";
import { Container } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import { useSearchParams } from "react-router-dom";
import api from "../../api";
import Planet from "../Planet";
import Loader from "../Loader";
import Alert from "../Alert";

const fetchPlanets = async ({ queryKey }) => {
  const [, page] = queryKey;
  const { data } = await api.get("/planets", {
    params: page ? { page } : {},
  });
  return data;
};

export default function Planets() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") ?? 1;
  //   const { isLoading, isSuccess, error, data } = useQuery(
  //     ["planets", page],
  //     fetchPlanets
  //   );
  const { status, data, error, isFetching } = useQuery(
    ["planets", page],
    fetchPlanets,
    { keepPreviousData: true, staleTime: 5000 }
  );

  const paginator = status === "success" && data.count > 10 && (
    <Pagination
      color="primary"
      count={Math.ceil(data.count / 10)}
      page={parseInt(page)}
      onChange={(e, value) => setSearchParams({ page: value })}
    />
  );

  return (
    <Container>
      {paginator}
      {status === "success" &&
        data.results.map((planet) => (
          <Planet planet={planet} key={planet.name} />
        ))}
      {paginator}
      <Loader open={status === "loading" || isFetching} />
      <Alert
        open={status === "error" || error}
        type="error"
        content="Error while fetching planets"
      />
    </Container>
  );
}
