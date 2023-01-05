import React from 'react'

const Select = ({ item }) => {
    return (
     <select id={`${item.name}-select`} name={item.name}>
        {item.options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    )
}

export default Select