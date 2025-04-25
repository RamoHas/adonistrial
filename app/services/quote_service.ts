export default class QuotesService {
  private quotes = [
    { id: 1, text: 'Learn to hold space', author: 'Nimde3 Kwame Jackson' },
    { id: 2, text: 'Everybody always has something to say', author: 'Oheneba Opare' },
    { id: 3, text: 'It is easier said than done', author: 'Matthew Dinko' },
    {
      id: 4,
      text: 'Success is not final, failure is not fatal: It is the courage to continue that counts.',
      author: 'Omar Inusah',
    },
    { id: 5, text: 'It always seems impossible until it is done', author: 'Nelson Mandela' },
    {
      id: 6,
      text: 'The oak fought the wind and was broken, the willow bent when it must and survived.',
      author: 'Robert Jordan',
    },
    { id: 7, text: 'Creativity is intelligence having fun.', author: 'Albert Einstein' },
    {
      id: 8,
      text: 'Innovation distinguishes between a leader and a follower.',
      author: 'Steve Jobs',
    },
    {
      id: 9,
      text: 'People will forget what you said, people will forget what you did, but people will never forget how you made them feel.',
      author: 'Maya Angelou',
    },
    {
      id: 10,
      text: 'Life is what happens when you are busy making other plans.',
      author: 'John Lennon',
    },
  ]

  getRandomQuote() {
    const index = Math.floor(Math.random() * this.quotes.length)
    return this.quotes[index]
  }

  getQuoteById(id: number) {
    return this.quotes.find((q) => q.id === id)
  }
}
