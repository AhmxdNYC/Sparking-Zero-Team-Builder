// import { writeFile } from 'fs/promises';
// // First array
// const firstArray = [
// 	{
// 		name: 'Android 13 (Fused)',
// 		value: -7,
// 		img: 'https://media.graphassets.com/j621vlLTOboDM3wOAvEw',
// 	},
// 	{
// 		name: 'Android 13 (Z)',
// 		value: -5,
// 		img: 'https://media.graphassets.com/4dFQn6a9SVHfUMdkzudD',
// 	},
// 	{
// 		name: 'Android 16',
// 		value: -5,
// 		img: 'https://media.graphassets.com/b1PpLEbnSvGiYZFLxcOJ',
// 	},
// 	{
// 		name: 'Android 17 (Super)',
// 		value: -6,
// 		img: 'https://media.graphassets.com/UkeqNShQrCgo8FK00pE7',
// 	},
// 	{
// 		name: 'Android 17 (Z)',
// 		value: -5,
// 		img: 'https://media.graphassets.com/aAiHlrMSrKqbjR1l3h9w',
// 	},
// 	{
// 		name: 'Android 18',
// 		value: -5,
// 		img: 'https://media.graphassets.com/WE9Vz1USYSUMz2d4zNcQ',
// 	},
// 	{
// 		name: 'Android 19',
// 		value: -4,
// 		img: 'https://media.graphassets.com/MZEZEfzjRZGqtoisR7Lf',
// 	},
// 	{
// 		name: 'Anilaza',
// 		value: -8,
// 		img: 'https://media.graphassets.com/1eybjwh2T3SYiQmw6djK',
// 	},
// 	{
// 		name: 'Babidi',
// 		value: -3,
// 		img: 'https://media.graphassets.com/G4XzEPceSyW0LVb0BMUZ',
// 	},
// 	{
// 		name: 'Baby Vegeta (GT)',
// 		value: -5,
// 		img: 'https://media.graphassets.com/JChkXUA3RwK4hmWVEwyA',
// 	},
// 	{
// 		name: 'Bardock',
// 		value: -4,
// 		img: 'https://media.graphassets.com/KwoqPMRgToDALjtTjcHC',
// 	},
// 	{
// 		name: 'Beerus',
// 		value: -10,
// 		img: 'https://media.graphassets.com/pCOnfsNbShqGXlTGS05x',
// 	},
// 	{
// 		name: 'Bergamo',
// 		value: -5,
// 		img: 'https://media.graphassets.com/1V0lQaZcSiCrYxamzksa',
// 	},
// 	{
// 		name: 'BoJack',
// 		value: -5,
// 		img: 'https://media.graphassets.com/pQ1nlLaSReeuYS0Sqv7d',
// 	},
// 	{
// 		name: 'BoJack (Full)',
// 		value: -7,
// 		img: 'https://media.graphassets.com/2NEX0WyQvKXg5sSJMGBP',
// 	},
// 	{
// 		name: 'Broly (Super)',
// 		value: -5,
// 		img: 'https://media.graphassets.com/RoVseZzXQlq1fZpauVhm',
// 	},
// 	{
// 		name: 'Broly (Super) SSJ1',
// 		value: -6,
// 		img: 'https://media.graphassets.com/1drpqbZ1T9eDzET7nEkF',
// 	},
// 	{
// 		name: 'Broly (Super) SSJ2',
// 		value: -9,
// 		img: 'https://media.graphassets.com/YKjDnFmMTfKvl8Lomb5x',
// 	},
// 	{
// 		name: 'Broly (Z)',
// 		value: -5,
// 		img: 'https://media.graphassets.com/f9ckNtdRRbadAbAuucgS',
// 	},
// 	{
// 		name: 'Broly (Z) SSJ1',
// 		value: -7,
// 		img: 'https://media.graphassets.com/WQWPcRCwS5KZ9g1TysoH',
// 	},
// 	{
// 		name: 'Broly (Z) SSJL',
// 		value: -9,
// 		img: 'https://media.graphassets.com/a5WFg6CGR8qERJFWaNg0',
// 	},
// 	{
// 		name: 'Burter',
// 		value: -3,
// 		img: 'https://media.graphassets.com/pex1Qe7RDKbBnBU4LMnJ',
// 	},
// 	{
// 		name: 'Cabba',
// 		value: -5,
// 		img: 'https://media.graphassets.com/6ygnoYEOSniKw07ojrQf',
// 	},
// 	{
// 		name: 'Cabba SSJ1',
// 		value: -6,
// 		img: 'https://media.graphassets.com/sdv1IvybTOeq088ikE5h',
// 	},
// 	{
// 		name: 'Cabba SSJ2',
// 		value: -7,
// 		img: 'https://media.graphassets.com/klkz1WlMTaqxJh1jmdfM',
// 	},
// 	{
// 		name: 'Caulifla',
// 		value: -5,
// 		img: 'https://media.graphassets.com/YrxMDNFiTVinAis1BkU6',
// 	},
// 	{
// 		name: 'Caulifla SSJ2',
// 		value: -6,
// 		img: 'https://media.graphassets.com/p6tLrY8uTYKMuYTbNGCp',
// 	},
// 	{
// 		name: 'Cell (1st Form)',
// 		value: -5,
// 		img: 'https://media.graphassets.com/UcoWPJ6BSuiYV1JA8ekW',
// 	},
// 	{
// 		name: 'Cell (2nd Form)',
// 		value: -5,
// 		img: 'https://media.graphassets.com/bxo1LkIpT1elRbtUdBM6',
// 	},
// 	{
// 		name: 'Cell (Perfect)',
// 		value: -6,
// 		img: 'https://media.graphassets.com/rro8fSpvSTOAeewBqPkl',
// 	},
// 	{
// 		name: 'Cell Jr.',
// 		value: -3,
// 		img: 'https://media.graphassets.com/T6OxKrb0Rb2dwLDmgAYr',
// 	},
// 	{
// 		name: 'Chiaotzu',
// 		value: -2,
// 		img: 'https://media.graphassets.com/APrUaH15TR6Jm1ryUZ5V',
// 	},
// 	{
// 		name: 'Cooler',
// 		value: -6,
// 		img: 'https://media.graphassets.com/E5uYRVJ5Qnqch4AsMJMN',
// 	},
// 	{
// 		name: 'Cooler (Final)',
// 		value: -7,
// 		img: 'https://media.graphassets.com/TtKr1zwYTZqlYQ3Lanrv',
// 	},
// 	{
// 		name: 'Cui',
// 		value: -3,
// 		img: 'https://media.graphassets.com/r4WM3FElTSqGnFQ6Ivcf',
// 	},
// 	{
// 		name: 'Dabura',
// 		value: -6,
// 		img: 'https://media.graphassets.com/CEv4XtvfQq81ETxf95Sn',
// 	},
// 	{
// 		name: 'Dodoria',
// 		value: -3,
// 		img: 'https://media.graphassets.com/XFNRVYbSuegeCXKxWtIQ',
// 	},
// 	{
// 		name: 'Dr. Gero',
// 		value: -4,
// 		img: 'https://media.graphassets.com/RqdhWw3fQ9CTPdiOBwzn',
// 	},
// 	{
// 		name: 'Dr. Wheelo',
// 		value: -4,
// 		img: 'https://media.graphassets.com/ZN86GSzERg1671Hfz3JJ',
// 	},
// 	{
// 		name: 'Dyspo',
// 		value: -6,
// 		img: 'https://media.graphassets.com/bKwf3rmpTOrg0X1or2gD',
// 	},
// 	{
// 		name: 'Frieza (1st Form)',
// 		value: -5,
// 		img: 'https://media.graphassets.com/1jArYqY8QvSWJ50EBGjX',
// 	},
// 	{
// 		name: 'Frieza (2nd Form)',
// 		value: -5,
// 		img: 'https://media.graphassets.com/zweLMcYGQ0KMWwmlxkZd',
// 	},
// 	{
// 		name: 'Frieza (3rd Form)',
// 		value: -5,
// 		img: 'https://media.graphassets.com/WtIRxlRSlKA40wAlXw4Q',
// 	},
// 	{
// 		name: 'Frieza (4th Form)',
// 		value: -6,
// 		img: 'https://media.graphassets.com/NDJRoUNTCOBckq7qmNAp',
// 	},
// 	{
// 		name: 'Frieza (Full)',
// 		value: -7,
// 		img: 'https://media.graphassets.com/sejlGpyWQI2wf2z3sQoB',
// 	},
// 	{
// 		name: 'Frieza (Super)',
// 		value: -6,
// 		img: 'https://media.graphassets.com/IHVUPISqWLA8qwJOVPwY',
// 	},
// 	{
// 		name: 'Frieza Force Soldier',
// 		value: -2,
// 		img: 'https://media.graphassets.com/QWsYZAxT7SsqkoKvHxPt',
// 	},
// 	{
// 		name: 'Frost',
// 		value: -6,
// 		img: 'https://media.graphassets.com/amTYFTfT2OTk7G5w1e2T',
// 	},
// 	{
// 		name: 'Fused Zamasu',
// 		value: -8,
// 		img: 'https://media.graphassets.com/z6yg9i09TViLcVU9Fjz1',
// 	},
// 	{
// 		name: 'Fused Zamasu (Corrupted)',
// 		value: -9,
// 		img: 'https://media.graphassets.com/a2Kb713GR4qYkTEpOOCr',
// 	},
// 	{
// 		name: 'Ginyu',
// 		value: -4,
// 		img: 'https://media.graphassets.com/itBPEGaQZivEejEpmGjP',
// 	},
// 	{
// 		name: 'Gogeta (GT) SSJ4',
// 		value: -10,
// 		img: 'https://media.graphassets.com/MOwWls0BTm6Zn4xm1scH',
// 	},
// 	{
// 		name: 'Gogeta (Super)',
// 		value: -7,
// 		img: 'https://media.graphassets.com/YsOR5oXlS3mFfEWQqaWw',
// 	},
// 	{
// 		name: 'Gogeta (Super) SSJ1',
// 		value: -8,
// 		img: 'https://media.graphassets.com/4QhTyd9cR82RTrC7dlXo',
// 	},
// 	{
// 		name: 'Gogeta (Super) SSJB',
// 		value: -10,
// 		img: 'https://media.graphassets.com/7cdf4cQZR0m01HEGUBeJ',
// 	},
// 	{
// 		name: 'Gogeta (Z) SSJ1',
// 		value: -8,
// 		img: 'https://media.graphassets.com/GfuT7fIvSsCmQC8IEf8B',
// 	},
// 	{
// 		name: 'Gohan (Adult)',
// 		value: -4,
// 		img: 'https://media.graphassets.com/wqQJoldgTAaQ8erKyJLo',
// 	},
// 	{
// 		name: 'Gohan (Adult) SSJ1',
// 		value: -6,
// 		img: 'https://media.graphassets.com/HtJF4NJS3aGyQEvJ2CJA',
// 	},
// 	{
// 		name: 'Gohan (Adult) SSJ2',
// 		value: -7,
// 		img: 'https://media.graphassets.com/uMKXq6JTrCEo3qLXpkql',
// 	},
// 	{
// 		name: 'Gohan (Future)',
// 		value: -5,
// 		img: 'https://media.graphassets.com/S9dExWzToqrfIiSyTQMw',
// 	},
// 	{
// 		name: 'Gohan (Future) SSJ1',
// 		value: -6,
// 		img: 'https://media.graphassets.com/my6QN67QnisLi6O1vf7O',
// 	},
// 	{
// 		name: 'Gohan (Kid)',
// 		value: -3,
// 		img: 'https://media.graphassets.com/mvH2WQOS6epqkgBkxQcf',
// 	},
// 	{
// 		name: 'Gohan (Teen)',
// 		value: -4,
// 		img: 'https://media.graphassets.com/muR95lS2Rde6idvzb3Q1',
// 	},
// 	{
// 		name: 'Gohan (Teen) SSJ1',
// 		value: -6,
// 		img: 'https://media.graphassets.com/7A1HthFS3G974QsxfwLj',
// 	},
// 	{
// 		name: 'Gohan (Teen) SSJ2',
// 		value: -7,
// 		img: 'https://media.graphassets.com/iwpYoQyQDC3VH4UFljww',
// 	},
// 	{
// 		name: 'Goku Mini (Daima)',
// 		value: -4,
// 		img: 'https://media.graphassets.com/GY23weVJRUeVdIECEEeD',
// 	},
// 	{
// 		name: 'Goku (GT)',
// 		value: -5,
// 		img: 'https://media.graphassets.com/Y72Y7sAVRiSgKV3bp3VY',
// 	},
// 	{
// 		name: 'Goku (GT) SSJ1',
// 		value: -6,
// 		img: 'https://media.graphassets.com/b1eb9Bw5TMuICGXlampm',
// 	},
// 	{
// 		name: 'Goku (GT) SSJ3',
// 		value: -7,
// 		img: 'https://media.graphassets.com/zeXFuvvREaafy0Zn6iBg',
// 	},
// 	{
// 		name: 'Goku (GT) SSJ4',
// 		value: -8,
// 		img: 'https://media.graphassets.com/hJ9UlTTGQ6G1G5Clra7i',
// 	},
// 	{
// 		name: 'Goku (Super)',
// 		value: -5,
// 		img: 'https://media.graphassets.com/8Zy5EXueRR2lvE8hYF28',
// 	},
// 	{
// 		name: 'Goku (Super) SSJ1',
// 		value: -6,
// 		img: 'https://media.graphassets.com/Zl4JLYI8Qb6jk19iCn3B',
// 	},
// 	{
// 		name: 'Goku (Super) SSJB',
// 		value: -8,
// 		img: 'https://media.graphassets.com/OvjlXxRaSf6nM5L8lqWy',
// 	},
// 	{
// 		name: 'Goku (Super) SSJG',
// 		value: -7,
// 		img: 'https://media.graphassets.com/w2brTEORm6fP59aNqnzA',
// 	},
// 	{
// 		name: 'Goku (Super) UI',
// 		value: -9,
// 		img: 'https://media.graphassets.com/f5BGkKSSNGUURAu2Opki',
// 	},
// 	{
// 		name: 'Goku (Super) UIS',
// 		value: -8,
// 		img: 'https://media.graphassets.com/dajU9ej2RjgRgZnVgnxG',
// 	},
// 	{
// 		name: 'Goku (Teen)',
// 		value: -3,
// 		img: 'https://media.graphassets.com/CshnxbDbQPGIkuiUp7Bp',
// 	},
// 	{
// 		name: 'Goku (Z-Early)',
// 		value: -4,
// 		img: 'https://media.graphassets.com/PH6jjZkGS1KaO7AufpIq',
// 	},
// 	{
// 		name: 'Goku (Z-End)',
// 		value: -5,
// 		img: 'https://media.graphassets.com/WXwj3mIVSNuDrp4PXamN',
// 	},
// 	{
// 		name: 'Goku (Z-End) SSJ1',
// 		value: -6,
// 		img: 'https://media.graphassets.com/amhNkthQVWad8ZhWkiuV',
// 	},
// 	{
// 		name: 'Goku (Z-End) SSJ2',
// 		value: -7,
// 		img: 'https://media.graphassets.com/RcdbnGQzSNebOnRzwCiV',
// 	},
// 	{
// 		name: 'Goku (Z-End) SSJ3',
// 		value: -8,
// 		img: 'https://media.graphassets.com/mndORp1mRYq6CikxDCcL',
// 	},
// 	{
// 		name: 'Goku (Z-Mid)',
// 		value: -5,
// 		img: 'https://media.graphassets.com/wFcfV5TT0GdFqU6uEbQn',
// 	},
// 	{
// 		name: 'Goku (Z-Mid) SSJ1',
// 		value: -6,
// 		img: 'https://media.graphassets.com/yVRfiV91TGJsTol1qLIZ',
// 	},
// 	{
// 		name: 'Goku Black',
// 		value: -5,
// 		img: 'https://media.graphassets.com/vwGsTku8ScecBw2cyeqY',
// 	},
// 	{
// 		name: 'Goku Black (Rosé)',
// 		value: -8,
// 		img: 'https://media.graphassets.com/kEC7V9YSS3yOa9Oy9mYQ',
// 	},
// 	{
// 		name: 'Golden Frieza',
// 		value: -8,
// 		img: 'https://media.graphassets.com/CK7xzAbwSLaKOP9SbPPQ',
// 	},
// 	{
// 		name: 'Goten',
// 		value: -4,
// 		img: 'https://media.graphassets.com/pLFV10TXRoiehrMbL8m4',
// 	},
// 	{
// 		name: 'Goten SSJ1',
// 		value: -5,
// 		img: 'https://media.graphassets.com/6Q1MEhpdTICnOa0wFUgj',
// 	},
// 	{
// 		name: 'Gotenks',
// 		value: -6,
// 		img: 'https://media.graphassets.com/mTP9u023Rli8yW8buWF0',
// 	},
// 	{
// 		name: 'Gotenks SSJ1',
// 		value: -7,
// 		img: 'https://media.graphassets.com/EVhKEeDOTHmBERL1etYQ',
// 	},
// 	{
// 		name: 'Gotenks SSJ3',
// 		value: -8,
// 		img: 'https://media.graphassets.com/BkteOhSSHy7uevDjXsXS',
// 	},
// 	{
// 		name: 'Great Ape Baby (GT)',
// 		value: -7,
// 		img: 'https://media.graphassets.com/sk1TYLcySueD6d6zjvyP',
// 	},
// 	{
// 		name: 'Great Ape Vegeta',
// 		value: -5,
// 		img: 'https://media.graphassets.com/n2NwluEPRoWdy1Fm9bER',
// 	},
// 	{
// 		name: 'Great Saiyaman',
// 		value: -4,
// 		img: 'https://media.graphassets.com/Xbath3BtT6OP8UozJBGO',
// 	},
// 	{
// 		name: 'Guldo',
// 		value: -2,
// 		img: 'https://media.graphassets.com/JRHLFI8UTafuMjBmLjEC',
// 	},
// 	{
// 		name: 'Hirudegarn',
// 		value: -6,
// 		img: 'https://media.graphassets.com/BG0F3jt3R1CBKVxMO4B7',
// 	},
// 	{
// 		name: 'Hit',
// 		value: -8,
// 		img: 'https://media.graphassets.com/3dKHvJYCQEGefu0uyORY',
// 	},
// 	{
// 		name: 'Janemba',
// 		value: -5,
// 		img: 'https://media.graphassets.com/VjCb76MDTdgT2fSuocV5',
// 	},
// 	{
// 		name: 'Jeice',
// 		value: -3,
// 		img: 'https://media.graphassets.com/GttKp0QaWCs0gcX9GKOA',
// 	},
// 	{
// 		name: 'Jiren',
// 		value: -8,
// 		img: 'https://media.graphassets.com/4WOoQlXqRsaDe7HSjhMY',
// 	},
// 	{
// 		name: 'Jiren (Full)',
// 		value: -9,
// 		img: 'https://media.graphassets.com/feTnQ0YRROq4miZC66AE',
// 	},
// 	{
// 		name: 'Kakunsa',
// 		value: -5,
// 		img: 'https://media.graphassets.com/QtStIADAQfmxNk74ToSF',
// 	},
// 	{
// 		name: 'Kale',
// 		value: -5,
// 		img: 'https://media.graphassets.com/z0cORSZ8RdGULNsepmGw',
// 	},
// 	{
// 		name: 'Kale (Berserk) SSJ1',
// 		value: -7,
// 		img: 'https://media.graphassets.com/HR4BiJUQQOeuJ1iHBNbw',
// 	},
// 	{
// 		name: 'Kale SSJ1',
// 		value: -6,
// 		img: 'https://media.graphassets.com/JEMlpFSMi34ZO0Y599wG',
// 	},
// 	{
// 		name: 'Kefla',
// 		value: -6,
// 		img: 'https://media.graphassets.com/kvrLeYcSAea3x7Ifxh1B',
// 	},
// 	{
// 		name: 'Kefla SSJ1',
// 		value: -7,
// 		img: 'https://media.graphassets.com/6C5mlXTMRUmqFCiWamCv',
// 	},
// 	{
// 		name: 'Kefla SSJ2',
// 		value: -8,
// 		img: 'https://media.graphassets.com/i7uoD9ZTm2BYNvkekKXe',
// 	},
// 	{
// 		name: 'Kid Buu',
// 		value: -7,
// 		img: 'https://media.graphassets.com/lcuApkxiQiS9zMWcFqKI',
// 	},
// 	{
// 		name: 'King Cold',
// 		value: -4,
// 		img: 'https://media.graphassets.com/drZK9nFTv6zmrCbObqAj',
// 	},
// 	{
// 		name: 'Krillin',
// 		value: -3,
// 		img: 'https://media.graphassets.com/oTSq3sDNQcukhJ9tExfi',
// 	},
// 	{
// 		name: 'Lord Slug',
// 		value: -4,
// 		img: 'https://media.graphassets.com/Yv1eq4bgR5KViOIyIPZI',
// 	},
// 	{
// 		name: 'Lord Slug (Giant)',
// 		value: -6,
// 		img: 'https://media.graphassets.com/jUZ1Aq4zRNekYfVqmUUU',
// 	},
// 	{
// 		name: 'Majin Buu',
// 		value: -6,
// 		img: 'https://media.graphassets.com/XnIrujdgQWWGIYqkRYjT',
// 	},
// 	{
// 		name: 'Majin Buu (Evil)',
// 		value: -6,
// 		img: 'https://media.graphassets.com/gjNMtpUPRxSPvMY7jI9V',
// 	},
// 	{
// 		name: 'Majin Vegeta',
// 		value: -7,
// 		img: 'https://media.graphassets.com/W3126twhSe7JONHFrPET',
// 	},
// 	{
// 		name: 'Majuub (GT)',
// 		value: -6,
// 		img: 'https://media.graphassets.com/bwH2b157Qz6BcJceKZ3x',
// 	},
// 	{
// 		name: 'Master Roshi',
// 		value: -2,
// 		img: 'https://media.graphassets.com/Px1BpgjWQB2qapV3htQg',
// 	},
// 	{
// 		name: 'Master Roshi (Max)',
// 		value: -2,
// 		img: 'https://media.graphassets.com/JmdgMnVRxOwRxbAyJm96',
// 	},
// 	{
// 		name: 'Mecha Frieza',
// 		value: -6,
// 		img: 'https://media.graphassets.com/lEkURH5QZvjQVBhdLYkw',
// 	},
// 	{
// 		name: 'Metal Cooler',
// 		value: -7,
// 		img: 'https://media.graphassets.com/4yNUPhAeSqWtJUxlVY8q',
// 	},
// 	{
// 		name: 'Mr. Satan',
// 		value: -1,
// 		img: 'https://media.graphassets.com/kdUewrrhQ2eiMPsLvvxA',
// 	},
// 	{
// 		name: 'Nail',
// 		value: -4,
// 		img: 'https://media.graphassets.com/WmMdaIspQsS8ItLlIrb0',
// 	},
// 	{
// 		name: 'Nappa',
// 		value: -3,
// 		img: 'https://media.graphassets.com/i7RSBM9UQDKVQr397ICe',
// 	},
// 	{
// 		name: 'Omega Shenron (GT)',
// 		value: -8,
// 		img: 'https://media.graphassets.com/MVfFVW1TRF2BNNqMetgc',
// 	},
// 	{
// 		name: 'Pan (GT)',
// 		value: -3,
// 		img: 'https://media.graphassets.com/iPDWI2UdR9m2PzlzEwGz',
// 	},
// 	{
// 		name: 'Perfect Cell',
// 		value: -7,
// 		img: 'https://media.graphassets.com/rro8fSpvSTOAeewBqPkl',
// 	},
// 	{
// 		name: 'Piccolo',
// 		value: -4,
// 		img: 'https://media.graphassets.com/eP8zDckDTW2mPuxpx9Ia',
// 	},
// 	{
// 		name: 'Piccolo (Fused)',
// 		value: -5,
// 		img: 'https://media.graphassets.com/p9YPbt1XRCq07AgP7MqQ',
// 	},
// 	{
// 		name: 'Raditz',
// 		value: -3,
// 		img: 'https://media.graphassets.com/9axuKzTvTBy50odWhyJE',
// 	},
// 	{
// 		name: 'Recoome',
// 		value: -3,
// 		img: 'https://media.graphassets.com/yTR31J3GTsCswrHMECho',
// 	},
// 	{
// 		name: 'Ribrianne',
// 		value: -5,
// 		img: 'https://media.graphassets.com/VNjDj2wRESVoTNJFT67Q',
// 	},
// 	{
// 		name: 'Roasie',
// 		value: -5,
// 		img: 'https://media.graphassets.com/gbslIJhaRjiscrGhmFQp',
// 	},
// 	{
// 		name: 'Saibaman',
// 		value: -2,
// 		img: 'https://media.graphassets.com/ZQjwcorLRv6m7YgBtWWJ',
// 	},
// 	{
// 		name: 'Spopovich',
// 		value: -2,
// 		img: 'https://media.graphassets.com/czFoAT7Rpu48FzNQZNFU',
// 	},
// 	{
// 		name: 'Super Baby (GT) SSJ1',
// 		value: -6,
// 		img: 'https://media.graphassets.com/xr8EZOUMSznereOAUQow',
// 	},
// 	{
// 		name: 'Super Baby (GT) SSJ2',
// 		value: -7,
// 		img: 'https://media.graphassets.com/vpt3rntMTTSqDmciUeDv',
// 	},
// 	{
// 		name: 'Super Buu',
// 		value: -6,
// 		img: 'https://media.graphassets.com/vGLR10lZQSyECn1Jlwlw',
// 	},
// 	{
// 		name: 'Super Buuhan',
// 		value: -7,
// 		img: 'https://media.graphassets.com/WobWChAtRk2jdrvAg91i',
// 	},
// 	{
// 		name: 'Super Buutenks',
// 		value: -7,
// 		img: 'https://media.graphassets.com/fqgCUlnSDecvdV8CYDU1',
// 	},
// 	{
// 		name: 'Super Garlic Jr.',
// 		value: -4,
// 		img: 'https://media.graphassets.com/BLO693osTn2oE9UxCwr7',
// 	},
// 	{
// 		name: 'Super Janemba',
// 		value: -7,
// 		img: 'https://media.graphassets.com/rz9BcZTfQzSw6ehSa44s',
// 	},
// 	{
// 		name: 'Super Trunks',
// 		value: -6,
// 		img: 'https://media.graphassets.com/yeXwgASQ52zcICjVPx14',
// 	},
// 	{
// 		name: 'Super Vegeta',
// 		value: -6,
// 		img: 'https://media.graphassets.com/xaTAhlRbTyiKGPRRZXzM',
// 	},
// 	{
// 		name: 'Super Vegito',
// 		value: -8,
// 		img: 'https://media.graphassets.com/QP7NLZHzRZuu9X98zDhE',
// 	},
// 	{
// 		name: 'Super Zarbon',
// 		value: -3,
// 		img: 'https://media.graphassets.com/9St49Te4Qyu9e9dWLj70',
// 	},
// 	{
// 		name: 'Syn Shenron',
// 		value: -7,
// 		img: 'https://media.graphassets.com/1hZK8lc5RdKpzyrbZquV',
// 	},
// 	{
// 		name: 'Tapion',
// 		value: -4,
// 		img: 'https://media.graphassets.com/G0rxOtUJQG61g2VwpuDO',
// 	},
// 	{
// 		name: 'Tien',
// 		value: -4,
// 		img: 'https://media.graphassets.com/cuBsB2FQSyjxHobtV4MJ',
// 	},
// 	{
// 		name: 'Toppo',
// 		value: -7,
// 		img: 'https://media.graphassets.com/cMApbYBURAShVRhlIKhH',
// 	},
// 	{
// 		name: 'Toppo (God)',
// 		value: -8,
// 		img: 'https://media.graphassets.com/4cINWMSb2irraaAV1MdQ',
// 	},
// 	{
// 		name: 'Trunks (Future)',
// 		value: -5,
// 		img: 'https://media.graphassets.com/bRlEkCHIRQuNfa6eUEvw',
// 	},
// 	{
// 		name: 'Trunks (Future) SSJ1',
// 		value: -6,
// 		img: 'https://media.graphassets.com/CgiveuUuRbOYnvsxml8r',
// 	},
// 	{
// 		name: 'Trunks (Kid)',
// 		value: -4,
// 		img: 'https://media.graphassets.com/Z2FjyhYUTFyUVobAes1h',
// 	},
// 	{
// 		name: 'Trunks (Kid) SSJ1',
// 		value: -5,
// 		img: 'https://media.graphassets.com/QisS3qJRRoC5zLwtpmeg',
// 	},
// 	{
// 		name: 'Trunks (Melee)',
// 		value: -5,
// 		img: 'https://media.graphassets.com/nJHvx2PtTgCl21HDus3s',
// 	},
// 	{
// 		name: 'Trunks (Melee) SSJ1',
// 		value: -6,
// 		img: 'https://media.graphassets.com/TgU0AvHdTaaQ3MmKkp7r',
// 	},
// 	{
// 		name: 'Trunks (Sword)',
// 		value: -4,
// 		img: 'https://media.graphassets.com/LNPyUPMSRkSxTOETxKAz',
// 	},
// 	{
// 		name: 'Trunks (Sword) SSJ1',
// 		value: -5,
// 		img: 'https://media.graphassets.com/P3A0QV2VRwy7CXM5caF5',
// 	},
// 	{
// 		name: 'Turles',
// 		value: -4,
// 		img: 'https://media.graphassets.com/mOQDxMf3SI6XNQ85QbZK',
// 	},
// 	{
// 		name: 'Ultimate Gohan',
// 		value: -7,
// 		img: 'https://media.graphassets.com/hjbS54qRUiZqUKqKwmXg',
// 	},
// 	{
// 		name: 'Uub (GT)',
// 		value: -4,
// 		img: 'https://media.graphassets.com/n68XGYfNQWqUzTnEGfbK',
// 	},
// 	{
// 		name: 'Vegeta (GT) SSJ4',
// 		value: -8,
// 		img: 'https://media.graphassets.com/zBmIB5QeRtSKgbBCfSuA',
// 	},
// 	{
// 		name: 'Vegeta (Scouter)',
// 		value: -4,
// 		img: 'https://media.graphassets.com/NXF1FtRwR4CILvTc2bIC',
// 	},
// 	{
// 		name: 'Vegeta (Super)',
// 		value: -5,
// 		img: 'https://media.graphassets.com/eOBjIrCASaS1UiW8vtUF',
// 	},
// 	{
// 		name: 'Vegeta (Super) SSJ1',
// 		value: -6,
// 		img: 'https://media.graphassets.com/4wtkkiONQwyTExci3QSd',
// 	},
// 	{
// 		name: 'Vegeta (Super) SSJB',
// 		value: -8,
// 		img: 'https://media.graphassets.com/tVPOE9fRTiCTEhBvaejd',
// 	},
// 	{
// 		name: 'Vegeta (Super) SSJG',
// 		value: -7,
// 		img: 'https://media.graphassets.com/zDttfxuxRQ6LZ0gktxUM',
// 	},
// 	{
// 		name: 'Vegeta (Z-Early)',
// 		value: -5,
// 		img: 'https://media.graphassets.com/u8mBsIMzQXiMjkcM8axj',
// 	},
// 	{
// 		name: 'Vegeta (Z-Early) SSJ1',
// 		value: -6,
// 		img: 'https://media.graphassets.com/P2BoM6LXRXKZpwXmYZT7',
// 	},
// 	{
// 		name: 'Vegeta (Z-End)',
// 		value: -5,
// 		img: 'https://media.graphassets.com/dFiVJUlTMKnfcIlXSobg',
// 	},
// 	{
// 		name: 'Vegeta (Z-End) SSJ1',
// 		value: -6,
// 		img: 'https://media.graphassets.com/vBzcEBF0S1SHC4HbFpP2',
// 	},
// 	{
// 		name: 'Vegeta (Z-End) SSJ2',
// 		value: -7,
// 		img: 'https://media.graphassets.com/Qxxdf7K7T1a9pYhKpODS',
// 	},
// 	{
// 		name: 'Vegito',
// 		value: -7,
// 		img: 'https://media.graphassets.com/rNR3lARRvae0ab7RrRUv',
// 	},
// 	{
// 		name: 'Vegito SSJB',
// 		value: -10,
// 		img: 'https://media.graphassets.com/8NJ9VOqQgqZutVEYCfmO',
// 	},
// 	{
// 		name: 'Videl',
// 		value: -2,
// 		img: 'https://media.graphassets.com/KraYPIYqRdOt1Uy7w0lc',
// 	},
// 	{
// 		name: 'Whis',
// 		value: -10,
// 		img: 'https://media.graphassets.com/RXIyCzBTQFGrWwj68TUr',
// 	},
// 	{
// 		name: 'Yajirobe',
// 		value: -2,
// 		img: 'https://media.graphassets.com/BczRPZKXR4ypvkk9mqpe',
// 	},
// 	{
// 		name: 'Yamcha',
// 		value: -3,
// 		img: 'https://media.graphassets.com/bJNzXQnER9OCThp6KS2m',
// 	},
// 	{
// 		name: 'Zamasu',
// 		value: -5,
// 		img: 'https://media.graphassets.com/l6EwcdKNQCiSoAOfu5QA',
// 	},
// 	{
// 		name: 'Zarbon',
// 		value: -3,
// 		img: 'https://media.graphassets.com/XkJ8Xio4QNoVq2sfugDp',
// 	},
// ];
// // Second array
// const secondArray = [
// 	{
// 		name: 'Android 13 (Fused)',
// 		value: -7,
// 		abilities: [
// 			{
// 				name: 'Android Barrier',
// 				value: 3,
// 				description: [
// 					'Character creates a barrier around themselves to defend against atks. Can be used while under atk by an opponent.',
// 				],
// 			},
// 			{
// 				name: 'Pump Up',
// 				value: 2,
// 				description: [
// 					'Melee atk power and Ki Blast atk power greatly increase for 15 sec. Move spd greatly decreases.',
// 				],
// 			},
// 			{
// 				name: 'S.S. Deadly Bomber',
// 				value: 3,
// 				description: ['Beam', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Super Explosive Wave',
// 				value: 4,
// 				description: ['Explosive Wave'],
// 			},
// 			{
// 				name: 'S.S. Deadly Hammer',
// 				value: 5,
// 				description: [
// 					'Rush',
// 					'In Sparking Mode',
// 					'Unguardable',
// 					'Played after a hit',
// 					'Speed Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/Z0k2Hu7Tiaypwf5H9fFh',
// 		category: '',
// 	},
// 	{
// 		name: 'Android 13 (Z)',
// 		value: -5,
// 		abilities: [
// 			{
// 				name: 'Wild Sense',
// 				value: 2,
// 				description: [
// 					'Auto dodge a single melee atk from opponent and counteratk.',
// 				],
// 			},
// 			{
// 				name: 'High-Tension',
// 				value: 3,
// 				description: [
// 					'Melee atk power, Ki blast atk power, and ki recovery spd increase for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'Full-Power Energy Wave',
// 				value: 3,
// 				description: ['Beam', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Silent Assassin 13',
// 				value: 3,
// 				description: ['Rush', 'Played after a hit', 'Speed Impact'],
// 			},
// 			{
// 				name: 'S.S. Deadly Bomber',
// 				value: 5,
// 				description: ['Fire', 'In Sparking Mode', 'Blast Impact'],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/MrQbTm4WSVy4tO8Rwoqv',
// 		category: '',
// 	},
// 	{
// 		name: 'Android 16',
// 		value: -5,
// 		abilities: [
// 			{
// 				name: 'Explosive Wave',
// 				value: 2,
// 				description: [
// 					'Creates a ki explosion, blowing away opponents. Can be used while under atk by an opponent.',
// 				],
// 			},
// 			{
// 				name: 'Pump Up',
// 				value: 2,
// 				description: [
// 					'Melee atk power and Ki Blast atk power greatly increase for 10 sec. Move spd decreases slightly.',
// 				],
// 			},
// 			{
// 				name: "Hell's Impact",
// 				value: 3,
// 				description: ['Fire'],
// 			},
// 			{
// 				name: 'Hell Flash',
// 				value: 4,
// 				description: [
// 					'Rush',
// 					'Unguardable',
// 					'Played after a hit',
// 					'Speed Impact',
// 				],
// 			},
// 			{
// 				name: 'Self Destruct Device',
// 				value: 5,
// 				description: [
// 					'Rush',
// 					'In Sparking Mode',
// 					'Unguardable',
// 					'Played after a hit',
// 					'You also take DMG',
// 					'Speed Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/ZXF19jnlRJOj3oJhFWzW',
// 		category: '',
// 	},
// 	{
// 		name: 'Android 17 (Super)',
// 		value: -6,
// 		abilities: [
// 			{
// 				name: 'Android Barrier',
// 				value: 2,
// 				description: [
// 					'Character creates a barrier around themselves to defend against atks. Can be used while under atk by an opponent.',
// 				],
// 			},
// 			{
// 				name: 'Time to Get Serious',
// 				value: 3,
// 				description: [
// 					'Enter Sparking Mode; melee atk power, Ki Blast atk power, Blast power, def, and move spd increase for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'High Power Blitz',
// 				value: 3,
// 				description: ['Beam', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Super Electric Strike',
// 				value: '?',
// 				description: ['Fire'],
// 			},
// 			{
// 				name: 'Barrier Explosion',
// 				value: 5,
// 				description: [
// 					'Rush',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'You also take DMG',
// 					'Speed Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/8W5ORqITe65owEuIrsMA',
// 		category: '',
// 	},
// 	{
// 		name: 'Android 17 (Z)',
// 		value: -5,
// 		abilities: [
// 			{
// 				name: 'Android Barrier',
// 				value: 2,
// 				description: [
// 					'Character creates a barrier around themselves to defend against atks. Can be used while under atk by an opponent.',
// 				],
// 			},
// 			{
// 				name: 'Finish Sign',
// 				value: 3,
// 				description: [
// 					'Melee atk power, Ki blast atk power, and Blast power increase for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'Full-Power Energy Ball',
// 				value: 3,
// 				description: ['Fire'],
// 			},
// 			{
// 				name: 'Photon Flash',
// 				value: 3,
// 				description: ['Beam', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Sadistic Dance',
// 				value: 5,
// 				description: [
// 					'Rush',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Speed Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/BS0fGkh6STJqBTfYUKgp',
// 		category: '',
// 	},
// 	{
// 		name: 'Android 18',
// 		value: -5,
// 		abilities: [
// 			{
// 				name: 'Android Barrier',
// 				value: 3,
// 				description: [
// 					'Character creates a barrier around themselves to defend against atks. Can be used while under atk by an opponent.',
// 				],
// 			},
// 			{
// 				name: 'Super Unyielding Spirit',
// 				value: 3,
// 				description: [
// 					'Enter Sparking Mode; melee atk power and Ki Blast atk power increase for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'Infinity Bullet',
// 				value: 2,
// 				description: ['Continuous Fire', '.'],
// 			},
// 			{
// 				name: 'Energy Wave',
// 				value: 3,
// 				description: ['Beam', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Sadistic 18',
// 				value: 5,
// 				description: [
// 					'Rush',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Speed Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/oJdY4EOXTw2I4iOYXBdb',
// 		category: '',
// 	},
// 	{
// 		name: 'Android 19',
// 		value: -4,
// 		abilities: [
// 			{
// 				name: 'False Courage',
// 				value: 1,
// 				description: [
// 					'Def and resistance to being stunned by atks increases for 10 sec.',
// 				],
// 			},
// 			{
// 				name: 'Pump Up',
// 				value: 2,
// 				description: [
// 					'Melee atk power and Ki Blast atk power greatly increase for 15 sec. Move spd greatly decreases.',
// 				],
// 			},
// 			{
// 				name: 'Full-Power Energy Wave',
// 				value: 3,
// 				description: ['Beam', 'Blast Impact'],
// 			},
// 			{
// 				name: 'High Power Rush',
// 				value: 3,
// 				description: ['Rush', 'Played after a hit', 'Speed Impact'],
// 			},
// 			{
// 				name: 'Drain Life 19',
// 				value: 5,
// 				description: ['Coming Soon.'],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/tiGnSk8vQaKACNpryjtS',
// 		category: '',
// 	},
// 	{
// 		name: 'Anilaza',
// 		value: -8,
// 		abilities: [
// 			{
// 				name: 'Ultrasonic Sensor',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Howl',
// 				value: 3,
// 				description: [
// 					'Coming Soon.Enter Sparking Mode; melee atk power and Ki Blast atk power increase, and def decreases slightly for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'Warp Punch',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Spread Energy Blast',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Destruction Burst',
// 				value: 5,
// 				description: ['Coming Soon.'],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/lXZpL4uIR7i1WzP0eGUH',
// 		category: '',
// 	},
// 	{
// 		name: 'Babidi',
// 		value: -3,
// 		abilities: [
// 			{
// 				name: 'Demon Eye',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Wizard Barrier',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Pui Pui Nice Shot',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Ultimate Explosive Power',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Super Electroshock Sorcery',
// 				value: 5,
// 				description: ['Coming Soon.'],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/zI7h7zETsCqBYefHG1rQ',
// 		category: '',
// 	},
// 	{
// 		name: 'Baby Vegeta (GT)',
// 		value: -5,
// 		abilities: [
// 			{
// 				name: 'Explosive Wave',
// 				value: 2,
// 				description: [
// 					'Creates a ki explosion, blowing away opponents. Can be used while under atk by an opponent.',
// 				],
// 			},
// 			{
// 				name: 'High-Tension',
// 				value: 3,
// 				description: [
// 					'Melee atk power, Ki blast atk power, and ki recovery spd increase for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'Galick Gun',
// 				value: 3,
// 				description: ['Beam', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Finger Blitz Barrage',
// 				value: 2,
// 				description: ['Continuous Fire'],
// 			},
// 			{
// 				name: 'Final Flash',
// 				value: 5,
// 				description: [
// 					'Beam',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Blast Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/9HlIWxVdQJGk2qnd4h4f',
// 		category: '',
// 	},
// 	{
// 		name: 'Bardock',
// 		value: -4,
// 		abilities: [
// 			{
// 				name: 'Shockwave of Rebellion',
// 				value: 4,
// 				description: [
// 					'Enter Sparking mode. Creates a ki explosion, blowing away opponents. Can be used while under atk by an opponent.',
// 				],
// 			},
// 			{
// 				name: 'Saiyan Spirit',
// 				value: 3,
// 				description: [
// 					'Melee atk power, Ki blast atk power, Smash Atk charge spd and Smash Ki Blast charging spd increase for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'Riot Blaster',
// 				value: 3,
// 				description: ['Beam', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Final Revenger',
// 				value: 3,
// 				description: ['Rush', 'Played after a hit', 'Speed Impact'],
// 			},
// 			{
// 				name: 'Final Spirit Cannon',
// 				value: 5,
// 				description: [
// 					'Fire',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Blast Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/uNRqrUQTtKlyWR086a8G',
// 		category: '',
// 	},
// 	{
// 		name: 'Beerus',
// 		value: -10,
// 		abilities: [
// 			{
// 				name: 'Sleep',
// 				value: 4,
// 				description: [
// 					'Sleep for 3 sec to recover all ki gauges and 30% of max HP.',
// 				],
// 			},
// 			{
// 				name: 'Verdict of Vindication',
// 				value: 3,
// 				description: ['Enter Sparking Mode.'],
// 			},
// 			{
// 				name: 'Sphere of Destruction',
// 				value: 3,
// 				description: ['Fire', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Hakai Headshot',
// 				value: 3,
// 				description: ['Rush', 'Played after a hit', 'Speed Impact'],
// 			},
// 			{
// 				name: 'Super Sphere of Destruction',
// 				value: 5,
// 				description: [
// 					'Fire',
// 					'In Sparking Mode',
// 					'Unguardable',
// 					'Played after a hit',
// 					'Blast Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/yn9ybMOcRMijpWj1pZxU',
// 		category: '',
// 	},
// 	{
// 		name: 'Bergamo',
// 		value: -5,
// 		abilities: [
// 			{
// 				name: 'Howl',
// 				value: 3,
// 				description: [
// 					'Enter Sparking Mode; melee atk power and Ki Blast atk power increase, and def decreases slightly for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'Come at Me!',
// 				value: 3,
// 				description: [
// 					'After taking an atk, melee atk power, Ki Blast atk power, Blast power, and def increase for 15 sec; you will also perform a counteratk.',
// 				],
// 			},
// 			{
// 				name: 'Wolfgang Penetrator',
// 				value: 3,
// 				description: ['Beam', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Danger Knuckle',
// 				value: 3,
// 				description: ['Rush', 'Played after a hit', 'Speed Impact'],
// 			},
// 			{
// 				name: 'Triangle Danger Beam',
// 				value: 5,
// 				description: [
// 					'Rush',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Speed Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/5mHvbzzRmuDrf5b9VHQk',
// 		category: '',
// 	},
// 	{
// 		name: 'BoJack',
// 		value: -5,
// 		abilities: [
// 			{
// 				name: 'Psycho Barrier',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Full Power',
// 				value: 3,
// 				description: ['Enter Sparking Mode.'],
// 			},
// 			{
// 				name: 'Full Power Energy Ball',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Trap Shooter',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Grand Smasher',
// 				value: 5,
// 				description: ['Coming Soon.'],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/CaqyXrbWR2i3Ky54yAJC',
// 		category: '',
// 	},
// 	{
// 		name: 'BoJack (Full)',
// 		value: -7,
// 		abilities: [
// 			{
// 				name: 'Psycho Barrier',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Pump Up',
// 				value: 2,
// 				description: [
// 					'Melee atk power and Ki Blast atk power greatly increase for 15 sec. Move spd greatly decreases.',
// 				],
// 			},
// 			{
// 				name: 'Grand Smasher',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Galactic Tyrant',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Galactic Buster',
// 				value: 5,
// 				description: ['Coming Soon.'],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/rzd2EGvKSfmeb5tL2gE5',
// 		category: '',
// 	},
// 	{
// 		name: 'Broly (Super)',
// 		value: -5,
// 		abilities: [
// 			{
// 				name: 'Full-Power Charge',
// 				value: 2,
// 				description: ['Ki gauge fully recovers.'],
// 			},
// 			{
// 				name: 'Going Berserk',
// 				value: 3,
// 				description: ['Enter Sparking Mode.'],
// 			},
// 			{
// 				name: 'Full-Power Energy Wave',
// 				value: 3,
// 				description: ['Beam', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Gigantic Crash',
// 				value: 4,
// 				description: [
// 					'Rush',
// 					'Unguardable',
// 					'Played after a hit',
// 					'Speed Impact',
// 				],
// 			},
// 			{
// 				name: 'Gigantic Impact',
// 				value: 5,
// 				description: [
// 					'Rush',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Speed Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/LM9UkYHOTL6V7YeT79s3',
// 		category: '',
// 	},
// 	{
// 		name: 'Broly (Super) SSJ1',
// 		value: -6,
// 		abilities: [
// 			{
// 				name: 'Saiyan Spirit',
// 				value: 3,
// 				description: [
// 					'Melee atk power, Ki blast atk power, Blast power, and dmg inflicted from consecutive hits (such as combos) increase for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'Howl',
// 				value: 3,
// 				description: [
// 					'Enter Sparking Mode; melee atk power and Ki Blast atk power increase, and def decreases slightly for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'Gigantic Cannon',
// 				value: 3,
// 				description: ['Beam', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Gigantic Rage',
// 				value: 3,
// 				description: ['Rush', 'Played after a hit', 'Speed Impact'],
// 			},
// 			{
// 				name: 'Gigantic Ball',
// 				value: 5,
// 				description: [
// 					'Fire',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Blast Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/CpPqywiZSB2ZMMhixDnH',
// 		category: '',
// 	},
// 	{
// 		name: 'Broly (Super) SSJ2',
// 		value: -9,
// 		abilities: [
// 			{
// 				name: 'Wild Move',
// 				value: 2,
// 				description: ['Instantly move behind opponent.'],
// 			},
// 			{
// 				name: 'Untamed Instinct',
// 				value: '?',
// 				description: [
// 					'Enter Sparking Mode; melee atk power, Ki Blast atk power, and Blast power increase for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'Gigantic Cannon',
// 				value: 3,
// 				description: ['Beam', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Blaster Meteor',
// 				value: 4,
// 				description: ['Explosive Wave'],
// 			},
// 			{
// 				name: 'Gigantic Catastrophe',
// 				value: 5,
// 				description: [
// 					'Beam',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Blast Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/FAX95i9pQbuJKvbOhwSE',
// 		category: '',
// 	},
// 	{
// 		name: 'Broly (Z)',
// 		value: -5,
// 		abilities: [
// 			{
// 				name: 'Wild Sense',
// 				value: 2,
// 				description: [
// 					'Auto dodge a single melee atk from opponent and counteratk.',
// 				],
// 			},
// 			{
// 				name: 'Kakarottt!',
// 				value: 3,
// 				description: ['Enter Sparking Mode.'],
// 			},
// 			{
// 				name: 'Full-Power Energy Wave',
// 				value: 3,
// 				description: ['Beam', 'Blast Impact'],
// 			},
// 			{
// 				name: 'High Speed Rush',
// 				value: 3,
// 				description: ['Rush', 'Played after a hit', 'Speed Impact'],
// 			},
// 			{
// 				name: 'Super Explosive Wave',
// 				value: 5,
// 				description: [
// 					'Explosive Wave',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/R90pzqAkS6iD9EjAIsnH',
// 		category: '',
// 	},
// 	{
// 		name: 'Broly (Z) SSJ1',
// 		value: -7,
// 		abilities: [
// 			{
// 				name: 'Saiyan Spirit',
// 				value: 3,
// 				description: [
// 					'Melee atk power, Ki blast atk power and Blast power increase for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'Kakarottt!',
// 				value: 3,
// 				description: ['Enter Sparking Mode.'],
// 			},
// 			{
// 				name: 'Bloody Smash',
// 				value: 3,
// 				description: ['Rush', 'Played after a hit', 'Speed Impact'],
// 			},
// 			{
// 				name: 'Trap Shooter',
// 				value: 2,
// 				description: ['Simultaneous Fire'],
// 			},
// 			{
// 				name: 'Eraser Cannon',
// 				value: 5,
// 				description: ['Fire', 'In Sparking Mode', 'Played after a hit'],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/iQJ7afnRn2eCWyZFNZUO',
// 		category: '',
// 	},
// 	{
// 		name: 'Broly (Z) SSJL',
// 		value: -9,
// 		abilities: [
// 			{
// 				name: 'Explosive Wave',
// 				value: 2,
// 				description: [
// 					'Creates a ki explosion, blowing away opponents. Can be used while under atk by an opponent.',
// 				],
// 			},
// 			{
// 				name: 'Kakarottt!',
// 				value: 3,
// 				description: [
// 					'Enter Sparking Mode; melee atk power, Ki blast atk power, and def greatly increase for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'Eraser Cannon',
// 				value: 3,
// 				description: ['Fire', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Gigantic Hammer',
// 				value: 4,
// 				description: [
// 					'Rush',
// 					'Unguardable',
// 					'Played after a hit',
// 					'Speed Impact',
// 				],
// 			},
// 			{
// 				name: 'Omega Blaster',
// 				value: 5,
// 				description: [
// 					'Fire',
// 					'In Sparking Mode',
// 					'Unguardable',
// 					'Played after a hit',
// 					'Blast Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/aWRzJccjRD2c0Lds06Gd',
// 		category: '',
// 	},
// 	{
// 		name: 'Burter',
// 		value: -3,
// 		abilities: [
// 			{
// 				name: 'Afterimage',
// 				value: 2,
// 				description: [
// 					'Auto dodge a single atk of any kind, except for Ki Blasts.',
// 				],
// 			},
// 			{
// 				name: 'SP Fighting Pose 2',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Full-Power Energy Ball',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Space Mach Attack',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Purple Comet Attack',
// 				value: 5,
// 				description: ['Coming Soon.'],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/xTm0nkVpRqv0Nj7BU6uA',
// 		category: '',
// 	},
// 	{
// 		name: 'Cabba',
// 		value: -5,
// 		abilities: [
// 			{
// 				name: 'Explosive Wave',
// 				value: 2,
// 				description: [
// 					'Creates a ki explosion, blowing away opponents. Can be used while under atk by an opponent.',
// 				],
// 			},
// 			{
// 				name: 'Full Power',
// 				value: 3,
// 				description: ['Enter Sparking Mode.'],
// 			},
// 			{
// 				name: 'Galick Gun',
// 				value: 3,
// 				description: ['Beam', 'Blast Impact'],
// 			},
// 			{
// 				name: 'High Speed Rush',
// 				value: 3,
// 				description: ['Rush', 'Played after a hit', 'Speed Impact'],
// 			},
// 			{
// 				name: 'Galick Rage',
// 				value: 5,
// 				description: [
// 					'Rush',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Speed Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/Uix5nXGhTCOlcCdWESGQ',
// 		category: '',
// 	},
// 	{
// 		name: 'Cabba SSJ1',
// 		value: -6,
// 		abilities: [
// 			{
// 				name: 'Explosive Wave',
// 				value: 2,
// 				description: [
// 					'Creates a ki explosion, blowing away opponents. Can be used while under atk by an opponent.',
// 				],
// 			},
// 			{
// 				name: 'Wild Sense',
// 				value: 2,
// 				description: [
// 					'Auto dodge a single melee atk from opponent and counteratk.',
// 				],
// 			},
// 			{
// 				name: 'Galick Rain',
// 				value: 3,
// 				description: ['Continuous Fire'],
// 			},
// 			{
// 				name: 'Galick Rage',
// 				value: 3,
// 				description: ['Rush', 'Played after a hit', 'Speed Impact'],
// 			},
// 			{
// 				name: 'Super Galick Cannon',
// 				value: 5,
// 				description: [
// 					'Beam',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Blast Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/JlYVQvxlTdeteRlal9Wx',
// 		category: '',
// 	},
// 	{
// 		name: 'Cabba SSJ2',
// 		value: -7,
// 		abilities: [
// 			{
// 				name: 'Explosive Wave',
// 				value: 2,
// 				description: [
// 					'Creates a ki explosion, blowing away opponents. Can be used while under atk by an opponent.',
// 				],
// 			},
// 			{
// 				name: 'Growth',
// 				value: 3,
// 				description: ['Enter Sparking Mode.'],
// 			},
// 			{
// 				name: 'Super Galick Cannon',
// 				value: 3,
// 				description: ['Beam', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Galick Rain',
// 				value: 3,
// 				description: ['Continuous Fire'],
// 			},
// 			{
// 				name: 'Final Stream',
// 				value: 5,
// 				description: [
// 					'Beam',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Blast Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/4FEO5MRxRBc2xXI3iE7c',
// 		category: '',
// 	},
// 	{
// 		name: 'Caulifla',
// 		value: -5,
// 		abilities: [
// 			{
// 				name: 'False Courage',
// 				value: 1,
// 				description: [
// 					'Def and resistance to being stunned by atks increases for 10 sec.',
// 				],
// 			},
// 			{
// 				name: 'Wild Sense',
// 				value: 2,
// 				description: [
// 					'Auto dodge a single melee atk from opponent and counteratk.',
// 				],
// 			},
// 			{
// 				name: 'Full-Power Energy Wave',
// 				value: 3,
// 				description: ['Beam', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Super Explosive Wave',
// 				value: 4,
// 				description: ['Explosive Wave'],
// 			},
// 			{
// 				name: 'Crush Cannon',
// 				value: 5,
// 				description: ['Simultaneous Fire', 'In Sparking Mode'],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/On3mEmoBSumnTg5njW0H',
// 		category: '',
// 	},
// 	{
// 		name: 'Caulifla SSJ2',
// 		value: -6,
// 		abilities: [
// 			{
// 				name: 'Wild Sense',
// 				value: 2,
// 				description: [
// 					'Auto dodge a single melee atk from opponent and counteratk.',
// 				],
// 			},
// 			{
// 				name: 'Full Power',
// 				value: 3,
// 				description: ['Enter Sparking Mode.'],
// 			},
// 			{
// 				name: 'Energy Blast',
// 				value: 3,
// 				description: ['Beam', 'Blast Impact'],
// 			},
// 			{
// 				name: 'High Power Rush',
// 				value: 3,
// 				description: ['Rush', 'Played after a hit', 'Speed Impact'],
// 			},
// 			{
// 				name: 'Limit Break Blaster',
// 				value: 5,
// 				description: [
// 					'Beam',
// 					'In Sparking Mode',
// 					'Unguardable',
// 					'Played after a hit',
// 					'Blast Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/MOpMPuHTRuEw3qwt49wu',
// 		category: '',
// 	},
// 	{
// 		name: 'Cell (1st Form)',
// 		value: -5,
// 		abilities: [
// 			{
// 				name: 'Solar Flare',
// 				value: 2,
// 				description: [
// 					'Unguardable atk. Renders opponent defenseless for 5 sec.',
// 				],
// 			},
// 			{
// 				name: 'Afterimage',
// 				value: 2,
// 				description: [
// 					'Auto dodge a single atk of any kind, except for Ki Blasts.',
// 				],
// 			},
// 			{
// 				name: 'Kamehameha',
// 				value: 3,
// 				description: ['Beam', 'Chargeable', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Special Beam Cannon',
// 				value: 3,
// 				description: ['Beam', 'Chargeable'],
// 			},
// 			{
// 				name: 'Drain Life Cell',
// 				value: 5,
// 				description: [
// 					'Rush',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Spead Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/tuSO66eLQF6EE2RHhP4Q',
// 		category: '',
// 	},
// 	{
// 		name: 'Cell (2nd Form)',
// 		value: -5,
// 		abilities: [
// 			{
// 				name: 'Solar Flare',
// 				value: 2,
// 				description: [
// 					'Unguardable atk. Renders opponent defenseless for 5 sec.',
// 				],
// 			},
// 			{
// 				name: 'Pump Up',
// 				value: 2,
// 				description: [
// 					'Melee atk power and Ki Blast atk power greatly increase for 15 sec. Move spd greatly decreases.',
// 				],
// 			},
// 			{
// 				name: 'Big Bang Crash',
// 				value: 3,
// 				description: ['Fire', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Drain Life Cell',
// 				value: 3,
// 				description: ['Rush', 'Played after a hit'],
// 			},
// 			{
// 				name: 'Unforgivable!',
// 				value: 5,
// 				description: [
// 					'Explosive Wave',
// 					'In Sparking Mode',
// 					'Unguardable',
// 					'Played after a hit',
// 					'You also take DMG',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/bx9Jp311R3GtH7aqC7wb',
// 		category: '',
// 	},
// 	{
// 		name: 'Cell (Perfect)',
// 		value: -6,
// 		abilities: [
// 			{
// 				name: 'Explosive Wave',
// 				value: 2,
// 				description: [
// 					'Creates a ki explosion, blowing away opponents. Can be used while under atk by an opponent.',
// 				],
// 			},
// 			{
// 				name: 'Afterimage',
// 				value: 2,
// 				description: [
// 					'Auto dodge a single atk of any kind, except for Ki Blasts.',
// 				],
// 			},
// 			{
// 				name: 'Super Kamehameha',
// 				value: 3,
// 				description: ['Beam', 'Chargeable', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Barrage Death Beam',
// 				value: 2,
// 				description: ['Beam'],
// 			},
// 			{
// 				name: 'Perfect Barrier',
// 				value: 5,
// 				description: ['Explosive Wave', 'In Sparking Mode'],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/etPZGwgZQ5mLlrNo5g0t',
// 		category: '',
// 	},
// 	{
// 		name: 'Cell Jr.',
// 		value: -3,
// 		abilities: [
// 			{
// 				name: 'Solar Flare',
// 				value: 2,
// 				description: [
// 					'Unguardable atk. Renders opponent defenseless for 5 sec.',
// 				],
// 			},
// 			{
// 				name: 'Explosive Wave',
// 				value: 2,
// 				description: [
// 					'Creates a ki explosion, blowing away opponents. Can be used while under atk by an opponent.',
// 				],
// 			},
// 			{
// 				name: 'Special Beam Cannon',
// 				value: 3,
// 				description: ['Beam', 'Chargeable'],
// 			},
// 			{
// 				name: 'Innocence Rush',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Super Kamehameha',
// 				value: 5,
// 				description: ['Beam', 'In Sparking Mode', 'Blast Impact'],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/B5zrhBcES3KMtyxQRdZO',
// 		category: '',
// 	},
// 	{
// 		name: 'Chiaotzu',
// 		value: -2,
// 		abilities: [
// 			{
// 				name: 'Telekinesis',
// 				value: 2,
// 				description: ['Unguardable atk. Render opponent paralyzed for 5 sec.'],
// 			},
// 			{
// 				name: 'Afterimage',
// 				value: 2,
// 				description: [
// 					'Auto dodge a single atk of any kind, except for Ki Blasts.',
// 				],
// 			},
// 			{
// 				name: 'Dodon Ray',
// 				value: 2,
// 				description: ['Beam'],
// 			},
// 			{
// 				name: 'Psychic Rock Throw',
// 				value: 2,
// 				description: ['Fire'],
// 			},
// 			{
// 				name: 'Farewell, Mr. Tien',
// 				value: 5,
// 				description: [
// 					'Rush',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Speed Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/iJImpFPtSxngoWcQEOHA',
// 		category: '',
// 	},
// 	{
// 		name: 'Cooler',
// 		value: -6,
// 		abilities: [
// 			{
// 				name: 'Psychokinesis',
// 				value: 2,
// 				description: ['Unguardable atk. Render opponent paralyzed for 5 sec.'],
// 			},
// 			{
// 				name: 'Afterimage',
// 				value: 2,
// 				description: [
// 					'Auto dodge a single atk of any kind, except for Ki Blasts.',
// 				],
// 			},
// 			{
// 				name: 'Full-Power Energy Wave',
// 				value: 3,
// 				description: ['Beam', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Darkness Eye Beam',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Death Ball',
// 				value: 5,
// 				description: ['Coming Soon.'],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/ugMoYfl5T7CrkgP17M5h',
// 		category: '',
// 	},
// 	{
// 		name: 'Cooler (Final)',
// 		value: -7,
// 		abilities: [
// 			{
// 				name: 'Psychokinesis',
// 				value: 2,
// 				description: ['Unguardable atk. Render opponent paralyzed for 5 sec.'],
// 			},
// 			{
// 				name: 'Psycho Barrier',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Death Beam',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Death Chaser',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Supernova',
// 				value: 5,
// 				description: ['Coming Soon.'],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/kdUzRWFdTWi2cdmz53gF',
// 		category: '',
// 	},
// 	{
// 		name: 'Cui',
// 		value: -3,
// 		abilities: [
// 			{
// 				name: 'False Courage',
// 				value: 1,
// 				description: [
// 					'Def and resistance to being stunned by atks increases for 10 sec.',
// 				],
// 			},
// 			{
// 				name: 'Sleep',
// 				value: 4,
// 				description: [
// 					'Sleep for 3 sec to recover all ki gauges and 30% of max HP.',
// 				],
// 			},
// 			{
// 				name: 'Full-Power Energy Wave',
// 				value: 3,
// 				description: ['Beam', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Full-Power Energy Wave Combo',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Ah! Lord Frieza!',
// 				value: 5,
// 				description: ['Coming Soon.'],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/phSURLTd6YDvKPZRPQ9A',
// 		category: '',
// 	},
// 	{
// 		name: 'Dabura',
// 		value: -6,
// 		abilities: [
// 			{
// 				name: 'Evil Breath',
// 				value: 1,
// 				description: ['Unguardable atk. Short range only.'],
// 			},
// 			{
// 				name: 'Afterimage Strike',
// 				value: 3,
// 				description: ['Auto dodge all atks except for Ki Blasts for 15 sec.'],
// 			},
// 			{
// 				name: 'Evil Impulse',
// 				value: 3,
// 				description: ['Fire', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Evil Flame',
// 				value: 3,
// 				description: ['Shortrange energy atk', 'Unguardable'],
// 			},
// 			{
// 				name: 'Dark Sword Strike',
// 				value: 5,
// 				description: [
// 					'Rush',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Spead Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/600i4aAQ7y3TJw1mUmOA',
// 		category: '',
// 	},
// 	{
// 		name: 'Dodoria',
// 		value: -3,
// 		abilities: [
// 			{
// 				name: 'False Courage',
// 				value: 1,
// 				description: [
// 					'Def and resistance to being stunned by atks increases for 10 sec.',
// 				],
// 			},
// 			{
// 				name: 'Pump Up',
// 				value: 2,
// 				description: [
// 					'Melee atk power and Ki Blast atk power greatly increase for 15 sec. Move spd greatly decreases.',
// 				],
// 			},
// 			{
// 				name: 'Chou Makouhou',
// 				value: 3,
// 				description: ['Beam', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Dodria Head Ram',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Maximum Buster',
// 				value: 5,
// 				description: ['Coming Soon.'],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/NmNR2LxrTHmZS3RQWgab',
// 		category: '',
// 	},
// 	{
// 		name: 'Dr. Gero',
// 		value: -4,
// 		abilities: [
// 			{
// 				name: 'False Courage',
// 				value: 1,
// 				description: [
// 					'Def and resistance to being stunned by atks increases for 15 sec. Melee atk power and Ki Blast atk power decrease.',
// 				],
// 			},
// 			{
// 				name: 'Finish Sign',
// 				value: 3,
// 				description: [
// 					'Melee atk power, Ki blast atk power, and Blast power increase for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'Full-Power Energy Wave',
// 				value: 3,
// 				description: ['Beam', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Bionic Punisher',
// 				value: 3,
// 				description: ['Mow down and explode'],
// 			},
// 			{
// 				name: 'Drain Life 20',
// 				value: 5,
// 				description: [
// 					'Rush',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Spead Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/OzTopJlVR1CC74rDwZ7B',
// 		category: '',
// 	},
// 	{
// 		name: 'Dr. Wheelo',
// 		value: -4,
// 		abilities: [
// 			{
// 				name: 'Barrier',
// 				value: 3,
// 				description: [
// 					'Character creates a barrier around themselves to defend against atks. Can be used while under atk by an opponent.',
// 				],
// 			},
// 			{
// 				name: 'Full Power',
// 				value: 3,
// 				description: ['Enter Sparking Mode.'],
// 			},
// 			{
// 				name: 'Photon Strike',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Gigantic Bomber',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Planet Geyser',
// 				value: 5,
// 				description: ['Coming Soon.'],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/AhucdGqyTpWPOHo78SE8',
// 		category: '',
// 	},
// 	{
// 		name: 'Dyspo',
// 		value: -6,
// 		abilities: [
// 			{
// 				name: 'Super Maximum Light Speed Mode',
// 				value: 3,
// 				description: ['Move spd greatlly increases for 15 sec.'],
// 			},
// 			{
// 				name: 'Pride Trooper Pose 2',
// 				value: 3,
// 				description: [
// 					'Enter Sparking Mode; melee atk power and Ki Blast atk power increase for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'Justice Crusher',
// 				value: 3,
// 				description: ['Beam', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Justice Kick',
// 				value: 3,
// 				description: ['Rush', 'Played after a hit', 'Speed Impact'],
// 			},
// 			{
// 				name: 'United Justice Stream',
// 				value: 5,
// 				description: [
// 					'Beam',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Blast Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/W4VD67bFQ4OlEK0g41Jo',
// 		category: '',
// 	},
// 	{
// 		name: 'Frieza (1st Form)',
// 		value: -5,
// 		abilities: [
// 			{
// 				name: 'Psychokinesis',
// 				value: 2,
// 				description: ['Unguardable atk. Render opponent paralyzed for 3 sec.'],
// 			},
// 			{
// 				name: 'Pump Up',
// 				value: 2,
// 				description: [
// 					'Melee atk power and Ki Blast atk power greatly increase for 15 sec. Ki recovers more slowly.',
// 				],
// 			},
// 			{
// 				name: 'Death Beam',
// 				value: 2,
// 				description: ['Beam'],
// 			},
// 			{
// 				name: 'Punishing Rush',
// 				value: 3,
// 				description: ['Rush', 'Played after a hit', 'Speed Impact'],
// 			},
// 			{
// 				name: 'Death Ball',
// 				value: 5,
// 				description: ['Fire', 'In Sparking Mode', 'Blast Impact'],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/Gf23SvIZQk6mF4TZcJJ9',
// 		category: '',
// 	},
// 	{
// 		name: 'Frieza (2nd Form)',
// 		value: -5,
// 		abilities: [
// 			{
// 				name: 'Explosive Wave',
// 				value: 2,
// 				description: [
// 					'Creates a ki explosion, blowing away opponents. Can be used while under atk by an opponent.',
// 				],
// 			},
// 			{
// 				name: 'Finish Sign',
// 				value: 3,
// 				description: [
// 					'Melee atk power and Ki blast atk power increase for 15 sec. Blast power greatly increases.',
// 				],
// 			},
// 			{
// 				name: 'Punishing Blaster',
// 				value: 3,
// 				description: ['Beam', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Death Storm',
// 				value: 4,
// 				description: ['Explosive Wave'],
// 			},
// 			{
// 				name: 'HAIL Frieza',
// 				value: 5,
// 				description: [
// 					'Rush',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Blast Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/D7bFH9vSTg2mgx3o2gZH',
// 		category: '',
// 	},
// 	{
// 		name: 'Frieza (3rd Form)',
// 		value: -5,
// 		abilities: [
// 			{
// 				name: 'Explosive Wave',
// 				value: 2,
// 				description: [
// 					'Creates a ki explosion, blowing away opponents. Can be used while under atk by an opponent.',
// 				],
// 			},
// 			{
// 				name: 'High-Tension',
// 				value: 3,
// 				description: [
// 					'Melee atk power, Ki blast atk power, and ki recovery spd increase for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'Barrage Death Beam',
// 				value: 2,
// 				description: ['Beam'],
// 			},
// 			{
// 				name: 'High Speed Rush',
// 				value: 3,
// 				description: ['Rush', 'Played after a hit', 'Speed Impact'],
// 			},
// 			{
// 				name: 'Crazy Finger Beam',
// 				value: 5,
// 				description: [
// 					'Rush',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Blast Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/9BuirKdDQEEHiXW9M6eP',
// 		category: '',
// 	},
// 	{
// 		name: 'Frieza (4th Form)',
// 		value: -6,
// 		abilities: [
// 			{
// 				name: 'Psychokinesis',
// 				value: 2,
// 				description: ['Unguardable atk. Render opponent paralyzed for 3 sec.'],
// 			},
// 			{
// 				name: 'Your Arrogance Disgusts Me!',
// 				value: 3,
// 				description: ['Enter Sparking Mode.'],
// 			},
// 			{
// 				name: 'Barrage Death Beam',
// 				value: 2,
// 				description: ['Beam'],
// 			},
// 			{
// 				name: 'You Might Die This Time',
// 				value: 3,
// 				description: ['Rush', 'Played after a hit'],
// 			},
// 			{
// 				name: "I'll Destroy This Planet",
// 				value: 5,
// 				description: ['Fire', 'In Sparking Mode', 'Blast Impact'],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/UKEPi2hfTKq0hkA7XT7f',
// 		category: '',
// 	},
// 	{
// 		name: 'Frieza (Full)',
// 		value: -7,
// 		abilities: [
// 			{
// 				name: 'Psychokinesis',
// 				value: 2,
// 				description: ['Unguardable atk. Render opponent paralyzed for 3 sec.'],
// 			},
// 			{
// 				name: 'Long Awaited-for 100%',
// 				value: 3,
// 				description: ['Enter Sparking Mode.'],
// 			},
// 			{
// 				name: 'Death Saucer',
// 				value: 3,
// 				description: ['Fire', 'Unguardable'],
// 			},
// 			{
// 				name: 'Nova Strike',
// 				value: 4,
// 				description: ['Rush', 'Unguardable', 'Speed Impact'],
// 			},
// 			{
// 				name: "Im the One Who'll Kill You!",
// 				value: 5,
// 				description: [
// 					'Beam',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Blast Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/MwZB26qSZ6HKLXUkoTse',
// 		category: '',
// 	},
// 	{
// 		name: 'Frieza (Super)',
// 		value: -6,
// 		abilities: [
// 			{
// 				name: 'Psychokinesis',
// 				value: 2,
// 				description: ['Unguardable atk. Render opponent paralyzed for 5 sec.'],
// 			},
// 			{
// 				name: 'Power of Revenge',
// 				value: 3,
// 				description: [
// 					'Melee atk power, Ki blast atk power, Blast power, and dmg inflicted from consecutive hits (such as combos) increase for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'Death Beam',
// 				value: 2,
// 				description: ['Beam'],
// 			},
// 			{
// 				name: 'Super Nova Strike',
// 				value: 3,
// 				description: [
// 					'Rush',
// 					'Unguardable',
// 					'Played after a hit',
// 					'Speed Impact',
// 				],
// 			},
// 			{
// 				name: 'Super Death Ball',
// 				value: 5,
// 				description: [
// 					'Fire',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Blast Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/KiZDdATrQru3F1civ6lZ',
// 		category: '',
// 	},
// 	{
// 		name: 'Frieza Force Soldier',
// 		value: -2,
// 		abilities: [
// 			{
// 				name: 'Full-Power Charge',
// 				value: 2,
// 				description: ['Ki gauge fully recovers.'],
// 			},
// 			{
// 				name: 'Sleep',
// 				value: 4,
// 				description: [
// 					'Sleep for 3 sec to recover all ki gauges and 30% of max HP.',
// 				],
// 			},
// 			{
// 				name: 'Energy Wave',
// 				value: 3,
// 				description: ['Beam', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Full-Power Energy Wave',
// 				value: 3,
// 				description: ['Beam', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Life-Risking Blow!',
// 				value: 5,
// 				description: ['Coming Soon.'],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/ydYrcAu4TzWDTYE1CrvW',
// 		category: '',
// 	},
// 	{
// 		name: 'Frost',
// 		value: -6,
// 		abilities: [
// 			{
// 				name: 'Explosive Wave',
// 				value: 2,
// 				description: [
// 					'Creates a ki explosion, blowing away opponents. Can be used while under atk by an opponent.',
// 				],
// 			},
// 			{
// 				name: 'Welcome to My World',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Choas Beam',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Secret Poison',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Chaos Ball',
// 				value: 5,
// 				description: ['Coming Soon.'],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/orKzG1gISQWSftw7fdNd',
// 		category: '',
// 	},
// 	{
// 		name: 'Fused Zamasu',
// 		value: -8,
// 		abilities: [
// 			{
// 				name: 'Immortal Body',
// 				value: 4,
// 				description: ['HP recovers by 20% of max.'],
// 			},
// 			{
// 				name: 'This is True Justice!',
// 				value: 3,
// 				description: ['Enter Sparking Mode.'],
// 			},
// 			{
// 				name: 'Holy Wrath',
// 				value: 3,
// 				description: ['Fire', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Blades of Judgement',
// 				value: 3,
// 				description: ['Continuous Fire'],
// 			},
// 			{
// 				name: 'Lightning of Absolution',
// 				value: 5,
// 				description: [
// 					'Rush',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Speed Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/SXJ7FFaQQ4G8gyzqOGan',
// 		category: '',
// 	},
// 	{
// 		name: 'Fused Zamasu (Corrupted)',
// 		value: -9,
// 		abilities: [
// 			{
// 				name: 'Explosive Wave',
// 				value: 2,
// 				description: [
// 					'Creates a ki explosion, blowing away opponents. Can be used while under atk by an opponent.',
// 				],
// 			},
// 			{
// 				name: 'Light of Justice!',
// 				value: 3,
// 				description: [
// 					'Melee atk power, Ki blast atk power, Blast power, and dmg inflicted from consecutive hits (such as combos) increase for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'Mark of Condemntation',
// 				value: 3,
// 				description: ['Fire', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Violent Fierce God Striker',
// 				value: 3,
// 				description: ['Rush', 'Played after a hit', 'Speed Impact'],
// 			},
// 			{
// 				name: 'Divine Hammer',
// 				value: 5,
// 				description: [
// 					'Rush',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Speed Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/v1YZiYxoTBqivEnRqQ94',
// 		category: '',
// 	},
// 	{
// 		name: 'Ginyu',
// 		value: -4,
// 		abilities: [
// 			{
// 				name: 'SP Fighting Pose 5',
// 				value: 3,
// 				description: ['Enter Sparking Mode.'],
// 			},
// 			{
// 				name: 'Dangerous Shock',
// 				value: 1,
// 				description: [
// 					'Inflict dmg on self; melee atk power, Ki Blast atk power, and Blast power increase for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'Full-Power Energy Wave',
// 				value: 3,
// 				description: ['Beam', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Galaxy Dynamite',
// 				value: 3,
// 				description: ['Fire', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Body Change',
// 				value: 5,
// 				description: [
// 					'Fire',
// 					'In Sparking Mode',
// 					'Unguardable',
// 					'Played after a hit',
// 					'Switch Body',
// 					'When you and your opponent switch bodies, you cannot use Transformation, Switch, skills, Blasts, or Ultimate Blasts.',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/wg0xxioMQii9ULmu9usu',
// 		category: '',
// 	},
// 	{
// 		name: 'Gogeta (GT) SSJ4',
// 		value: -10,
// 		abilities: [
// 			{
// 				name: 'Wild Sense',
// 				value: 2,
// 				description: [
// 					'Auto dodge a single melee atk from opponent and counteratk.',
// 				],
// 			},
// 			{
// 				name: 'Power Up to the Very Limit',
// 				value: 3,
// 				description: ['Enter Sparking Mode.'],
// 			},
// 			{
// 				name: 'Big Bang Kamehameha',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Ultimate Impact',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Ultra Big Bang Kamehameha',
// 				value: 5,
// 				description: ['Coming Soon.'],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/tWRlzx1XQhamVRy63dND',
// 		category: '',
// 	},
// 	{
// 		name: 'Gogeta (Super)',
// 		value: -7,
// 		abilities: [
// 			{
// 				name: 'Wild Sense',
// 				value: 2,
// 				description: [
// 					'Auto dodge a single melee atk from opponent and counteratk.',
// 				],
// 			},
// 			{
// 				name: 'Here We Go!',
// 				value: '?',
// 				description: [
// 					'Enter Sparking Mode; melee atk power, Ki Blast atk power, Blast power, def, and ki recovery spd increase for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'Super Kamehameha',
// 				value: 3,
// 				description: ['Beam', 'Chargeable', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Super Explosive Wave',
// 				value: 4,
// 				description: ['Explosive Wave'],
// 			},
// 			{
// 				name: 'Big Bang Kamehameha',
// 				value: 5,
// 				description: [
// 					'Beam',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Blast Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/JMiGv28Q1icUJuJbTJ1t',
// 		category: '',
// 	},
// 	{
// 		name: 'Gogeta (Super) SSJ1',
// 		value: -8,
// 		abilities: [
// 			{
// 				name: 'Instant Transmission',
// 				value: 2,
// 				description: ['Instantly move behind opponent.'],
// 			},
// 			{
// 				name: 'Finish Sign',
// 				value: 3,
// 				description: [
// 					'Melee atk power, Ki blast atk power, and Blast power increase for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'Super Kamehameha',
// 				value: 3,
// 				description: ['Beam', 'Chargeable', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Rising Vortex',
// 				value: 3,
// 				description: ['Rush', 'Played after a hit', 'Speed Impact'],
// 			},
// 			{
// 				name: 'Stardust Fall',
// 				value: 5,
// 				description: [
// 					'Rush',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Speed Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/rPhISCkPQ56noo0gYAg7',
// 		category: '',
// 	},
// 	{
// 		name: 'Gogeta (Super) SSJB',
// 		value: -10,
// 		abilities: [
// 			{
// 				name: 'Instant Transmission',
// 				value: 2,
// 				description: ['Instantly move behind opponent.'],
// 			},
// 			{
// 				name: 'Stardust Barrier',
// 				value: 1,
// 				description: [
// 					'Character creates a barrier around themselves to defend against atks. Can be used while under atk by an opponent.',
// 				],
// 			},
// 			{
// 				name: 'Stardust Blaster',
// 				value: 3,
// 				description: ['Fire'],
// 			},
// 			{
// 				name: 'Meteor Explosion',
// 				value: 3,
// 				description: ['Rush', 'Played after a hit', 'Speed Impact'],
// 			},
// 			{
// 				name: 'Ultimate Kamehameha',
// 				value: 5,
// 				description: [
// 					'Beam',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Blast Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/wkNHt6OKSIGEIi8buGRX',
// 		category: '',
// 	},
// 	{
// 		name: 'Gogeta (Z) SSJ1',
// 		value: -8,
// 		abilities: [
// 			{
// 				name: 'Immovable Stance',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: "I'm the One Who Will Defeat You!",
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Big Bang Kamehameha',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Punisher Drive',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Stardust Breaker',
// 				value: 5,
// 				description: ['Coming Soon.'],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/w8uoZyASru7paq6EwulG',
// 		category: '',
// 	},
// 	{
// 		name: 'Gohan (Adult)',
// 		value: -4,
// 		abilities: [
// 			{
// 				name: 'Wild Sense',
// 				value: 2,
// 				description: [
// 					'Auto dodge a single melee atk from opponent and counteratk.',
// 				],
// 			},
// 			{
// 				name: 'Full-Power Charge',
// 				value: 2,
// 				description: ['Ki gauge fully recovers.'],
// 			},
// 			{
// 				name: 'Explosive Cannon',
// 				value: 2,
// 				description: ['Shortrange energy atk'],
// 			},
// 			{
// 				name: 'Explosive Flash Strike',
// 				value: 3,
// 				description: ['Rush', 'Played after a hit'],
// 			},
// 			{
// 				name: 'Super Kamehameha',
// 				value: 5,
// 				description: ['Beam', 'In Sparking Mode', 'Blast Impact'],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/eISorVrETZKmnKIcBHbD',
// 		category: '',
// 	},
// 	{
// 		name: 'Gohan (Adult) SSJ1',
// 		value: -6,
// 		abilities: [
// 			{
// 				name: 'Explosive Wave',
// 				value: 2,
// 				description: [
// 					'Creates a ki explosion, blowing away opponents. Can be used while under atk by an opponent.',
// 				],
// 			},
// 			{
// 				name: 'Full-Power Charge',
// 				value: 2,
// 				description: ['Ki gauge fully recovers.'],
// 			},
// 			{
// 				name: 'Explosive Cannon',
// 				value: 2,
// 				description: ['Shortrange energy atk'],
// 			},
// 			{
// 				name: 'Full-Power Energy Blast Volley',
// 				value: 3,
// 				description: ['Continuous Fire'],
// 			},
// 			{
// 				name: 'Bros. Kamehameha',
// 				value: 5,
// 				description: [
// 					'Beam',
// 					'In Sparking Mode',
// 					'Unguardable',
// 					'Played after a hit',
// 					'Blast Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/dr8WBPylTXusvsqJNj67',
// 		category: '',
// 	},
// 	{
// 		name: 'Gohan (Adult) SSJ2',
// 		value: -7,
// 		abilities: [
// 			{
// 				name: 'Explosive Wave',
// 				value: 2,
// 				description: [
// 					'Creates a ki explosion, blowing away opponents. Can be used while under atk by an opponent.',
// 				],
// 			},
// 			{
// 				name: 'Full Power',
// 				value: 3,
// 				description: ['Enter Sparking Mode.'],
// 			},
// 			{
// 				name: 'Super Explosive Cannon',
// 				value: 2,
// 				description: ['Shortrange energy atk'],
// 			},
// 			{
// 				name: 'Super Explosive Flash Strike',
// 				value: 3,
// 				description: ['Rush', 'Played after a hit'],
// 			},
// 			{
// 				name: 'Super Kamehameha',
// 				value: 5,
// 				description: [
// 					'Beam',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Blast Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/pFcwWai5TZeOQEiR23BA',
// 		category: '',
// 	},
// 	{
// 		name: 'Gohan (Future)',
// 		value: -5,
// 		abilities: [
// 			{
// 				name: 'Wild Sense',
// 				value: 2,
// 				description: [
// 					'Auto dodge a single melee atk from opponent and counteratk.',
// 				],
// 			},
// 			{
// 				name: 'Full-Power Charge',
// 				value: 2,
// 				description: ['Ki gauge fully recovers.'],
// 			},
// 			{
// 				name: 'Masenko',
// 				value: 3,
// 				description: ['Beam', 'Chargeable'],
// 			},
// 			{
// 				name: 'Super Destructive Wave',
// 				value: 4,
// 				description: ['Explosive Wave'],
// 			},
// 			{
// 				name: 'Super Kamehameha',
// 				value: 5,
// 				description: ['Beam', 'In Sparking Mode', 'Blast Impact'],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/9hFwB1FFRlu338eWNvI2',
// 		category: '',
// 	},
// 	{
// 		name: 'Gohan (Future) SSJ1',
// 		value: -6,
// 		abilities: [
// 			{
// 				name: 'Evil Barrier',
// 				value: 3,
// 				description: [
// 					'Character creates a barrier around themselves to defend against atks. Can be used while under atk by an opponent.',
// 				],
// 			},
// 			{
// 				name: 'Power Up to the Very Limit',
// 				value: 3,
// 				description: [
// 					'Enter Sparking Mode; melee atk power, Ki Blast atk power, Blast power, def, and ki recovery spd increase for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'Hyper Masenko',
// 				value: 3,
// 				description: ['Beam', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Special Beam Cannon',
// 				value: 3,
// 				description: ['Beam', 'Chargeable'],
// 			},
// 			{
// 				name: 'Fierce Combination',
// 				value: 5,
// 				description: [
// 					'Rush',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Speed Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/TweONXbyS0i4A5QLmSLp',
// 		category: '',
// 	},
// 	{
// 		name: 'Gohan (Kid)',
// 		value: -3,
// 		abilities: [
// 			{
// 				name: 'Super Unyielding Spirit',
// 				value: 3,
// 				description: ['Enter Sparking Mode.'],
// 			},
// 			{
// 				name: 'Afterimage Strike',
// 				value: 3,
// 				description: ['Auto dodge all atks except for Ki Blasts for 15 sec.'],
// 			},
// 			{
// 				name: 'Masenko',
// 				value: 3,
// 				description: ['Beam', 'Chargeable'],
// 			},
// 			{
// 				name: 'Energy Blast Barrage',
// 				value: 2,
// 				description: ['Continuous Fire'],
// 			},
// 			{
// 				name: 'Wild Rush Blaster',
// 				value: 5,
// 				description: [
// 					'Rush',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Speed Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/HUBuHo2qThClugtiDxzv',
// 		category: '',
// 	},
// 	{
// 		name: 'Gohan (Teen)',
// 		value: -4,
// 		abilities: [
// 			{
// 				name: 'Wild Sense',
// 				value: 2,
// 				description: [
// 					'Auto dodge a single melee atk from opponent and counteratk.',
// 				],
// 			},
// 			{
// 				name: 'Full-Power Charge',
// 				value: 2,
// 				description: ['Ki gauge fully recovers.'],
// 			},
// 			{
// 				name: 'Super Masenko',
// 				value: 3,
// 				description: ['Beam', 'Chargeable'],
// 			},
// 			{
// 				name: 'Energy Blast Barrage',
// 				value: 2,
// 				description: ['Continuous Fire'],
// 			},
// 			{
// 				name: 'Super Kamehameha',
// 				value: 5,
// 				description: ['Beam', 'In Sparking Mode', 'Blast Impact'],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/p5hhbRixT7qk0BhvL2cM',
// 		category: '',
// 	},
// 	{
// 		name: 'Gohan (Teen) SSJ1',
// 		value: -6,
// 		abilities: [
// 			{
// 				name: 'Explosive Wave',
// 				value: 2,
// 				description: [
// 					'Creates a ki explosion, blowing away opponents. Can be used while under atk by an opponent.',
// 				],
// 			},
// 			{
// 				name: 'Full Power',
// 				value: 3,
// 				description: ['Enter Sparking Mode.'],
// 			},
// 			{
// 				name: 'Super Kamehameha',
// 				value: 3,
// 				description: ['Beam', 'Chargeable', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Super Assault Combo',
// 				value: 3,
// 				description: ['Rush', 'Played after a hit', 'Speed Impact'],
// 			},
// 			{
// 				name: 'Raging Masenko',
// 				value: 5,
// 				description: [
// 					'Continuous Fire',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/sfmpOKi3RDaH6XGmy3ba',
// 		category: '',
// 	},
// 	{
// 		name: 'Gohan (Teen) SSJ2',
// 		value: -7,
// 		abilities: [
// 			{
// 				name: 'Explosive Wave',
// 				value: 2,
// 				description: [
// 					'Creates a ki explosion, blowing away opponents. Can be used while under atk by an opponent.',
// 				],
// 			},
// 			{
// 				name: 'Unforgivable',
// 				value: 3,
// 				description: [
// 					'Enter Sparking Mode; melee atk power, Ki Blast atk power, and def greatly increase for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'Super Kamehameha',
// 				value: 2,
// 				description: ['Beam', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Explosive Rush',
// 				value: 3,
// 				description: ['Rush', 'Played after a hit', 'Speed Impact'],
// 			},
// 			{
// 				name: 'Father-Son Kamehameha',
// 				value: 5,
// 				description: [
// 					'Beam',
// 					'In Sparking Mode',
// 					'Unguardable',
// 					'Played after a hit',
// 					'Blast Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/Elh5F6B7Qk6djPw0pus6',
// 		category: '',
// 	},
// 	{
// 		name: 'Goku (Daima)',
// 		value: -4,
// 		abilities: [
// 			{
// 				name: 'Sleep',
// 				value: 4,
// 				description: [
// 					'Sleep for 3 sec to recover all ki gauges and 30% of max HP.',
// 				],
// 			},
// 			{
// 				name: 'Warm Up Exercise',
// 				value: 3,
// 				description: [
// 					'Melee atk power, Ki blast atk power, Blast power, and dmg inflicted from consecutive hits (such as combos) increase for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'Quick Rush',
// 				value: 3,
// 				description: ['Rush', 'Played after a hit', 'Speed Impact'],
// 			},
// 			{
// 				name: 'Take This',
// 				value: 3,
// 				description: ['Rush', 'Played after a hit', 'Speed Impact'],
// 			},
// 			{
// 				name: 'Power Pole Rush',
// 				value: 5,
// 				description: [
// 					'Rush',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Speed Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/qe9wv9IVQJ6ThVFYMbXz',
// 		category: '',
// 	},
// 	{
// 		name: 'Goku (GT)',
// 		value: -5,
// 		abilities: [
// 			{
// 				name: 'Solar Flare',
// 				value: 2,
// 				description: [
// 					'Unguardable atk. Renders opponent defenseless for 5 sec.',
// 				],
// 			},
// 			{
// 				name: 'Afterimage Strike',
// 				value: 3,
// 				description: [
// 					'Auto dodge all atks of any kind, except for Ki Blasts for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'Kamehameha',
// 				value: 3,
// 				description: ['Beam', 'Chargeable', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Dragon Fist',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Spirit Bomb',
// 				value: 5,
// 				description: ['Coming Soon.'],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/1Ed1GyjsRPWlMAghrKjI',
// 		category: '',
// 	},
// 	{
// 		name: 'Goku (GT) SSJ1',
// 		value: -6,
// 		abilities: [
// 			{
// 				name: 'Wild Sense',
// 				value: 2,
// 				description: [
// 					'Auto dodge a single melee atk from opponent and counteratk.',
// 				],
// 			},
// 			{
// 				name: 'Full Power',
// 				value: 3,
// 				description: ['Enter Sparking Mode.'],
// 			},
// 			{
// 				name: 'Super Kamehameha',
// 				value: 3,
// 				description: ['Beam', 'Chargeable', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Full-Power Energy Blast Volley',
// 				value: 3,
// 				description: ['Continuous Fire'],
// 			},
// 			{
// 				name: 'Super Explosive Wave',
// 				value: 5,
// 				description: [
// 					'Explosive Wave',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/EKWIPXFOQlCIy4JoJn4m',
// 		category: '',
// 	},
// 	{
// 		name: 'Goku (GT) SSJ3',
// 		value: -7,
// 		abilities: [
// 			{
// 				name: 'Saiyan Spirit',
// 				value: 3,
// 				description: [
// 					'Melee atk power, Ki blast atk power, Blast power, and dmg inflicted from consecutive hits (such as combos) increase for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'High-Tension',
// 				value: 3,
// 				description: [
// 					'Melee atk power, Ki blast atk power, and ki recovery spd increase for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'Super Kamehameha',
// 				value: 3,
// 				description: ['Beam', 'Chargeable', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Full-Power Energy Blast Volley',
// 				value: 3,
// 				description: ['Continuous Fire'],
// 			},
// 			{
// 				name: 'Dragon Fist',
// 				value: 5,
// 				description: ['Coming Soon.'],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/KFvZTvOFQERO3MBiVL8A',
// 		category: '',
// 	},
// 	{
// 		name: 'Goku (GT) SSJ4',
// 		value: -8,
// 		abilities: [
// 			{
// 				name: 'Instant Transmission',
// 				value: 2,
// 				description: ['Instantly move behind opponent.'],
// 			},
// 			{
// 				name: 'All I Need is Five Seconds!',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'x10 Kamehameha',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Meteor Crash',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Dragon Fist',
// 				value: 5,
// 				description: ['Coming Soon.'],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/55MGBDxSeyi9XvvXlkIw',
// 		category: '',
// 	},
// 	{
// 		name: 'Goku (Super)',
// 		value: -5,
// 		abilities: [
// 			{
// 				name: 'Instant Transmission',
// 				value: 2,
// 				description: ['Instantly move behind opponent.'],
// 			},
// 			{
// 				name: 'All Fired Up',
// 				value: 3,
// 				description: ['Enter Sparking Mode.'],
// 			},
// 			{
// 				name: 'Super Kamehameha',
// 				value: 3,
// 				description: ['Beam', 'Chargeable', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Dragon Burst',
// 				value: 3,
// 				description: ['Rush', 'Played after a hit', 'Speed Impact'],
// 			},
// 			{
// 				name: 'Super Spirit Bomb',
// 				value: 5,
// 				description: [
// 					'Fire',
// 					'In Sparking Mode',
// 					'Unguardable',
// 					'Played after a hit',
// 					'Blast Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/qe9wv9IVQJ6ThVFYMbXz',
// 		category: '',
// 	},
// 	{
// 		name: 'Goku (Super) SSJ1',
// 		value: -6,
// 		abilities: [
// 			{
// 				name: 'Wild Sense',
// 				value: 2,
// 				description: [
// 					'Auto dodge a single melee atk from opponent and counteratk.',
// 				],
// 			},
// 			{
// 				name: 'All Encompasing Power',
// 				value: 3,
// 				description: [
// 					'Ki gauge fully recovers; melee atk power, Ki Blast atk power, Blast power, and def increase for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'Super Kamehameha',
// 				value: 3,
// 				description: ['Beam', 'Chargeable', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Dragon Blast',
// 				value: 3,
// 				description: ['Rush', 'Played after a hit', 'Speed Impact'],
// 			},
// 			{
// 				name: 'Sonic Blast',
// 				value: 5,
// 				description: [
// 					'Rush',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Speed Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/SjQwbvPNQCIVvBXJv2rE',
// 		category: '',
// 	},
// 	{
// 		name: 'Goku (Super) SSJB',
// 		value: -8,
// 		abilities: [
// 			{
// 				name: 'Instant Transmission',
// 				value: 2,
// 				description: ['Instantly move behind opponent.'],
// 			},
// 			{
// 				name: 'Kaioken',
// 				value: 3,
// 				description: [
// 					'Melee atk power, Ki blast atk power, and Blast power increase for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'God Kamehameha',
// 				value: 3,
// 				description: ['Beam', 'Chargeable', 'Blast Impact'],
// 			},
// 			{
// 				name: 'No Hard Feelings',
// 				value: 3,
// 				description: ['Rush', 'Played after a hit', 'Speed Impact'],
// 			},
// 			{
// 				name: 'Limit Breaker Kamehameha',
// 				value: 5,
// 				description: [
// 					'Beam',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Blast Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/UlDd60UQCSRUgVkehz36',
// 		category: '',
// 	},
// 	{
// 		name: 'Goku (Super) SSJG',
// 		value: -7,
// 		abilities: [
// 			{
// 				name: 'God Bind',
// 				value: 2,
// 				description: ['Unguardable atk. Render opponent paralyzed for 5 sec.'],
// 			},
// 			{
// 				name: 'Shenron Aura',
// 				value: 3,
// 				description: [
// 					'Melee atk power, Ki blast atk power, and def increase for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'God Kamehameha',
// 				value: 3,
// 				description: ['Beam', 'Chargeable', 'Blast Impact'],
// 			},
// 			{
// 				name: 'God Impact',
// 				value: 3,
// 				description: ['Rush', 'Played after a hit', 'Speed Impact'],
// 			},
// 			{
// 				name: 'God Burst Kamehameha',
// 				value: 5,
// 				description: [
// 					'Beam',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Blast Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/zeCh6lwlSIO2F8daL75S',
// 		category: '',
// 	},
// 	{
// 		name: 'Goku (Super) UI',
// 		value: -9,
// 		abilities: [
// 			{
// 				name: 'Ultra Movement',
// 				value: 2,
// 				description: [
// 					'Auto dodge a single melee atk from opponent and counteratk.',
// 				],
// 			},
// 			{
// 				name: 'No Backing Down',
// 				value: 3,
// 				description: [
// 					'Enter Sparking Mode; melee atk power, Ki blast atk power, Blast power, def, and ki recovery spd increase for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'Ultra Kamehameha',
// 				value: 3,
// 				description: ['Beam', 'Chargeable', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Ultra Barrage',
// 				value: 4,
// 				description: ['Rush', 'Played after a hit', 'Speed Impact'],
// 			},
// 			{
// 				name: 'Supreme Kamehameha',
// 				value: 5,
// 				description: [
// 					'Rush',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Speed Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/1grqEjKQrmRDbqzIYx8q',
// 		category: '',
// 	},
// 	{
// 		name: 'Goku (Super) UIS',
// 		value: -8,
// 		abilities: [
// 			{
// 				name: 'Even Greater Potential',
// 				value: 2,
// 				description: [
// 					'Ki gauge fully recovers; melee atk power, def, and move spd increase for 15 sec.',
// 				],
// 			},
// 			{
// 				name: "You'll Never Beat Me",
// 				value: 3,
// 				description: [
// 					'Enter Sparking Mode; Ki Blast atk power and Blast power increase for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'Kamehameha -Sign-',
// 				value: 3,
// 				description: ['Beam', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Flash -Sign-',
// 				value: 3,
// 				description: ['Rush', 'Played after a hit', 'Speed Impact'],
// 			},
// 			{
// 				name: 'Point Blank Kamehameha',
// 				value: 5,
// 				description: [
// 					'Rush',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Speed Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/lhNbAhD2RY94N9MPpllw',
// 		category: '',
// 	},
// 	{
// 		name: 'Goku (Teen)',
// 		value: -3,
// 		abilities: [
// 			{
// 				name: 'Afterimage Strike',
// 				value: 3,
// 				description: [
// 					'Auto dodge all atks of any kind, except for Ki Blasts for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'False Courage',
// 				value: 1,
// 				description: [
// 					'Def and resistance to being stunned by atks increases for 10 sec.',
// 				],
// 			},
// 			{
// 				name: 'Kamehameha',
// 				value: 3,
// 				description: ['Beam', 'Chargeable', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Commencing Counterattack',
// 				value: 3,
// 				description: ['Rush', 'Played after a hit', 'Speed Impact'],
// 			},
// 			{
// 				name: 'Keep Going!',
// 				value: 5,
// 				description: [
// 					'Rush',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Speed Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/qs6I9rMmT1is3E0GLinR',
// 		category: '',
// 	},
// 	{
// 		name: 'Goku (Z-Early)',
// 		value: -4,
// 		abilities: [
// 			{
// 				name: 'Solar Flare',
// 				value: 2,
// 				description: [
// 					'Unguardable atk. Renders opponent defenseless for 5 sec.',
// 				],
// 			},
// 			{
// 				name: 'Kaioken',
// 				value: 3,
// 				description: [
// 					'Melee atk power, Ki blast atk power, and def increase for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'Kamehameha',
// 				value: 3,
// 				description: ['Beam', 'Chargeable', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Kaoken Attack',
// 				value: 3,
// 				description: ['Rush', 'Played after a hit', 'Speed Impact'],
// 			},
// 			{
// 				name: 'Spirit Bomb',
// 				value: 5,
// 				description: [
// 					'Fire',
// 					'In Sparking Mode',
// 					'Unguardable',
// 					'Played after a hit',
// 					'Blast Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/saQPTCeXRvSD7GeoAa1v',
// 		category: '',
// 	},
// 	{
// 		name: 'Goku (Z-End)',
// 		value: -5,
// 		abilities: [
// 			{
// 				name: 'Instant Transmission',
// 				value: 2,
// 				description: ['Instantly move behind opponent.'],
// 			},
// 			{
// 				name: 'Wild Sense',
// 				value: 2,
// 				description: [
// 					'Auto dodge a single melee atk from opponent and counteratk.',
// 				],
// 			},
// 			{
// 				name: 'Kamehameha',
// 				value: 3,
// 				description: ['Beam', 'Chargeable', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Meteor Smash',
// 				value: 3,
// 				description: ['Rush', 'Played after a hit', 'Speed Impact'],
// 			},
// 			{
// 				name: 'Super Spirit Bomb',
// 				value: 5,
// 				description: [
// 					'Fire',
// 					'In Sparking Mode',
// 					'Unguardable',
// 					'Played after a hit',
// 					'Blast Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/uxAbcO0dQ3mOzRieB89G',
// 		category: '',
// 	},
// 	{
// 		name: 'Goku (Z-End) SSJ1',
// 		value: -6,
// 		abilities: [
// 			{
// 				name: 'Wild Sense',
// 				value: 2,
// 				description: [
// 					'Auto dodge a single melee atk from opponent and counteratk.',
// 				],
// 			},
// 			{
// 				name: 'Saiyan Spirit',
// 				value: 3,
// 				description: [
// 					'Melee atk power, Ki blast atk power, Blast power, and dmg inflicted from consecutive hits (such as combos) increase for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'Super Kamehameha',
// 				value: 3,
// 				description: ['Beam', 'Chargeable', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Super Energy Wave Combo',
// 				value: 3,
// 				description: ['Continuous Fire'],
// 			},
// 			{
// 				name: 'Instant Transmission Kamehameha',
// 				value: 5,
// 				description: [
// 					'Beam',
// 					'In Sparking Mode',
// 					'Unguardable',
// 					'Played after a hit',
// 					'Blast Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/ol0REKtTTemChXwiwhQt',
// 		category: '',
// 	},
// 	{
// 		name: 'Goku (Z-End) SSJ2',
// 		value: -7,
// 		abilities: [
// 			{
// 				name: 'Instant Transmission',
// 				value: 2,
// 				description: ['Instantly move behind opponent.'],
// 			},
// 			{
// 				name: 'Full Power',
// 				value: 3,
// 				description: ['Enter Sparking Mode.'],
// 			},
// 			{
// 				name: 'Instant Transmission Kamehameha',
// 				value: 3,
// 				description: ['Beam', 'Chargeable', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Meteor Crash',
// 				value: 3,
// 				description: ['Rush', 'Played after a hit', 'Speed Impact'],
// 			},
// 			{
// 				name: 'Super Kamehameha',
// 				value: 5,
// 				description: [
// 					'Beam',
// 					'In Sparking Mode',
// 					'Played after hit',
// 					'Blast Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/zu6LDhKDRUmHbODQXgMV',
// 		category: '',
// 	},
// 	{
// 		name: 'Goku (Z-End) SSJ3',
// 		value: -8,
// 		abilities: [
// 			{
// 				name: 'Instant Transmission',
// 				value: 2,
// 				description: ['Instantly move behind opponent.'],
// 			},
// 			{
// 				name: 'Power Up to the Very Limit',
// 				value: 3,
// 				description: ['Enter Sparking Mode.'],
// 			},
// 			{
// 				name: 'Super Kamehameha',
// 				value: 3,
// 				description: ['Beam', 'Chargeable', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Super Dragon Twin Fists',
// 				value: 3,
// 				description: ['Rush', 'Played after hit', 'Speed Impact'],
// 			},
// 			{
// 				name: 'Dragon Fist',
// 				value: 5,
// 				description: [
// 					'Rush',
// 					'In Sparking Mode',
// 					'Played after hit',
// 					'Speed Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/bH6gCLlzT4u2nX6hr612',
// 		category: '',
// 	},
// 	{
// 		name: 'Goku (Z-Mid)',
// 		value: -5,
// 		abilities: [
// 			{
// 				name: 'Give Me Your Energy',
// 				value: 2,
// 				description: [
// 					'Increases Ultimate Blast Spirit Bomb power. Can be used together up to three times.',
// 				],
// 			},
// 			{
// 				name: "I Can't Wait",
// 				value: 3,
// 				description: [
// 					'Melee atk power, Ki Blast atk power, Blast power, def, and move speed increase for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'x20 Kaioken Kamehameha',
// 				value: 3,
// 				description: ['Beam', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Kaioken Rush',
// 				value: 3,
// 				description: ['Rush', 'Played after a hit', 'Speed Impact'],
// 			},
// 			{
// 				name: 'Spirit Bomb',
// 				value: 5,
// 				description: [
// 					'Fire',
// 					'In Sparking Mode',
// 					'Unguardable',
// 					'Played after a hit',
// 					'Blast Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/qb5EFsSTAaQWKhXWCCJy',
// 		category: '',
// 	},
// 	{
// 		name: 'Goku (Z-Mid) SSJ1',
// 		value: -6,
// 		abilities: [
// 			{
// 				name: 'Wild Sense',
// 				value: 2,
// 				description: [
// 					'Auto dodge a single melee atk from opponent and counteratk.',
// 				],
// 			},
// 			{
// 				name: "Now I'm Angry",
// 				value: 3,
// 				description: [
// 					'Enter Sparking Mode; melee atk power, Ki Blast atk power, Blast power, and def increase for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'Super Kamehameha',
// 				value: 3,
// 				description: ['Beam', 'Chargeable', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Meteor Smash',
// 				value: 3,
// 				description: ['Rush', 'Played after a hit', 'Speed Impact'],
// 			},
// 			{
// 				name: 'Angry Kamehameha',
// 				value: 5,
// 				description: [
// 					'Beam',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Blast Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/RMkc1VaRCaideLib3PZm',
// 		category: '',
// 	},
// 	{
// 		name: 'Goku Black',
// 		value: -5,
// 		abilities: [
// 			{
// 				name: 'Wild Sense',
// 				value: 2,
// 				description: [
// 					'Auto dodge a single melee atk from opponent and counteratk.',
// 				],
// 			},
// 			{
// 				name: 'Finish Sign',
// 				value: 3,
// 				description: [
// 					'Melee atk power, Ki blast atk power, and Blast power increase for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'Black Power Ball',
// 				value: 3,
// 				description: ['Fire', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Black Bind',
// 				value: 4,
// 				description: [
// 					'Rush',
// 					'Played after a hit',
// 					'Unguardable',
// 					'Speed Impact',
// 				],
// 			},
// 			{
// 				name: 'Black Kamehameha',
// 				value: 5,
// 				description: ['Beam', 'In Sparking Mode', 'Blast Impact'],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/5renoxwySuSrYqGkbmDg',
// 		category: '',
// 	},
// 	{
// 		name: 'Goku Black (Rosé)',
// 		value: -8,
// 		abilities: [
// 			{
// 				name: 'Instant Transmission',
// 				value: 2,
// 				description: ['Instantly move behind opponent.'],
// 			},
// 			{
// 				name: 'Audacious Laugh',
// 				value: 3,
// 				description: ['Enter Sparking Mode.'],
// 			},
// 			{
// 				name: 'Black Kamehameha',
// 				value: 3,
// 				description: ['Beam', 'Chargeable', 'Blast Impact', '.'],
// 			},
// 			{
// 				name: 'Godly Display Slash',
// 				value: 3,
// 				description: ['Rush', 'Played after a hit', 'Spead Impact'],
// 			},
// 			{
// 				name: 'Godly Black Kamehameha',
// 				value: 5,
// 				description: [
// 					'Rush',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Spead Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/KeiDvlhOQdyqywsJQJxK',
// 		category: '',
// 	},
// 	{
// 		name: 'Golden Frieza',
// 		value: -8,
// 		abilities: [
// 			{
// 				name: 'Wild Sense',
// 				value: 2,
// 				description: [
// 					'Auto dodge a single melee atk from opponent and counteratk.',
// 				],
// 			},
// 			{
// 				name: 'True Golden Frieza',
// 				value: 3,
// 				description: ['Enter Sparking mode.'],
// 			},
// 			{
// 				name: 'Great Death Beam',
// 				value: 3,
// 				description: ['Beam'],
// 			},
// 			{
// 				name: 'No Hard Feelings',
// 				value: 3,
// 				description: ['Rush', 'Played after a hit', 'Speed Impact'],
// 			},
// 			{
// 				name: 'Earth Breaker',
// 				value: 5,
// 				description: [
// 					'Rush',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Speed Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/xqXr7TfuTHyxZv6MZsV4',
// 		category: '',
// 	},
// 	{
// 		name: 'Goten',
// 		value: -4,
// 		abilities: [
// 			{
// 				name: 'Afterimage',
// 				value: 2,
// 				description: [
// 					'Auto dodge a single atk of any kind, except for Ki Blasts.',
// 				],
// 			},
// 			{
// 				name: 'Sleep',
// 				value: 4,
// 				description: [
// 					'Sleep for 3 sec to recover all ki gauges and 30% of max HP.',
// 				],
// 			},
// 			{
// 				name: 'Boulder Toss Barrage',
// 				value: 2,
// 				description: ['Continuous Fire'],
// 			},
// 			{
// 				name: 'Charge!',
// 				value: 2,
// 				description: ['Rush', 'Played after a hit', 'Speed Impact'],
// 			},
// 			{
// 				name: 'Super Kamehameha',
// 				value: 5,
// 				description: [
// 					'Beam',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Blast Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/8H2u6bvNQ5SLpgy3nneZ',
// 		category: '',
// 	},
// 	{
// 		name: 'Goten SSJ1',
// 		value: -5,
// 		abilities: [
// 			{
// 				name: 'Wild Sense',
// 				value: 2,
// 				description: [
// 					'Auto dodge a single melee atk from opponent and counteratk.',
// 				],
// 			},
// 			{
// 				name: 'False Courage',
// 				value: 1,
// 				description: [
// 					'Def and resistance to being stunned by atks increases for 10 sec.',
// 				],
// 			},
// 			{
// 				name: 'Kamehameha',
// 				value: 3,
// 				description: ['Beam', 'Chargeable', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Charge!',
// 				value: 3,
// 				description: ['Rush', 'Played after a hit', 'Speed Impact'],
// 			},
// 			{
// 				name: 'Double Kamehameha',
// 				value: 5,
// 				description: [
// 					'Beam',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Blast Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/lSC9ucFETautS3oBnTJ8',
// 		category: '',
// 	},
// 	{
// 		name: 'Gotenks',
// 		value: -6,
// 		abilities: [
// 			{
// 				name: 'Afterimage',
// 				value: 2,
// 				description: [
// 					'Auto dodge a single atk of any kind, except for Ki Blasts.',
// 				],
// 			},
// 			{
// 				name: 'Ta-Dah!',
// 				value: 2,
// 				description: [
// 					'Def and resistance to being stunned by atks increase for 15 sec. Melee atk power and Ki Blast atk power decrease.',
// 				],
// 			},
// 			{
// 				name: 'Full-Power Energy Wave',
// 				value: 3,
// 				description: ['Beam', 'Blast Impact'],
// 			},
// 			{
// 				name: 'High Speed Rush',
// 				value: 3,
// 				description: ['Rush', 'Played after a hit', 'Speed Impact'],
// 			},
// 			{
// 				name: 'Victory Cannon',
// 				value: 5,
// 				description: [
// 					'Beam',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Blast Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/VP2rS3lRwux0FQCKr8Km',
// 		category: '',
// 	},
// 	{
// 		name: 'Gotenks SSJ1',
// 		value: -7,
// 		abilities: [
// 			{
// 				name: 'False Courage',
// 				value: 1,
// 				description: [
// 					'Def and resistance to being stunned by atks increases for 15 sec. Melee atk power and Ki Blast atk power decrease.',
// 				],
// 			},
// 			{
// 				name: 'High-Tension',
// 				value: 3,
// 				description: [
// 					'Melee atk power, Ki blast atk power, and ki recovery spd increase for 15 sec. Fully recover all ki gauges.',
// 				],
// 			},
// 			{
// 				name: 'Victory Cannon',
// 				value: 3,
// 				description: ['Beam', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Galactic Donuts',
// 				value: 3,
// 				description: ['Fire', 'Unguardable', 'Played after a hit'],
// 			},
// 			{
// 				name: 'Super Ghost Kamikaze Attack',
// 				value: 5,
// 				description: ['Simultaneous Fire', 'In Sparking Mode', 'Unguardable'],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/VYLCnFMR2WCeNe4a0Dep',
// 		category: '',
// 	},
// 	{
// 		name: 'Gotenks SSJ3',
// 		value: -8,
// 		abilities: [
// 			{
// 				name: 'Vice Shout',
// 				value: 2,
// 				description: ['Unguardable atk. Renders opponent paralyzed for 3 sec.'],
// 			},
// 			{
// 				name: 'Finish Sign',
// 				value: 3,
// 				description: [
// 					'Melee atk power and Ki blast atk power increase for 15 sec. Blast power greatly increases.',
// 				],
// 			},
// 			{
// 				name: 'Victory Bazooka',
// 				value: 3,
// 				description: ['Beam', 'Blast Impact'],
// 			},
// 			{
// 				name: 'DIE DIE Missile Barrage',
// 				value: 3,
// 				description: ['Continuous Fire'],
// 			},
// 			{
// 				name: 'Charging Ultra Buu Buu Volleyball',
// 				value: 5,
// 				description: [
// 					'Rush',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Speed Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/yJgauE0iRKCAyeuRyya2',
// 		category: '',
// 	},
// 	{
// 		name: 'Great Ape Baby (GT)',
// 		value: -7,
// 		abilities: [
// 			{
// 				name: 'Explosive Wave',
// 				value: 2,
// 				description: [
// 					'Creates a ki explosion, blowing away opponents. Can be used while under atk by an opponent.',
// 				],
// 			},
// 			{
// 				name: 'Howl',
// 				value: 3,
// 				description: [
// 					'Enter Sparking Mode; melee atk power and Ki Blast atk power increase, and def decreases slightly for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'Super Galick Gun',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Gigantic Flame',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Revenge Death Ball Final',
// 				value: 5,
// 				description: ['Coming Soon.'],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/CBe0rem2T5SJaJNdi699',
// 		category: '',
// 	},
// 	{
// 		name: 'Great Ape Vegeta',
// 		value: -5,
// 		abilities: [
// 			{
// 				name: 'Explosive Wave',
// 				value: 2,
// 				description: [
// 					'Creates a ki explosion, blowing away opponents. Can be used while under atk by an opponent.',
// 				],
// 			},
// 			{
// 				name: 'Howl',
// 				value: 3,
// 				description: [
// 					'Enter Sparking Mode; melee atk power and Ki Blast atk power increase, and def decreases slightly for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'Chou Makouhou',
// 				value: 3,
// 				description: ['Beam', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Chou Makouhou Barrage',
// 				value: 3,
// 				description: ['Continuous Fire'],
// 			},
// 			{
// 				name: 'Super Galick Gun',
// 				value: 5,
// 				description: [
// 					'Beam',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Blast Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/fm4WnejQ7WFIf31KKFww',
// 		category: '',
// 	},
// 	{
// 		name: 'Great Saiyaman',
// 		value: -4,
// 		abilities: [
// 			{
// 				name: 'Justice Pose',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Justice Finishing Pose',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Justice Bomber',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Justice Rush',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Justice Judgement',
// 				value: 5,
// 				description: ['Coming Soon.'],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/vt9h9a5aQKCH1qF0WKji',
// 		category: '',
// 	},
// 	{
// 		name: 'Guldo',
// 		value: -2,
// 		abilities: [
// 			{
// 				name: 'Paralysis',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'SP Fighting Pose 4',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Psychic Rock Throw',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Full-Power Energy Blast Volley',
// 				value: 3,
// 				description: ['Continuous Fire'],
// 			},
// 			{
// 				name: 'Guldo Special',
// 				value: 5,
// 				description: ['Coming Soon.'],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/NiuH9dLbQRul5403mo0p',
// 		category: '',
// 	},
// 	{
// 		name: 'Hirudegarn',
// 		value: -6,
// 		abilities: [
// 			{
// 				name: 'Explosive Wave',
// 				value: 2,
// 				description: [
// 					'Creates a ki explosion, blowing away opponents. Can be used while under atk by an opponent.',
// 				],
// 			},
// 			{
// 				name: 'Dark Eyes',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Chou Makousen',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Super Explosive Wave',
// 				value: 4,
// 				description: ['Explosive Wave'],
// 			},
// 			{
// 				name: 'Gigantic Flame',
// 				value: 5,
// 				description: ['Coming Soon.'],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/I9OMFQTiQlGdFYN25jS9',
// 		category: '',
// 	},
// 	{
// 		name: 'Hit',
// 		value: -8,
// 		abilities: [
// 			{
// 				name: 'Ki Clone',
// 				value: 2,
// 				description: [
// 					'Auto dodge a single atk of any kind, except for Ki Blasts.',
// 				],
// 			},
// 			{
// 				name: 'Time Skip',
// 				value: 2,
// 				description: ['Instantly move behind opponent.'],
// 			},
// 			{
// 				name: "Assassin's Art",
// 				value: 3,
// 				description: ['Fire'],
// 			},
// 			{
// 				name: 'Time Skip/Jump Spike',
// 				value: 4,
// 				description: ['Rush', 'Played after a hit', 'Speed Impact'],
// 			},
// 			{
// 				name: 'Time Prison',
// 				value: 5,
// 				description: [
// 					'Rush',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Speed Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/ZKZIUt1CQAGLUzjpeZng',
// 		category: '',
// 	},
// 	{
// 		name: 'Janemba',
// 		value: -5,
// 		abilities: [
// 			{
// 				name: 'Mystic Breath',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Howl',
// 				value: 3,
// 				description: [
// 					'Enter Sparking Mode; melee atk power and Ki Blast atk power increase, and def decreases slightly for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'Chou Makouhou',
// 				value: 3,
// 				description: ['Beam', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Rapid Cannon',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Illusion Smash',
// 				value: 5,
// 				description: ['Coming Soon.'],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/bz3Ys1KTTK6co4WVRkZ2',
// 		category: '',
// 	},
// 	{
// 		name: 'Jeice',
// 		value: -3,
// 		abilities: [
// 			{
// 				name: 'Explosive Wave',
// 				value: 2,
// 				description: [
// 					'Creates a ki explosion, blowing away opponents. Can be used while under atk by an opponent.',
// 				],
// 			},
// 			{
// 				name: 'SP Fighting Pose 3',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Full-Power Energy Wave',
// 				value: 3,
// 				description: ['Beam', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Crusher Ball',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Purple Comet Attack',
// 				value: 5,
// 				description: ['Coming Soon.'],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/pYyWa4e0TS6GGKfd1RV6',
// 		category: '',
// 	},
// 	{
// 		name: 'Jiren',
// 		value: -8,
// 		abilities: [
// 			{
// 				name: 'Ki Pressure',
// 				value: 2,
// 				description: [
// 					'Character creates a barrier around themselves to defend against atks. Can be used while under atk by an opponent.',
// 				],
// 			},
// 			{
// 				name: 'Meditation',
// 				value: 4,
// 				description: ['HP recovers by 20% of max.'],
// 			},
// 			{
// 				name: 'Power Impact',
// 				value: 3,
// 				description: ['Fire', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Infinity Rush',
// 				value: 3,
// 				description: ['Rush', 'Played after a hit', 'Speed Impact'],
// 			},
// 			{
// 				name: 'Heat Break',
// 				value: 5,
// 				description: [
// 					'Rush',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Speed Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/i68NCdjQSxaDBHK8aLwX',
// 		category: '',
// 	},
// 	{
// 		name: 'Jiren (Full)',
// 		value: -9,
// 		abilities: [
// 			{
// 				name: 'Ki Storm',
// 				value: 2,
// 				description: [
// 					'Creates a ki explosion, blowing away opponents. Can be used while under atk by an opponent.',
// 				],
// 			},
// 			{
// 				name: 'Strength is Absolute!',
// 				value: 3,
// 				description: [
// 					'Enter Sparking Mode; melee atk power, Ki Blast atk power, Blast power, def, and ki recovery spd increase for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'Heatwave Magnetron',
// 				value: 3,
// 				description: ['Beam', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Overheating Blast',
// 				value: 4,
// 				description: ['Explosive Wave'],
// 			},
// 			{
// 				name: 'Omegaheat Magnetron',
// 				value: 5,
// 				description: [
// 					'Beam',
// 					'In Sparking Mode',
// 					'Unguardable',
// 					'Played after a hit',
// 					'Blast Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/zirXmOsVShyK1SE7qsW4',
// 		category: '',
// 	},
// 	{
// 		name: 'Kakunsa',
// 		value: -5,
// 		abilities: [
// 			{
// 				name: 'Wild Sense',
// 				value: 2,
// 				description: [
// 					'Auto dodge a single melee atk from opponent and counteratk.',
// 				],
// 			},
// 			{
// 				name: "Maiden's Fury",
// 				value: 3,
// 				description: ['Enter Sparking Mode.'],
// 			},
// 			{
// 				name: 'Primal Charge',
// 				value: 4,
// 				description: ['Rush', 'Unguardable', 'Speed Impact'],
// 			},
// 			{
// 				name: 'Primal Instinct',
// 				value: 3,
// 				description: ['Rush', 'Played after a hit', 'Speed Impact'],
// 			},
// 			{
// 				name: 'Love Symphony',
// 				value: 5,
// 				description: ['Fire', 'In Sparking Mode', 'Blast Impact'],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/U51Ft3K2TuiqEBDHofXc',
// 		category: '',
// 	},
// 	{
// 		name: 'Kale',
// 		value: -5,
// 		abilities: [
// 			{
// 				name: 'Full-Power Charge',
// 				value: 2,
// 				description: ['Ki gauge fully recovers.'],
// 			},
// 			{
// 				name: 'Going Berserk',
// 				value: 3,
// 				description: ['Enter Sparking Mode.'],
// 			},
// 			{
// 				name: 'Resistance Cannon',
// 				value: 3,
// 				description: ['Beam', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Full-Power Energy Blast Volley',
// 				value: 3,
// 				description: ['Continuous Fire'],
// 			},
// 			{
// 				name: 'Resistance Blast',
// 				value: 5,
// 				description: ['Fire', 'In Sparking Mode', 'Blast Impact'],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/zLg5TdXKTVqHs7ZAilkl',
// 		category: '',
// 	},
// 	{
// 		name: 'Kale (Berserk) SSJ1',
// 		value: -7,
// 		abilities: [
// 			{
// 				name: 'Cry of Rage',
// 				value: 2,
// 				description: ['Unguardable atk. Renders opponent paralyzed for 3 sec.'],
// 			},
// 			{
// 				name: 'Berserk Rage',
// 				value: 3,
// 				description: [
// 					'Enter Sparking Mode; When opponent is Goku, melee atk power, Ki Blast atk power, Blast power and def greatly increase for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'Gigantic Impact',
// 				value: 3,
// 				description: ['Fire', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Gigantic Throw',
// 				value: 3,
// 				description: ['Rush', 'Played after a hit', 'Speed Impact'],
// 			},
// 			{
// 				name: 'Berserk Blast',
// 				value: 5,
// 				description: [
// 					'Explosive Wave',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/I11k6zQWSpv1sl6MpJng',
// 		category: '',
// 	},
// 	{
// 		name: 'Kale SSJ1',
// 		value: -6,
// 		abilities: [
// 			{
// 				name: 'Wild Sense',
// 				value: 2,
// 				description: [
// 					'Auto dodge a single melee atk from opponent and counteratk.',
// 				],
// 			},
// 			{
// 				name: 'Saiyan Spirit',
// 				value: 3,
// 				description: [
// 					'Melee atk power, Ki blast atk power, Smash Atk charge spd and Smash Ki Blast charging spd increase for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'Resistance Blast',
// 				value: 3,
// 				description: ['Fire', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Super Explosive Wave',
// 				value: 4,
// 				description: ['Explosive Wave'],
// 			},
// 			{
// 				name: 'Limit Break Blaster',
// 				value: 5,
// 				description: [
// 					'Beam',
// 					'In Sparking Mode',
// 					'Unguardable',
// 					'Played after a hit',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/6Sy1PEVVSgK8sRWpsbOa',
// 		category: '',
// 	},
// 	{
// 		name: 'Kefla',
// 		value: -6,
// 		abilities: [
// 			{
// 				name: 'Wild Sense',
// 				value: 2,
// 				description: [
// 					'Auto dodge a single melee atk from opponent and counteratk.',
// 				],
// 			},
// 			{
// 				name: 'High-Tension',
// 				value: 3,
// 				description: [
// 					'Melee atk power, Ki blast atk power, and ki recovery spd increase for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'Blaster Ball',
// 				value: 3,
// 				description: ['Fire', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Gigantic Swing',
// 				value: 3,
// 				description: ['Rush', 'Played after a hit', 'Speed Impact'],
// 			},
// 			{
// 				name: 'Gigantic Burn',
// 				value: 5,
// 				description: [
// 					'Explosive Wave',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/jBedsDBHRai1INDaZhwe',
// 		category: '',
// 	},
// 	{
// 		name: 'Kefla SSJ1',
// 		value: -7,
// 		abilities: [
// 			{
// 				name: 'False Courage',
// 				value: 1,
// 				description: [
// 					'Def and resistance to being stunned by atks increases for 10 sec.',
// 				],
// 			},
// 			{
// 				name: 'Finish Sign',
// 				value: 3,
// 				description: [
// 					'Melee atk power, Ki blast atk power, and Blast power increase for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'Blaster Ball',
// 				value: 3,
// 				description: ['Fire', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Gigantic Claw',
// 				value: 3,
// 				description: ['Rush', 'Played after a hit', 'Speed Impact'],
// 			},
// 			{
// 				name: 'Hexa-Cannonball',
// 				value: 5,
// 				description: [
// 					'Simultaneous Fire',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/ItZjp0LaTmqT24O4tW1e',
// 		category: '',
// 	},
// 	{
// 		name: 'Kefla SSJ2',
// 		value: -8,
// 		abilities: [
// 			{
// 				name: 'Saiyan Spirit',
// 				value: 3,
// 				description: [
// 					'Melee atk power, Ki blast atk power, Blast power, and dmg inflicted from consecutive hits (such as combos) increase for 15 sec.',
// 				],
// 			},
// 			{
// 				name: "I'm Number One!",
// 				value: 3,
// 				description: [
// 					'Enter Sparking Mode; melee atk power, Ki Blast atk power, and def increase for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'Gigantic Ray',
// 				value: 3,
// 				description: ['Simultaneous Fire'],
// 			},
// 			{
// 				name: 'Gigantic Breaker',
// 				value: 3,
// 				description: ['Rush', 'Played after a hit'],
// 			},
// 			{
// 				name: 'Gigantic Burst',
// 				value: 5,
// 				description: [
// 					'Explosive Wave',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/gNGGvB9fSsQ1r9MRZnQv',
// 		category: '',
// 	},
// 	{
// 		name: 'Kid Buu',
// 		value: -7,
// 		abilities: [
// 			{
// 				name: 'Instant Transmission',
// 				value: 2,
// 				description: ['Instantly move behind opponent.'],
// 			},
// 			{
// 				name: 'Sleep',
// 				value: 4,
// 				description: [
// 					'Sleep for 3 sec to recover all ki gauges and 30% of max HP.',
// 				],
// 			},
// 			{
// 				name: 'Super Kamehameha',
// 				value: 3,
// 				description: ['Beam', 'Chargeable', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Mystic Combination',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Planet Burst',
// 				value: 5,
// 				description: ['Coming Soon.'],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/y1gv2XDgQrioAQlstT8Z',
// 		category: '',
// 	},
// 	{
// 		name: 'King Cold',
// 		value: -4,
// 		abilities: [
// 			{
// 				name: 'Explosive Wave',
// 				value: 2,
// 				description: [
// 					'Creates a ki explosion, blowing away opponents. Can be used while under atk by an opponent.',
// 				],
// 			},
// 			{
// 				name: "King's Dignity",
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Full-Power Death Beam',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Super Explosive Wave',
// 				value: 4,
// 				description: ['Explosive Wave'],
// 			},
// 			{
// 				name: 'Power of the Cold Clan',
// 				value: 5,
// 				description: ['Coming Soon.'],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/ZT07BDuESUw0AzVv99MA',
// 		category: '',
// 	},
// 	{
// 		name: 'Krillin',
// 		value: -3,
// 		abilities: [
// 			{
// 				name: 'Solar Flare',
// 				value: 2,
// 				description: [
// 					'Unguardable atk. Renders opponent defenseless for 5 sec.',
// 				],
// 			},
// 			{
// 				name: 'Afterimage Strike',
// 				value: 3,
// 				description: ['Auto dodge all atks except for Ki Blasts for 15 sec.'],
// 			},
// 			{
// 				name: 'Kamehameha',
// 				value: 3,
// 				description: ['Beam', 'Chargeable', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Spread Energy Wave',
// 				value: 3,
// 				description: ['Simultaneous Fire'],
// 			},
// 			{
// 				name: 'Chain Destructo Disc',
// 				value: 5,
// 				description: [
// 					'Continuous Fire',
// 					'In Sparking Mode',
// 					'Unguardable',
// 					'Played after a hit',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/t2T10sodR2mNCscncjdX',
// 		category: '',
// 	},
// 	{
// 		name: 'Lord Slug',
// 		value: -4,
// 		abilities: [
// 			{
// 				name: 'Explosive Wave',
// 				value: 2,
// 				description: [
// 					'Creates a ki explosion, blowing away opponents. Can be used while under atk by an opponent.',
// 				],
// 			},
// 			{
// 				name: 'High-Tension',
// 				value: 3,
// 				description: [
// 					'Melee atk power, Ki blast atk power, and ki recovery spd increase for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'Finger Beam',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Darkness Eye Beam',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Power of Darkness',
// 				value: 5,
// 				description: ['Coming Soon.'],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/ow2PVuPQvOez2xFxUaPX',
// 		category: '',
// 	},
// 	{
// 		name: 'Lord Slug (Giant)',
// 		value: -6,
// 		abilities: [
// 			{
// 				name: 'Explosive Wave',
// 				value: 2,
// 				description: [
// 					'Creates a ki explosion, blowing away opponents. Can be used while under atk by an opponent.',
// 				],
// 			},
// 			{
// 				name: 'Pump Up',
// 				value: 2,
// 				description: [
// 					'Melee atk power and Ki Blast atk power greatly increase for 15 sec. Move spd greatly decreases.',
// 				],
// 			},
// 			{
// 				name: 'Darkness Eye Beam',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Super Explosive Wave',
// 				value: 4,
// 				description: ['Explosive Wave'],
// 			},
// 			{
// 				name: 'Darkness Blaster',
// 				value: 5,
// 				description: ['Coming Soon.'],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/mL86kfXrRomJa9kUCisd',
// 		category: '',
// 	},
// 	{
// 		name: 'Majin Buu',
// 		value: -6,
// 		abilities: [
// 			{
// 				name: 'Paralyze Beam',
// 				value: 2,
// 				description: ['Unguardable atk. Render opponent paralyzed for 3 sec.'],
// 			},
// 			{
// 				name: 'Sleep',
// 				value: 4,
// 				description: [
// 					'Sleep for 3 sec to recover all ki gauges and 30% of max HP.',
// 				],
// 			},
// 			{
// 				name: 'Buu Buu Gum',
// 				value: 3,
// 				description: ['Fire', 'Played after a hit'],
// 			},
// 			{
// 				name: 'Super Kamehameha',
// 				value: 3,
// 				description: ['Beam', 'Chargeable', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Angy Explosion',
// 				value: 5,
// 				description: [
// 					'Explosive Wave',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Unguardable',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/FiGLiyqRYy9QqALxL9Ox',
// 		category: '',
// 	},
// 	{
// 		name: 'Majin Buu (Evil)',
// 		value: -6,
// 		abilities: [
// 			{
// 				name: 'Paralyze Beam',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Mystic Breath',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Super Kamehameha',
// 				value: 3,
// 				description: ['Beam', 'Chargeable', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Flame Shower Breath',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Guilty Flash',
// 				value: 5,
// 				description: ['Coming Soon.'],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/iRYH7kh7SW2u2QYZ0ZJh',
// 		category: '',
// 	},
// 	{
// 		name: 'Majin Vegeta',
// 		value: -7,
// 		abilities: [
// 			{
// 				name: "Prince's Pride",
// 				value: 2,
// 				description: [
// 					'Ki charging spd and resistance to being stunned by atks increases for 15 sec.',
// 				],
// 			},
// 			{
// 				name: "Majin's Awakening",
// 				value: 3,
// 				description: ['Enter Sparking Mode; Blast power increases for 15 sec.'],
// 			},
// 			{
// 				name: 'Final Impact',
// 				value: 3,
// 				description: ['Fire', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Big Bang Attack',
// 				value: 3,
// 				description: ['Fire', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Final Explosion',
// 				value: 5,
// 				description: [
// 					'Explosive Wave',
// 					'In Sparking Mode',
// 					'Unguardable',
// 					'Played after a hit',
// 					'You also Take DMG',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/WexSElPAQ0W9OjHN7rV6',
// 		category: '',
// 	},
// 	{
// 		name: 'Majuub (GT)',
// 		value: -6,
// 		abilities: [
// 			{
// 				name: 'Paralyze Beam',
// 				value: 2,
// 				description: ['Unguardable atk. Renders opponent paralyzed for 3 sec.'],
// 			},
// 			{
// 				name: 'Mystic Breath',
// 				value: 1,
// 				description: ['Unguardable atk. Short range only.'],
// 			},
// 			{
// 				name: 'Super Consecutive Energy Blast',
// 				value: 2,
// 				description: ['Continuous Fire'],
// 			},
// 			{
// 				name: 'Majin Beam',
// 				value: 4,
// 				description: ['Beam', 'Unguardable', 'Played after a hit'],
// 			},
// 			{
// 				name: 'Lightning Arrow',
// 				value: 5,
// 				description: [
// 					'Rush',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Speed Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/c4WhoYDSQVK5ymmILEaK',
// 		category: '',
// 	},
// 	{
// 		name: 'Master Roshi',
// 		value: -2,
// 		abilities: [
// 			{
// 				name: 'Afterimage Strike',
// 				value: 3,
// 				description: [
// 					'Auto dodge all atks of any kind, except for Ki Blasts for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'False Courage',
// 				value: 1,
// 				description: [
// 					'Def and resistance to being stunned by atks increases for 10 sec.',
// 				],
// 			},
// 			{
// 				name: 'Original Kamehameha',
// 				value: 3,
// 				description: ['Beam', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Thunder Shock Surprise',
// 				value: 4,
// 				description: ['Beam', 'Unguardable', 'Played after a hit'],
// 			},
// 			{
// 				name: 'Evil Containment Wave',
// 				value: 5,
// 				description: [
// 					'Shortrange energy atk',
// 					'In Sparking Mode',
// 					'Unguardable',
// 					'Played after a hit',
// 					'You also take DMG',
// 					"DMG dealth and taken changes based on opponent's DP",
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/0MJzMS3aQDaOLSdLj8gm',
// 		category: '',
// 	},
// 	{
// 		name: 'Master Roshi (Max)',
// 		value: -2,
// 		abilities: [
// 			{
// 				name: 'False Courage',
// 				value: 1,
// 				description: [
// 					'Def and resistance to being stunned by atks increases for 10 sec.',
// 				],
// 			},
// 			{
// 				name: 'Pump Up',
// 				value: 2,
// 				description: [
// 					'Melee atk power and Ki Blast atk power greatly increase for 15 sec. Move spd greatly decreases.',
// 				],
// 			},
// 			{
// 				name: 'Original Kamehameha',
// 				value: 3,
// 				description: ['Beam', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Turtle School Ultimate Fist',
// 				value: 3,
// 				description: ['Rush', 'Played after a hit', 'Speed Impact'],
// 			},
// 			{
// 				name: 'Max Power Kamehameha',
// 				value: 5,
// 				description: ['Beam', 'In Sparking Mode', 'Blast Impact'],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/sb6LjYoFT3uu7PP1VUV4',
// 		category: '',
// 	},
// 	{
// 		name: 'Mecha Frieza',
// 		value: -6,
// 		abilities: [
// 			{
// 				name: 'Psychokinesis',
// 				value: 2,
// 				description: ['Unguardable atk. Render opponent paralyzed for 5 sec.'],
// 			},
// 			{
// 				name: 'Finish Sign',
// 				value: 3,
// 				description: [
// 					'Melee atk power, Ki blast atk power, and Blast power increase for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'Death Beam',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Fissure Slash',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Supernova',
// 				value: 5,
// 				description: ['Coming Soon.'],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/O8kalfHQEWx8pCDylJVH',
// 		category: '',
// 	},
// 	{
// 		name: 'Metal Cooler',
// 		value: -7,
// 		abilities: [
// 			{
// 				name: 'Instant Transmission',
// 				value: 2,
// 				description: ['Instantly move behind opponent.'],
// 			},
// 			{
// 				name: 'Regeneration',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Lock-On Buster',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Finger Blitz Barrage',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Supernova',
// 				value: 5,
// 				description: ['Coming Soon.'],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/mr7bPmUWTCulWzmr8fAX',
// 		category: '',
// 	},
// 	{
// 		name: 'Mr. Satan',
// 		value: -1,
// 		abilities: [
// 			{
// 				name: 'False Courage',
// 				value: 1,
// 				description: [
// 					'Def and resistance to being stunned by atks increases for 10 sec.',
// 				],
// 			},
// 			{
// 				name: 'Royal Raiment',
// 				value: 3,
// 				description: [
// 					'Melee atk power, Ki Blast atk power, defense, Blast power, and ki recovery speed increase for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'Dynamite Kick',
// 				value: 3,
// 				description: ['Rush', 'Played after a hit', 'Speed Impact'],
// 			},
// 			{
// 				name: 'Present Bomb',
// 				value: 3,
// 				description: ['Rush', 'Played after a hit', 'Unguardable'],
// 			},
// 			{
// 				name: 'Mr. Buu Arrives!',
// 				value: 5,
// 				description: [
// 					'Rush',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Speed Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/tWYVJoebQny8WgrO9kHL',
// 		category: '',
// 	},
// 	{
// 		name: 'Nail',
// 		value: -4,
// 		abilities: [
// 			{
// 				name: 'Buying Time',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Full Power',
// 				value: 3,
// 				description: ['Enter Sparking Mode.'],
// 			},
// 			{
// 				name: 'Full-Power Energy Wave',
// 				value: 3,
// 				description: ['Beam', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Super Destructive Wave',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Mystic Flasher',
// 				value: 5,
// 				description: ['Coming Soon.'],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/0xc6bg9fTDaL2DsFSkLO',
// 		category: '',
// 	},
// 	{
// 		name: 'Nappa',
// 		value: -3,
// 		abilities: [
// 			{
// 				name: 'Saiyan Spirit',
// 				value: 3,
// 				description: [
// 					'Melee atk power, Ki blast atk power, Blast power, and Smash Ki Blast spd increase for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'Pump Up',
// 				value: 2,
// 				description: [
// 					'Melee atk power and Ki Blast atk power greatly increase for 10 sec. Ki recovers more slowly.',
// 				],
// 			},
// 			{
// 				name: 'Volcano Explosion',
// 				value: 4,
// 				description: ['Attack opponent location'],
// 			},
// 			{
// 				name: 'Blazing Storm',
// 				value: 2,
// 				description: ['Mow down and explode'],
// 			},
// 			{
// 				name: 'Nappa Cannon',
// 				value: 5,
// 				description: [
// 					'Beam',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Blast Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/25GHB1M0QLCIIdsfME1E',
// 		category: '',
// 	},
// 	{
// 		name: 'Omega Shenron (GT)',
// 		value: -8,
// 		abilities: [
// 			{
// 				name: 'Wild Sense',
// 				value: 2,
// 				description: [
// 					'Auto dodge a single melee atk from opponent and counteratk.',
// 				],
// 			},
// 			{
// 				name: 'Power Up to the Very Limit',
// 				value: 3,
// 				description: ['Enter Sparking Mode.'],
// 			},
// 			{
// 				name: 'Gigantic Blaze',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Dragon Thunder',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Minus Energy Power Ball',
// 				value: 5,
// 				description: ['Coming Soon.'],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/Z1xPTaItSp6WQbYWQCfL',
// 		category: '',
// 	},
// 	{
// 		name: 'Pan (GT)',
// 		value: -3,
// 		abilities: [
// 			{
// 				name: 'Afterimage Strike',
// 				value: 3,
// 				description: ['Auto dodge all atks except for Ki Blasts for 15 sec.'],
// 			},
// 			{
// 				name: 'Saiyan Spirit',
// 				value: 3,
// 				description: [
// 					'Melee atk power, Ki blast atk power, Blast power, and dmg inflicted from consecutive hits (such as combos) increase for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'Kamehameha',
// 				value: 3,
// 				description: ['Beam', 'Chargeable', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Giru Missile',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: "Maiden's Rage",
// 				value: 5,
// 				description: ['Coming Soon.'],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/yNK8gcQXSkcdaMmmPPjw',
// 		category: '',
// 	},
// 	{
// 		name: 'Perfect Cell',
// 		value: -7,
// 		abilities: [
// 			{
// 				name: 'Instant Transmission',
// 				value: 2,
// 				description: ['Instantly move behind opponent.'],
// 			},
// 			{
// 				name: 'Wild Sense',
// 				value: 2,
// 				description: [
// 					'Auto dodge a single melee atk from opponent and counteratk.',
// 				],
// 			},
// 			{
// 				name: 'Perfect Beam',
// 				value: 2,
// 				description: ['Beam'],
// 			},
// 			{
// 				name: 'Perfect Rush',
// 				value: 3,
// 				description: ['Rush', 'Played after a hit', 'Speed Impact'],
// 			},
// 			{
// 				name: 'Solar Kamehameha',
// 				value: 5,
// 				description: [
// 					'Beam',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Blast Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/XbGeKhiSUW21HbjjbKTA',
// 		category: '',
// 	},
// 	{
// 		name: 'Piccolo',
// 		value: -4,
// 		abilities: [
// 			{
// 				name: 'Paralyze Beam',
// 				value: 2,
// 				description: ['Unguardable atk. Renders opponent paralyzed for 3 sec.'],
// 			},
// 			{
// 				name: 'All Out',
// 				value: 3,
// 				description: ['Enter Sparking Mode.'],
// 			},
// 			{
// 				name: 'Explosive Demon Wave',
// 				value: 2,
// 				description: ['Shortrange energy atk'],
// 			},
// 			{
// 				name: 'Explosive Breath Cannon',
// 				value: 3,
// 				description: ['Rush', 'Played after a hit', 'Speed Impact'],
// 			},
// 			{
// 				name: 'Special Beam Cannon',
// 				value: 5,
// 				description: ['Beam', 'In Sparking Mode'],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/0SwHgtnQQwmEBasTjywL',
// 		category: '',
// 	},
// 	{
// 		name: 'Piccolo (Fused)',
// 		value: -5,
// 		abilities: [
// 			{
// 				name: 'Wild Sense',
// 				value: 2,
// 				description: [
// 					'Auto dodge a single melee atk from opponent and counteratk.',
// 				],
// 			},
// 			{
// 				name: 'False Courage',
// 				value: 1,
// 				description: [
// 					'Def and resistance to being stunned by atks increases for 10 sec.',
// 				],
// 			},
// 			{
// 				name: 'Special Beam Cannon',
// 				value: 3,
// 				description: ['Beam', 'Chargeable'],
// 			},
// 			{
// 				name: 'Light Grenade',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Hellzone Grenade',
// 				value: 5,
// 				description: ['Coming Soon.'],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/b27cYCxRGG3pSHT1EKwI',
// 		category: '',
// 	},
// 	{
// 		name: 'Raditz',
// 		value: -3,
// 		abilities: [
// 			{
// 				name: 'Saiyan Spirit',
// 				value: 3,
// 				description: [
// 					'Melee atk power, Ki blast atk power, Blast power, and dmg inflicted from consecutive hits (such as combos) increase for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'Full Power',
// 				value: 3,
// 				description: ['Enter Sparking Mode.'],
// 			},
// 			{
// 				name: 'Energy Crash',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Sonic Assault',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Begone!',
// 				value: 5,
// 				description: ['Coming Soon.'],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/XLahtOBsRROetQbUhwSg',
// 		category: '',
// 	},
// 	{
// 		name: 'Recoome',
// 		value: -3,
// 		abilities: [
// 			{
// 				name: 'False Courage',
// 				value: 1,
// 				description: [
// 					'Def and resistance to being stunned by atks increases for 10 sec.',
// 				],
// 			},
// 			{
// 				name: 'SP Fighting Pose 1',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Recoome Eraser Gun',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Recoome Grenade Bomber',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Recoome Fighting Bomber',
// 				value: 5,
// 				description: ['Coming Soon.'],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/FXvYaxuTmqhi1zfD3MUQ',
// 		category: '',
// 	},
// 	{
// 		name: 'Ribrianne',
// 		value: -5,
// 		abilities: [
// 			{
// 				name: 'Light of Love',
// 				value: 2,
// 				description: ['Unguardable atk. Renders opponent paralyzed for 4 sec.'],
// 			},
// 			{
// 				name: "Maiden's Fury",
// 				value: 3,
// 				description: ['Enter Sparking Mode.'],
// 			},
// 			{
// 				name: 'Pretty Cannon',
// 				value: 3,
// 				description: ['Fire', 'Blast Impact', '.'],
// 			},
// 			{
// 				name: "Maiden's Charge",
// 				value: 4,
// 				description: ['Rush', 'Unguardable', 'Spead Impact'],
// 			},
// 			{
// 				name: 'Infinite Love',
// 				value: 5,
// 				description: [
// 					'Rush',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Speed Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/1xMmezmNSFiN7wBmGFIT',
// 		category: '',
// 	},
// 	{
// 		name: 'Roasie',
// 		value: -5,
// 		abilities: [
// 			{
// 				name: 'Full-Power Charge',
// 				value: 2,
// 				description: ['Ki gauge fully recovers.'],
// 			},
// 			{
// 				name: "Maiden's Fury",
// 				value: 3,
// 				description: ['Enter Sparking Mode.'],
// 			},
// 			{
// 				name: 'Yatchaina Fist',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Full-Power Energy Blast Volley',
// 				value: 3,
// 				description: ['Continuous Fire'],
// 			},
// 			{
// 				name: 'Love Symphony',
// 				value: 5,
// 				description: ['Coming Soon.'],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/Vm7KxqiQkOcI5XJ7Qlvg',
// 		category: '',
// 	},
// 	{
// 		name: 'Saibaman',
// 		value: -2,
// 		abilities: [
// 			{
// 				name: 'Acid',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Afterimage',
// 				value: 2,
// 				description: [
// 					'Auto dodge a single atk of any kind, except for Ki Blasts.',
// 				],
// 			},
// 			{
// 				name: 'Full-Power Energy Wave',
// 				value: 3,
// 				description: ['Beam', 'Blast Impact'],
// 			},
// 			{
// 				name: 'High Speed Rush',
// 				value: 3,
// 				description: ['Rush', 'Played after a hit', 'Speed Impact'],
// 			},
// 			{
// 				name: 'Saibaman Bomb',
// 				value: 5,
// 				description: ['Coming Soon.'],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/mhQSGQmmT9mKttYCEC1y',
// 		category: '',
// 	},
// 	{
// 		name: 'Spopovich',
// 		value: -2,
// 		abilities: [
// 			{
// 				name: "A Servant's Latent Power",
// 				value: 1,
// 				description: [
// 					'Melee atk power and Ki blast atk power greatly increase for 15 sec. Ki recovers more slowly.',
// 				],
// 			},
// 			{
// 				name: 'Berserker',
// 				value: 2,
// 				description: ['Def greatly increases for 15 sec.'],
// 			},
// 			{
// 				name: 'Berserker Crash',
// 				value: 4,
// 				description: ['Rush', 'Unguardable'],
// 			},
// 			{
// 				name: 'Mad Banquet',
// 				value: 3,
// 				description: ['Rush', 'Played after a hit', 'Spead Impact'],
// 			},
// 			{
// 				name: 'Majin Buu Resurrection',
// 				value: 5,
// 				description: [
// 					'Rush',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Spead Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/OUaTX6P8TGOZoBb1Fnu5',
// 		category: '',
// 	},
// 	{
// 		name: 'Super Baby (GT) SSJ1',
// 		value: -6,
// 		abilities: [
// 			{
// 				name: 'Afterimage',
// 				value: 2,
// 				description: [
// 					'Auto dodge a single atk of any kind, except for Ki Blasts.',
// 				],
// 			},
// 			{
// 				name: 'High-Tension',
// 				value: 3,
// 				description: [
// 					'Melee atk power, Ki blast atk power, and ki recovery spd increase for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'Galick Gun',
// 				value: 3,
// 				description: ['Beam', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Tuffle Revenger',
// 				value: 3,
// 				description: ['Rush', 'Played after a hit', 'Speeed Impact'],
// 			},
// 			{
// 				name: 'Final Flash',
// 				value: 5,
// 				description: [
// 					'Beam',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Blast Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/DLZbmiRdmQNOz0iTcBhA',
// 		category: '',
// 	},
// 	{
// 		name: 'Super Baby (GT) SSJ2',
// 		value: -7,
// 		abilities: [
// 			{
// 				name: 'Explosive Wave',
// 				value: 2,
// 				description: [
// 					'Creates a ki explosion, blowing away opponents. Can be used while under atk by an opponent.',
// 				],
// 			},
// 			{
// 				name: 'Full Power',
// 				value: 3,
// 				description: ['Enter Sparking Mode.'],
// 			},
// 			{
// 				name: 'Final Flash',
// 				value: 3,
// 				description: ['Beam', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Revenge Cutter',
// 				value: 3,
// 				description: ['Fire', 'Unguardable'],
// 			},
// 			{
// 				name: 'Revenge Death Ball',
// 				value: 5,
// 				description: [
// 					'Fire',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Blast Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/YJryeQLRCSoCsx40jqJo',
// 		category: '',
// 	},
// 	{
// 		name: 'Super Buu',
// 		value: -6,
// 		abilities: [
// 			{
// 				name: 'Vice Shout',
// 				value: 2,
// 				description: ['Unguardable atk. Renders opponent paralyzed for 3 sec.'],
// 			},
// 			{
// 				name: 'Regeneration',
// 				value: 4,
// 				description: ['HP recovers by 40% of max.'],
// 			},
// 			{
// 				name: 'Assault Rain',
// 				value: 3,
// 				description: ['Simultaneous Fire'],
// 			},
// 			{
// 				name: 'Majin Beam',
// 				value: 4,
// 				description: ['Beam', 'Unguardable', 'Played after a hit'],
// 			},
// 			{
// 				name: 'Revenge Death Bomber',
// 				value: 5,
// 				description: [
// 					'Explosive Wave',
// 					'In Sparking Mode',
// 					'Unguardable',
// 					'Played after a hit',
// 					'You also take DMG',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/FEKbJEuTz6YEimahCEaA',
// 		category: '',
// 	},
// 	{
// 		name: 'Super Buuhan',
// 		value: -7,
// 		abilities: [
// 			{
// 				name: 'Afterimage',
// 				value: 2,
// 				description: [
// 					'Auto dodge a single atk of any kind, except for Ki Blasts.',
// 				],
// 			},
// 			{
// 				name: 'High-Tension',
// 				value: 3,
// 				description: [
// 					'Melee atk power, Ki blast atk power, and Blast power increase for 15 sec. Ki recovers by two gauges.',
// 				],
// 			},
// 			{
// 				name: 'Super Kamehameha',
// 				value: 3,
// 				description: ['Beam', 'Chargeable', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Majin Beam',
// 				value: 4,
// 				description: ['Beam', 'Unguardable', 'Played after a hit'],
// 			},
// 			{
// 				name: 'Super Ghost Buu Attack',
// 				value: 5,
// 				description: [
// 					'Simultaneous Fire',
// 					'In Sparking Mode',
// 					'Unguardable',
// 					'Played after a hit',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/rUO8KZ00QeyqbRB7VXs4',
// 		category: '',
// 	},
// 	{
// 		name: 'Super Buutenks',
// 		value: -7,
// 		abilities: [
// 			{
// 				name: 'Explosive Wave',
// 				value: 2,
// 				description: [
// 					'Creates a ki explosion, blowing away opponents. Can be used while under atk by an opponent.',
// 				],
// 			},
// 			{
// 				name: 'Regeneration',
// 				value: 4,
// 				description: ['HP recovers by 40% of max.'],
// 			},
// 			{
// 				name: 'Galactic Donut Volley',
// 				value: 3,
// 				description: ['Fire', 'Unguardable'],
// 			},
// 			{
// 				name: 'Special Beam Cannon',
// 				value: 3,
// 				description: ['Beam', 'Chargeable'],
// 			},
// 			{
// 				name: 'Super Kamehameha',
// 				value: 5,
// 				description: ['Beam', 'In Sparking Mode', 'Blast Impact'],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/bqa9FffqQOKyCgWg7pLl',
// 		category: '',
// 	},
// 	{
// 		name: 'Super Garlic Jr.',
// 		value: -4,
// 		abilities: [
// 			{
// 				name: 'Sealing Paralyze Beam',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Makyo Star',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Death Impact',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Darkness Illusion',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Dead Zone',
// 				value: 5,
// 				description: ['Coming Soon.'],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/a67C3hnSJKRHVTMqgJx6',
// 		category: '',
// 	},
// 	{
// 		name: 'Super Janemba',
// 		value: -7,
// 		abilities: [
// 			{
// 				name: 'Mystic Breath',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Dimension Shift',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Evil Cannon',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Lightning Shower Rain',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Dimsension Sword Attack',
// 				value: 5,
// 				description: ['Coming Soon.'],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/spsPzaoS4aahrFyQJfef',
// 		category: '',
// 	},
// 	{
// 		name: 'Super Trunks',
// 		value: -6,
// 		abilities: [
// 			{
// 				name: 'Explosive Wave',
// 				value: 2,
// 				description: [
// 					'Creates a ki explosion, blowing away opponents. Can be used while under atk by an opponent.',
// 				],
// 			},
// 			{
// 				name: 'Inexperienced Power Up',
// 				value: 3,
// 				description: [
// 					'Enter Sparking Mode; melee attack power and Ki Blast atk power increase for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'Finish Buster',
// 				value: 3,
// 				description: ['Fire', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Burning Attack',
// 				value: 3,
// 				description: ['Fire', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Super Explosive Wave',
// 				value: 5,
// 				description: [
// 					'Explosive Wave',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/dcemxY80RjuKMdNzhCXZ',
// 		category: '',
// 	},
// 	{
// 		name: 'Super Vegeta',
// 		value: -6,
// 		abilities: [
// 			{
// 				name: 'Explosive Wave',
// 				value: 2,
// 				description: [
// 					'Creates a ki explosion, blowing away opponents. Can be used while under atk by an opponent.',
// 				],
// 			},
// 			{
// 				name: 'I Am Super Vegeta',
// 				value: 3,
// 				description: ['Enter Sparking Mode; Blast power increase for 15 sec.'],
// 			},
// 			{
// 				name: 'Big Bang Attack',
// 				value: 3,
// 				description: ['Fire', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Spirit Breaking Cannon',
// 				value: 3,
// 				description: ['Rush', 'Played after a hit', 'Speed Impact'],
// 			},
// 			{
// 				name: 'Final Flash',
// 				value: 5,
// 				description: [
// 					'Beam',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Blast Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/wHhfp9GwQ6u4JRcn7SoF',
// 		category: '',
// 	},
// 	{
// 		name: 'Super Vegito',
// 		value: -8,
// 		abilities: [
// 			{
// 				name: 'Afterimage Strike',
// 				value: 3,
// 				description: ['Auto dodge all atks except for Ki Blasts for 15 sec.'],
// 			},
// 			{
// 				name: 'Finish Sign',
// 				value: 3,
// 				description: [
// 					'Melee atk power, Ki blast atk power, and Blast power increase for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'Big Bang Attack',
// 				value: 3,
// 				description: ['Beam', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Final Kamehameha',
// 				value: 3,
// 				description: ['Beam', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Beam Sword Slash',
// 				value: 5,
// 				description: [
// 					'Rush',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Speed Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/SsDYppQhR7O1e1kd0SGw',
// 		category: '',
// 	},
// 	{
// 		name: 'Super Zarbon',
// 		value: -3,
// 		abilities: [
// 			{
// 				name: 'False Courage',
// 				value: 1,
// 				description: [
// 					'Def and resistance to being stunned by atks increases for 10 sec.',
// 				],
// 			},
// 			{
// 				name: 'High-Tension',
// 				value: 3,
// 				description: [
// 					'Melee atk power, Ki blast atk power, and ki recovery spd increase for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'Elegant Blaster',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Wild Pressure',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Monster Crusher',
// 				value: 5,
// 				description: ['Coming Soon.'],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/KG59McqQ7S02W0rtOK8w',
// 		category: '',
// 	},
// 	{
// 		name: 'Syn Shenron',
// 		value: -7,
// 		abilities: [
// 			{
// 				name: 'Explosive Wave',
// 				value: 2,
// 				description: [
// 					'Creates a ki explosion, blowing away opponents. Can be used while under atk by an opponent.',
// 				],
// 			},
// 			{
// 				name: 'Mystic Breath',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Trap Shooter',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Blazing Storm',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Gigantic Blaze',
// 				value: 5,
// 				description: ['Coming Soon.'],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/t6tMZFtZRN2VuVZnDmui',
// 		category: '',
// 	},
// 	{
// 		name: 'Tapion',
// 		value: -4,
// 		abilities: [
// 			{
// 				name: "Hero's Flute",
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Afterimage',
// 				value: 2,
// 				description: [
// 					'Auto dodge a single atk of any kind, except for Ki Blasts.',
// 				],
// 			},
// 			{
// 				name: 'Brave Cannon',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Brave Slash',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Brave Sword Attack',
// 				value: 5,
// 				description: ['Coming Soon.'],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/SUf0QYTRSiHpkcWDyPnA',
// 		category: '',
// 	},
// 	{
// 		name: 'Tien',
// 		value: -4,
// 		abilities: [
// 			{
// 				name: 'Solar Flare',
// 				value: 2,
// 				description: [
// 					'Unguardable atk. Renders opponent defenseless for 5 sec.',
// 				],
// 			},
// 			{
// 				name: 'Wild Sense',
// 				value: 2,
// 				description: [
// 					'Auto dodge a single melee atk from opponent and counteratk.',
// 				],
// 			},
// 			{
// 				name: 'Dodon Ray',
// 				value: 2,
// 				description: ['Beam'],
// 			},
// 			{
// 				name: 'Tri-Beam',
// 				value: 3,
// 				description: ['Fire'],
// 			},
// 			{
// 				name: 'Neo Tri-Beam',
// 				value: 5,
// 				description: [
// 					'Fire',
// 					'In Sparking Mode',
// 					'You also take DMG',
// 					'Repeate usage possible',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/CTQr2ME0SdWEo9MOi5eR',
// 		category: '',
// 	},
// 	{
// 		name: 'Toppo',
// 		value: -7,
// 		abilities: [
// 			{
// 				name: 'Justice!',
// 				value: 3,
// 				description: [
// 					'Ki blast atk power, ki recovery spd, and ki charging spd increase for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'Pride Trooper Pose 1',
// 				value: 3,
// 				description: [
// 					'Enter Sparking Mode; Blast power and ki recovery spd increase for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'Justice Flash',
// 				value: 2,
// 				description: ['Continuous Fire'],
// 			},
// 			{
// 				name: 'Justice Tornado',
// 				value: 3,
// 				description: ['Rush', 'Played after a hit', 'Speed Impact'],
// 			},
// 			{
// 				name: 'United Justice Stream',
// 				value: 5,
// 				description: [
// 					'Beam',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Blast Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/KWqrIcfYShaVJIczJlVA',
// 		category: '',
// 	},
// 	{
// 		name: 'Toppo (God)',
// 		value: -8,
// 		abilities: [
// 			{
// 				name: 'Resolution',
// 				value: 3,
// 				description: [
// 					'Melee atk power, Ki blast atk power, and Blast power increase for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'Hakai Aura',
// 				value: 3,
// 				description: [
// 					'Character creates a barrier around themselves to defend against atks. Can be used while under atk by an opponent.',
// 				],
// 			},
// 			{
// 				name: 'Destruction Flash',
// 				value: 2,
// 				description: ['Continuous Fire'],
// 			},
// 			{
// 				name: 'Sphere of Destruction',
// 				value: 3,
// 				description: ['Fire', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Super Large Sphere of Destruction',
// 				value: 5,
// 				description: [
// 					'Fire',
// 					'In Sparking Mode',
// 					'Unguardable',
// 					'Played after a hit',
// 					'Blast Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/O8GWR2pYSgyKQTAKkK2d',
// 		category: '',
// 	},
// 	{
// 		name: 'Trunks (Future)',
// 		value: -5,
// 		abilities: [
// 			{
// 				name: 'Solar Flare',
// 				value: 2,
// 				description: [
// 					'Unguardable atk. Renders opponent defenseless for 5 sec.',
// 				],
// 			},
// 			{
// 				name: 'Wild Sense',
// 				value: 2,
// 				description: [
// 					'Auto dodge a single melee atk from opponent and counteratk.',
// 				],
// 			},
// 			{
// 				name: 'Masenko',
// 				value: 3,
// 				description: ['Beam', 'Chargeable', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Lightning Sword Slash',
// 				value: 3,
// 				description: ['Fire', 'Unguardable', 'Played after a hit'],
// 			},
// 			{
// 				name: 'Shining Slash',
// 				value: 5,
// 				description: [
// 					'Rush',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Spead Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/3fsV2hrTRfGY8Y1A4eqE',
// 		category: '',
// 	},
// 	{
// 		name: 'Trunks (Future) SSJ1',
// 		value: -6,
// 		abilities: [
// 			{
// 				name: 'Explosive Wave',
// 				value: 2,
// 				description: [
// 					'Creates a ki explosion, blowing away opponents. Can be used while under atk by an opponent.',
// 				],
// 			},
// 			{
// 				name: 'Power Up to the Very Limit',
// 				value: 3,
// 				description: [
// 					'Enter Sparking Mode; melee atk power, Ki Blast atk power, Blast power, and def, increase for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'Galick Gun',
// 				value: 3,
// 				description: ['Beam', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Final Flash',
// 				value: 3,
// 				description: ['Beam', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Final Hope Slash',
// 				value: 5,
// 				description: [
// 					'Rush',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Speed Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/YUaXdg3AR02MLUCDGq0C',
// 		category: '',
// 	},
// 	{
// 		name: 'Trunks (Kid)',
// 		value: -4,
// 		abilities: [
// 			{
// 				name: 'Afterimage',
// 				value: 2,
// 				description: [
// 					'Auto dodge a single atk of any kind, except for Ki Blasts.',
// 				],
// 			},
// 			{
// 				name: 'Finish Sign',
// 				value: 3,
// 				description: [
// 					'Melee atk power, Ki blast atk power, and Blast power increase for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'Full-Power Energy Wave',
// 				value: 3,
// 				description: ['Beam', 'Blast Impact'],
// 			},
// 			{
// 				name: 'High Speed Rush',
// 				value: 3,
// 				description: ['Rush', 'Played after a hit', 'Speed Impact'],
// 			},
// 			{
// 				name: 'Finish Buster',
// 				value: 5,
// 				description: ['Fire', 'In Sparking Mode', 'Blast Impact'],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/mhcJsLfbQDyrH2FvPzoQ',
// 		category: '',
// 	},
// 	{
// 		name: 'Trunks (Kid) SSJ1',
// 		value: -5,
// 		abilities: [
// 			{
// 				name: 'Explosive Wave',
// 				value: 2,
// 				description: [
// 					'Creates a ki explosion, blowing away opponents. Can be used while under atk by an opponent.',
// 				],
// 			},
// 			{
// 				name: 'Super Unyielding Spirit',
// 				value: 3,
// 				description: [
// 					'Enter Sparking Mode; melee atk power and Ki Blast atk power increase for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'Full-Power Energy Wave',
// 				value: 3,
// 				description: ['Beam', 'Blast Impact'],
// 			},
// 			{
// 				name: 'High Speed Rush',
// 				value: 3,
// 				description: ['Rush', 'Played after a hit', 'Speed Impact'],
// 			},
// 			{
// 				name: 'Victory Cannon',
// 				value: 5,
// 				description: [
// 					'Beam',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Blast Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/cNz0Fw2RQaHbKM74efaH',
// 		category: '',
// 	},
// 	{
// 		name: 'Trunks (Melee)',
// 		value: -5,
// 		abilities: [
// 			{
// 				name: 'Explosive Wave',
// 				value: 2,
// 				description: [
// 					'Creates a ki explosion, blowing away opponents. Can be used while under atk by an opponent.',
// 				],
// 			},
// 			{
// 				name: 'Wild Sense',
// 				value: 2,
// 				description: [
// 					'Auto dodge a single melee atk from opponent and counteratk.',
// 				],
// 			},
// 			{
// 				name: 'Burning Attack',
// 				value: 3,
// 				description: ['Fire', 'Blast Impact'],
// 			},
// 			{
// 				name: 'High Speed Rush',
// 				value: 3,
// 				description: ['Rush', 'Played after a hit', 'Speed Impact'],
// 			},
// 			{
// 				name: 'Finish Buster',
// 				value: 5,
// 				description: ['Fire', 'In Sparking Mode', 'Blast Impact'],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/qUuoPeQTeG8hz4k7Bnwq',
// 		category: '',
// 	},
// 	{
// 		name: 'Trunks (Melee) SSJ1',
// 		value: -6,
// 		abilities: [
// 			{
// 				name: 'Explosive Wave',
// 				value: 2,
// 				description: [
// 					'Creates a ki explosion, blowing away opponents. Can be used while under atk by an opponent.',
// 				],
// 			},
// 			{
// 				name: 'Finish Sign',
// 				value: 3,
// 				description: [
// 					'Melee atk power, Ki blast atk power, and Blast power increase for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'Burning Attack',
// 				value: 3,
// 				description: ['Fire', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Burning Breaker',
// 				value: 3,
// 				description: ['Rush', 'Played after a hit', 'Speed Impact'],
// 			},
// 			{
// 				name: 'Heat Dome Attack',
// 				value: 5,
// 				description: [
// 					'Rush',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Speed Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/nA4iE7kvTz6XZs36oqQC',
// 		category: '',
// 	},
// 	{
// 		name: 'Trunks (Sword)',
// 		value: -4,
// 		abilities: [
// 			{
// 				name: 'Afterimage',
// 				value: 2,
// 				description: [
// 					'Auto dodge a single atk of any kind, except for Ki Blasts.',
// 				],
// 			},
// 			{
// 				name: 'Power Up to the Very Limit',
// 				value: 3,
// 				description: [
// 					'Enter Sparking Mode; melee atk power, Ki Blast atk power, Blast power, and def increase for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'Finish Buster',
// 				value: 3,
// 				description: ['Fire', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Burning Storm',
// 				value: 3,
// 				description: ['Continuous Fire'],
// 			},
// 			{
// 				name: 'Lightning Sword Slash',
// 				value: 5,
// 				description: [
// 					'Fire',
// 					'In Sparking Mode',
// 					'Unguardable',
// 					'Played after a hit',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/5kSxW9dIRP2GXgHnigW6',
// 		category: '',
// 	},
// 	{
// 		name: 'Trunks (Sword) SSJ1',
// 		value: -5,
// 		abilities: [
// 			{
// 				name: 'Explosive Wave',
// 				value: 2,
// 				description: [
// 					'Creates a ki explosion, blowing away opponents. Can be used while under atk by an opponent.',
// 				],
// 			},
// 			{
// 				name: 'Burning Heart',
// 				value: 3,
// 				description: ['Enter Sparking Mode; Blast power increases for 15 sec.'],
// 			},
// 			{
// 				name: 'Burning Attack',
// 				value: 3,
// 				description: ['Fire', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Burning Storm',
// 				value: 3,
// 				description: ['Continuous Fire'],
// 			},
// 			{
// 				name: 'Shining Sword Attack',
// 				value: 5,
// 				description: [
// 					'Rush',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Speed Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/Lyz7mc9FTQCLD8BlnTFA',
// 		category: '',
// 	},
// 	{
// 		name: 'Turles',
// 		value: -4,
// 		abilities: [
// 			{
// 				name: 'Explosive Wave',
// 				value: 2,
// 				description: [
// 					'Creates a ki explosion, blowing away opponents. Can be used while under atk by an opponent.',
// 				],
// 			},
// 			{
// 				name: 'Fruit of the Tree of Might',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Kill Driver',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Full-Power Energy Wave Combo',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Meteor Burst',
// 				value: 5,
// 				description: ['Coming Soon.'],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/DZC5MbNSsGD4vN3lmu5N',
// 		category: '',
// 	},
// 	{
// 		name: 'Ultimate Gohan',
// 		value: -7,
// 		abilities: [
// 			{
// 				name: 'Wild Sense',
// 				value: 2,
// 				description: [
// 					'Auto dodge a single melee atk from opponent and counteratk.',
// 				],
// 			},
// 			{
// 				name: 'Power Up to the Very Limit',
// 				value: 3,
// 				description: ['Enter Sparking Mode.'],
// 			},
// 			{
// 				name: 'Super Kamehameha',
// 				value: 3,
// 				description: ['Beam', 'Chargeable', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Fierce Combination',
// 				value: 2,
// 				description: ['Rush', 'Played after a hit', 'Speed Impact'],
// 			},
// 			{
// 				name: 'Burst Rush',
// 				value: 5,
// 				description: [
// 					'Rush',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Speed Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/zMmo3C6TQFiKKfspAV8m',
// 		category: '',
// 	},
// 	{
// 		name: 'Uub (GT)',
// 		value: -4,
// 		abilities: [
// 			{
// 				name: 'Wild Sense',
// 				value: 2,
// 				description: [
// 					'Auto dodge a single melee atk from opponent and counteratk.',
// 				],
// 			},
// 			{
// 				name: 'Power Up to the Very Limit',
// 				value: 3,
// 				description: ['Enter Sparking Mode; def increases for 15 sec.'],
// 			},
// 			{
// 				name: 'Super Kamehameha',
// 				value: 3,
// 				description: ['Beam', 'Chargeable', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Blazing Barrage Palm',
// 				value: 3,
// 				description: ['Rush', 'Played after a hit'],
// 			},
// 			{
// 				name: 'Super Explosive Wave',
// 				value: 5,
// 				description: ['Explosive Wave', 'In Sparking Mode'],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/SxTJDD4KS7SLDM0jTT60',
// 		category: '',
// 	},
// 	{
// 		name: 'Vegeta (GT) SSJ4',
// 		value: -8,
// 		abilities: [
// 			{
// 				name: 'Explosive Wave',
// 				value: 2,
// 				description: [
// 					'Creates a ki explosion, blowing away opponents. Can be used while under atk by an opponent.',
// 				],
// 			},
// 			{
// 				name: 'Finish Sign',
// 				value: 3,
// 				description: [
// 					'Melee atk power, Ki blast atk power, and Blast power increase for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'Final Flash',
// 				value: 3,
// 				description: ['Beam', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Spirit Breaking Cannon',
// 				value: 3,
// 				description: ['Rush', 'Played after a hit', 'Speed Impact'],
// 			},
// 			{
// 				name: 'Final Shine Attack',
// 				value: 5,
// 				description: [
// 					'Beam',
// 					'In Sparking Mode',
// 					'played after a hit',
// 					'Blast Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/RfgZAZQERUSi20HQsZhT',
// 		category: '',
// 	},
// 	{
// 		name: 'Vegeta (Scouter)',
// 		value: -4,
// 		abilities: [
// 			{
// 				name: 'Explosive Wave',
// 				value: 2,
// 				description: [
// 					'Creates a ki explosion, blowing away opponents. Can be used while under atk by an opponent.',
// 				],
// 			},
// 			{
// 				name: 'Saiyan Spirit',
// 				value: 3,
// 				description: [
// 					'Melee atk power, Ki blast atk power, Smash Atk charge spd and Smash Ki Blast charging spd increase for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'Galick Gun',
// 				value: 3,
// 				description: ['Beam', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Final Galick Cannon',
// 				value: 3,
// 				description: ['Rush', 'Played after a hit', 'Speed Impact'],
// 			},
// 			{
// 				name: 'Dirty Fireworks',
// 				value: 5,
// 				description: [
// 					'Rush',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Speed Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/SOFlBAogRpScTEQJBrr2',
// 		category: '',
// 	},
// 	{
// 		name: 'Vegeta (Super)',
// 		value: -5,
// 		abilities: [
// 			{
// 				name: 'Explosive Wave',
// 				value: 2,
// 				description: [
// 					'Creates a ki explosion, blowing away opponents. Can be used while under atk by an opponent.',
// 				],
// 			},
// 			{
// 				name: 'All Warmed Up',
// 				value: 3,
// 				description: ['Enter Sparking Mode.'],
// 			},
// 			{
// 				name: 'Galick Gun',
// 				value: 3,
// 				description: ['Beam', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Absolute Rush',
// 				value: 3,
// 				description: ['Rush', 'Played after a hit', 'Speed Impact'],
// 			},
// 			{
// 				name: 'Final Flash',
// 				value: 5,
// 				description: ['Beam', 'In Sparking Mode', 'Blast Impact'],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/8FxfQ1pRuWvuS3qRudlf',
// 		category: '',
// 	},
// 	{
// 		name: 'Vegeta (Super) SSJ1',
// 		value: -6,
// 		abilities: [
// 			{
// 				name: 'Saiyan Spirit',
// 				value: 3,
// 				description: [
// 					'Melee atk power, Ki blast atk power, Blast power, and dmg inflicted from consecutive hits (such as combos) increase for 15 sec.',
// 				],
// 			},
// 			{
// 				name: "I'll Get You For This...",
// 				value: 3,
// 				description: ['Enter Sparking Mode.'],
// 			},
// 			{
// 				name: 'Galick Rush',
// 				value: 3,
// 				description: ['Fire', 'Played after a hit'],
// 			},
// 			{
// 				name: 'Galick Uppercut',
// 				value: 3,
// 				description: ['Rush', 'Played after a hit', 'Speed Impact'],
// 			},
// 			{
// 				name: 'Final Galick Blast',
// 				value: 5,
// 				description: [
// 					'Rush',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Speed Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/kJA9oNyDR7qVzBgOL9GK',
// 		category: '',
// 	},
// 	{
// 		name: 'Vegeta (Super) SSJB',
// 		value: -8,
// 		abilities: [
// 			{
// 				name: "I'm No Pushover",
// 				value: 3,
// 				description: [
// 					'Melee atk power, Ki blast atk power, and ki recovery spd increase for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'Limits?! I Break Them!',
// 				value: 5,
// 				description: [
// 					'Melee atk power, Ki blast atk power, and Blast power increase during battle.',
// 				],
// 			},
// 			{
// 				name: 'God Shine Attack',
// 				value: 3,
// 				description: ['Beam', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Gamma Burst Flash',
// 				value: 2,
// 				description: ['Shortrange energy atk'],
// 			},
// 			{
// 				name: 'Final God Explosion',
// 				value: 5,
// 				description: [
// 					'Explosive Wave',
// 					'In Sparking Mode',
// 					'Unguardable',
// 					'Played after a hit',
// 					'You also Take DMG',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/INhPxDHySW641hfAr1Pg',
// 		category: '',
// 	},
// 	{
// 		name: 'Vegeta (Super) SSJG',
// 		value: -7,
// 		abilities: [
// 			{
// 				name: 'Explosive Wave',
// 				value: 2,
// 				description: [
// 					'Creates a ki explosion, blowing away opponents. Can be used while under atk by an opponent.',
// 				],
// 			},
// 			{
// 				name: 'Saiyan Spirit',
// 				value: 3,
// 				description: [
// 					'Melee atk power, Ki blast atk power, Blast power, and dmg inflicted from consecutive hits (such as combos) increase for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'God Shine Attack',
// 				value: 3,
// 				description: ['Continuous Fire', 'Played after a hit'],
// 			},
// 			{
// 				name: 'Gamma Fist',
// 				value: 3,
// 				description: ['Rush', 'Played after a hit', 'Speed Impact'],
// 			},
// 			{
// 				name: 'Prominence Flash',
// 				value: 5,
// 				description: [
// 					'Beam',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Blast Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/wjxaR8f6Sr25FxbgId6b',
// 		category: '',
// 	},
// 	{
// 		name: 'Vegeta (Z-Early)',
// 		value: -5,
// 		abilities: [
// 			{
// 				name: 'Explosive Wave',
// 				value: 2,
// 				description: [
// 					'Creates a ki explosion, blowing away opponents. Can be used while under atk by an opponent.',
// 				],
// 			},
// 			{
// 				name: 'Full Power',
// 				value: 3,
// 				description: ['Enter Sparking Mode.'],
// 			},
// 			{
// 				name: 'Galick Gun',
// 				value: 3,
// 				description: ['Beam', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Super Energy Wave Combo',
// 				value: 3,
// 				description: ['Continuous Fire'],
// 			},
// 			{
// 				name: 'Super Explosive Wave',
// 				value: 5,
// 				description: [
// 					'Explosive Wave',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/eGaVes17T2u6UxaYDH6m',
// 		category: '',
// 	},
// 	{
// 		name: 'Vegeta (Z-Early) SSJ1',
// 		value: -6,
// 		abilities: [
// 			{
// 				name: 'Explosive Wave',
// 				value: 2,
// 				description: [
// 					'Creates a ki explosion, blowing away opponents. Can be used while under atk by an opponent.',
// 				],
// 			},
// 			{
// 				name: 'Awakened By Anger',
// 				value: 3,
// 				description: [
// 					'Melee atk power, Ki blast atk power, and Blast power, increase for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'Maximum Flasher',
// 				value: 3,
// 				description: ['Beam', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Cosmic Impact',
// 				value: 3,
// 				description: ['Rush', 'Played after a hit', 'Speed Impact'],
// 			},
// 			{
// 				name: 'Big Bang Attack',
// 				value: 5,
// 				description: [
// 					'Fire',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Blast Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/iSSbErrYS3yup1Zd9LDT',
// 		category: '',
// 	},
// 	{
// 		name: 'Vegeta (Z-End)',
// 		value: -5,
// 		abilities: [
// 			{
// 				name: 'Afterimage',
// 				value: 2,
// 				description: [
// 					'Auto dodge a single atk of any kind, except for Ki Blasts.',
// 				],
// 			},
// 			{
// 				name: 'Saiyan Spirit',
// 				value: 3,
// 				description: [
// 					'Melee atk power, Ki blast atk power, Blast power, increase for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'Double Galick Cannon',
// 				value: 3,
// 				description: ['Rush', 'Played after hit', 'Speed Impact'],
// 			},
// 			{
// 				name: 'Infinite Blaster',
// 				value: 2,
// 				description: ['Continuous Fire'],
// 			},
// 			{
// 				name: 'Big Bang Attack',
// 				value: 5,
// 				description: [
// 					'Fire',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Blast Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/Bh4RdpunSNG1RcTMACSE',
// 		category: '',
// 	},
// 	{
// 		name: 'Vegeta (Z-End) SSJ1',
// 		value: -6,
// 		abilities: [
// 			{
// 				name: 'Explosive Wave',
// 				value: 2,
// 				description: [
// 					'Creates a ki explosion, blowing away opponents. Can be used while under atk by an opponent.',
// 				],
// 			},
// 			{
// 				name: 'Saiyan Spirit',
// 				value: 2,
// 				description: [
// 					'Melee atk power, Ki blast atk power, Blast power increase for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'Final Flash',
// 				value: 3,
// 				description: ['Beam', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Infinite Blaster',
// 				value: 2,
// 				description: ['Continuous Fire'],
// 			},
// 			{
// 				name: 'Cosmic Circle',
// 				value: 5,
// 				description: [
// 					'Simultaneous Fire',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/QrFliGXxR2OAQUutetDk',
// 		category: '',
// 	},
// 	{
// 		name: 'Vegeta (Z-End) SSJ2',
// 		value: -7,
// 		abilities: [
// 			{
// 				name: 'Explosive Wave',
// 				value: 2,
// 				description: [
// 					'Creates a ki explosion, blowing away opponents. Can be used while under atk by an opponent.',
// 				],
// 			},
// 			{
// 				name: 'Wild Sense',
// 				value: 2,
// 				description: [
// 					'Auto dodge a single melee atk from opponent and counteratk.',
// 				],
// 			},
// 			{
// 				name: 'Big Bang Attack',
// 				value: 3,
// 				description: ['Fire', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Infinite Blaster',
// 				value: 2,
// 				description: ['Continuous Fire'],
// 			},
// 			{
// 				name: 'Infinity Flasher',
// 				value: 5,
// 				description: [
// 					'Rush',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Speed Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/Zj0kFtfUROGTlzyvCRBD',
// 		category: '',
// 	},
// 	{
// 		name: 'Vegito',
// 		value: -7,
// 		abilities: [
// 			{
// 				name: 'Explosive Wave',
// 				value: 2,
// 				description: [
// 					'Creates a ki explosion, blowing away opponents. Can be used while under atk by an opponent.',
// 				],
// 			},
// 			{
// 				name: 'High-Tension',
// 				value: 3,
// 				description: [
// 					'Melee atk power, Ki blast atk power, and ki recovery spd increase for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'Big Bang Cannon',
// 				value: 3,
// 				description: ['Fire', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Rampaging Rush',
// 				value: 3,
// 				description: ['Rush', 'Played after a hit'],
// 			},
// 			{
// 				name: 'Super Kamehameha',
// 				value: 5,
// 				description: [
// 					'Beam',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Blast Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/of5D6pgQu6Ni7YAumgMG',
// 		category: '',
// 	},
// 	{
// 		name: 'Vegito SSJB',
// 		value: -10,
// 		abilities: [
// 			{
// 				name: 'Settling the Score',
// 				value: 3,
// 				description: [
// 					'Melee atk power, Ki blast atk power, and Blast power increase for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'Full-Power Charge',
// 				value: 2,
// 				description: ['Ki gauge fully recovers.'],
// 			},
// 			{
// 				name: 'God Kamehameha',
// 				value: 3,
// 				description: ['Beam', 'Chargeable', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Omega Finishing Blow',
// 				value: 3,
// 				description: ['Rush', 'Played after a hit', 'Speed Impact'],
// 			},
// 			{
// 				name: 'God Final Kamehameha',
// 				value: 5,
// 				description: [
// 					'Beam',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Blast Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/L6n3HUcEQn5Zxu9LslhB',
// 		category: '',
// 	},
// 	{
// 		name: 'Videl',
// 		value: -2,
// 		abilities: [
// 			{
// 				name: 'Afterimage Strike',
// 				value: 3,
// 				description: ['Auto dodge all atks except for Ki Blasts for 15 sec.'],
// 			},
// 			{
// 				name: 'Super Unyielding Spirit',
// 				value: 3,
// 				description: [
// 					'Enter Sparking Mode; melee atk power and Ki Blast atk power increase for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'Videl Kick',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Desperado Rush',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Videl Rush',
// 				value: 5,
// 				description: ['Coming Soon.'],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/uCBrNGCUTgK0weF1He2U',
// 		category: '',
// 	},
// 	{
// 		name: 'Whis',
// 		value: -10,
// 		abilities: [
// 			{
// 				name: 'Barrier',
// 				value: 3,
// 				description: [
// 					'Character creates a barrier around themselves to defend against atks. Can be used while under atk by an opponent.',
// 				],
// 			},
// 			{
// 				name: 'Snack Time',
// 				value: 4,
// 				description: ['HP recovery by 20% of max.'],
// 			},
// 			{
// 				name: 'Prelude to Destruction',
// 				value: 3,
// 				description: ['Beam'],
// 			},
// 			{
// 				name: 'Symphonic Destruction',
// 				value: 2,
// 				description: ['Shortrange energy atk'],
// 			},
// 			{
// 				name: 'Epilogue to Distruction',
// 				value: 5,
// 				description: [
// 					'Rush',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Speed Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/InqQHTSMRaaIktxY6Q5u',
// 		category: '',
// 	},
// 	{
// 		name: 'Yajirobe',
// 		value: -2,
// 		abilities: [
// 			{
// 				name: 'Super Unyielding Spirit',
// 				value: 3,
// 				description: [
// 					'Enter Sparking Mode; melee atk power and Ki Blast atk power increase for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'Senzu Beans',
// 				value: 5,
// 				description: ['HP fully recovers.'],
// 			},
// 			{
// 				name: 'Ka-Blam Attack',
// 				value: 4,
// 				description: ['Rush', 'Unguardable', 'Speed Impact'],
// 			},
// 			{
// 				name: 'Flash and Kill',
// 				value: 3,
// 				description: ['Rush', 'Played after a hit', 'Speed Impact'],
// 			},
// 			{
// 				name: 'Miracle Ka-Blam Slash',
// 				value: 5,
// 				description: [
// 					'Rush',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Speed Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/3wV9TwmJTCyo9ql3073m',
// 		category: '',
// 	},
// 	{
// 		name: 'Yamcha',
// 		value: -3,
// 		abilities: [
// 			{
// 				name: 'Afterimage',
// 				value: 2,
// 				description: [
// 					'Auto dodge a single atk of any kind, except for Ki Blasts.',
// 				],
// 			},
// 			{
// 				name: 'Power Up to the Very Limit',
// 				value: 3,
// 				description: [
// 					'Enter Sparking Mode; melee atk power, Ki Blast atk power, Blast power, def, and move spd increase for 15 sec.',
// 				],
// 			},
// 			{
// 				name: 'Kamehameha',
// 				value: 3,
// 				description: ['Beam', 'Chargeable', 'Blast Impact'],
// 			},
// 			{
// 				name: 'Wolf Fang Fist',
// 				value: 3,
// 				description: ['Rush', 'Played after a hit', 'Speed Impact'],
// 			},
// 			{
// 				name: 'Spirit Ball',
// 				value: 5,
// 				description: ['Fire', 'In Sparking Mode', 'Played after a hit'],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/D8NNdVoQ96x5v7riUZuT',
// 		category: '',
// 	},
// 	{
// 		name: 'Zamasu',
// 		value: -5,
// 		abilities: [
// 			{
// 				name: 'Immortal Body',
// 				value: 4,
// 				description: ['HP recovers by 20% of max.'],
// 			},
// 			{
// 				name: 'Afterimage Strike',
// 				value: 3,
// 				description: ['Auto dodge all atks except for Ki Blasts for 15 sec.'],
// 			},
// 			{
// 				name: 'Divine Steel Blast',
// 				value: 3,
// 				description: ['Fire'],
// 			},
// 			{
// 				name: 'God Slicer',
// 				value: 3,
// 				description: ['Rush', 'Played after a hit', 'Speed Impact'],
// 			},
// 			{
// 				name: 'Holy Light Grenade',
// 				value: 5,
// 				description: [
// 					'Fire',
// 					'In Sparking Mode',
// 					'Played after a hit',
// 					'Blast Impact',
// 				],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/jKE9RuzoTNS1BZ5ESPQy',
// 		category: '',
// 	},
// 	{
// 		name: 'Zarbon',
// 		value: -3,
// 		abilities: [
// 			{
// 				name: 'Wild Sense',
// 				value: 2,
// 				description: [
// 					'Auto dodge a single melee atk from opponent and counteratk.',
// 				],
// 			},
// 			{
// 				name: 'Full Power',
// 				value: 3,
// 				description: ['Enter Sparking Mode.'],
// 			},
// 			{
// 				name: 'Shooting Star Arrow',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Bloody Dance',
// 				value: '?',
// 				description: ['Coming Soon.'],
// 			},
// 			{
// 				name: 'Elegant Blaster',
// 				value: 5,
// 				description: ['Coming Soon.'],
// 			},
// 		],
// 		img: 'https://media.graphassets.com/xMlmlmiGQXngL1luCnMw',
// 		category: '',
// 	},
// ];
// // Function to merge the two arrays
// function mergeCharacterData(firstArray, secondArray) {
// 	return secondArray.map((secondChar) => {
// 		const matchingFirstChar = firstArray.find(
// 			(firstChar) =>
// 				firstChar.name === secondChar.name &&
// 				firstChar.value === secondChar.value
// 		);

// 		// Return the combined object
// 		return {
// 			name: secondChar.name,
// 			value: secondChar.value,
// 			img: matchingFirstChar ? matchingFirstChar.img : secondChar.img, // Use img from the first array if available
// 			abilities: secondChar.abilities,
// 			category: secondChar.category,
// 		};
// 	});
// }
// // Assuming firstArray and secondArray exist, and mergeCharacterData is your function
// const mergedArray = mergeCharacterData(firstArray, secondArray);

// // Convert the merged array to a JSON string with indentation for readability
// const jsonData = JSON.stringify(mergedArray, null, 2);

// // Write the JSON string to a file named "mergedData.json"
// try {
// 	await writeFile('mergedData.json', jsonData);
// 	console.log('Data successfully saved to mergedData.json');
// } catch (err) {
// 	console.error('Error writing to file:', err);
// }
