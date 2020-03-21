import React from 'react';
import styled from '@emotion/styled';
import pluralize from 'pluralize';

const OuterBar = styled.div`
  display: flex;
  position: relative;
  height: 20px;
  width: inherit;
  border-radius: 50px;
  background-color: ${props => props.theme.colors.background.votesBar};
  margin-bottom: 25px;
`;

const Filler = styled.div`
  background: ${props => props.theme.colors.text.chosen};
  height: 100%;
  border-radius: 50px;
  transition: width 0.2s ease-in;
  width: ${props => (props.votes ? props.votes : 0)}%;
`;
const Votes = styled.div`
  font-size: 0.7rem;
  color: ${props => props.theme.colors.text.chosen};
  align-self: center;
  margin-left: 5px;
`;

const VotesBar = ({ votes }) => {
  const [voteCount, setVotes] = React.useState(0);

  React.useEffect(() => {
    function countVotes() {
      if (votes) {
        setVotes(Math.floor((votes / 40) * 100));
      }
    }
    countVotes();
  }, [votes]);

  return (
    <OuterBar>
      <Filler votes={voteCount} />
      <Votes>{pluralize('vote', votes, true)}</Votes>
    </OuterBar>
  );
};

export default VotesBar;
