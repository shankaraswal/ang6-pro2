import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalDataService {
  results = [
    {
      "name": "R&D",
      "size": 0,
      "parent_value": "R&D",
      "parent_key": 0,
      "children": [
        {
          "name": "Clinical",
          "size": 235,
          "parent_value": "R&D",
          "parent_key": 1,
          "primary_key": 3,
          "children": [
            {
              "name": "ETMF",
              "size": 235,
              "parent_value": "Clinical",
              "parent_key": 3,
              "primary_key": 10,
              "children": [
                {
                  "name": "Europe Union",
                  "code": null,
                  "size": 3,
                  "parent_value": "ETMF",
                  "parent_key": 10,
                  "primary_key": 54
                },
                {
                  "name": "Japan",
                  "code": "JPN",
                  "size": 200,
                  "parent_value": "ETMF",
                  "parent_key": 10,
                  "primary_key": 55
                },
                {
                  "name": "United States",
                  "code": "USA",
                  "size": 32,
                  "parent_value": "ETMF",
                  "parent_key": 10,
                  "primary_key": 56
                }
              ]
            }
          ]
        },
        {
          "name": "Compliance",
          "size": 6632,
          "parent_value": "R&D",
          "parent_key": 1,
          "primary_key": 4,
          "children": [
            {
              "name": "CW",
              "size": 2837,
              "parent_value": "Compliance",
              "parent_key": 4,
              "primary_key": 11,
              "children": [
                {
                  "name": "Australia",
                  "code": "AUS",
                  "size": 18,
                  "parent_value": "CW",
                  "parent_key": 11,
                  "primary_key": 32
                },
                {
                  "name": "Canada",
                  "code": "CAN",
                  "size": 142,
                  "parent_value": "CW",
                  "parent_key": 11,
                  "primary_key": 33
                },
                {
                  "name": "China",
                  "code": "CHN",
                  "size": 2,
                  "parent_value": "CW",
                  "parent_key": 11,
                  "primary_key": 34
                },
                {
                  "name": "Czech Republic",
                  "code": "CZE",
                  "size": 108,
                  "parent_value": "CW",
                  "parent_key": 11,
                  "primary_key": 35
                },
                {
                  "name": "Denmark",
                  "code": "DNK",
                  "size": 5,
                  "parent_value": "CW",
                  "parent_key": 11,
                  "primary_key": 36
                },
                {
                  "name": "Deutschland",
                  "code": null,
                  "size": 94,
                  "parent_value": "CW",
                  "parent_key": 11,
                  "primary_key": 37
                },
                {
                  "name": "Europe Union",
                  "code": null,
                  "size": 332,
                  "parent_value": "CW",
                  "parent_key": 11,
                  "primary_key": 38
                },
                {
                  "name": "Finland",
                  "code": "FIN",
                  "size": 3,
                  "parent_value": "CW",
                  "parent_key": 11,
                  "primary_key": 39
                },
                {
                  "name": "France",
                  "code": "FRA",
                  "size": 95,
                  "parent_value": "CW",
                  "parent_key": 11,
                  "primary_key": 40
                },
                {
                  "name": "Italy",
                  "code": "ITA",
                  "size": 81,
                  "parent_value": "CW",
                  "parent_key": 11,
                  "primary_key": 41
                },
                {
                  "name": "Japan",
                  "code": "JPN",
                  "size": 1290,
                  "parent_value": "CW",
                  "parent_key": 11,
                  "primary_key": 42
                },
                {
                  "name": "Norway",
                  "code": "NOR",
                  "size": 5,
                  "parent_value": "CW",
                  "parent_key": 11,
                  "primary_key": 43
                },
                {
                  "name": "Singapore",
                  "code": "SGP",
                  "size": 7,
                  "parent_value": "CW",
                  "parent_key": 11,
                  "primary_key": 44
                },
                {
                  "name": "South Korea",
                  "code": "KOR",
                  "size": 20,
                  "parent_value": "CW",
                  "parent_key": 11,
                  "primary_key": 45
                },
                {
                  "name": "Spain",
                  "code": "ESP",
                  "size": 112,
                  "parent_value": "CW",
                  "parent_key": 11,
                  "primary_key": 46
                },
                {
                  "name": "Sweden",
                  "code": "SWE",
                  "size": 48,
                  "parent_value": "CW",
                  "parent_key": 11,
                  "primary_key": 47
                },
                {
                  "name": "Switzerland",
                  "code": "CHE",
                  "size": 27,
                  "parent_value": "CW",
                  "parent_key": 11,
                  "primary_key": 48
                },
                {
                  "name": "United Kingdom",
                  "code": "GBR",
                  "size": 56,
                  "parent_value": "CW",
                  "parent_key": 11,
                  "primary_key": 49
                },
                {
                  "name": "United States",
                  "code": "USA",
                  "size": 392,
                  "parent_value": "CW",
                  "parent_key": 11,
                  "primary_key": 50
                }
              ]
            },
            {
              "name": "ELEARN",
              "size": 3795,
              "parent_value": "Compliance",
              "parent_key": 4,
              "primary_key": 12,
              "children": [
                {
                  "name": "Canada",
                  "code": "CAN",
                  "size": 143,
                  "parent_value": "ELEARN",
                  "parent_key": 12,
                  "primary_key": 51
                },
                {
                  "name": "Japan",
                  "code": "JPN",
                  "size": 1,
                  "parent_value": "ELEARN",
                  "parent_key": 12,
                  "primary_key": 52
                },
                {
                  "name": "United States",
                  "code": "USA",
                  "size": 3651,
                  "parent_value": "ELEARN",
                  "parent_key": 12,
                  "primary_key": 53
                }
              ]
            }
          ]
        },
        {
          "name": "GCSDW",
          "size": 111,
          "parent_value": "R&D",
          "parent_key": 1,
          "primary_key": 5,
          "children": null
        },
        {
          "name": "Project Server",
          "size": 225,
          "parent_value": "R&D",
          "parent_key": 1,
          "primary_key": 6,
          "children": [
            {
              "name": "PS",
              "size": 225,
              "parent_value": "Project Server",
              "parent_key": 6,
              "primary_key": 14,
              "children": [
                {
                  "name": "Japan",
                  "code": "JPN",
                  "size": 76,
                  "parent_value": "PS",
                  "parent_key": 14,
                  "primary_key": 85
                },
                {
                  "name": "United States",
                  "code": "USA",
                  "size": 149,
                  "parent_value": "PS",
                  "parent_key": 14,
                  "primary_key": 86
                }
              ]
            }
          ]
        },
        {
          "name": "Quality",
          "size": 815,
          "parent_value": "R&D",
          "parent_key": 1,
          "primary_key": 7,
          "children": [
            {
              "name": "TW",
              "size": 815,
              "parent_value": "Quality",
              "parent_key": 7,
              "primary_key": 15,
              "children": [
                {
                  "name": "Australia",
                  "code": "AUS",
                  "size": 1,
                  "parent_value": "TW",
                  "parent_key": 15,
                  "primary_key": 92
                },
                {
                  "name": "Canada",
                  "code": "CAN",
                  "size": 8,
                  "parent_value": "TW",
                  "parent_key": 15,
                  "primary_key": 93
                },
                {
                  "name": "Deutschland",
                  "code": null,
                  "size": 5,
                  "parent_value": "TW",
                  "parent_key": 15,
                  "primary_key": 94
                },
                {
                  "name": "Europe Union",
                  "code": null,
                  "size": 75,
                  "parent_value": "TW",
                  "parent_key": 15,
                  "primary_key": 95
                },
                {
                  "name": "France",
                  "code": "FRA",
                  "size": 3,
                  "parent_value": "TW",
                  "parent_key": 15,
                  "primary_key": 96
                },
                {
                  "name": "Italy",
                  "code": "ITA",
                  "size": 2,
                  "parent_value": "TW",
                  "parent_key": 15,
                  "primary_key": 97
                },
                {
                  "name": "Japan",
                  "code": "JPN",
                  "size": 452,
                  "parent_value": "TW",
                  "parent_key": 15,
                  "primary_key": 98
                },
                {
                  "name": "South Korea",
                  "code": "KOR",
                  "size": 6,
                  "parent_value": "TW",
                  "parent_key": 15,
                  "primary_key": 99
                },
                {
                  "name": "Spain",
                  "code": "ESP",
                  "size": 3,
                  "parent_value": "TW",
                  "parent_key": 15,
                  "primary_key": 100
                },
                {
                  "name": "Sweden",
                  "code": "SWE",
                  "size": 4,
                  "parent_value": "TW",
                  "parent_key": 15,
                  "primary_key": 101
                },
                {
                  "name": "Switzerland",
                  "code": "CHE",
                  "size": 2,
                  "parent_value": "TW",
                  "parent_key": 15,
                  "primary_key": 102
                },
                {
                  "name": "United Kingdom",
                  "code": "GBR",
                  "size": 3,
                  "parent_value": "TW",
                  "parent_key": 15,
                  "primary_key": 103
                },
                {
                  "name": "United States",
                  "code": "USA",
                  "size": 251,
                  "parent_value": "TW",
                  "parent_key": 15,
                  "primary_key": 104
                }
              ]
            }
          ]
        },
        {
          "name": "Regulatory",
          "size": 2416,
          "parent_value": "R&D",
          "parent_key": 1,
          "primary_key": 8,
          "children": [
            {
              "name": "CREDO",
              "size": 1238,
              "parent_value": "Regulatory",
              "parent_key": 8,
              "primary_key": 16,
              "children": [
                {
                  "name": "Canada",
                  "code": "CAN",
                  "size": 7,
                  "parent_value": "CREDO",
                  "parent_key": 16,
                  "primary_key": 22
                },
                {
                  "name": "China",
                  "code": "CHN",
                  "size": 1,
                  "parent_value": "CREDO",
                  "parent_key": 16,
                  "primary_key": 23
                },
                {
                  "name": "Czech Republic",
                  "code": "CZE",
                  "size": 2,
                  "parent_value": "CREDO",
                  "parent_key": 16,
                  "primary_key": 24
                },
                {
                  "name": "Europe Union",
                  "code": null,
                  "size": 54,
                  "parent_value": "CREDO",
                  "parent_key": 16,
                  "primary_key": 25
                },
                {
                  "name": "Japan",
                  "code": "JPN",
                  "size": 526,
                  "parent_value": "CREDO",
                  "parent_key": 16,
                  "primary_key": 26
                },
                {
                  "name": "Singapore",
                  "code": "SGP",
                  "size": 3,
                  "parent_value": "CREDO",
                  "parent_key": 16,
                  "primary_key": 27
                },
                {
                  "name": "South Korea",
                  "code": "KOR",
                  "size": 7,
                  "parent_value": "CREDO",
                  "parent_key": 16,
                  "primary_key": 28
                },
                {
                  "name": "Spain",
                  "code": "ESP",
                  "size": 1,
                  "parent_value": "CREDO",
                  "parent_key": 16,
                  "primary_key": 29
                },
                {
                  "name": "Switzerland",
                  "code": "CHE",
                  "size": 1,
                  "parent_value": "CREDO",
                  "parent_key": 16,
                  "primary_key": 30
                },
                {
                  "name": "United States",
                  "code": "USA",
                  "size": 636,
                  "parent_value": "CREDO",
                  "parent_key": 16,
                  "primary_key": 31
                }
              ]
            },
            {
              "name": "GQEDMS",
              "size": 898,
              "parent_value": "Regulatory",
              "parent_key": 8,
              "primary_key": 17,
              "children": [
                {
                  "name": "Canada",
                  "code": "CAN",
                  "size": 23,
                  "parent_value": "GQEDMS",
                  "parent_key": 17,
                  "primary_key": 64
                },
                {
                  "name": "Czech Republic",
                  "code": "CZE",
                  "size": 1,
                  "parent_value": "GQEDMS",
                  "parent_key": 17,
                  "primary_key": 65
                },
                {
                  "name": "Deutschland",
                  "code": null,
                  "size": 10,
                  "parent_value": "GQEDMS",
                  "parent_key": 17,
                  "primary_key": 66
                },
                {
                  "name": "Europe Union",
                  "code": null,
                  "size": 116,
                  "parent_value": "GQEDMS",
                  "parent_key": 17,
                  "primary_key": 67
                },
                {
                  "name": "France",
                  "code": "FRA",
                  "size": 29,
                  "parent_value": "GQEDMS",
                  "parent_key": 17,
                  "primary_key": 68
                },
                {
                  "name": "Italy",
                  "code": "ITA",
                  "size": 14,
                  "parent_value": "GQEDMS",
                  "parent_key": 17,
                  "primary_key": 69
                },
                {
                  "name": "Japan",
                  "code": "JPN",
                  "size": 100,
                  "parent_value": "GQEDMS",
                  "parent_key": 17,
                  "primary_key": 70
                },
                {
                  "name": "South Korea",
                  "code": "KOR",
                  "size": 4,
                  "parent_value": "GQEDMS",
                  "parent_key": 17,
                  "primary_key": 71
                },
                {
                  "name": "Spain",
                  "code": "ESP",
                  "size": 9,
                  "parent_value": "GQEDMS",
                  "parent_key": 17,
                  "primary_key": 72
                },
                {
                  "name": "Sweden",
                  "code": "SWE",
                  "size": 9,
                  "parent_value": "GQEDMS",
                  "parent_key": 17,
                  "primary_key": 73
                },
                {
                  "name": "Switzerland",
                  "code": "CHE",
                  "size": 7,
                  "parent_value": "GQEDMS",
                  "parent_key": 17,
                  "primary_key": 74
                },
                {
                  "name": "United Kingdom",
                  "code": "GBR",
                  "size": 11,
                  "parent_value": "GQEDMS",
                  "parent_key": 17,
                  "primary_key": 75
                },
                {
                  "name": "United States",
                  "code": "USA",
                  "size": 565,
                  "parent_value": "GQEDMS",
                  "parent_key": 17,
                  "primary_key": 76
                }
              ]
            },
            {
              "name": "IP",
              "size": 37,
              "parent_value": "Regulatory",
              "parent_key": 8,
              "primary_key": 18,
              "children": [
                {
                  "name": "United States",
                  "code": "USA",
                  "size": 37,
                  "parent_value": "IP",
                  "parent_key": 18,
                  "primary_key": 77
                }
              ]
            },
            {
              "name": "IRM",
              "size": 21,
              "parent_value": "Regulatory",
              "parent_key": 8,
              "primary_key": 19,
              "children": [
                {
                  "name": "Europe Union",
                  "code": null,
                  "size": 2,
                  "parent_value": "IRM",
                  "parent_key": 19,
                  "primary_key": 78
                },
                {
                  "name": "Japan",
                  "code": "JPN",
                  "size": 7,
                  "parent_value": "IRM",
                  "parent_key": 19,
                  "primary_key": 79
                },
                {
                  "name": "United States",
                  "code": "USA",
                  "size": 12,
                  "parent_value": "IRM",
                  "parent_key": 19,
                  "primary_key": 80
                }
              ]
            },
            {
              "name": "ORIOM",
              "size": 110,
              "parent_value": "Regulatory",
              "parent_key": 8,
              "primary_key": 20,
              "children": [
                {
                  "name": "Canada",
                  "code": "CAN",
                  "size": 3,
                  "parent_value": "ORIOM",
                  "parent_key": 20,
                  "primary_key": 81
                },
                {
                  "name": "Europe Union",
                  "code": null,
                  "size": 11,
                  "parent_value": "ORIOM",
                  "parent_key": 20,
                  "primary_key": 82
                },
                {
                  "name": "Japan",
                  "code": "JPN",
                  "size": 66,
                  "parent_value": "ORIOM",
                  "parent_key": 20,
                  "primary_key": 83
                },
                {
                  "name": "United States",
                  "code": "USA",
                  "size": 30,
                  "parent_value": "ORIOM",
                  "parent_key": 20,
                  "primary_key": 84
                }
              ]
            },
            {
              "name": "TRSV",
              "size": 112,
              "parent_value": "Regulatory",
              "parent_key": 8,
              "primary_key": 21,
              "children": [
                {
                  "name": "Canada",
                  "code": "CAN",
                  "size": 6,
                  "parent_value": "TRSV",
                  "parent_key": 21,
                  "primary_key": 87
                },
                {
                  "name": "Europe Union",
                  "code": null,
                  "size": 12,
                  "parent_value": "TRSV",
                  "parent_key": 21,
                  "primary_key": 88
                },
                {
                  "name": "Japan",
                  "code": "JPN",
                  "size": 20,
                  "parent_value": "TRSV",
                  "parent_key": 21,
                  "primary_key": 89
                },
                {
                  "name": "Switzerland",
                  "code": "CHE",
                  "size": 1,
                  "parent_value": "TRSV",
                  "parent_key": 21,
                  "primary_key": 90
                },
                {
                  "name": "United States",
                  "code": "USA",
                  "size": 73,
                  "parent_value": "TRSV",
                  "parent_key": 21,
                  "primary_key": 91
                }
              ]
            }
          ]
        }
      ],
      "primary_key": 1
    }
  ];

  constructor() { }
  
  serviceCompleted(){
    return console.log('results data on the console')
  }
}
