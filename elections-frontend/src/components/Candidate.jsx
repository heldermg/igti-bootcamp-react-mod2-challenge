import { numberFormat, percentNumberFormat } from '../util/util'

function Candidate({ children: candidate }) {
  const { name, username, votes, percent, elected } = candidate

  let electedStyle = { color: 'rgb(249 115 22)' }
  if (elected) {
    electedStyle = { color: 'rgb(21 128 61)' }
  }

  return (
    <div
      className={`shadow-lg p-4 m-2 w-72 h-72
                  flex flex-col items-center justify-center space-y-4`}
    >
      <div className="flex flex-row items-center justify-between w-full py-4">
        <img
          src={`/img/${username}.png`}
          alt={`${name}`}
          className="rounded-full w-20"
        />
        <div className="flex flex-col w-full text-right">
          <span className="text-2xl font-semibold" style={electedStyle}>
            {percentNumberFormat.format(percent)}
          </span>
          <span>{numberFormat.format(votes)} votes</span>
        </div>
      </div>
      <div className="flex flex-row w-full items-center justify-center py-4">
        <span className="text-3xl">{name}</span>
      </div>
      <div className="flex flex-row w-full items-center justify-center">
        <span className="text-xl font-semibold" style={electedStyle}>
          {elected ? 'Elected' : 'Not Elected'}
        </span>
      </div>
    </div>
  )
}

export { Candidate }