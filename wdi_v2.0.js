var header = new Array();
var dataRow = new Array();
var jsonText;
fs=require('fs');

var continents = {

  /* AFRICA */
  'Algeria' : 'AFRICA',
  'Angola' : 'AFRICA',
  'Benin' : 'AFRICA',
  'Botswana' : 'AFRICA',
  'Burkina' : 'AFRICA',
  'Burundi' : 'AFRICA',
  'Cameroon' : 'AFRICA',
  'Cape Verde' : 'AFRICA',
  'Central African Republic' : 'AFRICA',
  'Chad' : 'AFRICA',
  'Comoros' : 'AFRICA',
  'Congo' : 'AFRICA',
  'Democratic Republic of' : 'AFRICA',
  'Djibouti' : 'AFRICA',
  'Egypt' : 'AFRICA',
  'Equatorial Guinea' : 'AFRICA',
  'Eritrea' : 'AFRICA',
  'Ethiopia' : 'AFRICA',
  'Gabon' : 'AFRICA',
  'Gambia' : 'AFRICA',
  'Ghana' : 'AFRICA',
  'Guinea' : 'AFRICA',
  'Guinea-Bissau' : 'AFRICA',
  'Ivory Coast' : 'AFRICA',
  'Kenya' : 'AFRICA',
  'Lesotho' : 'AFRICA',
  'Liberia' : 'AFRICA',
  'Libya' : 'AFRICA',
  'Madagascar' : 'AFRICA',
  'Malawi' : 'AFRICA',
  'Mali' : 'AFRICA',
  'Mauritania' : 'AFRICA',
  'Mauritius' : 'AFRICA',
  'Morocco' : 'AFRICA',
  'Mozambique' : 'AFRICA',
  'Namibia' : 'AFRICA',
  'Niger' : 'AFRICA',
  'Nigeria' : 'AFRICA',
  'Rwanda' : 'AFRICA',
  'Sao Tome and Principe' : 'AFRICA',
  'Senegal' : 'AFRICA',
  'Seychelles' : 'AFRICA',
  'Sierra Leone' : 'AFRICA',
  'Somalia' : 'AFRICA',
  'South Africa' : 'AFRICA',
  'South Sudan' : 'AFRICA',
  'Sudan' : 'AFRICA',
  'Swaziland' : 'AFRICA',
  'Tanzania' : 'AFRICA',
  'Togo' : 'AFRICA',
  'Tunisia' : 'AFRICA',
  'Uganda' : 'AFRICA',
  'Zambia' : 'AFRICA',
  'Zimbabwe' : 'AFRICA',

  /* ASIA */
  'Afghanistan' : 'ASIA',
  'Bahrain' : 'ASIA',
  'Bangladesh' : 'ASIA',
  'Bhutan' : 'ASIA',
  'Brunei' : 'ASIA',
  'Burma (Myanmar)' : 'ASIA',
  'Cambodia' : 'ASIA',
  'China' : 'ASIA',
  'East Timor' : 'ASIA',
  'India' : 'ASIA',
  'Indonesia' : 'ASIA',
  'Iran' : 'ASIA',
  'Iraq' : 'ASIA',
  'Israel' : 'ASIA',
  'Japan' : 'ASIA',
  'Jordan' : 'ASIA',
  'Kazakhstan' : 'ASIA',
  'North Korea' : 'ASIA',
  'South Korea' : 'ASIA',
  'Kuwait' : 'ASIA',
  'Kyrgyzstan' : 'ASIA',
  'Laos' : 'ASIA',
  'Lebanon' : 'ASIA',
  'Malaysia' : 'ASIA',
  'Maldives' : 'ASIA',
  'Mongolia' : 'ASIA',
  'Nepal' : 'ASIA',
  'Oman' : 'ASIA',
  'Pakistan' : 'ASIA',
  'Philippines' : 'ASIA',
  'Qatar' : 'ASIA',
  'Russian Federation' : 'ASIA',
  'Saudi Arabia' : 'ASIA',
  'Singapore' : 'ASIA',
  'Sri Lanka' : 'ASIA',
  'Syria' : 'ASIA',
  'Tajikistan' : 'ASIA',
  'Thailand' : 'ASIA',
  'Turkey' : 'ASIA',
  'Turkmenistan' : 'ASIA',
  'United Arab Emirates' : 'ASIA',
  'Uzbekistan' : 'ASIA',
  'Vietnam' : 'ASIA',
  'Yemen' : 'ASIA',

  /* EUROPE */
  'Albania' : 'EUROPE',
  'Andorra' : 'EUROPE',
  'Armenia' : 'EUROPE',
  'Austria' : 'EUROPE',
  'Azerbaijan' : 'EUROPE',
  'Belarus' : 'EUROPE',
  'Belgium' : 'EUROPE',
  'Bosnia and Herzegovina' : 'EUROPE',
  'Bulgaria' : 'EUROPE',
  'Croatia' : 'EUROPE',
  'Cyprus' : 'EUROPE',
  'Czech Republic' : 'EUROPE',
  'Denmark' : 'EUROPE',
  'Estonia' : 'EUROPE',
  'Finland' : 'EUROPE',
  'France' : 'EUROPE',
  'Georgia' : 'EUROPE',
  'Germany' : 'EUROPE',
  'Greece' : 'EUROPE',
  'Hungary' : 'EUROPE',
  'Iceland' : 'EUROPE',
  'Ireland' : 'EUROPE',
  'Italy' : 'EUROPE',
  'Latvia' : 'EUROPE',
  'Liechtenstein' : 'EUROPE',
  'Lithuania' : 'EUROPE',
  'Luxembourg' : 'EUROPE',
  'Macedonia' : 'EUROPE',
  'Malta' : 'EUROPE',
  'Moldova' : 'EUROPE',
  'Monaco' : 'EUROPE',
  'Montenegro' : 'EUROPE',
  'Netherlands' : 'EUROPE',
  'Norway' : 'EUROPE',
  'Poland' : 'EUROPE',
  'Portugal' : 'EUROPE',
  'Romania' : 'EUROPE',
  'San Marino' : 'EUROPE',
  'Serbia' : 'EUROPE',
  'Slovakia' : 'EUROPE',
  'Slovenia' : 'EUROPE',
  'Spain' : 'EUROPE',
  'Sweden' : 'EUROPE',
  'Switzerland' : 'EUROPE',
  'Ukraine' : 'EUROPE',
  'United Kingdom' : 'EUROPE',
  'Vatican City' : 'EUROPE',

  /* N_AMERICA */
  'Antigua and Barbuda' : 'N_AMERICA',
  'Bahamas' : 'N_AMERICA',
  'Barbados' : 'N_AMERICA',
  'Belize' : 'N_AMERICA',
  'Canada' : 'N_AMERICA',
  'Costa Rica' : 'N_AMERICA',
  'Cuba' : 'N_AMERICA',
  'Dominica' : 'N_AMERICA',
  'Dominican Republic' : 'N_AMERICA',
  'El Salvador' : 'N_AMERICA',
  'Grenada' : 'N_AMERICA',
  'Guatemala' : 'N_AMERICA',
  'Haiti' : 'N_AMERICA',
  'Honduras' : 'N_AMERICA',
  'Jamaica' : 'N_AMERICA',
  'Mexico' : 'N_AMERICA',
  'Nicaragua' : 'N_AMERICA',
  'Panama' : 'N_AMERICA',
  'Saint Kitts and Nevis' : 'N_AMERICA',
  'Saint Lucia' : 'N_AMERICA',
  'Saint Vincent and the Grenadines' : 'N_AMERICA',
  'Trinidad and Tobago' : 'N_AMERICA',
  'United States' : 'N_AMERICA',

  /* AUSTRALIA */
  'Australia' : 'AUSTRALIA',
  'Fiji' : 'AUSTRALIA',
  'Kiribati' : 'AUSTRALIA',
  'Marshall Islands' : 'AUSTRALIA',
  'Micronesia' : 'AUSTRALIA',
  'Nauru' : 'AUSTRALIA',
  'New Zealand' : 'AUSTRALIA',
  'Palau' : 'AUSTRALIA',
  'Papua New Guinea' : 'AUSTRALIA',
  'Samoa' : 'AUSTRALIA',
  'Solomon Islands' : 'AUSTRALIA',
  'Tonga' : 'AUSTRALIA',
  'Tuvalu' : 'AUSTRALIA',
  'Vanuatu' : 'AUSTRALIA',

  /* S_AMERICA */
  'Argentina' : 'S_AMERICA',
  'Bolivia' : 'S_AMERICA',
  'Brazil' : 'S_AMERICA',
  'Chile' : 'S_AMERICA',
  'Colombia' : 'S_AMERICA',
  'Ecuador' : 'S_AMERICA',
  'Guyana' : 'S_AMERICA',
  'Paraguay' : 'S_AMERICA',
  'Peru' : 'S_AMERICA',
  'Suriname' : 'S_AMERICA',
  'Uruguay' : 'S_AMERICA',
  'Venezuela' : 'S_AMERICA'
};

