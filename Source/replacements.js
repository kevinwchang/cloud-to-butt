var pokemon_replacements = [
  ["Dorial Green-Beckham", "MissingNo."],
  
  ["Antonio Brown", "Dragonite"],
  ["Julio Jones", "Exeggutor"],
  ["David Johnson", "Arcanine"],
  ["Odell Beckham Jr\.?", "Victreebel", ["Beckham Jr\.?", "Beckham"]],
  ["Todd Gurley", "Charizard"],
  ["Rob Gronkowski", "Magmar"],
  ["Ezekiel Elliott", "Gengar"],
  ["A\.? ?J\.? Green", "Nidoking", ["Green(?! Bay)"]],
  ["Lamar Miller", "Vileplume"],
  ["DeAndre Hopkins", "Machamp"],
  ["Keenan Allen", "Articuno"],
  ["Adrian Peterson", "Rapidash"],
  ["Le'Veon Bell", "Venusaur"],
  ["Brandon Marshall", "Electabuzz"],
  ["Allen Robinson", "Raichu"],
  ["Brandin Cooks", "Cloyster"],
  ["Mike Evans", "Golduck"],
  ["Sammy Watkins", "Gyarados"],
  ["Mark Ingram", "Jolteon"],
  ["Devonta Freeman", "Starmie"],
  ["Alshon Jeffery", "Weezing"],
  ["Jordy Nelson", "Weepinbell"],
  ["Dez Bryant", "Kabutops"],
  ["Doug Martin", "Pinsir"],
  ["C\.? ?J\.? Anderson", "Alakazam"],
  ["T\.? ?Y\.? Hilton", "Lapras"],
  ["Jarvis Landry", "Blastoise"],
  ["Eddie Lacy", "Vaporeon"],
  ["LeSean McCoy", "Magneton"],
  ["Amari Cooper", "Slowbro"],
  ["Demaryius Thomas", "Nidoqueen"],
  ["Cam Newton", "Dodrio"],
  ["Jamaal Charles", "Aerodactyl"],
  ["Aaron Rodgers", "Omastar"],
  ["Jordan Reed", "Muk"],
  ["Julian Edelman", "Snorlax"],
  ["Golden Tate", "Poliwrath"],
  ["Carlos Hyde", "Kingler"],
  ["Latavius Murray", "Primeape"],
  ["Matt Forte", "Clefable"],
  ["Eric Decker", "Ninetales"],
  ["Donte Moncrief", "Scyther"],
  ["DeMarco Murray", "Golem"],
  ["Andrew Luck", "Seadra"],
  ["Randall Cobb", "Venomoth"],
  ["Russell Wilson", "Jynx"],
  ["Doug Baldwin", "Haunter"],
  ["Jeremy Maclin", "Seaking"],
  ["Jeremy Hill", "Pidgeot"],
  ["Drew Brees", "Dragonair"],
  ["Jordan Matthews", "Tentacruel"],
  ["Thomas Rawls", "Ponyta"],
  ["Greg Olsen", "Fearow"],
  ["Jeremy Langford", "Wigglytuff"],
  ["Larry Fitzgerald", "Arbok"],
  ["Travis Kelce", "Tangela"],
  ["Duke Johnson", "Golbat"],
  ["Delanie Walker", "Rhydon"],
  ["Michael Floyd", "Hypno"],
  ["Arian Foster", "Gloom"],
  ["Melvin Gordon", "Parasect"],
  ["Coby Fleener", "Bellsprout"],
  ["Danny Woodhead", "Charmeleon"],
  ["Ben Roethlisberger", "Persian"],
  ["Marvin Jones", "Growlithe"],
  ["Giovani Bernard", "Dewgong"],
  ["Ryan Mathews", "Ivysaur"],
  ["Carson Palmer", "Porygon"],
  ["Emmanuel Sanders", "Mr. Mime"],
  ["Allen Hurns", "Machoke"],
  ["Tyler Lockett", "Sandslash"],
  ["Kelvin Benjamin", "Electrode"],
  ["Michael Crabtree", "Kadabra"],
  ["Jonathan Stewart", "Hitmonlee"],
  ["John Brown", "Kabuto"],
  ["Rashad Jennings", "Tauros"],
  ["Frank Gore", "Dugtrio"],
  ["Josh Gordon", "Beedrill"],
  ["Charles Sims", "Raticate"],
  ["Chris Ivory", "Butterfree"],
  ["Eli Manning", "Wartortle"],
  ["Sterling Shepard", "Graveler"],
  ["DeSean Jackson", "Nidorino"],
  ["Matt Jones", "Kangaskhan"],
  ["Zach Ertz", "Farfetchd"],
  ["Derrick Henry", "Marowak"],
  ["Tom Brady", "Hitmonchan"],
  ["Gary Barnidge", "Koffing"],
  ["Philip Rivers", "Gastly"],
  ["Julius Thomas", "Oddish"],
  ["Antonio Gates", "Staryu"],
  ["Martellus Bennett", "Nidorina"],
  ["Stefon Diggs", "Poliwhirl"],
  ["Blake Bortles", "Psyduck"],
  ["Tavon Austin", "Omanyte"],
  ["Bilal Powell", "Dratini"],
  ["Ameer Abdullah", "Charmander"],
  ["Devante Parker", "Magnemite"],
  ["Corey Coleman", "Pikachu"],
  ["DeAngelo Williams", "Doduo"],
  ["Willie Snead", "Grimer"],
  ["Tyrod Taylor", "Bulbasaur"],
  ["T\. ??J\.? Yeldon", "Lickitung"],
  ["Vincent Jackson", "Pidgeotto"],
  ["Kirk Cousins", "Mankey"],
  ["Theo Riddick", "Paras"],
  ["Travis Benjamin", "Horsea"],
  ["Mohamed Sanu", "Machop"],
  ["Kamar Aiken", "Shellder"],
  ["Kevin White", "Krabby"],
  ["Devin Funchess", "Clefairy"],
  ["Jameis Winston", "Eevee"],
  ["Tevin Coleman", "Exeggcute"],
  ["Dwayne Allen", "Nidoran♂"],
  ["Isaiah Crowell", "Ekans"],
  ["Spencer Ware", "Goldeen"],
  ["Tyler Eifert", "Slowpoke"],
  ["James White", "Squirtle"],
  ["Justin Forsett", "Abra"],
  ["Andy Dalton", "Rhyhorn"],
  ["Marcus Mariota", "Venonat"],
  ["Torrey Smith", "Poliwag"],
  ["Jason Witten", "Diglett"],
  ["Matthew Stafford", "Vulpix"],
  ["Eric Ebron", "Seel"],
  ["Markus Wheaton", "Drowzee"],
  ["Phillip Dorsett", "Geodude"],
  ["Derek Carr", "Tentacool"],
  ["Rishard Matthews", "Meowth"],
  ["Michael Thomas", "Cubone"],
  ["Jay Ajayi", "Voltorb"],
  ["Virgil Green", "Spearow", ["Green(?! Bay)"]],
  ["Matt Ryan", "Nidoran♀"],
  ["Tajae Sharpe", "Jigglypuff"],
  ["Steve Smith", "Pidgey"],
  ["Jared Cook", "Sandshrew"],
  ["Jerick McKinnon", "Onix"],
  ["Chris Hogan", "Rattata"],
  ["LeGarrette Blount", "Zubat"],
  ["Vance McDonald", "Weedle"],
  ["Mike Wallace", "Kakuna"],
  ["Zach Miller", "Caterpie"],
  ["Jimmy Graham", "Metapod"],
  ["Ryan Fitzpatrick", "Magikarp"],
  ["Christine Michael", "Chansey"],
];

