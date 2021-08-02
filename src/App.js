import { Typography } from '@material-ui/core';
import { sortBy } from 'lodash';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { getCOuntries, getReportByCountry } from './api/Api';
import './App.css';
import CountrySelector from './components/CountrySelector/CountrySelector';
import Highlight from './components/Highlight/Highlight';
import Summary from './components/Summary/Summary';
import 'moment/locale/vi';
import './components/styles/style.css';


function App() {

  const [countries, setCountries] = useState([]);
  const [selectedCountryId, setSelectedCountryId] = useState('');
  const [report, setReport] = useState([])
  
  useEffect(() => {
    getCOuntries()
      .then(res => {

        const countries = sortBy(res.data, 'Country')
        setCountries(countries);
        setSelectedCountryId('vn');
      })
  }, []);

  const handleOnChange = (e) => {
    setSelectedCountryId(e.target.value);
    
  }

  useEffect(() =>{
    if(selectedCountryId){
    const { Slug } = countries.find(country => country.ISO2.toLowerCase() === selectedCountryId)
    getReportByCountry(Slug)
      .then(res =>
        {
          // xoa data cuoi ngay hien tai
          res.data.pop();
          setReport(res.data)
        })
      }
  },[countries, selectedCountryId])

  return (
    <div className="App">
      <Typography className="title">
        Số liệu COVID-19
      </Typography>
      <Typography className="time">
        {moment().locale('vi').format('LLLL')}
      </Typography>
      <CountrySelector value={selectedCountryId} handleOnChange={handleOnChange} countries={countries} />
      <Highlight report={report} />
      <Summary countryId={selectedCountryId} report={report} />
    </div>
  );
}

export default App;