function processFile() {

          var rd = require('readline').createInterface({
              input: require('fs').createReadStream('data/WDI_Data_All.csv')
          });

          var csvrow=require('csvrow');

          var headerReadIndc = true;
          var lineCount=0;

          console.log("\n\nReading the file...\n");

          rd.on('line', function(line) {

              var arr = csvrow.parse(line);
              var lineLength = arr.length;

              if(headerReadIndc){
                for(i in arr)
                header.push(arr[i]);

                headerReadIndc=false;
              }
              else{if (arr[2].toLowerCase().indexOf("arable land (")!=-1) {
                      dataRow.push(arr);
                  }
                }
              }).on('close', function() {
              console.log('Closing the data file. ' + dataRow.length+' lines read into memory excluding the header.\n');
              console.log(dataRow.length);
              writeOutput();
          });
}

function writeOutput(argument) {

  var rsltIndLandArea=new Array();
  var rsltIndLandHectPP=new Array();
  var rsltIndLandHectares=new Array();
  var rsltAfricaLandArea=new Array();
  var resultContinent=new Array();

  var count=0;
  var indiaCnt=0;

  var africaCnt=0;

  var yearsAsia={};
  var yearsAfrica={};
  var yearsEurope={};
  var yearsAustralia={};
  var yearsNAmerica={};
  var yearsSAmerica={};

  for(var i=4;i<header.length;i++)
  {
    yearsAsia[header[i]]=0.0;
    yearsAfrica[header[i]]=0.0;
    yearsEurope[header[i]]=0.0;
    yearsAustralia[header[i]]=0.0;
    yearsNAmerica[header[i]]=0.0;
    yearsSAmerica[header[i]]=0.0;
  }
  //console.log(years);

  var aggr={
    'ASIA' : yearsAsia,
    'AFRICA' : yearsAfrica,
    'EUROPE' : yearsEurope,
    'AUSTRALIA' : yearsAustralia,
    'N_AMERICA' : yearsNAmerica,
    'S_AMERICA' : yearsSAmerica};

  try{
      for(i in dataRow)
      {
        var JSONObj={};

              if (continents[dataRow[i][0]]==='AFRICA'||dataRow[i][0].toLowerCase()=='india') {

                for(j=4;j<header.length;j++)
                {
                  var pair=new Object();

                            if(continents[dataRow[i][0]]==='AFRICA'){
                              pair["Year"]=header[j];
                              pair["Value"]=parseFloat(dataRow[i][j]);
                            }
                            if(dataRow[i][j]!==''){
                              pair["Year"]=header[j];
                              pair["Value"]=parseFloat(dataRow[i][j]);
                            }
                            else
                              {
                                pair["Year"]=header[j];
                                pair["Value"]=0.0;
                              }

                              if(dataRow[i][2]=='Arable land (% of land area)'){
                                if(dataRow[i][0].toLowerCase()=='india')
                                  rsltIndLandArea.push(pair);
                                else if(continents[dataRow[i][0]]==='AFRICA'&& header[j]==2010)
                                {
                                  var afPair=new Object();
                                  afPair["Country"]=dataRow[i][0];
                                  afPair["Value"]=parseFloat(dataRow[i][j]);
                                  rsltAfricaLandArea.push(afPair);
                                }
                              }
                              else if(dataRow[i][0].toLowerCase()=='india'){
                                if(dataRow[i][2]=='Arable land (hectares per person)')
                                  rsltIndLandHectPP.push(pair);
                                else if(dataRow[i][2]=='Arable land (hectares)')
                                  rsltIndLandHectares.push(pair);
                              }
                  }

              }

              if(continents[dataRow[i][0]]!=undefined){
              var j=3;
                 for(var x in yearsAsia){
                   j++;
                   if(dataRow[i][j]=='')
                   dataRow[i][j]=0.0;
                   var temp=parseFloat(dataRow[i][j]);
                   aggr[continents[dataRow[i][0]]][x]+=temp;
                 }
              }
      }
    }
    catch(err){
      console.log("Process failed*******************************\n"+err);
    }
      console.log("Write begins...");

      fs.writeFile('data/Ind_arable_land_area.json', JSON.stringify(rsltIndLandArea), function (err) {
      if (err) return console.log(err);
      console.log("File 1 - [Arable land (% of land area) - INDIA ] written Successfully.");
    });

    fs.writeFile('data/Ind_arable_land_hectares_pp.json', JSON.stringify(rsltIndLandHectPP), function (err) {
    if (err) return console.log(err);
    console.log("File 2 - [Arable land (hectares per person) - INDIA ] written Successfully.");
  });

      fs.writeFile('data/Ind_arable_land_hectares.json', JSON.stringify(rsltIndLandHectares), function (err) {
      if (err) return console.log(err);
      console.log("File 3 - [Arable land (hectares) - INDIA ] written Successfully.");
    });

    fs.writeFile('data/Africa_arable_land_area.json', JSON.stringify(rsltAfricaLandArea), function (err) {
    if (err) return console.log(err);
    console.log("File 4 - [Arable land (% of land area) - AFRICA ] written Successfully.");
    });

    for(i in yearsAsia)
    {
      var pair=new Object();
      pair["Year"]=i;
        for(j in aggr)
        {
          pair[j]=aggr[j][i];
        }
      resultContinent.push(pair);
    }

  fs.writeFile('data/continentsAggregate.json', JSON.stringify(resultContinent), function (err) {
    if (err) return console.log(err);
    console.log("File 5 - [ Arable land (hectares) - CONTINENT aggregation ] written Successfully.");
  });
}
processFile();
