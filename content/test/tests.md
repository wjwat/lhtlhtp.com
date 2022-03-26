+++
title = "Tests"
weight = 1
updated = 2022-03-26
+++

As we work on LHTLHTP.com this section will eventually be removed. Use this to
test how things look, and style them to your hearts content.

## Header level 2

### Header level 3

#### Header level 4

##### Header level 5

###### Header level 6 {#manual id}

{{ youtube(id="dqheDZH_mNc") }}

## Code Snippet

```cs,linenos
var showsAttended = _db.ShowAttendee.Where(y => y.AttendeeId == id)
    .Select(x => x.ShowId)
    .Distinct()
    .ToList();
var showsNotAttended = _db.Shows.Where(t => !showsAttended.Contains(t.ShowId));
```

### linenos

```cs,linenos
var showsAttended = _db.ShowAttendee.Where(y => y.AttendeeId == id)
    .Select(x => x.ShowId)
    .Distinct()
    .ToList();
var showsNotAttended = _db.Shows.Where(t => !showsAttended.Contains(t.ShowId));
```

### linenos,linenostart=5

```cs,linenos,linenostart=5
var showsAttended = _db.ShowAttendee.Where(y => y.AttendeeId == id)
    .Select(x => x.ShowId)
    .Distinct()
    .ToList();
var showsNotAttended = _db.Shows.Where(t => !showsAttended.Contains(t.ShowId));
```

### linenos,hl_lines=1 3 4

```cs,linenos,hl_lines=1 3-4
var showsAttended = _db.ShowAttendee.Where(y => y.AttendeeId == id)
    .Select(x => x.ShowId)
    .Distinct()
    .ToList();
var showsNotAttended = _db.Shows.Where(t => !showsAttended.Contains(t.ShowId));
```

### linenos,hide_lines=1-4

```cs,linenos,hide_lines=1-4
var showsAttended = _db.ShowAttendee.Where(y => y.AttendeeId == id)
    .Select(x => x.ShowId)
    .Distinct()
    .ToList();
var showsNotAttended = _db.Shows.Where(t => !showsAttended.Contains(t.ShowId));
```

### long line
```cs
var showsAttended = _db.ShowAttendee.Where(y => y.AttendeeId == id).Select(x => x.ShowId).Distinct().ToList();
var showsNotAttended = _db.Shows.Where(t => !showsAttended.Contains(t.ShowId));
```

## Tables

| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |

| Syntax | Description |
| --- | ----------- |
| Header | Title |
| Paragraph | Text |

| Syntax      | Description | Test Text     |
| :---        |    :----:   |          ---: |
| Header      | Title       | Here's this   |
| Paragraph   | Text        | And more      |

## Footnotes

Why don't you[^1] go down to the bottom of the page, and find our[^our] notes?

## Long Text Below

Zalmoxes Noasaurus Bagualosaurus Arkansaurus Megaraptor Atlasaurus Rubeosaurus
Palaeoscincus Austrosaurus Dasygnathus Gigantoscelus Argyrosaurus Hexinlusaurus
Pinacosaurus Kryptops Ammosaurus Eoraptor Machairasaurus Cardiodon Juratyrant
Elrhazosaurus Helioceratops Zigongosaurus Centemodon Wadhurstia Ajkaceratops
Acheroraptor Protorosaurus Beelemodon Martharaptor Ischisaurus Khaan
Arstanosaurus Gigantosaurus Utahceratops Nipponosaurus Saturnalia Iguanodon
Zhuchengosaurus Prenocephale Didanodon Atlasaurus Aetonyx Xuwulong Lexovisaurus.

Frenguellisaurus Wuerhosaurus Medusaceratops Edmontosaurus Palaeosauriscus
Epidexipteryx Jainosaurus Aurornis Suuwassea Caseosaurus Polyodontosaurus
Jinfengopteryx Coelurus Falcarius Ultrasaurus Elrhazosaurus Gryponyx
Lophostropheus Aublysodon Minmi Khetranisaurus Kulindapteryx Coahuilaceratops
Nebulasaurus Eomamenchisaurus Yongjinglong Ahshislepelta Leyesaurus Yongjinglong
Saltopus Magnapaulia Osmakasaurus Wellnhoferia Neuquenraptor Cetiosaurus
Eucentrosaurus Paralititan Taurovenator Huehuecanauhtlus Eucamerotus
Phaedrolosaurus Aegyptosaurus Kerberosaurus Patagosaurus Fukuisaurus.

