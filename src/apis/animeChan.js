import _ from 'lodash';

export const requestQuotes = _.memoize(async title => {
    const res = await fetch(`https://shellhacks22-schonfeld.herokuapp.com/api/securities/${title}`)
    // const res = await fetch(`http://localhost:8000/api/securities/${title}`)
    if(res.status !== 200) return [];

    const quotesArray = await res.json();
    return quotesArray;
});
