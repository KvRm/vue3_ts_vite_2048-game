import { Side } from '../../types'
import { Ref, watch } from 'vue'
import { useWidth } from '../useWidth'

const screenWidth = useWidth()

let detectDistance: number = 90
setDetectDistance(screenWidth)

watch(screenWidth, () => {
  setDetectDistance(screenWidth)
})

function setDetectDistance(screenWidth: Ref<number>): void {
  screenWidth.value <= 540 ?
    detectDistance = 60 :
    detectDistance = 90
}

export const useDetectedSide = (
  e: MouseEvent | TouchEvent, startPos: { startX: number, startY: number },
): Side | null => {

  let endX: number
  let endY: number

  if ('clientX' in e) {
    endX = e?.clientX
    endY = e?.clientY
  } else {
    endX = e?.touches[0].clientX
    endY = e?.touches[0].clientY
  }

  if (startPos.startX - endX >= detectDistance)
    return 'left'

  if (startPos.startX - endX <= -detectDistance)
    return 'right'

  if (startPos.startY - endY >= detectDistance)
    return 'up'

  if (startPos.startY - endY <= -detectDistance)
    return 'down'

  return null
}