import { useGetNowPlayingQuery } from "../../shared/movieApi"

export default function NowPlaying() {
  const { data, error, isLoading } = useGetNowPlayingQuery();

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>{error.data || error.message}</h1>;
  console.log(data);
  return (
    <div>

    </div>
  )
}
