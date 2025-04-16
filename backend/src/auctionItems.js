/**
 * Default auction items to use
 */
const auctionItems = [
  {
    id: 1,
    name: "Vintage Watch",
    description: "Classic timepiece from 1950s",
    startingBid: 100,
    currentBid: 100,
    bids: [],
  },
  {
    id: 2,
    name: "Art Painting",
    description: "Original Artwork in Skribble.io",
    startingBid: 150,
    currentBid: 150,
    bids: [],
  },
  {
    id: 3,
    name: "Raspberry Pi",
    description: "Original RPi 1.0",
    startingBid: 50,
    currentBid: 50,
    bids: [],
  },
];

module.exports = { auctionItems };
