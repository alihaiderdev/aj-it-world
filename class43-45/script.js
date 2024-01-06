

const baseServerUrl = "http://localhost:3000";
window.onload = function () {
    // create({ title: 'My sixth post', description: 'Hello world fifth.....!' }, '/posts');
    // editPost(1004, { title: 'My Fourth Post', description: 'Fourth post description!' });
    // deletePost(1005);
    // getAll("/posts");
}

async function getAll(url) {
    try {
        const response = await fetch(`${baseServerUrl}${url}`);
        // console.log({ response });
        const data = await response.json();
        // console.log({ data });
        return { data, response };
    } catch (error) {
        console.log(`Error while fetching: ${error}`);
        throw error;
    }
}

async function editPost(id, updatedData) {
    fetch(`${baseServerUrl}/posts/${id}`, {
        method: 'PATCH', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
    })
        .then(response => response.json())
        .then(updatedPost => console.log({ updatedPost }))
        .catch(error => console.error('Error while updating post:', error));
}

async function deletePost(id) {
    fetch(`${baseServerUrl}/posts/${id}`, {
        method: 'DELETE',
    })
        .then(response => response.json())
        .then(deletedPost => console.log({ deletedPost }))
        .catch(error => console.error('Error while deleting post:', error));
}

async function create(payload, url) {
    try {
        const response = await fetch(`${baseServerUrl}${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });
        // console.log({ response });
        const data = await response.json();
        // console.log({ data });
        return { data, response };
    } catch (error) {
        console.log(`Error while creating: ${error}`);
        throw error;
    }
}






// async function addPost(payload) {
//     try {
//         const response = await fetch(`${baseServerUrl}/posts`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(payload),
//         });
//         console.log({ response });
//         const data = await response.json();
//         console.log({ data });
//         return { data, response };

//     } catch (error) {
//         console.log(`Error while creating: ${error}`);
//     }
// }

// async function registerUser(payload) {
//     try {
//         const response = await fetch(`${baseServerUrl}/users`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(payload),
//         });
//         console.log({ response });
//         const data = await response.json();
//         console.log({ data });
//         return { data, response };

//     } catch (error) {
//         console.log(`Error while creating: ${error}`);
//     }
// }

// async function postComment(payload) {
//     try {
//         const response = await fetch(`${baseServerUrl}/comments`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(payload),
//         });
//         console.log({ response });
//         const data = await response.json();
//         console.log({ data });
//         return { data, response };
//     } catch (error) {
//         console.log(`Error while creating: ${error}`);
//     }
// }

// async function getPosts() {
//     try {
//         const response = await fetch(`${baseServerUrl}/posts`);
//         console.log({ response });
//         const posts = await response.json();
//         console.log({ posts });
//     } catch (error) {
//         console.log(`Error while fetching posts: ${error}`);
//     }
// }

// async function getComments() {
//     try {
//         const response = await fetch(`${baseServerUrl}/comments`);
//         console.log({ response });
//         const comments = await response.json();
//         console.log({ comments });
//     } catch (error) {
//         console.log(`Error while fetching comments: ${error}`);
//     }
// }