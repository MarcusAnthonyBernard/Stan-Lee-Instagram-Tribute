// INCREMENT A LIKE

export function increment(index) {
    return {
        type: 'INCREMENT_LIKES',
        index
    }
}

// ADD A COMMENT

export function addComment(postId, author, comment) {
    return {
        type: 'ADD_COMMENT',
        postId,
        author,
        comment
    }
}

// REMOVE A COMMENT

export function removeComment(postId, i) {
    return {
        type: 'REMOVE_COMMENT',
        i,
        postId
    }
}

