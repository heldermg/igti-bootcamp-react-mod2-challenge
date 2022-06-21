import { numberFormat } from '../util/util'
import { Candidate } from './Candidate'
import { Candidates } from './Candidates'

function Election({ children: election }) {
  const { name, votingPopulation, absence, presence } = election[0].city
  const totalCandidates = election.length

  election = election
    .map((e) => {
      return {
        ...e,
        candidate: {
          ...e.candidate,
          percent: (e.votes / presence).toFixed(4),
          elected: false,
          votes: e.votes,
        },
      }
    })
    .sort((a, b) => {
      return b.candidate.percent - a.candidate.percent
    })

  election[0].candidate.elected = true

  return (
    <div className="flex flex-col items-center justify-center border-2 space-y-2">
      <div className="p-2">
        <span className="font-bold text-2xl">Election in {name}</span>
      </div>
      <div className="flex flex-row items-center space-x-5">
        <span className="font-bold text-xl p-2">Total voters:</span>
        {numberFormat.format(votingPopulation)}
        <span className="font-bold text-xl p-2">Absence:</span>
        {numberFormat.format(absence)}
        <span className="font-bold text-xl p-2">Presence:</span>
        {numberFormat.format(presence)}
      </div>
      <div className="flex flex-row items-center space-x-5">
        <span className="font-semibold text-lg">
          {totalCandidates} candidates
        </span>
      </div>
      <Candidates>
        {election.map(({ id, candidate }) => {
          return <Candidate key={id}>{candidate}</Candidate>
        })}
      </Candidates>
    </div>
  )
}

export { Election }
