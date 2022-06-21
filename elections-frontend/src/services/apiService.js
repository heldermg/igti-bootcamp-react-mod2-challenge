import { getAllData } from './httpService'

export async function apiGetAllCities() {
  const allCities = await getAllData('/cities')
  return [...allCities].sort((a, b) => a.name.localeCompare(b.name))
}

export async function apiGetAllCandidates() {
  const allCandidates = await getAllData('/candidates')
  return [...allCandidates]
}

export async function apiGetCandidateById(candidateId) {
   return getAllData(`/candidates/${candidateId}`)
 }

export async function apiGetElectionByCity(cityId) {
  const election = await getAllData(`/election?cityId=${cityId}`)
  return [...election]
}
