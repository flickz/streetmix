/* eslint-env jest */
import module, { getSpriteDef } from '../info'

const SPRITE_DEFS = module.__get__('SPRITE_DEFS')

describe('segment info', () => {
  it('gets a sprite definition with a string id', () => {
    const id = 'trees--palm-tree'
    const sprite = getSpriteDef(id)

    expect(sprite).toEqual(SPRITE_DEFS[id])
  })

  it('overwrites sprite definition properties with an object', () => {
    const id = 'bikes--bike-rack-perpendicular-left'
    const ref = {
      id,
      offsetY: 5.25
    }

    const sprite = getSpriteDef(ref)

    expect(sprite).toEqual(Object.assign({}, SPRITE_DEFS[id], ref))
  })

  it('returns a cloned definition that does not allow modification of the original data', () => {
    const id = 'ground--concrete'
    const sprite = getSpriteDef(id)

    sprite.foo = 'bar'

    expect(SPRITE_DEFS[id].foo).toEqual(undefined)
  })
})
