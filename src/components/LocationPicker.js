import { debounce } from 'lodash'
import React, { useState, useCallback, useEffect } from 'react'
import { Button, message, Select as AntSelect } from 'antd'
import styled from 'styled-components'
import { getLocation } from '../utils/location'

const Search = styled.div`
  margin: 30px;
`

const Select = styled(AntSelect)`
  width: 300px;
  text-align: left;
`

const LocationPicker = ({ onLocationChange }) => {
  const [location, setLocation] = useState()
  const [showSearch, setShowSearch] = useState(false)
  const [cities, setCities] = useState([])
  const [results, setResults] = useState([])
  useEffect(() => {
    fetch(process.env.PUBLIC_URL + '/city.list.json')
      .then((resp) => resp.json())
      .then((resp) => setCities(resp))
  }, [])
  const handleCurrentLoc = useCallback(async () => {
    const { coords } = await getLocation().catch((error) => {
      message.error(error.message)
      return Promise.reject(error)
    })
    onLocationChange({ latitude: coords.latitude, longitude: coords.longitude })
    setLocation(`${coords.latitude},${coords.longitude}`)
  }, [onLocationChange, setLocation])

  const handleSearch = useCallback(debounce((value) => {
    if (value) {
      setResults(cities.filter((city) => city.name.indexOf(value) >= 0))
    } else {
      setResults([])
    }
  }, 300), [setResults, cities])

  return (
    <div>
      {location ? (
        'Location: ✅' + location
      ) : showSearch ? (
        <Search>
          <Select
            defaultActiveFirstOption={false}
            showSearch
            notFoundContent={null}
            onSearch={handleSearch}
            placeholder="Search city"
            filterOption={false}
            onChange={(_, selected) => {
              const {lat, lon } = selected.data.coord
              onLocationChange({ latitude: lat, longitude: lon })
              setLocation(`${lat},${lon}`)
            }}
            search
          >
            {results.map((d) => (
              <Select.Option key={d.id} data={d}>{d.name} ({d.country})</Select.Option>
            ))}
          </Select>
          <Button />
        </Search>
      ) : (
        <div>
          <Button onClick={handleCurrentLoc}>Use current Location</Button>
          <Button type="text" onClick={() => setShowSearch(!showSearch)}>
            Search Cities
          </Button>
        </div>
      )}
    </div>
  )
}

export default LocationPicker
