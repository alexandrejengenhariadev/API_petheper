import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'


export default class Ong extends BaseModel {
 

  @column({ isPrimary: true })
  public id: number
  @column()
  public nome_fantasia: string
  @column()
  public documento: string
  @column()
  public cep: string
  @column()
  public endereco: string
  @column()
  public bairro: string
  @column()
  public cidade: string
  @column()
  public estado: string
  @column()
  public telefone: number
  @column()
  public email: string
  @column()
  public logotipo: string  

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}