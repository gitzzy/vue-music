/**
 * Created by zzy on 2017/6/30.
 */
// actions通常两种：一种是一步操作，一种是对mutations的封装
// 如：要设置多个mutation的时候，可以封装成一个action来操作

import * as types from './mutation-types'

export const selectPlay = function ({commit, state}, {list, index}) {
  commit(types.SET_SEQUENCE_LIST, list)
  commit(types.SET_PLAYLIST, list)
  commit(types.SET_CURRENT_INDEX, index)
  commit(types.SET_FULL_SCREEN, true)
  commit(types.SET_PLAYING_STATE, true)
}
