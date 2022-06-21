function Candidates({ children: candidates }) {
  return (
    <div className="border p-2 flex flex-row items-center justify-center flex-wrap">
      {candidates}
    </div>
  )
}

export { Candidates }
