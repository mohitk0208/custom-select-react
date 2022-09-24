import { useEffect, useState } from "react"
import { SelectOption, SelectProps } from "."
import styles from "./Select.module.css"


export default function Select({ multiple, value, options, onChange }: SelectProps) {

  const [isOpen, setIsOpen] = useState(false)
  const [highlightedIndex, setHighlightedIndex] = useState(0)

  function clearOptions() {
    multiple ? onChange([]) : onChange()
  }

  function selectOption(option: SelectOption) {
    if (multiple) {
      if (value.includes(option)) {
        onChange(value.filter(o => o !== option))
      } else {
        onChange([...value, option])
      }
    }
    else {
      if (option !== value) onChange(option)
    }


  }


  function isOptionSelected(option: SelectOption) {
    return multiple ? value.includes(option) : value === option
  }

  function isOptionHighlighted(index: number) {
    return highlightedIndex === index
  }

  useEffect(() => {
    if (isOpen) setHighlightedIndex(0)
  }, [isOpen])



  return (
    <div tabIndex={0}
      onClick={() => setIsOpen(prev => !prev)}
      onBlur={() => setIsOpen(false)}
      className={styles.container}
    >
      <span className={styles.label} >
        {
          multiple ? (
            value.map(v => (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  selectOption(v)
                }}
                className={styles["option-badge"]}
              >
                <span>
                  {v.label}
                </span>

                <span className={styles["remove-btn"]} >
                  &times;
                </span>
              </button>
            ))
          ) :
            value?.label
        }
      </span>
      <button
        onClick={(e) => {
          e.stopPropagation()
          clearOptions()
        }}
        className={styles["close-btn"]}
      >
        &times;
      </button>
      <div className={styles.divider} ></div>
      <div className={styles.dropdown} ></div>

      <ul className={`${styles["options-container"]} ${isOpen && styles.show}`} >
        {options.map((option, index) => (
          <li
            onClick={(e) => {
              e.stopPropagation()
              selectOption(option)
              if (!multiple) setIsOpen(false)
            }}
            onMouseEnter={() => setHighlightedIndex(index)}

            className={`${styles.option} ${isOptionSelected(option) && styles.selected} ${isOptionHighlighted(index) && styles.highlighted}`} >
            {option.label}
          </li>
        ))}
      </ul>

    </div >
  )
}
