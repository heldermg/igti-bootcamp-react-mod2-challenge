import { useEffect, useState } from 'react'

import { Header, Main, SelectInput, Election } from '../components'
import {
  apiGetAllCities,
  apiGetAllCandidates,
  apiGetElectionByCity,
} from '../services/apiService'

export default function ElectionsPage() {
  const [allCities, setAllCities] = useState([])
  const [allCandidates, setAllCandidates] = useState([])
  const [selectedCityId, setSelectedCityId] = useState('')
  const [election, setElection] = useState(null)

  useEffect(() => {
    async function getAllCitiesAndCandidates() {
      try {
        const cities = await apiGetAllCities()
        setAllCities(cities)

        const candidates = await apiGetAllCandidates()
        setAllCandidates(candidates)

        setSelectedCityId(cities[0].id)
      } catch (err) {
        throw Error(err.message)
      }
    }

    getAllCitiesAndCandidates();
  }, [])

  useEffect(() => {
    async function getElectionByCity() {
      try {
        if (selectedCityId) {
          const electionByCityData = await apiGetElectionByCity(selectedCityId)

          const electionData = electionByCityData.map((e) => {
            return {
              ...e,
              city: allCities.find((c) => c.id === e.cityId),
              candidate: allCandidates.find((c) => c.id === e.candidateId),
            }
          })
          setElection(electionData)
        }
      } catch (err) {
        throw Error(err.message)
      }
    }

    getElectionByCity()
  }, [selectedCityId, allCities, allCandidates])

  function handleCityChange(newCityId) {
    setSelectedCityId(newCityId)
  }

  if (!election) {
    return <div>Carregando dados...</div>
  } else {
    return (
      <>
        <Header>react-elections</Header>
        <Main>
          <div className="container mx-auto p-4">
            <div className="flex flex-row items-center justify-center">
              <SelectInput
                labelDescription="Choose a City"
                defaultSelectValue={selectedCityId}
                onSelectChange={handleCityChange}
              >
                {allCities}
              </SelectInput>
            </div>
            <div className="p-6">
              <Election>{election}</Election>
            </div>
          </div>
        </Main>
      </>
    )
  }
}
