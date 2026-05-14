import { PostSchema } from '#database/schema'
import { belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import User from './user.ts'

export default class Post extends PostSchema {

    @belongsTo(() => User)
    declare user: BelongsTo<typeof User>


}

