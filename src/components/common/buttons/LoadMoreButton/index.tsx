import { StyledLoadButton } from "./styled"
import { useSetRecoilState } from "recoil";
import { ticketsPage } from "../../../../atoms/tickets";

const LoadMoreButton = () => {
  const setNextPage = useSetRecoilState(ticketsPage);
  return (
    <StyledLoadButton onClick={() => setNextPage(state => state + 1)}>Показать ещё 5 билетов!</StyledLoadButton>
  )
}

export default LoadMoreButton;