var missingno_replacements = [
  ["DeAndre Washington", ["Washington(?! Redskins)"]],
  ["Will Fuller"],
  ["Anquan Boldin"],
  ["Ryan Tannehill"],
  ["Clive Walford"],
  ["Darren Sproles"],
  ["Pierre Garcon"],
  ["Tyler Boyd"],
  ["Sammie Coates"],
  ["Jordan Cameron"],
  ["Charles Clay"],
  ["Ted Ginn"],
  ["Kyle Rudolph"],
  ["Kendall Wright"],
  ["Laquon Treadwell"],
  ["Terrance Williams"],
  ["Terrance West"],
  ["Robert Griffin"],
  ["Austin Seferian-Jenkins"],
  ["Kenneth Dixon"],
  ["Javorius Allen"],
  ["Dak Prescott"],
  ["James Starks"],
  ["Davante Adams"],
  ["Josh Doctson"],
  ["Cameron Brate"],
  ["Alex Smith"],
  ["Jay Cutler"],
  ["Brandon LaFell"],
  //["Dorial Green-Beckham"],
  ["Dion Lewis"],
  ["Robert Woods"],
  ["Jaelen Strong"],
  ["Ladarius Green", ["Green(?! Bay)"]],
  ["C\.? ?J\.? Prosise"],
  ["Breshad Perriman"],
  ["Josh Ferguson"],
  ["Shane Vereen"],
  ["Will Tye"],
  ["Kenny Stills"],
  ["Tony Romo"],
  ["Devontae Booker"],
  ["Joe Flacco"],
  ["Chris Thompson"],
  ["Kenny Britt"],
  ["Tyrell Williams"],
  ["Nelson Agholor"],
  ["Eli Rogers"],
  ["Bruce Ellington"],
  ["Jesse James"],
  ["Brock Osweiler"],
  ["Jamison Crowder"],
  ["Victor Cruz"],
  ["Jermaine Kearse"],
  ["Stephen Gostkowski"],
  ["Colin Kaepernick"],
  ["Steven Hauschka"],
];

