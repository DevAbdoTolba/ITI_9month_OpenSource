const addPost = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
              'Content-type' : "application/json;"
            },
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1
            })
        });

        const data = await res.json();
        console.log(data);

    } catch (err) {
        console.error(err);
    }
};

addPost();