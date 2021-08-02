import React from 'react'
import { FormControl, FormHelperText, InputLabel, NativeSelect } from '@material-ui/core'
import '../styles/style.css'

export default function CountrySelector({value, handleOnChange, countries}) {
    return (
      <>
        <FormControl >
          <InputLabel htmlFor="" shrink >Quoc gia</InputLabel>
          <NativeSelect
          value={value}
          onChange={handleOnChange}
          inputProps={{
            name: 'country',
            id: 'country-selector'
          }} 
          > 
          {
            countries.map((country) =>(
              <option key={country.ISO2} value={country.ISO2.toLowerCase()}>
                {country.Country}
              </option>
            ))
          }
          </NativeSelect>
          <FormHelperText>Lựa chọn quốc gia</FormHelperText>
        </FormControl>
      </>
    )
}