var team_replacements = [
  ["Ravens", "Zubats"],
  ["Bengals", "Arcanines"],
  ["Browns", "Digletts"],
  ["Steelers", "Magnemites"],
  ["Texans", "Tauroses"],
  ["Colts", "Ponytas"],
  ["Jaguars", "Meowths"],
  ["Titans", "Golems"],
  ["Bills", "Psyducks"],
  ["Dolphins", "Dragonairs"],
  ["Patriots", "Pidgeots"],
  ["Jets", "Moltreses"],
  ["Broncos", "Rapidashes"],
  ["Chiefs", "Wigglytuffs"],
  ["Raiders", "Grimers"],
  ["Chargers", "Electabuzzes"],
  ["Bears", "Snorlaxes"],
  ["Lions", "Flareons"],
  ["Packers", "Pinsirs"],
  ["Vikings", "Laprases"],
  ["Falcons", "Fearows"],
  ["Panthers", "Persians"],
  ["Saints", "Clefairys"],
  ["Buccaneers", "Exeggutors"],
  ["Cowboys", "Charizards"],
  ["Giants", "Machamps"],
  ["Eagles", "Zapdoses"],
  ["Redskins", "Flareons"],
  ["Cardinals", "Pidgeys"],
  ["Rams", "Rhyhorns"],
  ["49ers", "Venomoths"],
  ["Seahawks", "Gyaradoses"],
];

function buildRegExp(str)
{
  return new RegExp("\\b" + str, "g");
}

var replacements = [];

for (var i = 0; i < pokemon_replacements.length; i++)
{
  var alts = [];
  
  if (pokemon_replacements[i].length > 2)
  { 
    alts = pokemon_replacements[i][2];
  }
  else
  {
    alts = pokemon_replacements[i][0].split(" ").splice(-1);
  }
  
  replacements.push([buildRegExp(pokemon_replacements[i][0]), pokemon_replacements[i][1], alts, 1]);
}

for (var i = 0; i < missingno_replacements.length; i++)
{
  var alts = [];
  
  if (missingno_replacements[i].length > 1)
  { 
    alts = missingno_replacements[i][1];
  }
  else
  {
    alts = missingno_replacements[i][0].split(" ").splice(-1);
  }
  
  replacements.push([buildRegExp(missingno_replacements[i][0]), "MissingNo.", alts, 1]);
}

/*for (var i = 0; i < team_replacements.length; i++)
{
  replacements.push([buildRegExp(team_replacements[i][0]), team_replacements[i][1]]);
}*/

/*// pokemon alts
for (var i = 0; i < pokemon_replacements.length; i++)
{ 
  var alts = [];
  
  if (pokemon_replacements[i].length > 2)
  { 
    alts = pokemon_replacements[i][2];
  }
  else
  {
    alts = pokemon_replacements[i][0].split(" ").splice(-1);
  }
  for (var j = 0; j < alts.length; j++)
  {
    replacements.push([buildRegExp(alts[j]), pokemon_replacements[i][1]]);
  }
}

// missingno alts
for (var i = 0; i < missingno_replacements.length; i++)
{  
  var alts = [];
  
  if (missingno_replacements[i].length > 1)
  { 
    alts = missingno_replacements[i][1];
  }
  else
  {
    alts = missingno_replacements[i][0].split(" ").splice(-1);
  }
  for (var j = 0; j < alts.length; j++)
  {
    replacements.push([buildRegExp(alts[j]), "MissingNo."]);
  } 
}*/

//console.log(replacements);