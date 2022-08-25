export interface ICity {
  Key: string
  LocalizedName: string
  EnglishName: string

  Country: {
    LocalizedName: string
    EnglishName: string
  }

  AdministrativeArea: {
    LocalizedName: string
    EnglishName: string
    LocalizedType: string
    EnglishType: string
  }
}
