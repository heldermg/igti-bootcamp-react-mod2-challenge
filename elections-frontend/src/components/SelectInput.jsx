import { getNewId } from '../services/idService'

function SelectInput({
  labelDescription = 'Descrição do label:',
  defaultSelectValue = '',
  children: options = [],
  onSelectChange = null,
  selectId = getNewId(),
}) {
  function handleSelectChange({ currentTarget }) {
    if (onSelectChange) {
      const newCityId = currentTarget.value
      onSelectChange(newCityId)
    }
  }

  return (
    <div className="flex flex-col my-4">
      <label className="text-xl mb-1" htmlFor={selectId}>
        {labelDescription}
      </label>

      <select
        id={selectId}
        className="border p-1"
        value={defaultSelectValue}
        onChange={handleSelectChange}
      >
        {options.map((option) => {
          const { id, name } = option
          return (
            <option key={id} value={id}>
              {name}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export { SelectInput }