Umarsaurus Cryolophosaurus Chenanisaurus Sektensaurus Naashoibitosaurus
Monoclonius Siamotyrannus Judiceratops Zanclodon Prenocephale Mahuidacursor
Gobisaurus Agustinia Drinker Leptorhynchos Stenotholus Eosinopteryx Paralititan
Albinykus Gigantoscelus Ankylosaurus Triceratops Gigantosaurus Heterosaurus
Wakinosaurus Brachytaenius Hortalotarsus Centemodon Atsinganosaurus
Bahariasaurus Ostromia Caenagnathus Galveosaurus Bonatitan Pachysauriscus
Tendaguria Tianzhenosaurus Ekrixinatosaurus Jainosaurus Amphicoelicaudia
Angulomastacator Astrodon Scipionyx Aetonyx Ultrasaurus.

Adasaurus Microceratops Shingopana Lessemsaurus Latenivenatrix Triceratops
Lepidocheirosaurus Mongolosaurus Talenkauen Hoplosaurus Tanystrosuchus
Magnosaurus Dasygnathus Nanningosaurus Tyrannotitan Xixiasaurus Cedrorestes
Akainacephalus Alioramus Dicraeosaurus Tawa Cryolophosaurus Dakotadon
Gongpoquansaurus Teyuwasu Heyuannia Protognathus Avalonianus Galveosaurus
Iguanacolossus Hikanodon Fukuivenator Paranthodon Brachytrachelopan Riojasuchus
Leptoceratops Rapetosaurus Mansourasaurus Lagosuchus Zanabazar Aublysodon
Shunosaurus Ultrasauros Archaeoceratops Tototlmimus.

Ornithomerus Bashunosaurus Silvisaurus Pisanosaurus Proceratops Marisaurus
Dysalotosaurus Overosaurus Hippodraco Fosterovenator Goyocephale Haestasaurus
Helopus Coelophysis Delapparentia Matheronodon Anatosaurus Avisaurus Atlasaurus
Abrosaurus Timimus Galveosaurus Jaxartosaurus Probactrosaurus Rileyasuchus
Othnielosaurus Loncosaurus Graciliraptor Suchoprion Anthodon Revueltosaurus
Kinnareemimus Ammosaurus Unquillosaurus Nanningosaurus Draconyx Baalsaurus
Aniksosaurus Lusitanosaurus Chungkingosaurus Macelognathus Kerberosaurus Kakuru
Gobisaurus Iliosuchus.

Dynamosaurus Macelognathus Texacephale Graciliraptor Shanag Adynomosaurus
Traukutitan Dinosaurus Mapusaurus Vectisaurus Pradhania Riabininohadros Ziapelta
Fukuisaurus Sterrholophus Galeamopus Histriasaurus Vagaceratops Neovenator
Protarchaeopteryx Centrosaurus Laelaps Richardoestesia Albertonykus Jiutaisaurus
Hypselorhachis Liliensternus Darwinsaurus Corythoraptor Scelidosaurus
Abdallahsaurus Acristavus Dystylosaurus Breviceratops Stormbergia
Adeopapposaurus Euhelopus Anzu Albertonykus Sphenosaurus Burianosaurus
Ornatotholus Jiutaisaurus Avipes Ampelosaurus.

