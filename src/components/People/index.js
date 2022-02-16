import { useQuery } from "react-query";
import { Container } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import { useSearchParams } from "react-router-dom";
import api from "../../api";
import Person from "../Person";
import Loader from "../Loader";
import Alert from "../Alert";

const fetchPeople = async ({ queryKey }) => {
  const [, page] = queryKey;
  const { data } = await api.get("/people", {
    params: page ? { page } : {},
  });
  return data;
};

export default function People() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") ?? 1;
  const { status, data, error, isFetching } = useQuery(
    ["people", page],
    fetchPeople,
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
        data.results.map((person) => (
          <Person person={person} key={person.name} />
        ))}
      {paginator}
      <Loader open={status === "loading" || isFetching} />
      <Alert
        open={status === "error" || error}
        type="error"
        content="Error while fetching people"
      />
    </Container>
  );
}
