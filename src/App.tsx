import { useState } from 'react'
import Select, { SelectOption } from './Select'

const options: SelectOption[] = [
  { label: "First", value: "First" },
  { label: "Second", value: "Second" },
  { label: "Third", value: "Third" },
  { label: "Fourth", value: "Fourth" },
  { label: "Fifth", value: "Fifth" },
]


function App() {

  const [value, setValue] = useState<typeof options[0] | undefined>(options[0])
  const [value2, setValue2] = useState<SelectOption[]>([])


  return (
    <div style={{ fontSize: "1.2rem", margin: "10px" }} >
      <Select options={options} value={value} onChange={(v) => setValue(v)} />
      <Select multiple options={options} value={value2} onChange={(v => setValue2(v))} />
    </div>
  )
}

export default App