Nyasasaurus Ouranosaurus Duriatitan Rhoetosaurus Jaklapallisaurus Bonatitan
Arenysaurus Chaoyangsaurus Elrhazosaurus Antetonitrus Zhongyuansaurus
Asiaceratops Darwinsaurus Serikornis Protoavis Anchisaurus Rahonavis
Sinocoelurus Dinotyrannus Pycnonemosaurus Protiguanodon Aristosaurus Aurornis
Minotaurasaurus Erliansaurus Duriavenator Polacanthoides Theiophytalia
Xenotarsosaurus Sefapanosaurus Hagryphus Parksosaurus Orkoraptor Chuanqilong
Rhinorex Magyarosaurus Barilium Yangchuanosaurus Isisaurus Siluosaurus
Pegomastax Huanansaurus Arstanosaurus Dromiceiomimus Lucianovenator.

Lohuecotitan Tichosteus Tylosteus Tianzhenosaurus Yixianosaurus Mojoceratops
Fusuisaurus Murusraptor Erlikosaurus Echinodon Caihong Panoplosaurus
Brachytrachelopan Staurikosaurus Cetiosauriscus Cryptovolans Batyrosaurus
Galleonosaurus Leyesaurus Albertavenator Beipiaosaurus Eucercosaurus Atlasaurus
Unescoceratops Sarcolestes Kinnareemimus Saltopus Dracopelta Umarsaurus
Lycorhinus Euoplocephalus Cheneosaurus Acantholipan Psittacosaurus Bravoceratops
Galveosaurus Brachytrachelopan Parvicursor Achelousaurus Savannasaurus Shanxia
Paralititan Opisthocoelicaudia Arrhinoceratops Notocolossus.

Galleonosaurus Tarascosaurus Skorpiovenator Deinocheirus Camarillasaurus
Raptorex Leonerasaurus Calamospondylus Emausaurus Veterupristisaurus
Regaliceratops Notohypsilophodon Liaoceratops Lourinhasaurus Crichtonpelta
Arcovenator Peishansaurus Xinjiangtitan Zatomus Fukuivenator Batyrosaurus
Tsagantegia Embasaurus Bothriospondylus Chromogisaurus Velociraptor
Kentrurosaurus Poekilopleuron Draconyx Fusuisaurus Taveirosaurus Brachyrophus
Sphenospondylus Hungarosaurus Sarcosaurus Juratyrant Cionodon Darwinsaurus
Ratchasimasaurus Plateosaurus Harpymimus Alocodon Lanasaurus Pachyrhinosaurus
Coronosaurus.

Xenoposeidon Koutalisaurus Dinosaurus Tambatitanis Dracoraptor Agilisaurus
Gongxianosaurus Nhandumirim Syntarsus Dinosaurus Coloradisaurus Quilmesaurus
Khetranisaurus Isisaurus Sarahsaurus Haplocanthus Centemodon Gryphoceratops
Prodeinodon Otogosaurus Crichtonpelta Chaoyangsaurus Heterosaurus Nomingia
Teleocrater Siamotyrannus Sphaerotholus Belodon Tanius Gravitholus Zigongosaurus
Jobaria Lophorhothon Probrachylophosaurus Dryptosauroides Zhuchengtyrannus
Zapsalis Arctosaurus Megapnosaurus Pekinosaurus Teyuwasu Syngonosaurus
Seismosaurus Appalachiosaurus Geranosaurus.

Huayangosaurus Aviatyrannis Cryolophosaurus Cruxicheiros Marmarospondylus
Suuwassea Dashanpusaurus Plateosaurus Brachiosaurus Ultrasaurus Martharaptor
Albertavenator Talenkauen Graciliceratops Condorraptor Mamenchisaurus Nanosaurus
Didanodon Stenonychosaurus Lusotitan Shidaisaurus Uberabatitan Sinornithomimus
Algoasaurus Barrosasaurus Aardonyx Levnesovia Bonitasaura Astrodon Syrmosaurus
Lukousaurus Iguanacolossus Wulagasaurus Lisboasaurus Archaeoceratops Baryonyx
Banji Xuanhanosaurus Therizinosaurus Zhuchengtyrannus Antarctopelta
Nanyangosaurus Jinzhousaurus Xuanhuaceratops Gannansaurus.

