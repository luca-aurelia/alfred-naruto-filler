const path = require('path')
const alfy = require('alfy')
const range = require('range').range

const inclusiveRange = (start, end) => range(start, end + 1)

// Data from animefillerlist.com

// const narutoFillerEpisodes = [
//   26,
//   53,
//   57,
//   97,
//   99,
//   ...inclusiveRange(101, 106),
//   ...inclusiveRange(136, 220)
// ]

const shippudenFillerEpisodes = [
  6,
  7,
  11,
  16,
  19,
  24,
  25,
  28,
  range(57, 71),
  range(90, 112),
  range(144, 151),
  170,
  171,
  inclusiveRange(176, 196),
  inclusiveRange(223, 242),
  inclusiveRange(257, 260),
  271,
  inclusiveRange(279, 281),
  inclusiveRange(284, 295),
  inclusiveRange(303, 320),
  inclusiveRange(347, 361),
  inclusiveRange(376, 377),
  inclusiveRange(385, 386),
  inclusiveRange(389, 390),
  inclusiveRange(394, 413),
  416,
  inclusiveRange(422, 423),
  inclusiveRange(427, 450),
  inclusiveRange(464, 468),
  inclusiveRange(480, 483)
]

const contains = (collection, element) => collection.indexOf(element) > -1

const getFillerResult = episodeNumber => ({
  title: `Episode ${episodeNumber} of Naruto Shippūden is filler`,
  icon: {
    path: path.join(__dirname, 'filler.jpg')
  }
})

const getCanonResult = episodeNumber => ({
  title: `Episode ${episodeNumber} of Naruto Shippūden is canon`,
  icon: {
    path: path.join(__dirname, 'canon.jpg')
  }
})

async function main (query) {
  const episodeNumber = Number.parseInt(query.trim(), 10)
  const isFiller = contains(shippudenFillerEpisodes, episodeNumber)

  const result = isFiller
    ? getFillerResult(episodeNumber)
    : getCanonResult(episodeNumber)

  alfy.output([result])
}

main(alfy.input)
