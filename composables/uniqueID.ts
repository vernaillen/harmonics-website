let uidCounter: Number = 0

export const useUniqueID = () => {
  uidCounter += 1
  return 'uid-' + uidCounter
}
