function describe_city(city:string ,country:string='default country'){
    console.log(` ${city} is in  ${country}`) ;
  }
  describe_city('karachi', 'Pakistan');
  describe_city('Tokyo', 'japan');

  describe_city('Paris','france');