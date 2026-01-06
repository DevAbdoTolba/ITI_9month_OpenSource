// all: A team relay race. If one person falls, the whole team loses.

// allSettled: A school report card. You get grades for every subject, even the ones you failed.

// race: A sprint. First person to cross the line wins (or crashes first).

// any: Trying to unlock a door with a keyring. You try keys until one works. You only fail if none of the keys work.



const fakeApi = (data, ms) => new Promise((resolve, reject) => 
    setTimeout(() => Math.random() > 0.1 ? resolve(data) : reject('Server Error'), ms)
);

const timeout = (ms) => new Promise((_, reject) => 
    setTimeout(() => reject('Timeout!'), ms)
);

Promise.race([
    Promise.all([
        fakeApi({ id: 1, name: 'Alice' }, 1000), 
        fakeApi(['Post 1', 'Post 2'], 1500)
    ]),
    timeout(2000) 
])
.then(([user, posts]) => console.log(`User: ${user.name}, Posts: ${posts.length}`))
.catch(console.error);