Jingshanosaurus Scolosaurus Linhevenator Taveirosaurus Abdallahsaurus Andesaurus
Stormbergia Petrobrasaurus Austroposeidon Agathaumas Betasuchus Luanchuanraptor
Camarasaurus Datanglong Yingshanosaurus Nuthetes Crittendenceratops Clarencea
Gracilisuchus Macelognathus Therosaurus Argyrosaurus Pekinosaurus Yi
Foraminacephale Adelolophus Craspedodon Nectosaurus Volkheimeria Rhoetosaurus
Soriatitan Vulcanodon Szechuanosaurus Comahuesaurus Megalosaurus Nanningosaurus
Amphisaurus Nopcsaspondylus Hesperosaurus Megapnosaurus Talos Massospondylus
Levnesovia Embasaurus Dravidosaurus.

Apatodon Zby Spondylosoma Ceratonykus Arkansaurus Nectosaurus Hualianceratops
Regaliceratops Umarsaurus Buitreraptor Kinnareemimus Yunganglong Dysganus
Angaturama Bashunosaurus Glyptodontopelta Eotyrannus Tichosteus Leaellynasaura
Wellnhoferia Carnotaurus Mantellodon Balochisaurus Tianzhenosaurus
Xuanhanosaurus Sibirotitan Zapalasaurus Edmontosaurus Savannasaurus Vectisaurus
Australodocus Palaeosaurus Asiatosaurus Itemirus Archaeopteryx Chaoyangsaurus
Deuterosaurus Abdallahsaurus Nyasasaurus Garudimimus Ligabueino Amphicoelias
Augustia Byronosaurus Tugulusaurus.

Archaeodontosaurus Peloroplites Eoraptor Dahalokely Torilion Priconodon
Beishanlong Sigilmassasaurus Omosaurus Daanosaurus Indosuchus Monkonosaurus
Pycnonemosaurus Protecovasaurus Acrotholus Eoceratops Procompsognathus
Austrocheirus Kentrurosaurus Yutyrannus Laquintasaura Sphenosaurus Velafrons
Galesaurus Nodosaurus Yaleosaurus Sinornithomimus Giganotosaurus Brachyceratops
Anthodon Vagaceratops Rachitrema Ceratosaurus Futalognkosaurus Kerberosaurus
Ligabueino Tyrannosaurus Graciliraptor Antarctosaurus Siamodon Sinornithomimus
Euhelopus Uintasaurus Ruehleia Huehuecanauhtlus.

Brontomerus Australovenator Demandasaurus Adelolophus Bradycneme Wulagasaurus
Dilophosaurus Glacialisaurus Bruhathkayosaurus Leipsanosaurus Petrobrasaurus
Levnesovia Sterrholophus Ruyangosaurus Clarencea Marshosaurus Clepsysaurus
Sinosaurus Sibirotitan Chuandongocoelurus Dromiceiomimus Dromicosaurus
Dimodosaurus Liassaurus Mojoceratops Ajkaceratops Kulindapteryx Apatodon
Secernosaurus Fukuivenator Zhuchengosaurus Sellosaurus Amargatitanis
Pentaceratops Ouranosaurus Achillesaurus Halszkaraptor Titanosaurus Einiosaurus
Griphornis Kemkemia Dryptosauroides Elopteryx Ischioceratops Indosaurus.

[^1]: First note.

[^our]: Brontomerus Australovenator Demandasaurus Adelolophus Bradycneme
    Wulagasaurus Dilophosaurus Glacialisaurus Bruhathkayosaurus Leipsanosaurus
    Petrobrasaurus Levnesovia Sterrholophus Ruyangosaurus Clarencea Marshosaurus
    Clepsysaurus Sinosaurus Sibirotitan Chuandongocoelurus Dromiceiomimus
    Dromicosaurus Dimodosaurus Liassaurus Mojoceratops Ajkaceratops
    Kulindapteryx Apatodon Secernosaurus Fukuivenator Zhuchengosaurus
    Sellosaurus Amargatitanis Pentaceratops Ouranosaurus Achillesaurus
    Halszkaraptor Titanosaurus Einiosaurus Griphornis Kemkemia Dryptosauroides
    Elopteryx Ischioceratops Indosaurus.
