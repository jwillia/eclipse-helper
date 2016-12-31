export function createDeck(userName) {
  const deck = []
  for(let i = 0; i < 60; i++) {
    const type = (i && (i % 3 === 0)) ? 'land' : 'creature'
    deck.push({
      id: i,
      name: `${userName}'s card ${i + 1}`,
      types: [type],
      cost: type === 'creature' ? 1 : undefined
    })
  }
  return deck
}